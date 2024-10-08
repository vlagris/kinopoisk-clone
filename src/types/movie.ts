
export type TypesMovies = "movie" | "tv-series" | "cartoon" | "anime" | "animated-series" | "tv-show";
export type MovieTypeNumber = 1 | 2 | 3 | 4 | 5 | 6;
export type MovieStatus = "announced" | "completed" | "filming" | "post-production" | "pre-production";


type MovieName = {
  name: string,
  language?: string | null,
  type?: string | null
}

export type MovieFactType = {
  value: string,
  type: string,
  spoiler: boolean
}

export type MovieRatingType = {
  kp: number | null,
  imdb: number | null,
  tmdb?: number | null,
  filmCritics: number | null,
  russianFilmCritics: number | null,
  await: number | null
}

export type MovieVotesType = MovieRatingType

export type MoviePosterType = {
  url: string | null,
  previewUrl: string | null
}

type MovieTrailer = {
  url: string | null,
  name: string | null,
  site: string | null,
  size?: number,
  type: string | null
}

export type MoviePersonType = {
  id: number | null,
  photo: string | null,
  name: string | null,
  enName: string | null,
  description: string | null,
  profession: string,
  enProfession: string
}


type MovieSeasonsInfoType = {
  number: number | null;
  episodesCount: number | null;
}


export type MovieMoneyType = {
  value: number | null,
  currency: string | null
}

export type MoviePremiereType = {
  country?: string | null,
  world: string | null,
  russia: string | null,
  digital: string | null,
  cinema: string | null,
  bluray: string | null,
  dvd: string | null
}


export type SimilarMovieType = Pick<MovieType,
  "id" |
  "name" |
  "enName" |
  "alternativeName" |
  "type" | "poster" |
  "rating" |
  "year"
>


type Item = {
  name: string | null,
  logo: { url: string | null },
  url: string
}

type MovieRelease = {
  start: number | null,
  end: number | null
}

type MovieAudience = {
  count: number,
  country: string
}

type MovieNetworksItem = {
  name: string,
  logo: { url: string | null }
}

type MovieNetworks = {
  items: MovieNetworksItem[]
}


type MovieImagesInfo = {
  postersCount?: number,
  backdropsCount?: number,
  framesCount: number,
}

export type MovieListType = string



export type MovieType = {
  id: number,
  externalId?: {
    kpHD?: string | null,
    imdb?: string | null,
    tmdb?: number | null
  },
  name: string | null,
  alternativeName: string | null,
  enName: string | null,
  names?: MovieName[],
  type: TypesMovies,
  typeNumber: MovieTypeNumber,
  year: number | null,
  description: string | null,
  shortDescription: string | null,
  slogan: string | null,
  status: MovieStatus | null,
  facts?: MovieFactType[],
  rating: MovieRatingType,
  votes: MovieVotesType,
  movieLength: number | null,
  ratingMpaa: string | null,
  ageRating: number | null,
  logo?: {
    url: string | null
  },
  poster: MoviePosterType,
  backdrop: MoviePosterType,
  videos?: {
    trailers?: MovieTrailer[],
    teasers?: MovieTrailer[]
  },
  genres?: { name: string }[],
  countries?: { name: string }[],
  persons?: MoviePersonType[],
  reviewInfo?: {
    count: number | null,
    positiveCount: number | null,
    percentage: string | null
  },
  seasonsInfo?: MovieSeasonsInfoType[] | [],
  budget?: MovieMoneyType,
  fees?: {
    world?: MovieMoneyType,
    russia?: MovieMoneyType,
    usa?: MovieMoneyType
  },
  premiere: MoviePremiereType,
  similarMovies?: SimilarMovieType[],
  sequelsAndPrequels?: SimilarMovieType[],
  watchability?: {
    items: Item[]
  },
  releaseYears?: MovieRelease[],
  top10: number | null,
  top250: number | null,
  ticketsOnSale: boolean | null,
  totalSeriesLength: number | null,
  seriesLength: number | null,
  isSeries: boolean,
  audience?: MovieAudience[] | null,
  lists: MovieListType[] | null,
  networks?: MovieNetworks | null,
  imagesInfo?: MovieImagesInfo,
  updatedAt: string,
  createdAt: string
}


export type Movies = {
  docs: MovieType[],
  total: number,
  limit: number,
  page: number,
  pages: number
}



export type PossibleValueByField = {
  name: string,
  slug: string
}