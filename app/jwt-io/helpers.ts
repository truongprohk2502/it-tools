import base64 from "base-64";

export const formatBase64String = (value: string) =>
  value.replace(/=+$/, "").replace(/\+/g, "-").replace(/\//g, "_");

export const getDecodeObjectString = (token: string) => {
  if (!token.trim()) return "";
  try {
    const parsedJwt = base64.decode(token);
    if (!parsedJwt) return "";
    const parsedObj = JSON.parse(parsedJwt);
    return JSON.stringify(parsedObj, null, 4);
  } catch {
    return "";
  }
};

export const getHeaderToken = (jwt: string) => {
  if (!jwt.trim()) return "";
  return jwt.split(".")[0];
};

export const getPayloadToken = (jwt: string) => {
  if (!jwt.trim()) return "";
  return jwt.split(".")[1] || "";
};

export const getSignatureToken = (jwt: string) => {
  if (!jwt.trim()) return "";
  const firstDotIndex = jwt.indexOf(".");
  if (firstDotIndex < 0) return "";
  const secondDotIndex = jwt.indexOf(".", firstDotIndex + 1);
  if (secondDotIndex < 0) return "";
  return jwt.slice(secondDotIndex + 1);
};

export const checkIsInvalidJson = (value: string) => {
  try {
    JSON.parse(value);
    return false;
  } catch {
    return true;
  }
};
