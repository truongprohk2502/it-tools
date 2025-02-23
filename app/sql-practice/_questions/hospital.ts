import { Level, SqlKeyword } from "../constants";
import type { Question } from "../types";

const question_1: Question = {
  id: 1,
  question:
    "Show first name, last name, and gender of patients whose gender is 'M'",
  query: `SELECT
  first_name,
  last_name,
  gender
FROM patients
WHERE gender = 'M';`,
  level: Level.Easy,
  keywords: [],
  expectedResult: {
    columns: ["first_name", "last_name", "gender"],
    values: [
      ["Donald", "Waterfield", "M"],
      ["John", "Smith", "M"],
      ["Michael", "Brown", "M"],
      ["David", "Garcia", "M"],
      ["William", "Lopez", "M"],
      ["Thomas", "Anderson", "M"],
      ["Daniel", "Thomas", "M"],
      ["Matthew", "Moore", "M"],
      ["Robert", "Martin", "M"],
      ["Joseph", "Gonzalez", "M"],
      ["George", "Harris", "M"],
      ["Timothy", "Lewis", "M"],
      ["James", "Walker", "M"],
      ["Andrew", "Hall", "M"],
      ["Mark", "Hernandez", "M"],
      ["Edward", "King", "M"],
      ["Zachary", "Evans", "M"],
      ["Joshua", "Nelson", "M"],
      ["Jerry", "Reed", "M"],
      ["Paul", "Bell", "M"],
      ["Ryan", "Brooks", "M"],
      ["Alex", "Washington", "M"],
      ["Donald", "Ford", "M"],
      ["Gordon", "Hernandez", "M"],
      ["Keith", "Wright", "M"],
      ["Gregory", "Roberts", "M"],
    ],
  },
};

const question_2: Question = {
  id: 2,
  question:
    "Show first name and last name of patients who does not have allergies. (null)",
  query: `SELECT
  first_name,
  last_name
FROM patients
WHERE allergies IS NULL;`,
  level: Level.Easy,
  keywords: [SqlKeyword.Null],
  expectedResult: {
    columns: ["first_name", "last_name"],
    values: [
      ["Donald", "Waterfield"],
      ["Michael", "Brown"],
      ["Jessica", "Martinez"],
      ["Thomas", "Anderson"],
      ["Daniel", "Thomas"],
      ["Patricia", "Jackson"],
      ["Joseph", "Gonzalez"],
      ["George", "Harris"],
      ["Timothy", "Lewis"],
      ["Sylvia", "Young"],
      ["Tina", "Martinez"],
      ["Christina", "Tucker"],
      ["Jerry", "Reed"],
      ["Sharon", "Ward"],
      ["Nicole", "Flores"],
      ["Donald", "Ford"],
      ["Gordon", "Hernandez"],
      ["Felicia", "King"],
    ],
  },
};

const question_3: Question = {
  id: 3,
  question: "Show first name of patients that start with the letter 'C'",
  query: `SELECT
  first_name
FROM
  patients
WHERE
  first_name LIKE 'C%'`,
  level: Level.Easy,
  keywords: [SqlKeyword.Like],
  expectedResult: {
    columns: ["first_name"],
    values: [["Cynthia"], ["Christina"]],
  },
};

const question_4: Question = {
  id: 4,
  question:
    "Show first name and last name of patients that weight within the range of 100 to 120 (inclusive)",
  query: `SELECT
  first_name,
  last_name
FROM patients
WHERE weight BETWEEN 100 AND 120`,
  level: Level.Easy,
  keywords: [],
  expectedResult: {
    columns: ["first_name", "last_name"],
    values: [
      ["Jessica", "Martinez"],
      ["Lisa", "Robinson"],
      ["Christina", "Tucker"],
    ],
  },
};

const question_5: Question = {
  id: 5,
  question:
    "Show first name and last name concatenated into one column to show their full name.",
  query: `SELECT
  CONCAT(first_name, ' ', last_name) AS full_name
FROM patients`,
  level: Level.Easy,
  keywords: [],
  expectedResult: {
    columns: ["full_name"],
    values: [
      ["Donald Waterfield"],
      ["Jane Doe"],
      ["John Smith"],
      ["Emily Johnson"],
      ["Michael Brown"],
      ["Sarah Davis"],
      ["David Garcia"],
      ["Jessica Martinez"],
      ["William Lopez"],
      ["Linda Wilson"],
      ["Thomas Anderson"],
      ["Barbara Taylor"],
      ["Daniel Thomas"],
      ["Jessica Hernandez"],
      ["Matthew Moore"],
      ["Patricia Jackson"],
      ["Robert Martin"],
      ["Cynthia Lee"],
      ["Joseph Gonzalez"],
      ["Nancy Perez"],
      ["George Harris"],
      ["Karen Clark"],
      ["Timothy Lewis"],
      ["Lisa Robinson"],
      ["James Walker"],
      ["Andrew Hall"],
      ["Sylvia Young"],
      ["Mark Hernandez"],
      ["Tina Martinez"],
      ["Edward King"],
      ["Gina Carter"],
      ["Zachary Evans"],
      ["Christina Tucker"],
      ["Joshua Nelson"],
      ["Hannah Perry"],
      ["Jerry Reed"],
      ["Laura Cook"],
      ["Paul Bell"],
      ["Sharon Ward"],
      ["Ryan Brooks"],
      ["Nicole Flores"],
      ["Alex Washington"],
      ["Alice Scott"],
      ["Donald Ford"],
      ["Eva Grant"],
      ["Gordon Hernandez"],
      ["Pamela Gordon"],
      ["Keith Wright"],
      ["Felicia King"],
      ["Gregory Roberts"],
    ],
  },
};

const question_6: Question = {
  id: 6,
  question:
    "Show first name, last name, and the full province name of each patient",
  query: `SELECT
  first_name,
  last_name,
  province_name
FROM patients
  JOIN province_names ON province_names.province_id = patients.province_id`,
  level: Level.Easy,
  keywords: [SqlKeyword.Join],
  expectedResult: {
    columns: ["first_name", "last_name", "province_name"],
    values: [
      ["Donald", "Waterfield", "Alberta"],
      ["Jane", "Doe", "Alberta"],
      ["John", "Smith", "British Columbia"],
      ["Emily", "Johnson", "Manitoba"],
      ["Michael", "Brown", "New Brunswick"],
      ["Sarah", "Davis", "Northwest Territories"],
      ["David", "Garcia", "Nova Scotia"],
      ["Jessica", "Martinez", "Prince Edward Island"],
      ["William", "Lopez", "Quebec"],
      ["Linda", "Wilson", "Saskatchewan"],
      ["Thomas", "Anderson", "Yukon"],
      ["Barbara", "Taylor", "Alberta"],
      ["Daniel", "Thomas", "British Columbia"],
      ["Jessica", "Hernandez", "Manitoba"],
      ["Matthew", "Moore", "New Brunswick"],
      ["Patricia", "Jackson", "Northwest Territories"],
      ["Robert", "Martin", "Nova Scotia"],
      ["Cynthia", "Lee", "Prince Edward Island"],
      ["Joseph", "Gonzalez", "Quebec"],
      ["Nancy", "Perez", "Saskatchewan"],
      ["George", "Harris", "Yukon"],
      ["Karen", "Clark", "Alberta"],
      ["Timothy", "Lewis", "British Columbia"],
      ["Lisa", "Robinson", "Manitoba"],
      ["James", "Walker", "New Brunswick"],
      ["Andrew", "Hall", "Northwest Territories"],
      ["Sylvia", "Young", "Nova Scotia"],
      ["Mark", "Hernandez", "Prince Edward Island"],
      ["Tina", "Martinez", "Quebec"],
      ["Edward", "King", "Saskatchewan"],
      ["Gina", "Carter", "Yukon"],
      ["Zachary", "Evans", "Alberta"],
      ["Christina", "Tucker", "British Columbia"],
      ["Joshua", "Nelson", "Manitoba"],
      ["Hannah", "Perry", "New Brunswick"],
      ["Jerry", "Reed", "Northwest Territories"],
      ["Laura", "Cook", "Nova Scotia"],
      ["Paul", "Bell", "Prince Edward Island"],
      ["Sharon", "Ward", "Quebec"],
      ["Ryan", "Brooks", "Saskatchewan"],
      ["Nicole", "Flores", "Yukon"],
      ["Alex", "Washington", "Alberta"],
      ["Alice", "Scott", "British Columbia"],
      ["Donald", "Ford", "Manitoba"],
      ["Eva", "Grant", "New Brunswick"],
      ["Gordon", "Hernandez", "Northwest Territories"],
      ["Pamela", "Gordon", "Nova Scotia"],
      ["Keith", "Wright", "Prince Edward Island"],
      ["Felicia", "King", "Quebec"],
      ["Gregory", "Roberts", "Saskatchewan"],
    ],
  },
};

const question_7: Question = {
  id: 7,
  question: "Show how many patients have a birth_date from '01-01-1970'",
  query: `SELECT
  COUNT(*) AS total_patients
FROM
  patients
WHERE
  birth_date >= '1970-01-01'`,
  level: Level.Easy,
  keywords: [SqlKeyword.Count],
  expectedResult: {
    columns: ["total_patients"],
    values: [[41]],
  },
};

const question_8: Question = {
  id: 8,
  question:
    "Show the first_name, last_name, and height of the patient with the greatest height.",
  query: `SELECT
  first_name,
  last_name,
  MAX(height) AS height
FROM
  patients`,
  level: Level.Easy,
  keywords: [SqlKeyword.Max],
  expectedResult: {
    columns: ["first_name", "last_name", "height"],
    values: [["Joseph", "Gonzalez", 76]],
  },
};

const question_9: Question = {
  id: 9,
  question:
    "Show all columns for patients who have one of the following patient_ids: 1, 15, 20, 45.",
  query: `SELECT *
FROM patients
WHERE
  patient_id IN (1, 15, 20, 45)`,
  level: Level.Easy,
  keywords: [SqlKeyword.In],
  expectedResult: {
    columns: [
      "patient_id",
      "first_name",
      "last_name",
      "gender",
      "birth_date",
      "city",
      "allergies",
      "weight",
      "height",
      "province_id",
    ],
    values: [
      [
        1,
        "Donald",
        "Waterfield",
        "M",
        "1963-02-12",
        "Barrie",
        null,
        156,
        65,
        "AB",
      ],
      [
        15,
        "Matthew",
        "Moore",
        "M",
        "1984-03-12",
        "Moncton",
        "Soy",
        185,
        70,
        "NB",
      ],
      [
        20,
        "Nancy",
        "Perez",
        "F",
        "1992-04-28",
        "Saskatoon",
        "Corn",
        150,
        64,
        "SK",
      ],
      [45, "Eva", "Grant", "F", "1995-12-22", "Moncton", "Eggs", 125, 58, "NB"],
    ],
  },
};

const question_10: Question = {
  id: 10,
  question: "Show the total number of admissions.",
  query: `SELECT COUNT(*) AS total_admissions
FROM admissions`,
  level: Level.Easy,
  keywords: [SqlKeyword.Count],
  expectedResult: {
    columns: ["total_admissions"],
    values: [[50]],
  },
};

const question_11: Question = {
  id: 11,
  question:
    "Based on the cities that our patients live in, show unique cities that are in province_id 'NS'.",
  query: `SELECT DISTINCT(city) AS unique_cities
FROM patients
WHERE province_id = 'NS'`,
  level: Level.Easy,
  keywords: [SqlKeyword.Distinct],
  expectedResult: {
    columns: ["unique_cities"],
    values: [["Halifax"], ["Bacca"]],
  },
};

const question_12: Question = {
  id: 12,
  question:
    "Write a query to find the first_name, last name and birth date of patients who has weight greater than 180 and height greater than 70.",
  query: `SELECT
  first_name,
  last_name,
  birth_date
FROM
  patients
WHERE
  weight > 180
  AND height > 70`,
  level: Level.Easy,
  keywords: [],
  expectedResult: {
    columns: ["first_name", "last_name", "birth_date"],
    values: [
      ["Michael", "Brown", "1982-05-10"],
      ["Thomas", "Anderson", "1965-08-18"],
      ["Joseph", "Gonzalez", "1955-01-15"],
      ["James", "Walker", "1968-09-03"],
      ["Joshua", "Nelson", "1962-12-01"],
      ["Paul", "Bell", "1960-04-28"],
      ["Donald", "Ford", "1969-01-19"],
      ["Gregory", "Roberts", "1968-05-06"],
    ],
  },
};

const question_13: Question = {
  id: 13,
  question:
    "Write a query to find list of patients first_name, last_name, and allergies where allergies are not null and are from the city of 'Winnipeg'.",
  query: `SELECT
  first_name,
  last_name,
  allergies
FROM patients
WHERE
  city = 'Winnipeg'
  AND allergies IS NOT NULL`,
  level: Level.Easy,
  keywords: [SqlKeyword.Null],
  expectedResult: {
    columns: ["first_name", "last_name", "allergies"],
    values: [
      ["Emily", "Johnson", "Shellfish"],
      ["Lisa", "Robinson", "Dust"],
      ["Joshua", "Nelson", "Dairy"],
    ],
  },
};

const question_14: Question = {
  id: 14,
  question: "Show unique weight from patients and order them by ascending.",
  query: `SELECT DISTINCT
  weight AS unique_weight
FROM
  patients
ORDER BY
  weight`,
  level: Level.Medium,
  keywords: [SqlKeyword.OrderBy],
  expectedResult: {
    columns: ["unique_weight"],
    values: [
      [112],
      [120],
      [123],
      [125],
      [128],
      [130],
      [132],
      [135],
      [138],
      [140],
      [141],
      [142],
      [145],
      [150],
      [155],
      [156],
      [160],
      [165],
      [170],
      [175],
      [180],
      [185],
      [190],
      [200],
      [210],
      [220],
    ],
  },
};

export const hospitalQuestions = [
  question_1,
  question_2,
  question_3,
  question_4,
  question_5,
  question_6,
  question_7,
  question_8,
  question_9,
  question_10,
  question_11,
  question_12,
  question_13,
  question_14,
];
