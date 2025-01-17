"use client";

import UIComponent from "@/app/(ui-libs)/_components/ui-component";
import UIDocs from "@/app/(ui-libs)/_components/ui-docs";
import {
  CodeSnippet,
  type CodeSnippetProps,
} from "@/components/ui-lib/code-snippet";
import { useState } from "react";
import { codeSnippetProperties } from "./constant";

const generateCode = (props: CodeSnippetProps) => `<CodeSnippet
  code="${props.code}"
  size="${props.size}"
  color="${props.color}"
  showCopy={${props.showCopy}}
/>
`;

export default function CodeSnippetPage() {
  const [codeSnippetProps, setCodeSnippetProps] = useState<CodeSnippetProps>({
    code: "npm install react",
    size: "medium",
    color: "success",
    showCopy: true,
  });

  return (
    <div>
      <UIComponent title="CodeSnippet" code={generateCode(codeSnippetProps)}>
        <CodeSnippet {...codeSnippetProps} className="w-fit" />
      </UIComponent>
      <UIDocs<CodeSnippetProps>
        fields={codeSnippetProperties}
        fieldState={codeSnippetProps}
        onChange={setCodeSnippetProps}
      />
    </div>
  );
}
