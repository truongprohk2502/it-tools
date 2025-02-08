export const JSON_SOURCE = `{
  "userId": 1,
  "id": 1,
  "title": "delectus aut autem",
  "completed": false,
  "ids": [1, 2]
}`;

export const IOTS_SOURCE = `import * as t from "io-ts";

const RootInterface = t.type( {
  userId: t.Integer,
  id: t.Integer,
  title: t.string,
  completed: t.boolean,
  ids: t.array(t.Integer),
});`;
