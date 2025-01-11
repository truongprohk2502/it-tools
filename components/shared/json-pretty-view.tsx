import { BackgroundColor, Theme } from "@/constants/system";
import useSystemTheme from "@/hooks/use-system-theme";
import JSONPretty from "react-json-pretty";

interface Props {
  data: unknown;
  transparentBackground?: boolean;
}

const JSONPrettyView: React.FC<Props> = ({ data, transparentBackground }) => {
  const theme = useSystemTheme();

  const bgColor = transparentBackground
    ? "transparent"
    : theme === Theme.Dark
      ? BackgroundColor.Dark
      : BackgroundColor.Light;

  return (
    <JSONPretty
      data={data}
      style={{ fontSize: "12px", fontWeight: 600 }}
      theme={{
        main: `line-height:1.3;color:#66d9ef;background:${bgColor};overflow:auto;`,
        error:
          "line-height:1.3;color:#66d9ef;background:#272822;overflow:auto;",
        key: "color:#f92672;",
        string: `color:${theme === Theme.Dark ? "#fd971f" : "#e1701c"};`,
        value: `color:${theme === Theme.Dark ? "#a6e22e" : "#60a94a"};`,
        boolean: "color:#ac81fe;",
      }}
    />
  );
};

export default JSONPrettyView;
