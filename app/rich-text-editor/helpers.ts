import { CSS_STYLES } from "./constants";

export const formatHtmlCode = (htmlCode: string) => `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Rich Text Editor</title>
    <style type="text/css">
      ${CSS_STYLES}
    </style>
  </head>
  <body>
    <div class="tiptap ProseMirror">${htmlCode}</div>
  </body>
</html>
`;
