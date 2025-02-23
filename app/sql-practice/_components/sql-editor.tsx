"use client";

import AceEditor from "@/components/shared/ace-editor";
import useSyncStateToRef from "@/hooks/use-sync-state-to-ref";
import { formatSqlCode } from "@/lib/prettier";
import {
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
  type Ref,
} from "react";
import { SQL_DEFAULT } from "../constants";

export interface SqlEditorRef {
  getQueryString: () => string;
  resetQueryString: () => void;
}

interface Props {
  ref: Ref<SqlEditorRef>;
  onQuery: (query: string) => void;
}

const SqlEditor: React.FC<Props> = ({ ref }) => {
  const [query, setQuery] = useState<string>(SQL_DEFAULT);
  const [height, setHeight] = useState<number>(0);

  const queryRef = useSyncStateToRef(query);

  const isFormatting = useRef<boolean>(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useImperativeHandle(ref, () => {
    return {
      getQueryString: () => queryRef.current as string,
      resetQueryString: () => {
        setQuery(SQL_DEFAULT);
      },
    };
  }, []);

  useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      entries.forEach((entry) => {
        setHeight(entry.contentRect.height);
      });
    });
    observer.observe(wrapperRef.current!);
    return () => {
      observer.disconnect();
    };
  }, []);

  const handleFormat = async () => {
    if (isFormatting.current) return;
    isFormatting.current = true;
    const formattedQuery = await formatSqlCode(queryRef.current as string);
    isFormatting.current = false;
    setQuery(formattedQuery);
  };

  const handleChange = (query: string) => {
    if (isFormatting.current) return;
    setQuery(query);
  };

  return (
    <div ref={wrapperRef} className="h-full w-full">
      {height > 0 && (
        <AceEditor
          value={query}
          placeholder="Enter SQL query"
          height={`${height - 16}px`}
          fontSize={16}
          wrapEnabled
          noBorder
          rounded={false}
          commands={[
            {
              name: "formatCommand",
              bindKey: { win: "Ctrl-F", mac: "Command-F" },
              exec: handleFormat,
            },
          ]}
          onChange={handleChange}
        />
      )}
    </div>
  );
};

export default SqlEditor;
