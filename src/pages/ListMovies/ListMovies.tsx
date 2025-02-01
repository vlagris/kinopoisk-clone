import React, {useLayoutEffect} from "react";
import {BrowserView, MobileView} from "react-device-detect";
import {useParams, useSearchParams} from "react-router-dom";
import {useQuery, useMutation, UseQueryResult, UseMutationResult} from '@tanstack/react-query'
import {ListType, Movies, MovieType, PossibleValueByField} from "@/types";
import {kinopoiskdevApi} from "@/services/api/kinopoiskdevApi";
import {MovieSortField, SortType} from "@/services/api/kinopoiskdevApi/types";

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


const getMovieType = (values: string[]) => {
  const result = values.find(item => item === "films" || item === "series");
  if (result === "films") {
    return "movie"
  }
  if (result === "series") {
    return "tv-series"
  }
}


const sortFieldMap: {[key: string]: MovieSortField} = {
  votes: "votes.kp",
  rating: "rating.kp",
  date: "year",
  title: "name",
}

export interface ListMoviesViewProps {
  listInfo: UseMutationResult<ListType, Error, string>,
  movies: UseQueryResult<Movies>,
  countriesSelect: UseQueryResult<PossibleValueByField[]>,
  genresSelect: UseQueryResult<PossibleValueByField[]>,
}

function ListMovies() {
  const { listSlug } = useParams();
  const [searchParams] = useSearchParams();
  const page = searchParams.get('page');
  const country = searchParams.get('country');
  const genre = searchParams.get('genre');
  const sort = searchParams.get('sort') || "";
  const isRussian = searchParams.has('b', "russian");
  const isForeign = searchParams.has('b', "foreign");
  const isTop = listSlug?.includes("top");


  const listInfo = useMutation({
    mutationKey: ["listInfo", listSlug],
    mutationFn: kinopoiskdevApi.getListBySlug,
  });
  const countriesSelect = useQuery({
    queryKey: ["countriesField"],
    queryFn: () => kinopoiskdevApi.getMoviesValuesByField({field: "countries.name"}),
});
  const genresSelect = useQuery({
    queryKey: ["genresField"],
    queryFn: () => kinopoiskdevApi.getMoviesValuesByField({field: "genres.name"}),
  });


  const countryName = countriesSelect?.data?.find(({slug}) => slug === country)?.name;
  const genreName = genresSelect?.data?.find(({slug}) => slug === genre)?.name;


  let limit = 50;
  const sortField: MovieSortField[] = [];
  const sortType: SortType[] = [];
  const type = getMovieType(searchParams.getAll("b"));
  const countries = [countryName, isRussian && "Россия", isForeign && "!Россия"].filter(Boolean) as string[];


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
      lists: listSlug,
      sortField: sortField,
      sortType: sortType,
      type: type,
      "countries.name": countries.length ? countries : undefined,
      "genres.name": genreName,
    }),
    select: (data) => {
      if (isTop) {
        data.docs.sort(sortMoviesByTop);
      }
      return data;
    },
    enabled: !!countriesSelect.data || !!genresSelect.data,
  });


  useLayoutEffect(() => {
    if (listSlug) {
      listInfo.mutate(listSlug)
    }
  }, [listSlug]);


  return (
    <React.Suspense fallback={<div style={{height: "100vh"}}/>}>
      <BrowserView>
        <ListMoviesDesktopLazy
          movies={movies}
          countriesSelect={countriesSelect}
          genresSelect={genresSelect}
          listInfo={listInfo}
        />
      </BrowserView>
      <MobileView>
        <ListMoviesMobileLazy
          movies={movies}
          countriesSelect={countriesSelect}
          genresSelect={genresSelect}
          listInfo={listInfo}
        />
      </MobileView>
    </React.Suspense>
  );
}

export default ListMovies;