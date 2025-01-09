"use client";

import WebviewIcon from "@/assets/icons/webview.icon";
import ToolHeader from "@/components/shared/tool-header";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Route } from "@/constants/routes";
import { useEffect, useRef, useState } from "react";
import WebConsole from "./_components/web-console";
import WebView from "./_components/web-view";
import WebViewEditor from "./_components/web-view-editor";
import {
  DEFAULT_CSS_CODE,
  DEFAULT_HTML_CODE,
  DEFAULT_JS_CODE,
  WebViewFileType,
} from "./constants";
import type { Log } from "./types.js";

const WebViewPage: React.FC = () => {
  const iframeRef = useRef<HTMLIFrameElement | null>(null);

  const [consoles, setConsoles] = useState<Log[]>([]);
  const [selectedFile, setSelectedFile] = useState<WebViewFileType>(
    WebViewFileType.HTML,
  );
  const [htmlCode, setHtmlCode] = useState<string>(DEFAULT_HTML_CODE);
  const [cssCode, setCssCode] = useState<string>(DEFAULT_CSS_CODE);
  const [jsCode, setJsCode] = useState<string>(DEFAULT_JS_CODE);

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (
        ![
          "log",
          "debug",
          "info",
          "warn",
          "error",
          "table",
          "clear",
          "time",
          "timeEnd",
          "count",
          "assert",
        ].includes(event.data?.type)
      )
        return;

      setConsoles((consoles) => [
        ...consoles,
        {
          id: Date.now().toString(),
          method: event.data?.type,
          data: event.data.info,
        },
      ]);
    };

    window.addEventListener("message", handleMessage);

    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  const handleChange = (value: string) => {
    switch (selectedFile) {
      case WebViewFileType.HTML:
        setHtmlCode(value);
        break;
      case WebViewFileType.CSS:
        setCssCode(value);
        break;
      case WebViewFileType.JS:
        setJsCode(value);
        break;
      default:
        break;
    }
  };

  return (
    <div className="mx-auto min-w-[40rem] max-w-[80rem] px-4">
      <ToolHeader
        title="WebView Playground"
        description="Simple web view playground with editing JavaScript, HTML, CSS and rendering as well as debugging web page at realtime."
        href={Route.WebViewPlayground}
        icon={WebviewIcon}
      />
      <div className="mb-10 grid w-full grid-cols-2 gap-6">
        <WebConsole data={consoles} onClear={() => setConsoles([])} />
        <WebView
          ref={iframeRef}
          htmlCode={htmlCode}
          cssCode={cssCode}
          jsCode={jsCode}
        />
      </div>
      <p className="mb-2 text-2xl font-bold">Editor</p>
      <Tabs value={selectedFile} className="w-full">
        <TabsList className="flex w-full justify-start">
          <TabsTrigger
            value={WebViewFileType.HTML}
            onClick={() => setSelectedFile(WebViewFileType.HTML)}
          >
            index.html
          </TabsTrigger>
          <TabsTrigger
            value={WebViewFileType.CSS}
            onClick={() => setSelectedFile(WebViewFileType.CSS)}
          >
            style.css
          </TabsTrigger>
          <TabsTrigger
            value={WebViewFileType.JS}
            onClick={() => setSelectedFile(WebViewFileType.JS)}
          >
            script.js
          </TabsTrigger>
        </TabsList>
        <WebViewEditor
          selectedFile={selectedFile}
          htmlCode={htmlCode}
          cssCode={cssCode}
          jsCode={jsCode}
          onChange={handleChange}
        />
      </Tabs>
    </div>
  );
};

export default WebViewPage;
