import {ListCategory} from "@/types";

export const PATH_ROUTE = {
  HOME: "/",
  LISTS_CATEGORIES: "/lists/categories/movies/:categoryIndex/",
  LISTS_MOVIES: "/lists/movies/:listSlug?/",
  MOVIE: "/film/:filmSlug/",
  SEARCH: "/s/",
}

export const PATH_LINK = {
  HOME: "/",
  LISTS_CATEGORIES_MOVIES: "/lists/categories/movies/1/",
  LISTS_CATEGORIES_ONLINE_CINEMA: "/lists/categories/movies/2/",
  LISTS_CATEGORIES_SERIALS: "/lists/categories/movies/3/",
  LISTS_CATEGORIES_FEES: "/lists/categories/movies/4/",
  LISTS_CATEGORIES_AWARDS: "/lists/categories/movies/5/",
  LISTS_MOVIES: (listSlug: string | number = "") => `/lists/movies/${listSlug}`,
  MOVIE: (filmSlug: string | number) => `/film/${filmSlug}/`,
  SEARCH: "/s/",
}

export const LIST_CATEGORY_MAP: { [p: string]: ListCategory } = {
  "1": "Фильмы",
  "2": "Онлайн-кинотеатр",
  "3": "Сериалы",
  "4": "Сборы",
  "5": "Премии"
}