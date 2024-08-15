export const validateTitle = (title: string) => {
  // Checking for invalid title
  return title.trim().length === 0;
};
