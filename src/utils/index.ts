export const qs = <T>(obj: T): string => {
  return Object.entries(obj)
    .map((item) => item.join("="))
    .join("&");
};