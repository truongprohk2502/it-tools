import type { IntrospectionSchema } from "graphql";

export interface FieldType {
  fieldName: string;
  args: Array<{ name: string; nonNull: boolean }>;
  returnType: string;
  relationship: string;
}

export interface ObjectType {
  name: string;
  fields: FieldType[];
}

export interface ParsedSchemaData {
  mutationName: IntrospectionSchema["mutationType"];
  queryName: IntrospectionSchema["queryType"];
  objectTypes: ObjectType[];
}
