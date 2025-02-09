import type { Configs } from "../_components/setting-dialog";

export const JSON_SOURCE = `{
  "userId": 1,
  "id": 1,
  "title": "delectus aut autem",
  "completed": false
}`;

export const JSON_SCHEMA_SOURCE = `{
  "type": "object",
  "properties": {
    "userId": {
      "type": "integer"
    },
    "id": {
      "type": "integer"
    },
    "title": {
      "type": "string"
    },
    "completed": {
      "type": "boolean"
    }
  }
}`;

export const jsonToJsonSchemaConfigs: Configs = [
  [
    "detectFormat",
    { label: "Auto detect format", initValue: false, value: false },
  ],
  [
    "arrayMode",
    { label: "Combine array types", initValue: false, value: false },
  ],
  [
    "requireEach",
    { label: "Require each field", initValue: false, value: false },
  ],
  [
    "requireAll",
    { label: "Require all object fields", initValue: false, value: false },
  ],
];

export interface JsonToJsonSchemaConfig {
  detectFormat: boolean;
  arrayMode: boolean;
  requireEach: boolean;
  requireAll: boolean;
}
