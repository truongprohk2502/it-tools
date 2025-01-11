"use client";

import ApiIcon from "@/assets/icons/api.icon";
import JSONPrettyView from "@/components/shared/json-pretty-view";
import MonacoEditor from "@/components/shared/monaco-editor";
import NumberInput from "@/components/shared/number-input";
import ToolHeader from "@/components/shared/tool-header";
import { Button } from "@/components/ui/button";
import { Route } from "@/constants/routes";
import useSystemTheme from "@/hooks/use-system-theme";
import { copyToClipboard } from "@/utils/copy-to-clipboard";
import { faker } from "@faker-js/faker/locale/en";
import flatten from "lodash/flatten";
import random from "lodash/random";
import range from "lodash/range";
import snakeCase from "lodash/snakeCase";
import { CopyIcon } from "lucide-react";
import { useState } from "react";
import stringSimilarity from "string-similarity";
import ApiJsonInstruction from "./_components/api-json-instruction";
import { DEFAULT_API_FORMAT, FAKER_KEYWORDS } from "./constants";

const ApiResponsePage: React.FC = () => {
  const [apiResponses, setApiResponses] = useState<
    Array<string | number | boolean | object>
  >([]);
  const [totalRecords, setTotalRecords] = useState<string>("5");
  const [jsonInput, setJsonInput] = useState<string>(DEFAULT_API_FORMAT);
  const [error, setError] = useState<string | null>(null);

  const theme = useSystemTheme();

  const generateFakeText = (key: string, type: string) => {
    if (type === "boolean") return faker.datatype.boolean();
    if (type === "number") return faker.number.int(1000);

    const fakerItem = FAKER_KEYWORDS.find((item) => {
      if (item.keywords.some((keyword) => snakeCase(key).endsWith(keyword))) {
        return true;
      }
      return false;
    });

    if (fakerItem) return fakerItem.faker().toString();

    const keywords = flatten(FAKER_KEYWORDS.map((item) => item.keywords));

    const mostSimilarKeyword = stringSimilarity.findBestMatch(key, keywords);

    if (!mostSimilarKeyword) return faker.lorem.text();

    const mostMatchFakerItem = FAKER_KEYWORDS.find((item) =>
      item.keywords.includes(mostSimilarKeyword.bestMatch.target),
    );

    if (!mostMatchFakerItem) return faker.lorem.text();

    return mostMatchFakerItem.faker().toString();
  };

  const checkIsValidProperty = (property: string | object) => {
    if (
      typeof property === "string" &&
      ["string", "number", "boolean"].includes(property)
    )
      return true;
    if (Array.isArray(property) && property.length === 1) return true;
    if (property !== null && typeof property === "object") return true;
    return false;
  };

  const getFakeData = (
    parsedJson: object | string,
    keyData?: { key: string; keyPath: string },
  ): object | string | number | boolean => {
    const { key, keyPath } = keyData || { key: "", keyPath: "" };

    // If field value is object or array
    if (typeof parsedJson === "object") {
      // If field value is array
      if (Array.isArray(parsedJson)) {
        // Check if array is only having one item
        if (parsedJson.length !== 1)
          throw Error(`Field ${keyPath} need to have an array of 1 item.`);
        // Check is valid field
        const isValidValue = checkIsValidProperty(parsedJson[0]);
        if (!isValidValue)
          throw Error(`Field ${keyPath} has an invalid value.`);
        // Returns an array of items with length is between 1 and 5
        const totalItems = random(1, 5);
        return range(0, totalItems).map(() =>
          getFakeData(parsedJson[0], { key, keyPath: keyPath + "[]" }),
        );
      }
      // If field value is object
      else {
        const data: { [key: string]: string | number | boolean | object } = {};
        // Gen fake data for each property of object
        for (const [key, value] of Object.entries(parsedJson)) {
          data[key] = getFakeData(value, {
            key,
            keyPath: keyPath + "." + key,
          });
        }
        return data;
      }
    }
    // If field value is string
    else if (typeof parsedJson === "string") {
      // Check is valid field
      const isValidValue = checkIsValidProperty(parsedJson);
      if (!isValidValue) throw Error(`Field ${keyPath} has an invalid value.`);
      // Generate text by faker-js
      const genText = generateFakeText(key!, parsedJson as string);
      return genText;
    }
    // If field value is not string,number,boolean,object,array
    else {
      throw Error(`Field ${keyPath} has an invalid value.`);
    }
  };

  const handleValidate = () => {
    try {
      const parsedJson = JSON.parse(
        jsonInput.replace(/([a-zA-Z0-9]+?):/g, '"$1":'),
      );
      if (typeof parsedJson !== "object" || Array.isArray(parsedJson)) {
        throw Error("Please enter object type that describe API response.");
      }
      setError(null);
      setApiResponses(
        range(0, +totalRecords || 1).map(() =>
          getFakeData(parsedJson, {
            key: "",
            keyPath: "{root}",
          }),
        ),
      );
    } catch (err) {
      setError((err as SyntaxError).message);
      setApiResponses([]);
    }
  };

  const handleCopyData = () => {
    copyToClipboard(JSON.stringify(apiResponses, undefined, 4));
  };

  return (
    <div className="mx-auto w-[50rem] px-8">
      <ToolHeader
        title="Generate API Response"
        description="Create to use fake and dummy APIs response JSON data."
        href={Route.GenerateAPIResponse}
        icon={ApiIcon}
      />
      <div className="mb-4 flex items-center">
        <Button onClick={handleValidate}>Generate API response</Button>
        <p className="ml-8 mr-2 font-bold">Number of records</p>
        <NumberInput
          value={totalRecords}
          min={1}
          max={1000}
          className="mr-8 w-20"
          onChangeNumber={setTotalRecords}
        />
        <ApiJsonInstruction />
      </div>
      <div className="mb-16">
        <p className="mb-2 font-semibold">Enter object format</p>
        {error && <p className="mb-2 font-medium text-red-500">{error}</p>}
        <div className="overflow-hidden rounded-lg border border-neutral-400">
          <MonacoEditor
            defaultLanguage="json"
            width="100%"
            height="30rem"
            value={jsonInput}
            onChange={(val) => setJsonInput(val || "")}
          />
        </div>
        {apiResponses.length > 0 && (
          <>
            <div className="mb-2 mt-8 flex items-center justify-between">
              <p className="font-semibold">API responses</p>
              <div
                className="flex cursor-pointer items-center gap-2"
                onClick={handleCopyData}
              >
                <CopyIcon width={16} height={16} />
                <p className="text-sm font-bold">Copy raw data</p>
              </div>
            </div>
            <div className="rounded-md border border-neutral-400 px-4 py-3">
              <JSONPrettyView data={apiResponses} />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ApiResponsePage;
