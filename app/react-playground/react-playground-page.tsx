"use client";

import ReactIcon from "@/assets/icons/react.icon";
import Spinner from "@/components/shared/spinner";
import ToolHeader from "@/components/shared/tool-header";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Route } from "@/constants/routes";
import { Theme } from "@/constants/system";
import useDomLoaded from "@/hooks/use-dom-loaded";
import useSystemTheme from "@/hooks/use-system-theme";
import { themes } from "prism-react-renderer";
import { useEffect, useRef } from "react";
import { LiveEditor, LiveError, LivePreview, LiveProvider } from "react-live";
import { DEFAULT_REACT_COMPONENT_CODE } from "./constants";

const ReactPlaygroundPage: React.FC = () => {
  const liveEditorRef = useRef<HTMLDivElement>(null);

  const theme = useSystemTheme();
  const domLoaded = useDomLoaded();

  useEffect(() => {
    const liveEditor = liveEditorRef.current!;

    const preElement = liveEditor.getElementsByTagName("pre")?.[0];
    if (!preElement) return;

    const handleFocusEditor = () => {
      preElement.focus();
    };

    liveEditor.addEventListener("click", handleFocusEditor);

    return () => {
      liveEditor.removeEventListener("click", handleFocusEditor);
    };
  }, []);

  return (
    <div className="mx-auto min-w-[50rem] max-w-[70rem] px-6">
      <ToolHeader
        title="React Playground"
        description="Simple ReactJS playground that brings you the ability to render React components with editable source code and live preview."
        href={Route.ReactPlayground}
        icon={ReactIcon}
      />
      <LiveProvider code={DEFAULT_REACT_COMPONENT_CODE} noInline>
        <div className="grid grid-cols-2 gap-x-4">
          <p className="mb-1 font-bold">React Component code</p>
          <p className="mb-1 font-bold">Preview</p>
          <ScrollArea
            ref={liveEditorRef}
            className="h-[40rem] overflow-auto rounded-md border border-neutral-400 bg-[rgb(251,251,251)] dark:bg-[#011627]"
          >
            {domLoaded ? (
              <LiveEditor
                theme={
                  theme === Theme.Light ? themes.nightOwlLight : themes.nightOwl
                }
                style={{ fontSize: 12, height: "40rem" }}
              />
            ) : (
              <div className="flex h-[40rem] w-full items-center justify-center">
                <Spinner />
              </div>
            )}
          </ScrollArea>
          <ScrollArea className="h-[40rem] overflow-auto">
            <LivePreview />
          </ScrollArea>
          <LiveError className="col-start-1 col-end-3 mt-4 rounded-md bg-red-100 px-2 py-1 text-red-800" />
        </div>
      </LiveProvider>
    </div>
  );
};

export default ReactPlaygroundPage;
