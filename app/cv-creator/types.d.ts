export interface Skill {
  id: number;
  value: string;
  level: number;
  order: number;
}

export interface Experience {
  id: number;
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  description: string;
  order: number;
}

export interface Education {
  id: number;
  school: string;
  degree: string;
  startDate: string;
  endDate: string;
  description: string;
  order: number;
}

export interface SingleItem {
  id: number;
  value: string;
  year: string;
  order: number;
}

export interface CvInformation {
  fullName: string;
  position: string;
  photo: string;
  birthDate: string;
  gender: string;
  phone: string;
  email: string;
  address: string;
  website: string;
  jobGoal: string;
  skills: Skill[];
  experiences: Experience[];
  educations: Education[];
  rewards: SingleItem[];
  certificates: SingleItem[];
}
