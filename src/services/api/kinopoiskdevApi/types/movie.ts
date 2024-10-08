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



export interface IGetMovieById {
  id: number | string
}


export interface IGetMoviesByFilters {
  page?: number,
  limit?: number,
  selectFields?: MovieSelectFields[],
  notNullFields?: MovieNotNullFields[],
  sortField?: MovieSortField[],
  sortType?: SortType[],
  id?: string[],
  "externalId.imdb"?: string[],
  "externalId.tmdb"?: number[],
  "externalId.kpHD"?: string[],
  type?: MovieTypeField[],
  typeNumber?: number[],
  isSeries?: boolean[],
  status?: MovieStatus[],
  year?: string[],
  "releaseYears.start"?: string[],
  "releaseYears.end"?: string[],
  "rating.kp"?: string[],
  "rating.imdb"?: string[],
  "rating.tmdb"?: string[],
  "ratingMpaa"?: string[],
  "ageRating"?: string[],
  "votes.kp"?: string[],
  "votes.imdb"?: string[],
  "votes.tmdb"?: string[],
  "votes.filmCritics"?: string[],
  "votes.russianFilmCritics"?: string[],
  "votes.await"?: string[],
  "budget.value"?: string[],
  "audience.count"?: string[],
  "movieLength"?: string[],
  "seriesLength"?: string[],
  "totalSeriesLength"?: string[],
  "genres.name"?: string[],
  "countries.name"?: string[],
  "ticketsOnSale"?: string[],
  "networks.items.name"?: string[],
  "persons.id"?: string[],
  "persons.profession"?: string[],
  "persons.enProfession"?: string[],
  "fees.world"?: string[],
  "fees.usa"?: string[],
  "fees.russia"?: string[],
  "premiere.world"?: string[],
  "premiere.usa"?: string[],
  "premiere.russia"?: string[],
  "premiere.digital"?: string[],
  "premiere.cinema"?: string[],
  "premiere.country"?: string[],
  "similarMovies.id"?: string[],
  "sequelsAndPrequels.id"?: string[],
  "watchability.items.name"?: string[],
  "lists"?: string[],
  "updatedAt"?: string[],
  "createdAt"?: string[],
}

export interface IGetMoviesValuesByField {
  field: "genres.name" | "countries.name" | "type" | "typeNumber" | "status"
}

export interface IGetMoviesBySearch {
  page?: number,
  limit?: number,
  query: string
}