import React from "react";
import {BrowserView, MobileView} from "react-device-detect";
import {MovieFactType} from "@/types";
import {MovieFactsMobileProps} from "@/pages/Movie/components/MovieFacts/MovieFactsMobile.tsx";
import {MovieFactsSkeleton} from "@/pages/Movie/components/MovieFacts/components/MovieFactsSkeleton";


const MovieFactsDesktopLazy = React.lazy(() => import("./MovieFactsDesktop.tsx"))
const MovieFactsMobileLazy = React.lazy(() => import("./MovieFactsMobile.tsx"))


export interface MovieFactsCommonProps {
  facts?: MovieFactType[],
  isSuccess: boolean,
  title: string
}

export interface MovieFactsProps extends MovieFactsCommonProps, MovieFactsMobileProps {}

function MovieFacts(props: MovieFactsProps) {
  return (
    <React.Suspense fallback={<MovieFactsSkeleton/>}>
      <BrowserView renderWithFragment>
        <MovieFactsDesktopLazy {...props}/>
      </BrowserView>

      <MobileView renderWithFragment>
        <MovieFactsMobileLazy {...props}/>
      </MobileView>
    </React.Suspense>
  );
}

export default MovieFacts;