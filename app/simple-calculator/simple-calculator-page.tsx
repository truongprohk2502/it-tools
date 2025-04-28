"use client";

import CalculatorIcon from "@/assets/icons/calculator.icon";
import ToolHeader from "@/components/shared/tool-header";
import { Route } from "@/constants/routes";
import { cn } from "@/lib/utils";
import { evaluate } from "mathjs";
import numeral from "numeral";
import { useEffect, useRef, useState } from "react";
import CalculatorButton from "./_components/calculator-button";
import {
  CALCULATOR_BUTTONS,
  KEYWORD_KEYS,
  MathKeyword,
  NUMBER_KEYS,
  OPERATION_KEYS,
} from "./constants";
import { CalculatorKey } from "./types";

const SimpleCalculatorPage: React.FC = () => {
  const [operation, setOperation] = useState<string>("");
  const [result, setResult] = useState<string>("");
  const [justExecuted, setJustExecuted] = useState<boolean>(false);

  const operationRef = useRef<HTMLDivElement>(null);
  const ansRef = useRef<number>(0);

  useEffect(() => {
    operationRef.current?.scrollTo({
      left: operationRef.current.scrollWidth,
    });
  }, [operation]);

  useEffect(() => {
    const handlePressKey = (event: KeyboardEvent) => {
      const key = event.key;

      if (key === "Enter") {
        handleClickEqual();
      } else if (key === "Backspace") {
        handleClickClear();
      } else if (KEYWORD_KEYS.includes(key as CalculatorKey)) {
        handleClickButton(key);
      }
    };

    document.addEventListener("keydown", handlePressKey);

    return () => {
      document.removeEventListener("keydown", handlePressKey);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [operation, justExecuted]);

  const handleClickClear = () => {
    if (justExecuted) {
      setOperation("");
      return;
    }

    if (operation.endsWith(MathKeyword.Ans)) {
      const newOperation = operation.slice(0, operation.length - 3);
      setOperation(newOperation);
    } else {
      const newOperation = operation.length
        ? operation.slice(0, -1)
        : operation;
      setOperation(newOperation);
    }
  };

  const handleClickEqual = () => {
    try {
      const evaluatedOperation = operation
        .replaceAll(CalculatorKey.Multiply, "*")
        .replace(MathKeyword.Ans, ansRef.current.toString());

      const result = evaluate(evaluatedOperation);

      if (result === undefined) {
        setResult(MathKeyword.Error);
      } else if (result === Infinity) {
        setResult(MathKeyword.Infinity);
      } else {
        setResult(result);
        ansRef.current = result as number;
      }
    } catch {
      setResult(MathKeyword.Error);
    } finally {
      setJustExecuted(true);
    }
  };

  const handleClickOthers = (key: string) => {
    if (justExecuted) {
      setJustExecuted(false);

      if (OPERATION_KEYS.includes(key as CalculatorKey)) {
        setOperation(MathKeyword.Ans + key);
      } else if (key === CalculatorKey.Dot) {
        setOperation("0.");
      } else {
        setOperation(key);
      }
    } else {
      const lastChar = operation[operation.length - 1];

      // When first key is pressed
      if (!lastChar) {
        if (key === CalculatorKey.Dot) {
          setOperation("0.");
          return;
        }

        setOperation(key);
        return;
      }

      // Replace operation key with the new one
      if (
        OPERATION_KEYS.includes(lastChar as CalculatorKey) &&
        OPERATION_KEYS.includes(key as CalculatorKey)
      ) {
        const newOperation = operation.slice(0, -1) + key;
        setOperation(newOperation);
        return;
      }

      // Prevent adding multiple dots
      if (
        key === CalculatorKey.Dot &&
        !NUMBER_KEYS.includes(lastChar as CalculatorKey)
      ) {
        return;
      }

      // Only allow adding number after dot
      if (
        lastChar === CalculatorKey.Dot &&
        !NUMBER_KEYS.includes(key as CalculatorKey)
      ) {
        return;
      }

      // Prevent adding redundant close brackets
      const openBracketCount =
        operation.split(CalculatorKey.OpenBracket).length - 1;
      const closeBracketCount =
        operation.split(CalculatorKey.CloseBracket).length - 1;
      if (
        key === CalculatorKey.CloseBracket &&
        openBracketCount <= closeBracketCount
      ) {
        return;
      }

      // Prevent adding close bracket after open bracket
      if (
        key === CalculatorKey.CloseBracket &&
        lastChar === CalculatorKey.OpenBracket
      ) {
        return;
      }

      // Prevent adding close bracket after operation key
      if (
        OPERATION_KEYS.includes(lastChar as CalculatorKey) &&
        key === CalculatorKey.CloseBracket
      ) {
        return;
      }

      // Adding multiply operator after close bracket
      if (
        (NUMBER_KEYS.includes(key as CalculatorKey) ||
          key === CalculatorKey.OpenBracket) &&
        lastChar === CalculatorKey.CloseBracket
      ) {
        const newOperation = operation + CalculatorKey.Multiply + key;
        setOperation(newOperation);
        return;
      }

      const newOperation = operation + key;
      setOperation(newOperation);
    }
  };

  const handleClickButton = (key: string) => {
    if (key === CalculatorKey.Clear) {
      handleClickClear();
    } else if (key === CalculatorKey.Equal) {
      handleClickEqual();
    } else {
      handleClickOthers(key);
    }
  };

  const getResultText = () => {
    if (!result) return "";

    const num = Number(result);

    if (Number.isNaN(num)) {
      return result;
    } else {
      const numStr =
        num < -1e8 || num > 1e8
          ? numeral(num).format("0,0.000e+0")
          : numeral(num).format("0,0.000");
      return numStr.includes(".")
        ? numStr.replaceAll(/0+$/g, "").replace(/\.$/, "")
        : numStr;
    }
  };

  return (
    <div className="mx-auto min-w-[40rem] max-w-[50rem] px-6">
      <ToolHeader
        title="Simple Calculator"
        description="The simple calculator application with addition, subtraction, division and multiplication."
        href={Route.SimpleCalculator}
        icon={CalculatorIcon}
      />
      <div className="mx-auto flex h-[36rem] w-[20rem] flex-col justify-between rounded-xl bg-white shadow-lg dark:bg-gray-600">
        <div className="px-4 py-4">
          <div
            ref={operationRef}
            className={cn(
              "w-full overflow-auto whitespace-nowrap border-none text-right text-2xl tracking-[0.2em] text-neutral-500 scrollbar-hide focus:outline-none dark:text-neutral-300",
              {
                "opacity-0": !operation,
              },
            )}
          >
            {operation ? (
              operation.startsWith(MathKeyword.Ans) ? (
                <>
                  <span className="mr-1 rounded-md bg-orange-500 px-1 text-lg font-medium tracking-normal text-white">
                    Ans
                  </span>
                  <span>{operation.slice(3)}</span>
                </>
              ) : (
                operation
              )
            ) : (
              "-"
            )}
          </div>
          <div className="mt-2 line-clamp-1 text-right text-3xl font-bold text-neutral-700 dark:text-neutral-100">
            {getResultText()}
          </div>
        </div>
        <div className="grid grid-cols-4 grid-rows-5 gap-x-3 gap-y-1.5 p-4">
          {CALCULATOR_BUTTONS.map((button) => (
            <CalculatorButton
              {...button}
              key={button.label}
              onClick={() => handleClickButton(button.label)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SimpleCalculatorPage;
