import {MovieType, Movies, MovieStatus} from "@/types";
import {SortType} from "@/services/api/kinopoiskdevApi/types/common.ts";


export type MovieTypeField = "movie" | "tv-series" | "cartoon" | "animated-series" | "anime";


export type MovieResponse = MovieType;
export type MoviesResponse = Movies;


type MovieSelectFields = "id" |
  "externalId" |
  "name" |
  "enName" |
  "alternativeName" |
  "names" |
  "description" |
  "shortDescription" |
  "slogan" |
  "type" |
  "typeNumber" |
  "isSeries" |
  "status" |
  "year" |
  "releaseYears" |
  "rating" |
  "ratingMpaa" |
  "ageRating" |
  "votes" |
  "seasonsInfo" |
  "budget" |
  "audience" |
  "movieLength" |
  "seriesLength" |
  "totalSeriesLength" |
  "genres" |
  "countries" |
  "poster" |
  "backdrop" |
  "logo" |
  "ticketsOnSale" |
  "videos" |
  "networks" |
  "persons" |
  "facts" |
  "fees" |
  "premiere" |
  "similarMovies" |
  "sequelsAndPrequels" |
  "watchability" |
  "lists" |
  "top10" |
  "top250" |
  "updatedAt" |
  "createdAt";

type MovieNotNullFields = "id" |
  "externalId.imdb" |
  "externalId.tmdb" |
  "externalId.kpHD" |
  "name" |
  "enName" |
  "alternativeName" |
  "names.name" |
  "description" |
  "shortDescription" |
  "slogan" |
  "type" |
  "typeNumber" |
  "isSeries" |
  "status" |
  "year" |
  "releaseYears.start" |
  "releaseYears.end" |
  "rating.kp" |
  "rating.imdb" |
  "rating.tmdb" |
  "rating.filmCritics" |
  "rating.russianFilmCritics" |
  "rating.await" |
  "ratingMpaa" |
  "ageRating" |
  "votes.kp" |
  "votes.imdb" |
  "votes.tmdb" |
  "votes.filmCritics" |
  "votes.russianFilmCritics" |
  "votes.await" |
  "budget.value" |
  "budget.currency" |
  "audience.count" |
  "audience.country" |
  "movieLength" |
  "seriesLength" |
  "totalSeriesLength" |
  "genres.name" |
  "countries.name" |
  "poster.url" |
  "backdrop.url" |
  "logo.url" |
  "ticketsOnSale" |
  "videos.trailers.url" |
  "videos.trailers.site" |
  "videos.trailers.name" |
  "networks.items.name" |
  "networks.items.logo.url" |
  "persons.id" |
  "persons.name" |
  "persons.enName" |
  "persons.photo" |
  "persons.description" |
  "persons.profession" |
  "persons.enProfession" |
  "facts.type" |
  "facts.value" |
  "facts.spoiler" |
  "fees.world.value" |
  "fees.usa.value" |
  "fees.russia.value" |
  "premiere.world" |
  "premiere.usa" |
  "premiere.russia" |
  "premiere.digital" |
  "premiere.dvd" |
  "premiere.bluRay" |
  "premiere.cinema" |
  "premiere.country" |
  "similarMovies.id" |
  "similarMovies.name" |
  "similarMovies.enName" |
  "similarMovies.alternativeName" |
  "similarMovies.poster.url" |
  "similarMovies.rating.kp" |
  "similarMovies.rating.imdb" |
  "similarMovies.rating.tmdb" |
  "similarMovies.year" |
  "sequelsAndPrequels.id" |
  "sequelsAndPrequels.name" |
  "sequelsAndPrequels.enName" |
  "sequelsAndPrequels.alternativeName" |
  "sequelsAndPrequels.poster.url" |
  "sequelsAndPrequels.rating.kp" |
  "sequelsAndPrequels.rating.imdb" |
  "sequelsAndPrequels.rating.tmdb" |
  "sequelsAndPrequels.year" |
  "watchability.items.name" |
  "watchability.items.url" |
  "watchability.items.logo.url" |
  "lists" |
  "top10" |
  "top250" |
  "updatedAt" |
  "createdAt";

export type MovieSortField = "id" |
  "externalId.imdb" |
  "externalId.tmdb" |
  "externalId.kpHD" |
  "name" |
  "enName" |
  "alternativeName" |
  "names.name" |
  "description" |
  "shortDescription" |
  "slogan" |
  "type" |
  "typeNumber" |
  "isSeries" |
  "status" |
  "year" |
  "releaseYears.start" |
  "releaseYears.end" |
  "rating.kp" |
  "rating.imdb" |
  "rating.tmdb" |
  "rating.filmCritics" |
  "rating.russianFilmCritics" |
  "rating.await" |
  "ratingMpaa" |
  "ageRating" |
  "votes.kp" |
  "votes.imdb" |
  "votes.tmdb" |
  "votes.filmCritics" |
  "votes.russianFilmCritics" |
  "votes.await" |
  "budget.value" |
  "budget.currency" |
  "audience.count" |
  "audience.country" |
  "movieLength" |
  "seriesLength" |
  "totalSeriesLength" |
  "genres.name" |
  "countries.name" |
  "poster.url" |
  "backdrop.url" |
  "logo.url" |
  "ticketsOnSale" |
  "videos.trailers.url" |
  "videos.trailers.site" |
  "videos.trailers.name" |
  "networks.items.name" |
  "networks.items.logo.url" |
  "persons.id" |
  "persons.name" |
  "persons.enName" |
  "persons.photo" |
  "persons.description" |
  "persons.profession" |
  "persons.enProfession" |
  "facts.type" |
  "facts.value" |
  "facts.spoiler" |
  "fees.world.value" |
  "fees.usa.value" |
  "fees.russia.value" |
  "premiere.world" |
  "premiere.usa" |
  "premiere.russia" |
  "premiere.digital" |
  "premiere.dvd" |
  "premiere.bluRay" |
  "premiere.cinema" |
  "premiere.country" |
  "similarMovies.id" |
  "similarMovies.name" |
  "similarMovies.enName" |
  "similarMovies.alternativeName" |
  "similarMovies.poster.url" |
  "similarMovies.rating.kp" |
  "similarMovies.rating.imdb" |
  "similarMovies.rating.tmdb" |
  "similarMovies.year" |
  "sequelsAndPrequels.id" |
  "sequelsAndPrequels.name" |
  "sequelsAndPrequels.enName" |
  "sequelsAndPrequels.alternativeName" |
  "sequelsAndPrequels.poster.url" |
  "sequelsAndPrequels.rating.kp" |
  "sequelsAndPrequels.rating.imdb" |
  "sequelsAndPrequels.rating.tmdb" |
  "sequelsAndPrequels.year" |
  "watchability.items.name" |
  "watchability.items.url" |
  "watchability.items.logo.url" |
  "lists" |
  "top10" |
  "top250" |
  "updatedAt" |
  "createdAt";



export interface IGetMoviesByFilters {
  page?: number | string,
  limit?: number | string,
  selectFields?: MovieSelectFields | MovieSelectFields[],
  notNullFields?: MovieNotNullFields | MovieNotNullFields[],
  sortField?: MovieSortField | MovieSortField[],
  sortType?: SortType | SortType[],
  id?: string | string[],
  "externalId.imdb"?: string | string[],
  "externalId.tmdb"?: number | number[],
  "externalId.kpHD"?: string | string[],
  type?: MovieTypeField | MovieTypeField[],
  typeNumber?: number | number[],
  isSeries?: boolean | boolean[],
  status?: MovieStatus | MovieStatus[],
  year?: string | string[],
  "releaseYears.start"?: string | string[],
  "releaseYears.end"?: string | string[],
  "rating.kp"?: string | string[],
  "rating.imdb"?: string | string[],
  "rating.tmdb"?: string | string[],
  "ratingMpaa"?: string | string[],
  "ageRating"?: string | string[],
  "votes.kp"?: string | string[],
  "votes.imdb"?: string | string[],
  "votes.tmdb"?: string | string[],
  "votes.filmCritics"?: string | string[],
  "votes.russianFilmCritics"?: string | string[],
  "votes.await"?: string | string[],
  "budget.value"?: string | string[],
  "audience.count"?: string | string[],
  "movieLength"?: string | string[],
  "seriesLength"?: string | string[],
  "totalSeriesLength"?: string | string[],
  "genres.name"?: string | string[],
  "countries.name"?: string | string[],
  "ticketsOnSale"?: string | string[],
  "networks.items.name"?: string | string[],
  "persons.id"?: string | string[],
  "persons.profession"?: string | string[],
  "persons.enProfession"?: string | string[],
  "fees.world"?: string | string[],
  "fees.usa"?: string | string[],
  "fees.russia"?: string | string[],
  "premiere.world"?: string | string[],
  "premiere.usa"?: string | string[],
  "premiere.russia"?: string | string[],
  "premiere.digital"?: string | string[],
  "premiere.cinema"?: string | string[],
  "premiere.country"?: string | string[],
  "similarMovies.id"?: string | string[],
  "sequelsAndPrequels.id"?: string | string[],
  "watchability.items.name"?: string | string[],
  "lists"?: string | string[],
  "updatedAt"?: string | string[],
  "createdAt"?: string | string[],
}

export interface IGetMoviesValuesByField {
  field: "genres.name" | "countries.name" | "type" | "typeNumber" | "status"
}

export interface IGetMoviesBySearch {
  page?: number | string,
  limit?: number | string,
  query: string
}