export enum TabSpace {
  Tab2 = 2,
  Tab3 = 3,
  Tab4 = 4,
}

export enum FileType {
  JSON = "json",
  XML = "xml",
  CSV = "csv",
  YAML = "yaml",
}

export const INIT_JSON = `{
"id": "string",
"name": {
"firstName": "string",
"lastName": "string"
},
"age": "number",
"phoneNumber": "string",
"email": "string",
"isMale": "boolean",
"birthDate": "string",
"companies": ["string"]
}`;
