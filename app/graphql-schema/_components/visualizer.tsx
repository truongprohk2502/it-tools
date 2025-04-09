"use client";

import { BackgroundColor, Theme } from "@/constants/system";
import useDomLoaded from "@/hooks/use-dom-loaded";
import useSystemTheme from "@/hooks/use-system-theme";
import {
  Background,
  MarkerType,
  ReactFlow,
  SelectionMode,
  useEdgesState,
  useNodesInitialized,
  useNodesState,
  useReactFlow,
  useStoreApi,
  type Edge,
  type Node,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { useEffect, useMemo, useState } from "react";
import { toast } from "sonner";
import createGraphLayout from "../_utils/create-graph-layout";
import type { ParsedSchemaData } from "../types";
import DatabaseTable from "./database-table";

interface Props {
  schema: ParsedSchemaData | null;
}

const Visualizer: React.FC<Props> = ({ schema }) => {
  const [loading, setLoading] = useState<boolean>(false);

  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  const flowInstance = useReactFlow();
  const nodesInitialized = useNodesInitialized();
  const store = useStoreApi();
  const systemTheme = useSystemTheme();
  const domLoaded = useDomLoaded();

  const bgColor = useMemo(() => {
    return systemTheme === Theme.Dark
      ? BackgroundColor.Dark
      : BackgroundColor.Light;
  }, [systemTheme]);

  useEffect(() => {
    if (!schema) {
      setLoading(false);
      return;
    }

    setLoading(true);
    setNodes([]);
    setEdges([]);

    // Queue new node setting to explicitly occur AFTER edges & nodes reset
    setTimeout(() => {
      const newNodes: Node[] = schema.objectTypes.map((type) => ({
        id: type.name,
        // Initial positions are arbitrary and will be overwritten by Elk positions.
        // React Flow nodes need to be initialized before processed by Elk.
        position: { x: 0, y: 0 },
        data: {
          typeName: type.name,
          fields: type.fields,
          markerEnd: {
            type: MarkerType.ArrowClosed,
            width: 28,
            height: 28,
            strokeWidth: 0.7,
          },
        },
        hidden: false,
        type: `typeNode`,
      }));

      const newEdges: Edge[] = [];

      for (const objectType of schema.objectTypes) {
        for (const field of objectType.fields) {
          const typeName = objectType.name;
          const fieldName = field.fieldName;
          const relationship = field.relationship;

          if (!relationship) continue;

          const key = `${typeName}/${fieldName}-${relationship}`;
          const checkExists = newEdges.some((edge) => edge.id === key);

          if (checkExists) continue;

          newEdges.push({
            id: `${typeName}/${fieldName}-${relationship}`,
            source: typeName,
            sourceHandle: `${typeName}/${fieldName}`,
            target: relationship,
            markerEnd: {
              type: MarkerType.ArrowClosed,
              width: 28,
              height: 28,
              strokeWidth: 0.7,
            },
            style: {
              strokeWidth: "1.1",
            },
          });
        }
      }

      setNodes(newNodes as never[]);
      setEdges(newEdges as never[]);
    }, 0);
  }, [schema, setNodes, setEdges]);

  useEffect(() => {
    if (!nodesInitialized) return;

    const initializeGraph = async () => {
      try {
        const { nodes, edges } = store.getState();
        const graphNodes = await createGraphLayout(nodes, edges);
        for (const node of nodes) {
          const graphNode = graphNodes.find((n) => n.id === node.id);
          if (!graphNode) continue;
          flowInstance.updateNode(node.id, { position: graphNode.position });
        }
        flowInstance.fitView();
        setLoading(false);
      } catch {
        toast.error("Error creating graph layout.");
      }
    };

    initializeGraph();
  }, [nodesInitialized, flowInstance, store, setNodes]);

  if (!domLoaded) return null;

  return (
    <div className="h-full">
      <ReactFlow
        colorMode={systemTheme === Theme.Dark ? "dark" : "light"}
        style={{
          backgroundColor: bgColor,
        }}
        defaultViewport={{ x: 0, y: 0, zoom: 0.5 }}
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        selectionOnDrag
        selectionMode={SelectionMode.Partial}
        panOnScroll={false}
        minZoom={0.1}
        maxZoom={2}
        proOptions={{ hideAttribution: true }}
        fitView
        nodeTypes={{
          typeNode: DatabaseTable,
        }}
        className={loading ? "opacity-0" : "opacity-100"}
      >
        <Background bgColor={bgColor} />
      </ReactFlow>
    </div>
  );
};

export default Visualizer;
