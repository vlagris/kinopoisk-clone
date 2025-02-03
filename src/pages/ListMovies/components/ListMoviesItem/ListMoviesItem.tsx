import React from "react";
import {BrowserView, MobileView} from "react-device-detect";
import {MovieType} from "@/types";


const ListMoviesListItemDesktopLazy = React.lazy(() => import("./ListMoviesItemDesktop.tsx"))
const ListMoviesListItemMobileLazy = React.lazy(() => import("./ListMoviesItemMobile.tsx"))



export interface ListMoviesListItemProps {
  movie: MovieType
}

function ListMoviesItem(props: ListMoviesListItemProps) {
  return (
    <>
      <BrowserView renderWithFragment>
        <ListMoviesListItemDesktopLazy {...props}/>
      </BrowserView>

      <MobileView renderWithFragment>
        <ListMoviesListItemMobileLazy {...props}/>
      </MobileView>
    </>
  );
}

export default ListMoviesItem;