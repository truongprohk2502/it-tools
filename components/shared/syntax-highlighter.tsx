"use client";

import { Theme } from "@/constants/system";
import useDomLoaded from "@/hooks/use-dom-loaded";
import useSystemTheme from "@/hooks/use-system-theme";
import { PrismLight as ReactSyntaxHighlighter } from "react-syntax-highlighter";
import jsx from "react-syntax-highlighter/dist/esm/languages/prism/jsx";
import dark from "react-syntax-highlighter/dist/esm/styles/prism/duotone-dark";
import light from "react-syntax-highlighter/dist/esm/styles/prism/duotone-light";

ReactSyntaxHighlighter.registerLanguage("jsx", jsx);

interface Props {
  code: string;
  fullHeight?: boolean;
  showLineNumbers?: boolean;
}

const SyntaxHighlighter: React.FC<Props> = ({
  code,
  fullHeight,
  showLineNumbers,
}) => {
  const theme = useSystemTheme();
  const domLoaded = useDomLoaded();

  return (
    domLoaded && (
      <ReactSyntaxHighlighter
        language="jsx"
        style={theme === Theme.Light ? light : dark}
        customStyle={{ margin: 0, height: fullHeight ? "100%" : "auto" }}
        showLineNumbers={showLineNumbers}
      >
        {code}
      </ReactSyntaxHighlighter>
    )
  );
};

export default SyntaxHighlighter;
