export const JSON_SOURCE = `{
  "userId": 1,
  "id": 1,
  "title": "delectus aut autem",
  "completed": false
}`;

export const BIGQUERY_SOURCE = `[
  {
    "name": "userId",
    "type": "INTEGER",
    "mode": "NULLABLE"
  },
  {
    "name": "id",
    "type": "INTEGER",
    "mode": "NULLABLE"
  },
  {
    "name": "title",
    "type": "STRING",
    "mode": "NULLABLE"
  },
  {
    "name": "completed",
    "type": "BOOLEAN",
    "mode": "NULLABLE"
  }
]`;
