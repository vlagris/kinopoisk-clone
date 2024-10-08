import React from "react";
import {BrowserView, MobileView} from "react-device-detect";
import {MovieDescriptionSkeleton} from "@/pages/Movie/components/MovieDescription/components/MovieDescriptionSkeleton";

const MovieDescriptionDesktopLazy = React.lazy(() => import("./MovieDescriptionDesktop.tsx"))
const MovieDescriptionMobileLazy = React.lazy(() => import("./MovieDescriptionMobile.tsx"))



export interface MovieDescriptionProps {
  description?: string | null,
  shortDescription?: string | null,
  isSuccess: boolean
}

function MovieDescription(props: MovieDescriptionProps) {
  return (
    <React.Suspense fallback={<MovieDescriptionSkeleton/>}>
      <BrowserView renderWithFragment>
        <MovieDescriptionDesktopLazy {...props}/>
      </BrowserView>

      <MobileView renderWithFragment>
        <MovieDescriptionMobileLazy {...props}/>
      </MobileView>
    </React.Suspense>
  );
}

export default MovieDescription;