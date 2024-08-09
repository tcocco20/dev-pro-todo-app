export const getDisplayLevel = (level: number) => {
  const endStr = " (" + level + "/10)";
  if (level > 7) {
    return "High" + endStr;
  }
  if (level > 4) {
    return "Moderate" + endStr;
  }
  return "Low" + endStr;
};
