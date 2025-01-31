import React from "react";
import {useParams} from "react-router-dom";
import {useQuery} from "@tanstack/react-query";
import {BrowserView, MobileView} from "react-device-detect";
import {MovieType} from "@/types";
import {kinopoiskdevApi} from "@/services/api/kinopoiskdevApi";
import {PageTitle} from "@/components/PageTitle";

const MovieDesktopLazy = React.lazy(() => import("./MovieDesktop.tsx"))
const MovieMobileLazy = React.lazy(() => import("./MovieMobile.tsx"))


export interface MovieAdaptiveProps {
  movie?: MovieType,
  isSuccess: boolean
}

function Movie() {
  const {filmSlug} = useParams();
  const film = useQuery({
    queryKey: ["film", filmSlug],
    queryFn: () => kinopoiskdevApi.getMovieById(filmSlug as string),
    enabled: !!filmSlug
  })

  const pageTitleInfo = [
    film.data?.name,
    film.data?.year,
    "дата выхода трейлеры актеры отзывы описание на Кинопоиске"
  ].filter(Boolean).join(', ');


  return (
    <>
      <PageTitle title={pageTitleInfo}/>
      <React.Suspense fallback={<div style={{height: "100vh"}}/>}>
        <BrowserView renderWithFragment>
          <MovieDesktopLazy movie={film.data} isSuccess={film.isSuccess}/>
        </BrowserView>

        <MobileView renderWithFragment>
          <MovieMobileLazy movie={film.data} isSuccess={film.isSuccess}/>
        </MobileView>
      </React.Suspense>
    </>
  );
}

export default Movie;