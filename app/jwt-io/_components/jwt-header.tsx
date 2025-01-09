"use client";

import MonacoEditor from "@/components/shared/monaco-editor";

interface Props {
  value: string;
  onChange: (val: string | undefined) => void;
}

const JwtHeader: React.FC<Props> = ({ value, onChange }) => {
  return (
    <div>
      <div className="rounded-t-md border-b border-neutral-400 bg-red-500 px-2 py-1 text-lg font-medium text-white">
        HEADER
      </div>
      <div className="border-b border-neutral-400">
        <MonacoEditor
          defaultLanguage="json"
          height="6rem"
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default JwtHeader;
