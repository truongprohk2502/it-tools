"use client";

import MonacoEditor from "@/components/shared/monaco-editor";

interface Props {
  value: string;
  onChange: (val: string | undefined) => void;
}

const JwtPayload: React.FC<Props> = ({ value, onChange }) => {
  return (
    <div>
      <div className="border-b border-neutral-400 bg-purple-500 px-2 py-1 text-lg font-medium text-white">
        PAYLOAD
      </div>
      <div className="border-b border-neutral-400">
        <MonacoEditor
          defaultLanguage="json"
          height="12rem"
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default JwtPayload;
