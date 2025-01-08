"use client";

import { forwardRef } from "react";
import { OVERRIDE_CONSOLE_IFRAME } from "../constants";

const template = (html: string, css: string, js: string) => `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>${css}</style>
  </head>
  <body>
    ${html}

    <script>
      ${OVERRIDE_CONSOLE_IFRAME} 
      ${js}
    </script>
  </body>
</html>
`;

interface Props {
  htmlCode: string;
  cssCode: string;
  jsCode: string;
}

const WebView = forwardRef<HTMLIFrameElement, Props>(
  ({ htmlCode, cssCode, jsCode }, ref) => {
    return (
      <div>
        <p className="mb-2 text-2xl font-bold">Web View</p>
        <div className="h-80 rounded-md border border-neutral-400">
          <iframe
            ref={ref}
            title="preview"
            srcDoc={template(htmlCode, cssCode, jsCode)}
            className="h-full w-full rounded-md"
          />
        </div>
      </div>
    );
  },
);

WebView.displayName = "WebView";

export default WebView;
