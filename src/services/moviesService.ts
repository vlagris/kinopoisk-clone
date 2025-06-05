import {kinopoiskdevClient} from "@/services/kinopoiskdevClient.ts";
import {
  IGetMoviesByFilters,
  IGetMoviesBySearch,
  IGetMoviesValuesByField,
  MovieResponse,
  MoviesResponse,
  PossibleValueByField
} from "@/types";

export async function getMovieById(id: number | string) {
  try {
    const response = await kinopoiskdevClient.get<MovieResponse>(`/v1.4/movie/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function getMoviesByFilters(requestParams: IGetMoviesByFilters) {
  try {
    const defaultParams = { page: 1, limit: 10 }
    const response = await kinopoiskdevClient.get<MoviesResponse>(
      "/v1.4/movie",
      {
        params: { ...defaultParams, ...requestParams },
        paramsSerializer: { indexes: null }
      }
    )
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function getMoviesValuesByField(requestParams: IGetMoviesValuesByField) {
  try {
    const response = await kinopoiskdevClient.get<PossibleValueByField[]>(
      "/v1/movie/possible-values-by-field",
      {
        params: requestParams,
        paramsSerializer: { indexes: null }
      }
    )
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function getMoviesBySearch(requestParams: IGetMoviesBySearch) {
  try {
    const response = await kinopoiskdevClient.get<MoviesResponse>(
      "/v1.4/movie/search",
      {
        params: requestParams,
      }
    )
    return response.data;
  } catch (error) {
    throw error;
  }
}


