import UIPreview from "./ui-preview";

interface Props {
  title: string;
  code: string;
  children: React.ReactNode;
}

const UIComponent: React.FC<Props> = ({ title, code, children }) => {
  return (
    <div className="mb-16">
      <h1 className="mb-6 text-3xl font-bold">{title}</h1>
      <UIPreview code={code}>{children}</UIPreview>
    </div>
  );
};

export default UIComponent;
