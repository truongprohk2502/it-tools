import NpmIcon from "@/assets/icons/npm.icon";
import { Button } from "@/components/ui/button";
import kebabCase from "lodash/kebabCase";
import Link from "next/link";
import UIPreview from "./ui-preview";

interface Props {
  title: string;
  code: string;
  hasNpmLink?: boolean;
  children: React.ReactNode;
}

const UIComponent: React.FC<Props> = ({
  title,
  code,
  hasNpmLink,
  children,
}) => {
  return (
    <div>
      <h1 className="mb-6 text-3xl font-bold">{title}</h1>
      <div className="flex items-center">
        <Link href={`/source-code/${kebabCase(title)}`}>
          <Button>Get code</Button>
        </Link>
        {hasNpmLink && (
          <Link
            href={`https://www.npmjs.com/package/@it-tool-ui/${kebabCase(title)}`}
            target="_blank"
            className="ml-8"
          >
            <NpmIcon className="h-10 w-10" />
          </Link>
        )}
      </div>
      <h2 className="mb-2 mt-10 text-lg font-semibold">Preview</h2>
      <UIPreview code={code}>{children}</UIPreview>
    </div>
  );
};

export default UIComponent;
