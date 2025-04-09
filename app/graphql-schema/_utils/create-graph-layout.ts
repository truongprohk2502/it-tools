import Elk from "elkjs";
import type { Edge, Node } from "reactflow";

/* Configure the Elk Layout options (The shape and nature of the graph) */
/* Check ELK docs for all details */
/* In summary, using layered algo and forcing to have wide aspect ratio */
const elk = new Elk({
  defaultLayoutOptions: {
    "elk.algorithm": "layered",
    "elk.direction": "RIGHT",
    "elk.spacing.nodeNode": "130",
    "elk.layered.spacing.nodeNodeBetweenLayers": "100",
    "elk.layered.noOverlap": "true",
    "elk.edgeRouting": "SPLINES",
    "elk.layered.nodePlacement.strategy": "SIMPLE",
    // "elk.topdownLayout": "true",
    "elk.layered.layering.strategy": "STRETCH_WIDTH",
  },
});

/* Take React Flow nodes and edges and transform them into a directed graph layout with ELK */
const createGraphLayout = async (flowNodes: Node[], flowEdges: Edge[]) => {
  const graphNodes = flowNodes.map((node) => ({
    id: node.id,
    // @ts-expect-error missing measured in Node
    width: node.measured.width as number,
    // @ts-expect-error missing measured in Node
    height: node.measured.height as number,
  }));

  const graphEdges = flowEdges.map((edge) => ({
    id: edge.id,
    targets: [edge.target],
    sources: [edge.source],
  }));

  // Create Elk graph based on nodes, edges, and configuration defined above
  const graph = await elk.layout({
    id: "root",
    children: graphNodes,
    edges: graphEdges,
  });

  // Map the positions of each Elk node back onto the corresponding React Flow node
  return flowNodes.map((flowNode) => {
    const elkNode = graph.children?.find((eNode) => eNode.id === flowNode.id);
    if (elkNode && elkNode.x && elkNode.y && elkNode.width && elkNode.height) {
      flowNode.position = {
        x: elkNode.x,
        y: elkNode.y,
      };
    }
    return flowNode;
  });
};

export default createGraphLayout;
