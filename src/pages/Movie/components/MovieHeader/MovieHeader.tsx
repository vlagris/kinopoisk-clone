import React from "react";
import {BrowserView, MobileView} from "react-device-detect";
import {MovieType} from "@/types";
import {MovieHeaderSkeleton} from "@/pages/Movie/components/MovieHeader/components/MovieHeaderSkeleton";

const MovieHeaderDesktopLazy = React.lazy(() => import("./MovieHeaderDesktop.tsx"))
const MovieHeaderMobileLazy = React.lazy(() => import("./MovieHeaderMobile.tsx"))



export interface MovieHeaderProps {
  movie?: MovieType,
  isSuccess: boolean,
}

function MovieHeader(props: MovieHeaderProps) {
  return (
    <React.Suspense fallback={<MovieHeaderSkeleton/>}>
      <BrowserView renderWithFragment>
        <MovieHeaderDesktopLazy {...props}/>
      </BrowserView>

      <MobileView renderWithFragment>
        <MovieHeaderMobileLazy {...props}/>
      </MobileView>
    </React.Suspense>
  );
}

export default MovieHeader;