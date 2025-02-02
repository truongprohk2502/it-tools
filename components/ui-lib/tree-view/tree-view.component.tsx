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
