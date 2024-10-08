import React from "react";
import {BrowserView, MobileView} from "react-device-detect";
import {MovieFactType} from "@/types";
import {MovieFactsItemMobileProps} from "@/pages/Movie/components/MovieFacts/components/MovieFactsItem/MovieFactsItemMobile.tsx";


const MovieFactsItemDesktopLazy = React.lazy(() => import("./MovieFactsItemDesktop.tsx"))
const MovieFactsItemMobileLazy = React.lazy(() => import("./MovieFactsItemMobile.tsx"))


export interface MovieFactsItemCommonProps {
  fact: MovieFactType
}

export interface MovieFactsItemProps extends MovieFactsItemCommonProps, MovieFactsItemMobileProps {}

function MovieFactsItem(props: MovieFactsItemProps) {
  return (
    <React.Suspense>
      <BrowserView renderWithFragment>
        <MovieFactsItemDesktopLazy {...props}/>
      </BrowserView>

      <MobileView renderWithFragment>
        <MovieFactsItemMobileLazy {...props}/>
      </MobileView>
    </React.Suspense>
  );
}

export default MovieFactsItem;