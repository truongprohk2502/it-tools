"use client";

interface Props {
  children: React.ReactNode;
}

const CssPreview: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <p className="text-lg font-semibold">Preview</p>
      <div className="mt-2 h-60 w-full [&>*]:h-full [&>*]:w-full">
        {children}
      </div>
    </div>
  );
};

export default CssPreview;
