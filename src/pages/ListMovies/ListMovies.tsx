import React, {useLayoutEffect} from "react";
import {BrowserView, MobileView} from "react-device-detect";
import {useParams, useSearchParams} from "react-router-dom";
import {useMutation, UseMutationResult, useQuery, UseQueryResult} from "react-query";
import {ListType, Movies, PossibleValueByField} from "@/types";
import {kinopoiskdevApi} from "@/services/api/kinopoiskdevApi";
import {MovieSortField, MovieTypeField} from "@/services/api/kinopoiskdevApi/types";

const ListMoviesDesktopLazy = React.lazy(() => import("./ListMoviesDesktop.tsx"))
const ListMoviesMobileLazy = React.lazy(() => import("./ListMoviesMobile.tsx"))

const sortFieldMap: {[key: string]: MovieSortField[]} = {
  votes: ["votes.kp"],
  rating: ["rating.kp"],
  date: ["year"],
  title: ["name"],
}

export interface ListMoviesViewProps {
  listInfoResult:  UseMutationResult<ListType, unknown, any>,
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


  const countriesSelect = useQuery(
    "countriesSelect",
    () => kinopoiskdevApi.getMoviesValuesByField({field: "countries.name"}),
  );
  const genresSelect = useQuery(
    "genresSelect",
    () => kinopoiskdevApi.getMoviesValuesByField({field: "genres.name"}),
  );

  const sortField = sortFieldMap[sort] || undefined;
  const countryName = countriesSelect?.data?.find(({slug}) => slug === country)?.name;
  const genreName = genresSelect?.data?.find(({slug}) => slug === genre)?.name;

  const countries = [countryName, isRussian && "Россия", isForeign && "!Россия"];
  const cleanedCountries = countries.filter(Boolean) as string[];

  const type = [isMovie && "movie", isSeries && "tv-series"];
  const cleanedType = type.filter(Boolean) as MovieTypeField[];


  const movies = useQuery(
    ["movies", listSlug, sortField, genreName, countries, isMovie, isSeries, page],
    () => kinopoiskdevApi.getMoviesByFilters({
      sortField: sortField,
      sortType: sortField ? ["-1"] : undefined,
      "countries.name": cleanedCountries.length ? cleanedCountries : undefined,
      "genres.name": genreName ? [genreName] : undefined,
      type: cleanedType.length ? cleanedType : undefined,
      lists: listSlug ? [listSlug] : undefined,
      limit: 50,
      page: Number(page) || undefined
    }),
    {
      enabled: !!countriesSelect.data || !!genresSelect.data
    }
  );


  const listInfo = useMutation({
    mutationFn: kinopoiskdevApi.getListBySlug
  });

  useLayoutEffect(() => {
    if (listSlug) {
      listInfo.mutate({slug: listSlug});
    }
  }, [listSlug]);


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