import { checkTableExist } from "@/utils/sql";
import type { Database } from "sql.js";

export const createProvinceNamesTable = (db: Database) => {
  const isExist = checkTableExist(db, "province_names");

  if (isExist) return;

  // Create table
  db.run(`CREATE TABLE province_names (
    province_id CHARACTER(2) NOT NULL PRIMARY KEY,
    province_name TEXT NOT NULL
  )`);

  // Insert data
  db.run(`INSERT INTO province_names (province_id, province_name) VALUES
    ("AB", "Alberta"),
    ("BC", "British Columbia"),
    ("MB", "Manitoba"),
    ("NB", "New Brunswick"),
    ("NT", "Northwest Territories"),
    ("NS", "Nova Scotia"),
    ("PE", "Prince Edward Island"),
    ("QC", "Quebec"),
    ("SK", "Saskatchewan"),
    ("YT", "Yukon")
  `);
};
