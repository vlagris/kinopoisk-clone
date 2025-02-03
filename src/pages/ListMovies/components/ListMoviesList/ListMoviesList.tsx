import React from "react";
import {BrowserView, MobileView} from "react-device-detect";
import {MovieType} from "@/types";
import ListMoviesListSkeleton from "./ListMoviesListSkeleton";


const ListMoviesListDesktopLazy = React.lazy(() => import("./ListMoviesListDesktop.tsx"))
const ListMoviesListMobileLazy = React.lazy(() => import("./ListMoviesListMobile.tsx"))



export interface ListMoviesListProps {
  movies?: MovieType[],
  isSuccess: boolean
}

function ListMoviesList(props: ListMoviesListProps) {

  if (!props.isSuccess) {
    return (<ListMoviesListSkeleton/>);
  }

  return (
    <React.Suspense fallback={<ListMoviesListSkeleton/>}>
      <BrowserView renderWithFragment>
        <ListMoviesListDesktopLazy {...props}/>
      </BrowserView>

      <MobileView renderWithFragment>
        <ListMoviesListMobileLazy {...props}/>
      </MobileView>
    </React.Suspense>
  );
}

export default ListMoviesList;