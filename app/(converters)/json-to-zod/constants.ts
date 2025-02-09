import type { Configs } from "../_components/setting-dialog";

export const JSON_SOURCE = `{
  "userId": 1,
  "id": 1,
  "title": "delectus aut autem",
  "completed": false
}`;

export const ZOD_SOURCE = `export const mySchema = z.object({
  userId: z.number().int(),
  id: z.number().int(),
  title: z.string(),
  completed: z.boolean(),
});
`;

export const jsonToZodConfigs: Configs = [
  ["exportType", { label: "Typescript type", initValue: false, value: false }],
  ["noImport", { label: "No import", initValue: true, value: true }],
];

export interface JsonToZodConfig {
  exportType: boolean;
  noImport: boolean;
}
