"use client";

import JsonIcon from "@/assets/icons/json.icon";
import ToolHeader from "@/components/shared/tool-header";
import UploadableTextarea from "@/components/shared/uploadable-textarea";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Route } from "@/constants/routes";
import { downloadFile } from "@/utils/download-file";
import { dump } from "js-yaml";
import { json2csv } from "json-2-csv";
import { useState } from "react";
import xml2js from "xml2js";
import { FileType, INIT_JSON, TabSpace } from "./constants";

const JsonFormatterPage: React.FC = () => {
  const [originalText, setOriginalText] = useState<string>(INIT_JSON);
  const [formattedData, setFormattedData] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [tabSpace, setTabSpace] = useState<TabSpace>(TabSpace.Tab2);
  const [fileType, setFileType] = useState<FileType>(FileType.JSON);

  const formatJson = (minify: boolean, selectedTabSpace?: number) => {
    try {
      setError(null);
      const formattedJson = JSON.parse(originalText);
      setFormattedData(
        minify
          ? JSON.stringify(formattedJson)
          : JSON.stringify(formattedJson, null, selectedTabSpace || tabSpace),
      );
    } catch (err) {
      setError((err as SyntaxError).message);
    }
  };

  const formatXML = (selectedTabSpace?: number) => {
    try {
      setError(null);
      const formattedJson = JSON.parse(originalText);

      const builder = new xml2js.Builder({
        renderOpts: {
          indent: Array(selectedTabSpace || tabSpace)
            .fill(" ")
            .join(""),
          newline: "\n",
          pretty: true,
        },
      });

      const formattedXML = builder.buildObject(formattedJson);
      setFormattedData(formattedXML);
    } catch (err) {
      setError((err as SyntaxError).message);
    }
  };

  const formatCSV = () => {
    try {
      setError(null);
      const formattedJson = JSON.parse(originalText);
      const formattedCSV = json2csv(formattedJson, {
        arrayIndexesAsKeys: true,
      });
      setFormattedData(formattedCSV);
    } catch (err) {
      setError((err as SyntaxError).message);
    }
  };

  const formatYAML = (selectedTabSpace?: number) => {
    try {
      setError(null);
      const formattedJson = JSON.parse(originalText);
      const formattedCSV = dump(formattedJson, {
        indent: selectedTabSpace || tabSpace,
      });
      setFormattedData(formattedCSV);
    } catch (err) {
      setError((err as SyntaxError).message);
    }
  };

  const handleMinify = () => {
    setFileType(FileType.JSON);
    formatJson(true);
  };

  const handleDownloadFile = () => {
    downloadFile(formattedData, fileType);
  };

  const handleChangeFileType = (newFileType: FileType) => {
    if (newFileType === fileType) return;
    setFileType(newFileType);

    switch (newFileType) {
      case FileType.JSON:
        formatJson(false);
        break;
      case FileType.XML:
        formatXML();
        break;
      case FileType.CSV:
        formatCSV();
        break;
      case FileType.YAML:
        formatYAML();
        break;
      default:
        break;
    }
  };

  const handleChangeTabSpace = (newTabSpace: TabSpace) => {
    setTabSpace(newTabSpace);
    if (!formattedData || newTabSpace === tabSpace) return;

    switch (fileType) {
      case FileType.JSON:
        formatJson(false, newTabSpace);
        break;
      case FileType.XML:
        formatXML(newTabSpace);
        break;
      case FileType.YAML:
        formatYAML(newTabSpace);
        break;
      default:
        break;
    }
  };

  return (
    <div className="mx-auto min-w-[45rem] max-w-[80rem] px-6">
      <ToolHeader
        title="JSON Formatter"
        description="JSON Formatter / Beautifier and JSON Validator will format JSON data, and helps to validate, convert JSON to XML, JSON to CSV. Save and Share JSON."
        href={Route.JsonFormatter}
        icon={JsonIcon}
      />
      <div className="flex justify-center gap-4 py-8">
        <Select
          value={tabSpace.toString()}
          onValueChange={(val) => handleChangeTabSpace(+val as TabSpace)}
          disabled={fileType === FileType.CSV}
        >
          <SelectTrigger className="w-[140px]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="2">2 tab space</SelectItem>
              <SelectItem value="3">3 tab space</SelectItem>
              <SelectItem value="4">4 tab space</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button>Convert JSON to</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-20">
            <DropdownMenuItem
              onClick={() => handleChangeFileType(FileType.JSON)}
            >
              JSON
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => handleChangeFileType(FileType.XML)}
            >
              XML
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => handleChangeFileType(FileType.CSV)}
            >
              CSV
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => handleChangeFileType(FileType.YAML)}
            >
              YAML
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <Button onClick={() => formatJson(false)}>Format</Button>
        <Button onClick={handleMinify}>Minify</Button>
        <Button
          onClick={handleDownloadFile}
          disabled={!!error || !formattedData}
        >
          Download
        </Button>
      </div>
      <div className="mb-16 grid grid-cols-2 gap-4">
        <UploadableTextarea
          title="JSON object"
          defaultLanguage="json"
          height="35rem"
          value={originalText}
          onChange={setOriginalText}
        />
        <UploadableTextarea
          title={`Formatted ${fileType.toUpperCase()}`}
          height="35rem"
          disabled
          disabledUpload
          value={error ? "Invalid JSON data" : formattedData}
          onChange={setFormattedData}
        />
      </div>
    </div>
  );
};

export default JsonFormatterPage;
