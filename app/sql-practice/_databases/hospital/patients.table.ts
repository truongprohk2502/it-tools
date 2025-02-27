import { checkTableExist } from "@/utils/sql";
import type { Database } from "sql.js";

export const createPatientsTable = (db: Database) => {
  const isExist = checkTableExist(db, "patients");

  if (isExist) return;

  // Create table
  db.run(`CREATE TABLE patients (
    patient_id INT NOT NULL PRIMARY KEY,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    gender CHARACTER(1) NOT NULL,
    birth_date DATE NOT NULL,
    city TEXT NOT NULL,
    allergies TEXT,
    weight INT NOT NULL,
    height INT NOT NULL,
    province_id CHARACTER(2) NOT NULL,
    FOREIGN KEY(province_id) REFERENCES province_names(province_id)
  )`);

  // Insert data
  db.run(`INSERT INTO patients (patient_id, first_name, last_name, gender, birth_date, city, province_id, allergies, weight, height) VALUES
    (1, "Donald", "Waterfield", "M", "1963-02-12", "Barrie", "AB", NULL, 156, 65),
    (2, "Jane", "Doe", "F", "1985-07-21", "Toronto", "AB", "Peanuts", 145, 64),
    (3, "John", "Smith", "M", "1990-11-03", "Vancouver", "BC", "Dust", 180, 70),
    (4, "Emily", "Johnson", "F", "1975-03-15", "Winnipeg", "MB", "Shellfish", 150, 62),
    (5, "Michael", "Brown", "M", "1982-05-10", "Moncton", "NB", NULL, 200, 72),
    (6, "Sarah", "Davis", "F", "1988-09-30", "Yellowknife", "NT", "Latex", 130, 60),
    (7, "David", "Garcia", "M", "1972-12-22", "Halifax", "NS", "Gluten", 190, 68),
    (8, "Jessica", "Martinez", "F", "1995-01-15", "Charlottetown", "PE", NULL, 120, 58),
    (9, "William", "Lopez", "M", "1983-04-05", "Quebec City", "QC", "Pollen", 175, 69),
    (10, "Linda", "Wilson", "F", "1979-06-27", "Saskatoon", "SK", "Nuts", 135, 63),
    (11, "Thomas", "Anderson", "M", "1965-08-18", "Whitehorse", "YT", NULL, 210, 74),
    (12, "Barbara", "Taylor", "F", "1991-02-14", "Barrie", "AB", "Dairy", 140, 61),
    (13, "Daniel", "Thomas", "M", "1986-11-01", "Toronto", "BC", NULL, 160, 67),
    (14, "Jessica", "Hernandez", "F", "1979-07-22", "Vancouver", "MB", "Fish", 145, 62),
    (15, "Matthew", "Moore", "M", "1984-03-12", "Moncton", "NB", "Soy", 185, 70),
    (16, "Patricia", "Jackson", "F", "1990-10-30", "Yellowknife", "NT", NULL, 125, 57),
    (17, "Robert", "Martin", "M", "1981-05-06", "Halifax", "NS", "Eggs", 175, 69),
    (18, "Cynthia", "Lee", "F", "1983-08-21", "Charlottetown", "PE", "Wheat", 135, 63),
    (19, "Joseph", "Gonzalez", "M", "1955-01-15", "Quebec City", "QC", NULL, 220, 76),
    (20, "Nancy", "Perez", "F", "1992-04-28", "Saskatoon", "SK", "Corn", 150, 64),
    (21, "George", "Harris", "M", "1976-02-05", "Barrie", "YT", NULL, 190, 70),
    (22, "Karen", "Clark", "F", "1985-06-19", "Toronto", "AB", "Peanuts", 140, 61),
    (23, "Timothy", "Lewis", "M", "1982-11-09", "Vancouver", "BC", NULL, 165, 68),
    (24, "Lisa", "Robinson", "F", "1995-12-16", "Winnipeg", "MB", "Dust", 120, 55),
    (25, "James", "Walker", "M", "1968-09-03", "Moncton", "NB", "Shellfish", 210, 75),
    (26, "Andrew", "Hall", "M", "1981-05-17", "Yellowknife", "NT", "Nuts", 190, 69),
    (27, "Sylvia", "Young", "F", "1990-10-30", "Halifax", "NS", NULL, 130, 58),
    (28, "Mark", "Hernandez", "M", "1993-07-12", "Charlottetown", "PE", "Gluten", 175, 68),
    (29, "Tina", "Martinez", "F", "1985-01-19", "Quebec City", "QC", NULL, 145, 64),
    (30, "Edward", "King", "M", "1976-03-23", "Saskatoon", "SK", "Eggs", 165, 67),
    (31, "Gina", "Carter", "F", "1989-09-09", "Barrie", "YT", "Wheat", 128, 59),
    (32, "William", "Lopez", "M", "1984-04-14", "Toronto", "AB", "Corn", 180, 70),
    (33, "Christina", "Tucker", "F", "1991-06-05", "Vancouver", "BC", NULL, 112, 56),
    (34, "Joshua", "Nelson", "M", "1962-12-01", "Winnipeg", "MB", "Dairy", 190, 72),
    (35, "Hannah", "Perry", "F", "1992-11-12", "Moncton", "NB", "Peanuts", 138, 61),
    (36, "Jerry", "Reed", "M", "1990-08-20", "Yellowknife", "NT", NULL, 170, 65),
    (37, "Laura", "Cook", "F", "1978-09-14", "Halifax", "NS", "Dust", 123, 60),
    (38, "Paul", "Bell", "M", "1960-04-28", "Charlottetown", "PE", "Nuts", 210, 73),
    (39, "Sharon", "Ward", "F", "1985-08-02", "Quebec City", "QC", NULL, 132, 58),
    (40, "Ryan", "Brooks", "M", "1975-03-17", "Saskatoon", "SK", "Shellfish", 180, 70),
    (41, "Nicole", "Flores", "F", "1986-06-08", "Barrie", "YT", NULL, 141, 62),
    (42, "Alex", "Washington", "M", "1983-10-05", "Toronto", "AB", "Gluten", 155, 66),
    (43, "Alice", "Scott", "F", "1989-11-25", "Vancouver", "BC", "Pollen", 135, 63),
    (44, "Donald", "Ford", "M", "1969-01-19", "Winnipeg", "MB", NULL, 210, 74),
    (45, "Eva", "Grant", "F", "1995-12-22", "Moncton", "NB", "Eggs", 125, 58),
    (46, "Gordon", "Hernandez", "M", "1982-09-08", "Yellowknife", "NT", NULL, 165, 69),
    (47, "Pamela", "Gordon", "F", "1986-10-10", "Bacca", "NS", "Shellfish", 142, 63),
    (48, "Keith", "Wright", "M", "1951-02-13", "Charlottetown", "PE", "Dairy", 180, 72),
    (49, "Felicia", "King", "F", "1991-08-17", "Quebec City", "QC", NULL, 128, 57),
    (50, "Gregory", "Roberts", "M", "1968-05-06", "Saskatoon", "SK", "Nuts", 190, 75)
  `);
};
