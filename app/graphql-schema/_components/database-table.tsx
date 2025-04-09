import { Handle, Position } from "@xyflow/react";
import type { FieldType } from "../types";
import DatabaseField from "./database-field";

interface Props {
  data: {
    typeName: string;
    fields: FieldType[];
  };
}

const DatabaseTable: React.FC<Props> = ({ data: { typeName, fields } }) => {
  const isNormalTable =
    typeName !== "Root" && typeName !== "Query" && typeName !== "Mutation";

  return (
    <div className="rounded-md border border-neutral-300 bg-[rgba(229,229,229,0.8)] dark:border-neutral-600 dark:bg-[rgba(38,38,38,0.8)]">
      <div className="relative px-2 py-1 text-center">
        <span className="text-sm font-semibold">{typeName}</span>
        {isNormalTable && (
          <div className="absolute inset-y-0 left-0 flex flex-col justify-center">
            <Handle
              type="target"
              position={Position.Left}
              id={typeName}
              isConnectable={false}
            />
          </div>
        )}
      </div>
      <div className="grid grid-cols-1">
        {fields.map((field: FieldType) => (
          <DatabaseField key={field.fieldName} {...field} typeName={typeName} />
        ))}
      </div>
    </div>
  );
};

export default DatabaseTable;
