import React from "react";
import {BrowserView, MobileView} from "react-device-detect";
import {useParams, useSearchParams} from "react-router-dom";
import {useQuery, UseQueryResult} from "react-query";
import {ListType, Movies, MovieType, PossibleValueByField} from "@/types";
import {kinopoiskdevApi} from "@/services/api/kinopoiskdevApi";
import {MovieSortField, MovieTypeField, SortType} from "@/services/api/kinopoiskdevApi/types";

const ListMoviesDesktopLazy = React.lazy(() => import("./ListMoviesDesktop.tsx"))
const ListMoviesMobileLazy = React.lazy(() => import("./ListMoviesMobile.tsx"))


function sortMoviesByTop(item1: MovieType, item2: MovieType) {
  if (item1.top250 === item2.top250) {
    return 0;
  }
  if (item1.top250 === null) {
    return 1;
  }
  if (item2.top250 === null) {
    return -1;
  }
  return item1.top250 - item2.top250;
}



const sortFieldMap: {[key: string]: MovieSortField} = {
  votes: "votes.kp",
  rating: "rating.kp",
  date: "year",
  title: "name",
}

export interface ListMoviesViewProps {
  listInfoResult:  UseQueryResult<ListType | undefined>,
  moviesResult: UseQueryResult<Movies>,
  countriesSelectResult: UseQueryResult<PossibleValueByField[]>,
  genresSelectResult: UseQueryResult<PossibleValueByField[]>,
}

function ListMovies() {
  const { listSlug } = useParams();
  const [searchParams] = useSearchParams();
  const page = searchParams.get('page');
  const country = searchParams.get('country');
  const genre = searchParams.get('genre');
  const sort = searchParams.get('sort') || "";
  const isMovie = searchParams.has('b', "films");
  const isSeries = searchParams.has('b', "series");
  const isRussian = searchParams.has('b', "russian");
  const isForeign = searchParams.has('b', "foreign");
  const isTop = listSlug?.includes("top");


  const listInfo = useQuery({
    queryKey: ["listInfo", listSlug],
    queryFn: () => {
      if (listSlug) {
        return kinopoiskdevApi.getListBySlug({slug: listSlug})
      }
    },
    enabled: !!listSlug,
  });
  const countriesSelect = useQuery(
    "countriesSelect",
    () => kinopoiskdevApi.getMoviesValuesByField({field: "countries.name"}),
  );
  const genresSelect = useQuery(
    "genresSelect",
    () => kinopoiskdevApi.getMoviesValuesByField({field: "genres.name"}),
  );


  const countryName = countriesSelect?.data?.find(({slug}) => slug === country)?.name;
  const genreName = genresSelect?.data?.find(({slug}) => slug === genre)?.name;


  let limit = 50;
  const sortField: MovieSortField[] = [];
  const sortType: SortType[] = [];
  const type = [isMovie && "movie", isSeries && "tv-series"].filter(Boolean) as MovieTypeField[];
  const countries = [countryName, isRussian && "Россия", isForeign && "!Россия"].filter(Boolean) as string[];
  const genres: string[] = [genreName].filter(Boolean) as string[];


  if (sort) {
    sortField.push(sortFieldMap[sort]);
    sortType.push("-1");
  }
  if (isTop) {
    sortField.push("rating.kp", "top250");
    sortType.push("-1", "-1");
  }


  const movies = useQuery({
    queryKey: ["movies", page, limit, listSlug, sortField, sortType, genreName, countries, type],
    queryFn: () => kinopoiskdevApi.getMoviesByFilters({
      limit: limit,
      page: Number(page) || undefined,
      lists: listSlug ? [listSlug] : undefined,
      sortField: sortField,
      sortType: sortType,
      type: type.length ? type : undefined,
      "countries.name": countries.length ? countries : undefined,
      "genres.name": genres.length ? countries : undefined,
    }),
    select: (data) => {
      if (isTop) {
        data.docs.sort(sortMoviesByTop);
      }
      return data;
    },
    enabled: !!countriesSelect.data || !!genresSelect.data,
  });


  return (
    <React.Suspense fallback={<div style={{height: "100vh"}}/>}>
      <BrowserView>
        <ListMoviesDesktopLazy
          moviesResult={movies}
          countriesSelectResult={countriesSelect}
          genresSelectResult={genresSelect}
          listInfoResult={listInfo}
        />
      </BrowserView>
      <MobileView>
        <ListMoviesMobileLazy
          moviesResult={movies}
          countriesSelectResult={countriesSelect}
          genresSelectResult={genresSelect}
          listInfoResult={listInfo}
        />
      </MobileView>
    </React.Suspense>
  );
}

export default ListMovies;