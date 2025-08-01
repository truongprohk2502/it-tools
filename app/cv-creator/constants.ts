import UnitedKingdomFlagIcon from "./_icons/uk-flag-icon";
import VietnamFlagIcon from "./_icons/vn-flag-icon";
import type { CvInformation } from "./types";

export const ARRAY_KEY_REGEX = /^\w+\[\d+\]\.\w+$/;

export const CV_WRAPPER_ID = "cv-wrapper";

export enum Language {
  EN = "en",
  VI = "vi",
}

export enum Color {
  BLUE = "#548ca8",
  GREEN = "#00b14f",
  RED = "#e97878",
  ORANGE = "#f58634",
}

export enum Font {
  Roboto = "Roboto",
  Maitree = "Maitree",
  OpenSans = "Open Sans",
  Prompt = "Prompt",
}

export enum Size {
  Small = "sm",
  Medium = "md",
  Large = "lg",
}

export const LANGUAGES = [
  { lang: Language.EN, icon: UnitedKingdomFlagIcon },
  {
    lang: Language.VI,
    icon: VietnamFlagIcon,
  },
];

export const COLORS = [Color.BLUE, Color.GREEN, Color.RED, Color.ORANGE];

export const FONTS = [Font.Roboto, Font.Maitree, Font.OpenSans, Font.Prompt];

export const FONT_SIZES = [
  { size: Size.Small, value: "12px" },
  { size: Size.Medium, value: "16px" },
  { size: Size.Large, value: "20px" },
];

export const LINE_HEIGHTS = [
  { size: Size.Small, value: "16px" },
  { size: Size.Medium, value: "24px" },
  { size: Size.Large, value: "32px" },
];

export const I18N = {
  [Language.EN]: {
    fullName: "Full name",
    position: "Position",
    birthDate: "Birthdate",
    gender: "Gender",
    genderPlaceholder: "Male/Female",
    phone: "Phone",
    email: "Email",
    address: "Address",
    addressPlaceholder: "District A, City B",
    website: "Website",
    jobGoal: "Career objective",
    jobGoalPlaceholder: "Write your career objective",
    skills: "Skills",
    skillPlaceholder: "Enter skill",
    experiences: "Experiences",
    educations: "Educations",
    company: "Company name",
    school: "School name",
    degree: "Degree",
    rewards: "Rewards",
    certificates: "Certificates",
    start: "Start",
    end: "End",
    time: "Time",
    jobDescription: "Describe your work experience",
    educationDescription: "Describe your education",
    rewardPlaceholder: "Enter reward",
    certificatePlaceholder: "Enter certificate",
  },
  [Language.VI]: {
    fullName: "Họ và tên",
    position: "Vị trí",
    birthDate: "Ngày sinh",
    gender: "Giới tính",
    genderPlaceholder: "Nam/Nữ",
    phone: "Số điện thoại",
    email: "Email",
    address: "Địa chỉ",
    addressPlaceholder: "Quận A, Thành phố B",
    website: "Trang cá nhân",
    jobGoal: "Mục tiêu nghề nghiệp",
    jobGoalPlaceholder: "Viết mục tiêu nghề nghiệp",
    skills: "Kỹ năng",
    skillPlaceholder: "Nhập kỹ năng",
    experiences: "Kinh nghiệm làm việc",
    educations: "Học vấn",
    company: "Tên công ty",
    school: "Tên trường học",
    degree: "Bằng cấp",
    rewards: "Giải thưởng",
    certificates: "Chứng chỉ",
    start: "Bắt đầu",
    end: "Kết thúc",
    time: "Thời gian",
    jobDescription: "Mô tả kinh nghiệm làm việc của bạn",
    educationDescription: "Mô tả quá trình học tập của bạn",
    rewardPlaceholder: "Nhập giải thưởng",
    certificatePlaceholder: "Nhập chứng chỉ",
  },
};

export const DEFAULT_CV_INFORMATION: CvInformation = {
  fullName: "",
  position: "",
  photo: "",
  birthDate: "",
  gender: "",
  phone: "",
  email: "",
  address: "",
  website: "",
  jobGoal: "",
  skills: [{ id: 0, value: "", level: 0, order: 0 }],
  experiences: [
    {
      id: 0,
      company: "",
      position: "",
      startDate: "",
      endDate: "",
      description: "",
      order: 0,
    },
  ],
  educations: [
    {
      id: 0,
      school: "",
      degree: "",
      startDate: "",
      endDate: "",
      description: "",
      order: 0,
    },
  ],
  rewards: [
    {
      id: 0,
      value: "",
      year: "",
      order: 0,
    },
  ],
  certificates: [
    {
      id: 0,
      value: "",
      year: "",
      order: 0,
    },
  ],
};
