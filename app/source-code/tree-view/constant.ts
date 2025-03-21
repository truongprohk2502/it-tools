export const treeNodeComponentCode = `// tree-node.tsx
import clsx from "clsx";
import { FileIcon, FolderIcon } from "lucide-react";
import { useState } from "react";
import { TreeView } from ".";

export interface TreeInfo {
  key: string;
  label: string;
  iconType?: string;
  childNodes?: TreeInfo[];
}

export interface Icons {
  [key: string]: React.ReactNode;
}

interface Props {
  node: TreeInfo;
  icons?: Icons;
  expandAll?: boolean;
  showIcon?: boolean;
  showVerticalLine?: boolean;
}

const TreeNode: React.FC<Props> = ({
  node,
  icons,
  expandAll,
  showIcon,
  showVerticalLine,
}) => {
  const [showChildren, setShowChildren] = useState<boolean>(expandAll || false);

  const handleClick = () => {
    setShowChildren(!showChildren);
  };

  return (
    <>
      <div className="mb-2.5 flex items-center">
        {showIcon && (
          <div className="w-8 text-neutral-500">
            {icons?.[node.iconType as string] ||
              (node.childNodes === undefined ? (
                <FileIcon width={16} height={16} />
              ) : (
                <FolderIcon width={16} height={16} />
              ))}
          </div>
        )}
        <span className="cursor-pointer select-none" onClick={handleClick}>
          {node.label}
        </span>
      </div>
      <ul
        className={clsx("pl-2.5", {
          "border-l border-neutral-200 dark:border-neutral-600": showVerticalLine,
        })}
      >
        {showChildren && node.childNodes && (
          <TreeView
            data={node.childNodes}
            icons={icons}
            expandAll={expandAll}
            showIcon={showIcon}
            showVerticalLine={showVerticalLine}
          />
        )}
      </ul>
    </>
  );
};

export default TreeNode;
`;

export const treeViewComponentCode = `// tree-view.component.tsx
import TreeNode, { Icons, TreeInfo } from "./tree-node";

export interface TreeViewProps {
  data: TreeInfo[];
  icons?: Icons;
  expandAll?: boolean;
  showIcon?: boolean;
  showVerticalLine?: boolean;
  className?: string;
}

const TreeView: React.FC<TreeViewProps> = ({
  data,
  icons,
  expandAll = false,
  showIcon = true,
  showVerticalLine = true,
  className,
}) => {
  return (
    <ul className={className}>
      {data.map((node) => (
        <TreeNode
          key={node.key}
          node={node}
          icons={icons}
          expandAll={expandAll}
          showIcon={showIcon}
          showVerticalLine={showVerticalLine}
        />
      ))}
    </ul>
  );
};

export default TreeView;
`;
