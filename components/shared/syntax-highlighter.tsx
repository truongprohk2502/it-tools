"use client";

import useDomLoaded from "@/hooks/useDomLoaded";
import { useTheme } from "next-themes";
import { PrismLight as ReactSyntaxHighlighter } from "react-syntax-highlighter";
import jsx from "react-syntax-highlighter/dist/esm/languages/prism/jsx";
import dark from "react-syntax-highlighter/dist/esm/styles/prism/duotone-dark";
import light from "react-syntax-highlighter/dist/esm/styles/prism/duotone-light";

ReactSyntaxHighlighter.registerLanguage("jsx", jsx);

interface Props {
  code: string;
}

const SyntaxHighlighter: React.FC<Props> = ({ code }) => {
  const { theme } = useTheme();
  const domLoaded = useDomLoaded();

  return (
    domLoaded && (
      <ReactSyntaxHighlighter
        language="jsx"
        style={theme === "light" ? light : dark}
        customStyle={{ margin: 0 }}
      >
        {code}
      </ReactSyntaxHighlighter>
    )
  );
};

export default SyntaxHighlighter;
