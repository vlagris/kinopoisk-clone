import {
  getMovieById,
  getMoviesByFilters,
  getMoviesBySearch,
  getMoviesValuesByField
} from "@/services/api/kinopoiskdevApi/movie.ts";
import {getListBySlug, getLists} from "@/services/api/kinopoiskdevApi/list.ts";



export const kinopoiskdevApi = {
  getMovieById,
  getMoviesByFilters,
  getMoviesBySearch,
  getMoviesValuesByField,
  getLists,
  getListBySlug,
}