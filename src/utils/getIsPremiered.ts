import {MoviePremiereType} from "@/types";

export function getIsPremiered(premiere?: MoviePremiereType) {
  if (!premiere) {
    return false;
  }
  const currentDate = new Date().getTime();
  return Object.values(premiere).some(item => {
    if (!item) {
      return;
    }
    const premiereDate = new Date(item).getTime();
    return premiereDate <= currentDate;
  });
}