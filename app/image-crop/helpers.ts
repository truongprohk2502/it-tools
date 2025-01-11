import { StorageKeys } from "@/constants/storage";
import uniq from "lodash/uniq";

export const getAspectsFromStorage = () => {
  try {
    const aspectsString = localStorage.getItem(StorageKeys.CropImageAspects);

    if (!aspectsString) return [];

    const aspects = JSON.parse(aspectsString);

    if (!Array.isArray(aspects)) return [];

    const validAspects: string[] = aspects.filter(
      (item) => typeof item === "string" && /^\d+:\d+$/.test(item),
    );

    return uniq(validAspects);
  } catch {
    return [];
  }
};

export const setAspectsToStorage = (data: string[]) => {
  localStorage.setItem(StorageKeys.CropImageAspects, JSON.stringify(data));
};
