import { checkTableExist } from "@/utils/sql";
import type { Database } from "sql.js";

export const createDoctorsTable = (db: Database) => {
  const isExist = checkTableExist(db, "doctors");

  if (isExist) return;

  // Create table
  db.run(`CREATE TABLE doctors (
    doctor_id INTEGER NOT NULL PRIMARY KEY,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    specialty TEXT NOT NULL
  )`);

  // Insert data
  db.run(`INSERT INTO doctors (doctor_id, first_name, last_name, specialty) VALUES
    (1, 'Claude', 'Walls', 'Internist'),
    (2, 'Joshua', 'Green', 'Cardiologist'),
    (3, 'Miriam', 'Tregre', 'General Surgeon'),
    (4, 'James', 'Russo', 'Obstetrician/Gynecologist'),
    (5, 'Scott', 'Hill', 'Gastroenterologist'),
    (6, 'Tasha', 'Phillips', 'Psychiatrist'),
    (7, 'Hazel', 'Patterson', 'Oncologist'),
    (8, 'Mickey', 'Duval', 'Pediatrician'),
    (9, 'Jon', 'Nelson', 'Neurologist'),
    (10, 'Monica', 'Singleton', 'Orthopaedic Surgeon'),
    (11, 'Douglas', 'Brooks', 'Respirologist'),
    (12, 'Flora', 'Moore', 'Cardiovascular Surgeon'),
    (13, 'Angelica', 'Noe', 'Nuclear Medicine'),
    (14, 'Tyrone', 'Smart', 'Gerontologist'),
    (15, 'Marie', 'Brinkman', 'Urologist'),
    (16, 'Irene', 'Brooks', 'Gastroenterologist'),
    (17, 'Mary', 'Walker', 'Nuclear Medicine'),
    (18, 'Bobbi', 'Estrada', 'Gerontologist'),
    (19, 'Stephanie', 'Cohen', 'Oncologist'),
    (20, 'Ralph', 'Wilson', 'General Surgeon')
  `);
};
