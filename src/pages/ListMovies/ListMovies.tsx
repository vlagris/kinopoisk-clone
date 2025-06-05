import React, {useLayoutEffect} from "react";
import {BrowserView, MobileView} from "react-device-detect";
import {useParams, useSearchParams} from "react-router-dom";
import {useQuery, useMutation, UseQueryResult, UseMutationResult} from '@tanstack/react-query'
import {ListType, Movies, MovieType, PossibleValueByField} from "@/types";
import {MovieSortField, MovieTypeField, SortType} from "@/types";
import {getListBySlug} from "@/services/listService.ts";
import {getMoviesByFilters, getMoviesValuesByField} from "@/services/moviesService.ts";

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


const getTypeFromChipsFilters = (values: string[]) => {
  return (values as MovieTypeField[]).find(item => item === "movie" || item === "tv-series");
}

const getCountryFromChipsFilters  = (values: string[]) => {
  if (values.includes("russian")) {
    return "Россия";
  }
  if (values.includes("foreign")) {
    return "!Россия";
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
  const page = searchParams.get('page') || undefined;
  const country = searchParams.get('country');
  const genre = searchParams.get('genre');
  const sort = searchParams.get('sort') || "";
  const chipsFilters = searchParams.getAll('b');
  const isTop = !!listSlug?.includes("top");


  const listInfo = useMutation({
    mutationKey: ["listInfo", listSlug],
    mutationFn: getListBySlug,
  });
  const countriesSelect = useQuery({
    queryKey: ["countriesField"],
    queryFn: () => getMoviesValuesByField({field: "countries.name"}),
});
  const genresSelect = useQuery({
    queryKey: ["genresField"],
    queryFn: () => getMoviesValuesByField({field: "genres.name"}),
  });


  const countryName = countriesSelect?.data?.find(({slug}) => slug === country)?.name;
  const genreName = genresSelect?.data?.find(({slug}) => slug === genre)?.name;
  const sortField: MovieSortField[] = [];
  const sortType: SortType[] = [];
  const type = getTypeFromChipsFilters(chipsFilters);
  const countries = [countryName, getCountryFromChipsFilters(chipsFilters)].filter(Boolean) as string[];


  if (sort) {
    sortField.push(sortFieldMap[sort]);
    sortType.push("-1");
  }
  else if (isTop) {
    sortField.push("rating.kp", "top250");
    sortType.push("-1", "-1");
  }


  const movies = useQuery({
    queryKey: ["movies", page, listSlug, sortField, sortType, genreName, countries, type],
    queryFn: () => getMoviesByFilters({
      limit: 50,
      page: page,
      lists: listSlug,
      sortField: sortField,
      sortType: sortType,
      type: type,
      "countries.name": countries,
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