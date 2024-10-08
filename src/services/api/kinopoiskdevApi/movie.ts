import {kinopoiskdevClient} from "@/services/api/kinopoiskdevApi/kinopoiskdevClient.ts";
import {
  IGetMovieById,
  IGetMoviesByFilters, IGetMoviesBySearch,
  IGetMoviesValuesByField,
  MovieResponse,
  MoviesResponse
} from "@/services/api/kinopoiskdevApi/types";
import {PossibleValueByField} from "@/types";


export async function getMovieById({id}: IGetMovieById) {
  try {
    const response = await kinopoiskdevClient.get<MovieResponse>(
      `/v1.4/movie/${id}`,
      {
      }
    )
    return response.data;
  } catch (err) {
    return Promise.reject(err)
  }
}


export async function getMoviesByFilters(requestParams: IGetMoviesByFilters) {
  try {
    const params = { page: 1, limit: 10 }
    const response = await kinopoiskdevClient.get<MoviesResponse>(
      "/v1.4/movie",
      {
        params: { ...params, ...requestParams },
        paramsSerializer: { indexes: null }
      }
    )
    return response.data;
  } catch (err) {
    return Promise.reject(err)
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
  } catch (err) {
    return Promise.reject(err)
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
  } catch (err) {
    return Promise.reject(err)
  }
}


