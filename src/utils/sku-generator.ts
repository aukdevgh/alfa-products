export const generateSKU = (title: string): string => {
  const timestamp = Date.now().toString(36);
  const sanitizedTitle = title.replace(/\s+/g, "-").toLowerCase();
  return `${sanitizedTitle}-${timestamp}`;
};
