import { getDisplayDate } from "./getDisplayDate";
import { getDisplayTime } from "./getDisplayTime";
import { getTruncatedString } from "./getTruncatedString";
import { getUrgency } from "./getUrgency";
import { getDisplayLevel } from "./getDisplayLevel";
import { getProgress } from "./getProgress";
import getTags from "./getTags";
import { filterByTags } from "./filterByTags";
import { filterBySearchTerm } from "./filterBySearchTerm";
import { sortTodos } from "./sortTodos";
import { filterForPowerMode } from "./filterForPowerMode";
import { validateDate } from "./validateDate";
import { validateTitle } from "./validateTitle";

const utils = {
  getDisplayTime,
  getDisplayDate,
  getUrgency,
  getTruncatedString,
  getDisplayLevel,
  getProgress,
  getTags,
  filterByTags,
  filterBySearchTerm,
  sortTodos,
  filterForPowerMode,
  validateDate,
  validateTitle,
};
export default utils;
