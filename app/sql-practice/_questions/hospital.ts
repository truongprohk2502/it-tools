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
WHERE gender = 'M'`,
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
      ["William", "Lopez", "M"],
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
      ["William Lopez"],
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
      ["William", "Lopez", "Alberta"],
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
    values: [[52]],
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

const question_15: Question = {
  id: 15,
  question:
    "Show unique first names from the patients table which only occurs once in the list.",
  query: `SELECT first_name
FROM patients
GROUP BY first_name
HAVING COUNT(first_name) = 1`,
  level: Level.Medium,
  keywords: [SqlKeyword.GroupBy, SqlKeyword.Having, SqlKeyword.Count],
  expectedResult: {
    columns: ["first_name"],
    values: [
      ["Alex"],
      ["Alice"],
      ["Andrew"],
      ["Barbara"],
      ["Christina"],
      ["Cynthia"],
      ["Daniel"],
      ["David"],
      ["Edward"],
      ["Emily"],
      ["Eva"],
      ["Felicia"],
      ["George"],
      ["Gina"],
      ["Gordon"],
      ["Gregory"],
      ["Hannah"],
      ["James"],
      ["Jane"],
      ["Jerry"],
      ["John"],
      ["Joseph"],
      ["Joshua"],
      ["Karen"],
      ["Keith"],
      ["Laura"],
      ["Linda"],
      ["Lisa"],
      ["Mark"],
      ["Matthew"],
      ["Michael"],
      ["Nancy"],
      ["Nicole"],
      ["Pamela"],
      ["Patricia"],
      ["Paul"],
      ["Robert"],
      ["Ryan"],
      ["Sarah"],
      ["Sharon"],
      ["Sylvia"],
      ["Thomas"],
      ["Timothy"],
      ["Tina"],
    ],
  },
};

const question_16: Question = {
  id: 16,
  question:
    "Show patient_id and first_name from patients where their first_name start with 'L' and ends with 'a' and is at least 5 characters long.",
  query: `SELECT
  patient_id,
  first_name
FROM patients
WHERE
  first_name LIKE 'L%a'
  AND LENGTH(first_name) >= 5`,
  level: Level.Medium,
  keywords: [SqlKeyword.Like],
  expectedResult: {
    columns: ["patient_id", "first_name"],
    values: [
      [10, "Linda"],
      [37, "Laura"],
    ],
  },
};

const question_17: Question = {
  id: 17,
  question:
    "Show patient_id, first_name, last_name from patients whose diagnosis is 'Flu'.",
  query: `SELECT
  patients.patient_id,
  first_name,
  last_name
FROM patients
  LEFT JOIN admissions ON admissions.patient_id = patients.patient_id
WHERE diagnosis = 'Flu'`,
  level: Level.Medium,
  keywords: [SqlKeyword.Join],
  expectedResult: {
    columns: ["patient_id", "first_name", "last_name"],
    values: [
      [1, "Donald", "Waterfield"],
      [3, "John", "Smith"],
      [7, "David", "Garcia"],
      [11, "Thomas", "Anderson"],
      [15, "Matthew", "Moore"],
      [20, "Nancy", "Perez"],
      [24, "Lisa", "Robinson"],
      [27, "Sylvia", "Young"],
      [31, "Gina", "Carter"],
      [36, "Jerry", "Reed"],
      [40, "Ryan", "Brooks"],
      [46, "Gordon", "Hernandez"],
      [48, "Keith", "Wright"],
    ],
  },
};

const question_18: Question = {
  id: 18,
  question:
    "Display every patient's first_name. Order the list by the length of each name and then by alphabetically.",
  query: `SELECT first_name
FROM patients
ORDER BY
  LENGTH (first_name),
  first_name`,
  level: Level.Medium,
  keywords: [SqlKeyword.OrderBy],
  expectedResult: {
    columns: ["first_name"],
    values: [
      ["Eva"],
      ["Alex"],
      ["Gina"],
      ["Jane"],
      ["John"],
      ["Lisa"],
      ["Mark"],
      ["Paul"],
      ["Ryan"],
      ["Tina"],
      ["Alice"],
      ["David"],
      ["Emily"],
      ["James"],
      ["Jerry"],
      ["Karen"],
      ["Keith"],
      ["Laura"],
      ["Linda"],
      ["Nancy"],
      ["Sarah"],
      ["Andrew"],
      ["Daniel"],
      ["Donald"],
      ["Donald"],
      ["Edward"],
      ["George"],
      ["Gordon"],
      ["Hannah"],
      ["Joseph"],
      ["Joshua"],
      ["Nicole"],
      ["Pamela"],
      ["Robert"],
      ["Sharon"],
      ["Sylvia"],
      ["Thomas"],
      ["Barbara"],
      ["Cynthia"],
      ["Felicia"],
      ["Gregory"],
      ["Jessica"],
      ["Jessica"],
      ["Matthew"],
      ["Michael"],
      ["Timothy"],
      ["William"],
      ["William"],
      ["Patricia"],
      ["Christina"],
    ],
  },
};

const question_19: Question = {
  id: 19,
  question:
    "Show the total amount of male patients and the total amount of female patients in the patients table. Display the two results in the same row.",
  query: `SELECT
  SUM(gender = 'M') AS male_count,
  SUM(gender = 'F') AS female_count
FROM
  patients`,
  level: Level.Medium,
  keywords: [SqlKeyword.Sum],
  expectedResult: {
    columns: ["male_count", "female_count"],
    values: [[26, 24]],
  },
};

const question_20: Question = {
  id: 20,
  question:
    "Show first and last name, allergies from patients which have allergies to either 'Dust' or 'Nuts'. Show results ordered ascending by allergies then by first_name then by last_name.",
  query: `SELECT
  first_name,
  last_name,
  allergies
FROM patients
WHERE
  allergies IN ('Dust', 'Nuts')
ORDER BY
  allergies,
  first_name,
  last_name`,
  level: Level.Medium,
  keywords: [SqlKeyword.OrderBy, SqlKeyword.In],
  expectedResult: {
    columns: ["first_name", "last_name", "allergies"],
    values: [
      ["John", "Smith", "Dust"],
      ["Laura", "Cook", "Dust"],
      ["Lisa", "Robinson", "Dust"],
      ["Andrew", "Hall", "Nuts"],
      ["Gregory", "Roberts", "Nuts"],
      ["Linda", "Wilson", "Nuts"],
      ["Paul", "Bell", "Nuts"],
    ],
  },
};

const question_21: Question = {
  id: 21,
  question:
    "Show patient_id, diagnosis from admissions. Find patients admitted multiple times for the same diagnosis.",
  query: `SELECT
  patient_id,
  diagnosis
FROM admissions
GROUP BY
  patient_id,
  diagnosis
HAVING COUNT(*) > 1`,
  level: Level.Medium,
  keywords: [SqlKeyword.GroupBy, SqlKeyword.Having, SqlKeyword.Count],
  expectedResult: {
    columns: ["patient_id", "diagnosis"],
    values: [
      [2, "Cold"],
      [4, "Headache"],
    ],
  },
};

const question_22: Question = {
  id: 22,
  question:
    "Show the city and the total number of patients in the city. Order from most to least patients and then by city name ascending.",
  query: `SELECT
  city,
  COUNT(*) AS num_patients
FROM patients
GROUP BY city
ORDER BY num_patients DESC, city`,
  level: Level.Medium,
  keywords: [SqlKeyword.GroupBy, SqlKeyword.OrderBy, SqlKeyword.Count],
  expectedResult: {
    columns: ["city", "num_patients"],
    values: [
      ["Barrie", 5],
      ["Charlottetown", 5],
      ["Moncton", 5],
      ["Quebec City", 5],
      ["Saskatoon", 5],
      ["Toronto", 5],
      ["Vancouver", 5],
      ["Yellowknife", 5],
      ["Halifax", 4],
      ["Winnipeg", 4],
      ["Bacca", 1],
      ["Whitehorse", 1],
    ],
  },
};

const question_23: Question = {
  id: 23,
  question:
    "Show first name, last name and role of every person that is either patient or doctor. The roles are either 'Patient' or 'Doctor'",
  query: `SELECT
  first_name,
  last_name,
  'Patient' AS role
FROM patients
  UNION ALL
SELECT
  first_name,
  last_name,
  'Doctor' AS role
FROM doctors`,
  level: Level.Medium,
  keywords: [SqlKeyword.Union],
  expectedResult: {
    columns: ["first_name", "last_name", "role"],
    values: [
      ["Donald", "Waterfield", "Patient"],
      ["Jane", "Doe", "Patient"],
      ["John", "Smith", "Patient"],
      ["Emily", "Johnson", "Patient"],
      ["Michael", "Brown", "Patient"],
      ["Sarah", "Davis", "Patient"],
      ["David", "Garcia", "Patient"],
      ["Jessica", "Martinez", "Patient"],
      ["William", "Lopez", "Patient"],
      ["Linda", "Wilson", "Patient"],
      ["Thomas", "Anderson", "Patient"],
      ["Barbara", "Taylor", "Patient"],
      ["Daniel", "Thomas", "Patient"],
      ["Jessica", "Hernandez", "Patient"],
      ["Matthew", "Moore", "Patient"],
      ["Patricia", "Jackson", "Patient"],
      ["Robert", "Martin", "Patient"],
      ["Cynthia", "Lee", "Patient"],
      ["Joseph", "Gonzalez", "Patient"],
      ["Nancy", "Perez", "Patient"],
      ["George", "Harris", "Patient"],
      ["Karen", "Clark", "Patient"],
      ["Timothy", "Lewis", "Patient"],
      ["Lisa", "Robinson", "Patient"],
      ["James", "Walker", "Patient"],
      ["Andrew", "Hall", "Patient"],
      ["Sylvia", "Young", "Patient"],
      ["Mark", "Hernandez", "Patient"],
      ["Tina", "Martinez", "Patient"],
      ["Edward", "King", "Patient"],
      ["Gina", "Carter", "Patient"],
      ["William", "Lopez", "Patient"],
      ["Christina", "Tucker", "Patient"],
      ["Joshua", "Nelson", "Patient"],
      ["Hannah", "Perry", "Patient"],
      ["Jerry", "Reed", "Patient"],
      ["Laura", "Cook", "Patient"],
      ["Paul", "Bell", "Patient"],
      ["Sharon", "Ward", "Patient"],
      ["Ryan", "Brooks", "Patient"],
      ["Nicole", "Flores", "Patient"],
      ["Alex", "Washington", "Patient"],
      ["Alice", "Scott", "Patient"],
      ["Donald", "Ford", "Patient"],
      ["Eva", "Grant", "Patient"],
      ["Gordon", "Hernandez", "Patient"],
      ["Pamela", "Gordon", "Patient"],
      ["Keith", "Wright", "Patient"],
      ["Felicia", "King", "Patient"],
      ["Gregory", "Roberts", "Patient"],
      ["Claude", "Walls", "Doctor"],
      ["Joshua", "Green", "Doctor"],
      ["Miriam", "Tregre", "Doctor"],
      ["James", "Russo", "Doctor"],
      ["Scott", "Hill", "Doctor"],
      ["Tasha", "Phillips", "Doctor"],
      ["Hazel", "Patterson", "Doctor"],
      ["Mickey", "Duval", "Doctor"],
      ["Jon", "Nelson", "Doctor"],
      ["Monica", "Singleton", "Doctor"],
      ["Douglas", "Brooks", "Doctor"],
      ["Flora", "Moore", "Doctor"],
      ["Angelica", "Noe", "Doctor"],
      ["Tyrone", "Smart", "Doctor"],
      ["Marie", "Brinkman", "Doctor"],
      ["Irene", "Brooks", "Doctor"],
      ["Mary", "Walker", "Doctor"],
      ["Bobbi", "Estrada", "Doctor"],
      ["Stephanie", "Cohen", "Doctor"],
      ["Ralph", "Wilson", "Doctor"],
    ],
  },
};

const question_24: Question = {
  id: 24,
  question:
    "Show all allergies ordered by popularity. Remove NULL values from query.",
  query: `SELECT
  allergies,
  COUNT(*) AS total_diagnosis
FROM patients
WHERE
  allergies IS NOT NULL
GROUP BY allergies
ORDER BY total_diagnosis DESC`,
  level: Level.Medium,
  keywords: [SqlKeyword.GroupBy, SqlKeyword.OrderBy, SqlKeyword.Null],
  expectedResult: {
    columns: ["allergies", "total_diagnosis"],
    values: [
      ["Shellfish", 4],
      ["Nuts", 4],
      ["Peanuts", 3],
      ["Gluten", 3],
      ["Eggs", 3],
      ["Dust", 3],
      ["Dairy", 3],
      ["Wheat", 2],
      ["Pollen", 2],
      ["Corn", 2],
      ["Soy", 1],
      ["Latex", 1],
      ["Fish", 1],
    ],
  },
};

const question_25: Question = {
  id: 25,
  question:
    "We want to display each patient's full name in a single column called 'name'. Their last_name in all upper letters must appear first, then first_name in all lower case letters. Separate the last_name and first_name with a comma. Order the list by the first_name in descending order",
  query: `SELECT
  CONCAT(UPPER(last_name), ',', LOWER(first_name)) AS name
FROM patients
ORDER BY first_name DESC;`,
  level: Level.Medium,
  keywords: [SqlKeyword.OrderBy],
  expectedResult: {
    columns: ["name"],
    values: [
      ["LOPEZ,william"],
      ["LOPEZ,william"],
      ["MARTINEZ,tina"],
      ["LEWIS,timothy"],
      ["ANDERSON,thomas"],
      ["YOUNG,sylvia"],
      ["WARD,sharon"],
      ["DAVIS,sarah"],
      ["BROOKS,ryan"],
      ["MARTIN,robert"],
      ["BELL,paul"],
      ["JACKSON,patricia"],
      ["GORDON,pamela"],
      ["FLORES,nicole"],
      ["PEREZ,nancy"],
      ["BROWN,michael"],
      ["MOORE,matthew"],
      ["HERNANDEZ,mark"],
      ["ROBINSON,lisa"],
      ["WILSON,linda"],
      ["COOK,laura"],
      ["WRIGHT,keith"],
      ["CLARK,karen"],
      ["NELSON,joshua"],
      ["GONZALEZ,joseph"],
      ["SMITH,john"],
      ["MARTINEZ,jessica"],
      ["HERNANDEZ,jessica"],
      ["REED,jerry"],
      ["DOE,jane"],
      ["WALKER,james"],
      ["PERRY,hannah"],
      ["ROBERTS,gregory"],
      ["HERNANDEZ,gordon"],
      ["CARTER,gina"],
      ["HARRIS,george"],
      ["KING,felicia"],
      ["GRANT,eva"],
      ["JOHNSON,emily"],
      ["KING,edward"],
      ["WATERFIELD,donald"],
      ["FORD,donald"],
      ["GARCIA,david"],
      ["THOMAS,daniel"],
      ["LEE,cynthia"],
      ["TUCKER,christina"],
      ["TAYLOR,barbara"],
      ["HALL,andrew"],
      ["SCOTT,alice"],
      ["WASHINGTON,alex"],
    ],
  },
};

const question_26: Question = {
  id: 26,
  question:
    "Show the province_id(s), sum of height; where the total sum of its patient's height is greater than or equal to 330.",
  query: `SELECT
  province_id,
  SUM(height) AS sum_height
FROM patients
GROUP BY province_id
HAVING sum_height >= 330`,
  level: Level.Medium,
  keywords: [SqlKeyword.GroupBy, SqlKeyword.Having, SqlKeyword.Sum],
  expectedResult: {
    columns: ["province_id", "sum_height"],
    values: [
      ["AB", 387],
      ["NB", 336],
      ["PE", 334],
      ["SK", 339],
    ],
  },
};

const question_27: Question = {
  id: 27,
  question:
    "Show the difference between the largest weight and smallest weight for patients.",
  query: `SELECT
  (MAX(weight) - MIN(weight))
    AS weight_delta
FROM patients`,
  level: Level.Medium,
  keywords: [SqlKeyword.Min, SqlKeyword.Max],
  expectedResult: {
    columns: ["weight_delta"],
    values: [[108]],
  },
};

const question_28: Question = {
  id: 28,
  question: "Show all columns for patient_id 4's most recent admission_date.",
  query: `SELECT *
FROM admissions
WHERE patient_id = 4
GROUP BY patient_id
HAVING
  admission_date =
    MAX(admission_date)`,
  level: Level.Medium,
  keywords: [SqlKeyword.GroupBy, SqlKeyword.Having, SqlKeyword.Max],
  expectedResult: {
    columns: [
      "patient_id",
      "admission_date",
      "discharge_date",
      "diagnosis",
      "attending_doctor_id",
    ],
    values: [[4, "2023-02-25", "2023-02-28", "Headache", 4]],
  },
};

const question_29: Question = {
  id: 29,
  question:
    "Show patient_id, attending_doctor_id, and diagnosis for admissions that match one of the two criteria:\n1. patient_id is an odd number and attending_doctor_id is either 1, 5, or 19.\n2. attending_doctor_id contains a 2 and the length of patient_id is 2 characters.",
  query: `SELECT
  patient_id,
  attending_doctor_id,
  diagnosis
FROM admissions
WHERE
  (
    attending_doctor_id IN (1, 5, 19)
    AND patient_id % 2 != 0
  )
  OR 
  (
    attending_doctor_id LIKE '%2%'
    AND length(patient_id) = 2
  )`,
  level: Level.Medium,
  keywords: [SqlKeyword.In, SqlKeyword.Like],
  expectedResult: {
    columns: ["patient_id", "attending_doctor_id", "diagnosis"],
    values: [
      [1, 5, "Flu"],
      [5, 1, "Cold"],
      [19, 20, "Cold"],
      [22, 2, "Headache"],
      [23, 5, "Back Pain"],
      [24, 12, "Flu"],
      [28, 20, "Cold"],
      [33, 19, "Cold"],
      [40, 12, "Flu"],
      [42, 2, "Anxiety"],
      [43, 5, "Headache"],
      [45, 2, "Cold"],
    ],
  },
};

const question_30: Question = {
  id: 30,
  question:
    "Show first_name, last_name, and the total number of admissions attended for each doctor.",
  query: `SELECT
  first_name,
  last_name,
  COUNT(*) AS admissions_total
FROM admissions a
  LEFT JOIN doctors d
    ON d.doctor_id = a.attending_doctor_id
GROUP BY attending_doctor_id`,
  level: Level.Medium,
  keywords: [SqlKeyword.Join, SqlKeyword.Count, SqlKeyword.GroupBy],
  expectedResult: {
    columns: ["first_name", "last_name", "admissions_total"],
    values: [
      ["Claude", "Walls", 3],
      ["Joshua", "Green", 4],
      ["Miriam", "Tregre", 3],
      ["James", "Russo", 5],
      ["Scott", "Hill", 3],
      ["Tasha", "Phillips", 3],
      ["Hazel", "Patterson", 2],
      ["Mickey", "Duval", 2],
      ["Jon", "Nelson", 3],
      ["Monica", "Singleton", 2],
      ["Douglas", "Brooks", 3],
      ["Flora", "Moore", 3],
      ["Angelica", "Noe", 1],
      ["Tyrone", "Smart", 3],
      ["Marie", "Brinkman", 3],
      ["Irene", "Brooks", 1],
      ["Mary", "Walker", 2],
      ["Bobbi", "Estrada", 2],
      ["Stephanie", "Cohen", 2],
      ["Ralph", "Wilson", 2],
    ],
  },
};

const question_31: Question = {
  id: 31,
  question:
    "For each doctor, display their id, full name, and the first and last admission date they attended.",
  query: `SELECT
  doctor_id,
  CONCAT(first_name, ' ', last_name) AS full_name,
  MIN(admission_date) AS first_admission_date,
  MAX(admission_date) AS last_admission_date
FROM doctors d
  LEFT JOIN admissions a
    ON d.doctor_id = a.attending_doctor_id
  GROUP BY doctor_id`,
  level: Level.Medium,
  keywords: [
    SqlKeyword.GroupBy,
    SqlKeyword.Min,
    SqlKeyword.Max,
    SqlKeyword.Join,
  ],
  expectedResult: {
    columns: [
      "doctor_id",
      "full_name",
      "first_admission_date",
      "last_admission_date",
    ],
    values: [
      [1, "Claude Walls", "2023-01-05", "2023-02-05"],
      [2, "Joshua Green", "2023-01-09", "2023-02-14"],
      [3, "Miriam Tregre", "2023-01-03", "2023-02-13"],
      [4, "James Russo", "2023-01-07", "2023-03-19"],
      [5, "Scott Hill", "2023-01-01", "2023-02-12"],
      [6, "Tasha Phillips", "2023-01-14", "2023-02-15"],
      [7, "Hazel Patterson", "2023-01-02", "2023-02-01"],
      [8, "Mickey Duval", "2023-01-10", "2023-01-21"],
      [9, "Jon Nelson", "2023-01-11", "2023-02-17"],
      [10, "Monica Singleton", "2023-01-04", "2023-02-03"],
      [11, "Douglas Brooks", "2023-01-15", "2023-02-18"],
      [12, "Flora Moore", "2023-01-06", "2023-02-09"],
      [13, "Angelica Noe", "2023-01-16", "2023-01-16"],
      [14, "Tyrone Smart", "2023-01-12", "2023-02-07"],
      [15, "Marie Brinkman", "2023-01-08", "2023-02-06"],
      [16, "Irene Brooks", "2023-02-08", "2023-02-08"],
      [17, "Mary Walker", "2023-01-17", "2023-02-10"],
      [18, "Bobbi Estrada", "2023-01-13", "2023-02-16"],
      [19, "Stephanie Cohen", "2023-01-18", "2023-02-02"],
      [20, "Ralph Wilson", "2023-01-19", "2023-01-28"],
    ],
  },
};

const question_32: Question = {
  id: 32,
  question:
    "Display the total amount of patients for each province. Order by descending.",
  query: `SELECT
  province_name,
  COUNT(*) AS patient_count
FROM province_names pr
INNER JOIN patients pa
  ON pa.province_id = pr.province_id
GROUP BY pr.province_id
ORDER BY patient_count DESC`,
  level: Level.Medium,
  keywords: [
    SqlKeyword.GroupBy,
    SqlKeyword.Count,
    SqlKeyword.OrderBy,
    SqlKeyword.Join,
  ],
  expectedResult: {
    columns: ["province_name", "patient_count"],
    values: [
      ["Alberta", 6],
      ["Saskatchewan", 5],
      ["Quebec", 5],
      ["Prince Edward Island", 5],
      ["Northwest Territories", 5],
      ["Nova Scotia", 5],
      ["New Brunswick", 5],
      ["Manitoba", 5],
      ["British Columbia", 5],
      ["Yukon", 4],
    ],
  },
};

const question_33: Question = {
  id: 33,
  question:
    "For every admission, display the patient's full name, their admission diagnosis, and their doctor's full name who diagnosed their problem.",
  query: `SELECT
  CONCAT(patients.first_name, ' ', patients.last_name) as patient_name,
  diagnosis,
  CONCAT(doctors.first_name,' ',doctors.last_name) as doctor_name
FROM patients
  JOIN admissions ON admissions.patient_id = patients.patient_id
  JOIN doctors ON doctors.doctor_id = admissions.attending_doctor_id`,
  level: Level.Medium,
  keywords: [SqlKeyword.Join],
  expectedResult: {
    columns: ["patient_name", "diagnosis", "doctor_name"],
    values: [
      ["Donald Waterfield", "Flu", "Scott Hill"],
      ["Jane Doe", "Cold", "Hazel Patterson"],
      ["John Smith", "Flu", "Miriam Tregre"],
      ["Emily Johnson", "Headache", "Monica Singleton"],
      ["Michael Brown", "Cold", "Claude Walls"],
      ["Sarah Davis", "Back Pain", "Flora Moore"],
      ["David Garcia", "Flu", "James Russo"],
      ["Jessica Martinez", "Anxiety", "Marie Brinkman"],
      ["William Lopez", "Headache", "Joshua Green"],
      ["Linda Wilson", "Cold", "Mickey Duval"],
      ["Thomas Anderson", "Flu", "Jon Nelson"],
      ["Barbara Taylor", "Back Pain", "Tyrone Smart"],
      ["Daniel Thomas", "Anxiety", "Bobbi Estrada"],
      ["Jessica Hernandez", "Headache", "Tasha Phillips"],
      ["Matthew Moore", "Flu", "Douglas Brooks"],
      ["Patricia Jackson", "Cold", "Angelica Noe"],
      ["Robert Martin", "Back Pain", "Mary Walker"],
      ["Cynthia Lee", "Anxiety", "Stephanie Cohen"],
      ["Joseph Gonzalez", "Cold", "Ralph Wilson"],
      ["Nancy Perez", "Flu", "Claude Walls"],
      ["George Harris", "Anxiety", "Mickey Duval"],
      ["Karen Clark", "Headache", "Joshua Green"],
      ["Timothy Lewis", "Back Pain", "Scott Hill"],
      ["Lisa Robinson", "Flu", "Flora Moore"],
      ["James Walker", "Cold", "Tyrone Smart"],
      ["Andrew Hall", "Anxiety", "Marie Brinkman"],
      ["Sylvia Young", "Flu", "Miriam Tregre"],
      ["Mark Hernandez", "Cold", "Ralph Wilson"],
      ["Tina Martinez", "Back Pain", "Tasha Phillips"],
      ["Edward King", "Headache", "Douglas Brooks"],
      ["Gina Carter", "Flu", "James Russo"],
      ["William Lopez", "Anxiety", "Hazel Patterson"],
      ["Christina Tucker", "Cold", "Stephanie Cohen"],
      ["Joshua Nelson", "Headache", "Monica Singleton"],
      ["Hannah Perry", "Back Pain", "Jon Nelson"],
      ["Jerry Reed", "Flu", "Claude Walls"],
      ["Laura Cook", "Cold", "Marie Brinkman"],
      ["Paul Bell", "Anxiety", "Tyrone Smart"],
      ["Sharon Ward", "Headache", "Irene Brooks"],
      ["Ryan Brooks", "Flu", "Flora Moore"],
      ["Nicole Flores", "Cold", "Mary Walker"],
      ["Alex Washington", "Anxiety", "Joshua Green"],
      ["Alice Scott", "Headache", "Scott Hill"],
      ["Donald Ford", "Back Pain", "Miriam Tregre"],
      ["Eva Grant", "Cold", "Joshua Green"],
      ["Gordon Hernandez", "Flu", "Tasha Phillips"],
      ["Pamela Gordon", "Anxiety", "Bobbi Estrada"],
      ["Keith Wright", "Flu", "Jon Nelson"],
      ["Felicia King", "Cold", "Douglas Brooks"],
      ["Donald Waterfield", "Back Pain", "James Russo"],
      ["Jane Doe", "Cold", "James Russo"],
      ["Emily Johnson", "Headache", "James Russo"],
    ],
  },
};

const question_34: Question = {
  id: 34,
  question:
    "Display the first name, last name and number of duplicate patients based on their first name and last name.",
  query: `SELECT
  first_name,
  last_name,
  COUNT(*) AS num_of_duplicates
FROM patients
GROUP BY
  first_name,
  last_name
HAVING num_of_duplicates > 1`,
  level: Level.Medium,
  keywords: [SqlKeyword.Count, SqlKeyword.GroupBy, SqlKeyword.Having],
  expectedResult: {
    columns: ["first_name", "last_name", "num_of_duplicates"],
    values: [["William", "Lopez", 2]],
  },
};

const question_35: Question = {
  id: 35,
  question:
    "Display patient's full name, height in the units feet rounded to 1 decimal, weight in the unit pounds rounded to 0 decimals, birth_date, gender non abbreviated.\nConvert CM to feet by dividing by 30.48.\nConvert KG to pounds by multiplying by 2.205.",
  query: `SELECT
  CONCAT(first_name, ' ', last_name) AS patient_name, 
  ROUND(height / 30.48, 1) AS height, 
  ROUND(weight * 2.205, 0) AS weight,
  birth_date,
  CASE
    WHEN gender = 'M' THEN 'MALE' 
    ELSE 'FEMALE' 
  END AS gender_type
FROM patients`,
  level: Level.Medium,
  keywords: [SqlKeyword.Case],
  expectedResult: {
    columns: ["patient_name", "height", "weight", "birth_date", "gender_type"],
    values: [
      ["Donald Waterfield", 2.1, 344, "1963-02-12", "MALE"],
      ["Jane Doe", 2.1, 320, "1985-07-21", "FEMALE"],
      ["John Smith", 2.3, 397, "1990-11-03", "MALE"],
      ["Emily Johnson", 2, 331, "1975-03-15", "FEMALE"],
      ["Michael Brown", 2.4, 441, "1982-05-10", "MALE"],
      ["Sarah Davis", 2, 287, "1988-09-30", "FEMALE"],
      ["David Garcia", 2.2, 419, "1972-12-22", "MALE"],
      ["Jessica Martinez", 1.9, 265, "1995-01-15", "FEMALE"],
      ["William Lopez", 2.3, 386, "1983-04-05", "MALE"],
      ["Linda Wilson", 2.1, 298, "1979-06-27", "FEMALE"],
      ["Thomas Anderson", 2.4, 463, "1965-08-18", "MALE"],
      ["Barbara Taylor", 2, 309, "1991-02-14", "FEMALE"],
      ["Daniel Thomas", 2.2, 353, "1986-11-01", "MALE"],
      ["Jessica Hernandez", 2, 320, "1979-07-22", "FEMALE"],
      ["Matthew Moore", 2.3, 408, "1984-03-12", "MALE"],
      ["Patricia Jackson", 1.9, 276, "1990-10-30", "FEMALE"],
      ["Robert Martin", 2.3, 386, "1981-05-06", "MALE"],
      ["Cynthia Lee", 2.1, 298, "1983-08-21", "FEMALE"],
      ["Joseph Gonzalez", 2.5, 485, "1955-01-15", "MALE"],
      ["Nancy Perez", 2.1, 331, "1992-04-28", "FEMALE"],
      ["George Harris", 2.3, 419, "1976-02-05", "MALE"],
      ["Karen Clark", 2, 309, "1985-06-19", "FEMALE"],
      ["Timothy Lewis", 2.2, 364, "1982-11-09", "MALE"],
      ["Lisa Robinson", 1.8, 265, "1995-12-16", "FEMALE"],
      ["James Walker", 2.5, 463, "1968-09-03", "MALE"],
      ["Andrew Hall", 2.3, 419, "1981-05-17", "MALE"],
      ["Sylvia Young", 1.9, 287, "1990-10-30", "FEMALE"],
      ["Mark Hernandez", 2.2, 386, "1993-07-12", "MALE"],
      ["Tina Martinez", 2.1, 320, "1985-01-19", "FEMALE"],
      ["Edward King", 2.2, 364, "1976-03-23", "MALE"],
      ["Gina Carter", 1.9, 282, "1989-09-09", "FEMALE"],
      ["William Lopez", 2.3, 397, "1984-04-14", "MALE"],
      ["Christina Tucker", 1.8, 247, "1991-06-05", "FEMALE"],
      ["Joshua Nelson", 2.4, 419, "1962-12-01", "MALE"],
      ["Hannah Perry", 2, 304, "1992-11-12", "FEMALE"],
      ["Jerry Reed", 2.1, 375, "1990-08-20", "MALE"],
      ["Laura Cook", 2, 271, "1978-09-14", "FEMALE"],
      ["Paul Bell", 2.4, 463, "1960-04-28", "MALE"],
      ["Sharon Ward", 1.9, 291, "1985-08-02", "FEMALE"],
      ["Ryan Brooks", 2.3, 397, "1975-03-17", "MALE"],
      ["Nicole Flores", 2, 311, "1986-06-08", "FEMALE"],
      ["Alex Washington", 2.2, 342, "1983-10-05", "MALE"],
      ["Alice Scott", 2.1, 298, "1989-11-25", "FEMALE"],
      ["Donald Ford", 2.4, 463, "1969-01-19", "MALE"],
      ["Eva Grant", 1.9, 276, "1995-12-22", "FEMALE"],
      ["Gordon Hernandez", 2.3, 364, "1982-09-08", "MALE"],
      ["Pamela Gordon", 2.1, 313, "1986-10-10", "FEMALE"],
      ["Keith Wright", 2.4, 397, "1951-02-13", "MALE"],
      ["Felicia King", 1.9, 282, "1991-08-17", "FEMALE"],
      ["Gregory Roberts", 2.5, 419, "1968-05-06", "MALE"],
    ],
  },
};

const question_36: Question = {
  id: 36,
  question:
    "Show patient_id, first_name, last_name from patients whose does not have any records in the admissions table.",
  query: `SELECT
  patient_id,
  first_name,
  last_name
FROM patients
WHERE patient_id NOT IN (
  SELECT DISTINCT patient_id
  FROM admissions
)`,
  level: Level.Medium,
  keywords: [SqlKeyword.In],
  expectedResult: {
    columns: ["patient_id", "first_name", "last_name"],
    values: [[50, "Gregory", "Roberts"]],
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
  question_15,
  question_16,
  question_17,
  question_18,
  question_19,
  question_20,
  question_21,
  question_22,
  question_23,
  question_24,
  question_25,
  question_26,
  question_27,
  question_28,
  question_29,
  question_30,
  question_31,
  question_32,
  question_33,
  question_34,
  question_35,
  question_36,
];
