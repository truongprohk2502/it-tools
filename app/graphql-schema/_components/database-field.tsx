import {
  Handle,
  Position,
  useNodes,
  useUpdateNodeInternals,
} from "@xyflow/react";
import { useEffect, useMemo } from "react";
import type { FieldType } from "../types";

interface Props extends FieldType {
  typeName: string;
}

const DatabaseField: React.FC<Props> = ({
  typeName,
  fieldName,
  relationship,
  returnType,
}) => {
  const nodes = useNodes();
  const updateNodeInternals = useUpdateNodeInternals();

  const handlePosition = useMemo(() => {
    if (!relationship) return Position.Left;

    const targetNode = nodes.find((node) => node.id === relationship);
    const currentNode = nodes.find((node) => node.id === typeName);

    if (!targetNode || !currentNode) return Position.Left;

    return currentNode.position.x > targetNode.position.x
      ? Position.Left
      : Position.Right;
  }, [relationship, typeName, nodes]);

  useEffect(() => {
    updateNodeInternals(typeName);
  }, [handlePosition, typeName, updateNodeInternals]);

  return (
    <div className="relative flex items-center justify-between border-t border-neutral-300 px-2 py-1 dark:border-neutral-600">
      <span className="text-xs font-medium">{fieldName}</span>
      <span className="ml-4 text-xs font-medium">{returnType}</span>
      {relationship && (
        <Handle
          type="source"
          position={handlePosition}
          id={`${typeName}/${fieldName}`}
          isConnectable={false}
        />
      )}
    </div>
  );
};

export default DatabaseField;
