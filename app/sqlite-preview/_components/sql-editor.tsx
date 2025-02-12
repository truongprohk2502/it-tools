"use client";

import AceEditor from "@/components/shared/ace-editor";
import { Button } from "@/components/ui/button";
import { type Ref, useImperativeHandle, useState } from "react";

export interface SqlEditorRef {
  setQueryString: (query: string) => void;
  getQueryString: () => string;
}

interface Props {
  ref: Ref<SqlEditorRef>;
  onQuery: (query: string) => void;
}

const SqlEditor: React.FC<Props> = ({ ref, onQuery }) => {
  const [query, setQuery] = useState<string>("");

  useImperativeHandle(ref, () => {
    return {
      setQueryString: (query) => setQuery(query),
      getQueryString: () => query,
    };
  }, [query]);

  const handleSubmit = () => onQuery(query);

  return (
    <div className="relative">
      <AceEditor
        value={query}
        placeholder="Enter SQL query"
        height="6rem"
        wrapEnabled
        onChange={setQuery}
      />
      <Button className="absolute -top-[52px] right-0" onClick={handleSubmit}>
        Execute
      </Button>
    </div>
  );
};

export default SqlEditor;
