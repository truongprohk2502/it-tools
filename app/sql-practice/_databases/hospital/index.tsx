import { createAdmissionsTable } from "./admissions.table";
import { createDoctorsTable } from "./doctors.table";
import { createPatientsTable } from "./patients.table";
import { createProvinceNamesTable } from "./province_names.table";

export const initHospitalDatabaseFunctions = [
  createAdmissionsTable,
  createDoctorsTable,
  createPatientsTable,
  createProvinceNamesTable,
];
