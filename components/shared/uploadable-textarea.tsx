import { UploadIcon } from "lucide-react";
import { useCallback } from "react";
import { toast } from "sonner";
import MonacoEditor from "./monaco-editor";

interface Props {
  title?: string;
  value: string;
  height?: string | number;
  defaultLanguage?: string;
  disabled?: boolean;
  disabledUpload?: boolean;
  onChange: React.Dispatch<React.SetStateAction<string>>;
}

const UploadableTextarea: React.FC<Props> = ({
  title,
  value,
  height,
  defaultLanguage,
  disabled,
  disabledUpload,
  onChange,
}) => {
  const handleUploadFile = useCallback((file: File | undefined) => {
    if (!file) return;

    const reader = new FileReader();

    const showError = () => toast.error("The file must be text file.");

    const handleLoadFile = () => {
      const contents = reader.result;

      if (typeof contents !== "string") return showError();

      const textFileRegex = /^[\x00-\x7F]*$/;
      if (!textFileRegex.test(contents)) return showError();

      onChange(contents);
    };

    reader.addEventListener("load", handleLoadFile, false);

    reader.readAsText(file);

    return () => {
      reader.removeEventListener("load", handleLoadFile);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {title && (
        <div className="my-4 flex items-center justify-between">
          <p className="font-semibold">{title}</p>
          {!disabledUpload && (
            <div className="relative flex cursor-pointer items-center text-neutral-500">
              <UploadIcon />
              <p className="ml-2 font-medium">Open file</p>
              <input
                type="file"
                className="absolute inset-0 cursor-pointer opacity-0"
                onChange={(e) => handleUploadFile(e.target.files?.[0])}
                disabled={disabled}
              />
            </div>
          )}
        </div>
      )}
      <div className="relative flex overflow-hidden rounded-sm border border-blue-700 dark:border-blue-900">
        <MonacoEditor
          asSimple={false}
          hideMinimap
          width="100%"
          height={height}
          defaultLanguage={defaultLanguage}
          value={value}
          onChange={(val) => onChange(val || "")}
          options={{ readOnly: disabled }}
        />
      </div>
    </div>
  );
};

export default UploadableTextarea;
