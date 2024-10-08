import React from "react";
import {BrowserView, MobileView} from "react-device-detect";
import {MoviePremiereType, MovieRatingType, MovieVotesType} from "@/types";
import MovieRatingSectionSkeleton from "./components/MovieRatingSectionSkeleton/MovieRatingSectionSkeleton.tsx";

const MovieRatingSectionDesktopLazy = React.lazy(() => import("./MovieRatingSectionDesktop.tsx"))
const MovieRatingSectionMobileLazy = React.lazy(() => import("./MovieRatingSectionMobile.tsx"))


export interface MovieRatingSectionProps {
  rating?: MovieRatingType,
  votes?: MovieVotesType,
  premiere?: MoviePremiereType,
  top250?: number | null,
  isSuccess: boolean
}

function MovieRatingSection(props: MovieRatingSectionProps) {
  return (
    <React.Suspense fallback={<MovieRatingSectionSkeleton/>}>
      <BrowserView renderWithFragment>
        <MovieRatingSectionDesktopLazy {...props}/>
      </BrowserView>

      <MobileView renderWithFragment>
        <MovieRatingSectionMobileLazy {...props}/>
      </MobileView>
    </React.Suspense>
  );
}

export default MovieRatingSection;