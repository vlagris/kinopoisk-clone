import React from "react";
import {BrowserView, MobileView} from "react-device-detect";
import {MovieType} from "@/types";


const ListMoviesListItemDesktopLazy = React.lazy(() => import("./ListMoviesListItemDesktop.tsx"))
const ListMoviesListItemMobileLazy = React.lazy(() => import("./ListMoviesListItemMobile.tsx"))



export interface ListMoviesListItemProps {
  movie: MovieType
}

function ListMoviesListItem(props: ListMoviesListItemProps) {
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

export default ListMoviesListItem;