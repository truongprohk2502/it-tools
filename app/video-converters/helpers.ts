export const getFileExtension = (file: File | null | undefined) => {
  if (!file) return null;
  const extension = file.name.split(".").pop();
  return extension;
};
