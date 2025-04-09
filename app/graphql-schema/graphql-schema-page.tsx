"use client";

import { ReactFlowProvider } from "@xyflow/react";
import { type IntrospectionQuery } from "graphql";
import { useState } from "react";
import { toast } from "sonner";
import InputForm from "./_components/input-form";
import Visualizer from "./_components/visualizer";
import { parseReceivedSchema } from "./_utils/parse-schema";
import type { ParsedSchemaData } from "./types";

const GraphQLSchemaPage: React.FC = () => {
  const [schema, setSchema] = useState<ParsedSchemaData | null>(null);

  const handleGetSchema = (schema: IntrospectionQuery) => {
    try {
      const visualizedSchema = parseReceivedSchema(schema);
      setSchema(visualizedSchema);
    } catch {
      toast.error("Cannot visualize GraphQL schema.");
    }
  };

  return (
    <ReactFlowProvider>
      <div className="-mx-6 -my-8 flex h-[calc(100vh-4rem)] min-w-[60rem] flex-col">
        <InputForm onGetSchema={handleGetSchema} />
        <div className="flex-auto">
          <Visualizer schema={schema} />
        </div>
      </div>
    </ReactFlowProvider>
  );
};

export default GraphQLSchemaPage;
