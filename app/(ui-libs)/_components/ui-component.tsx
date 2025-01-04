import { Button } from "@/components/ui/button";
import kebabCase from "lodash/kebabCase";
import Link from "next/link";
import UIPreview from "./ui-preview";

interface Props {
  title: string;
  code: string;
  children: React.ReactNode;
}

const UIComponent: React.FC<Props> = ({ title, code, children }) => {
  return (
    <div>
      <h1 className="mb-6 text-3xl font-bold">{title}</h1>
      <Link href={`/source-code/${kebabCase(title)}`}>
        <Button className="mb-10">Get code</Button>
      </Link>
      <h2 className="mb-2 text-lg font-semibold">Preview</h2>
      <UIPreview code={code}>{children}</UIPreview>
    </div>
  );
};

export default UIComponent;
