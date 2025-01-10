import uniq from "lodash/uniq";

export const getOptionsFromListText = (listText: string) => {
  const options = uniq(
    listText
      .trim()
      .split("\n")
      .filter((item) => item.trim()),
  );

  return { options, totalOptions: options.length };
};
