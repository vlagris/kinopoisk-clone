import React, {useState, Dispatch, SetStateAction} from "react";
import {BrowserView, MobileView} from "react-device-detect";
import {useQuery, UseQueryResult} from "@tanstack/react-query";
import {getMoviesBySearch} from "@/services/moviesService.ts";
import {Movies} from "@/types";

const SearchDesktopLazy = React.lazy(() => import("./SearchDesktop.tsx"))
const SearchMobileLazy = React.lazy(() => import("./SearchMobile.tsx"))


export interface SearchViewProps {
  searchQuery: string,
  setSearchQuery: Dispatch<SetStateAction<string>>,
  moviesResult: UseQueryResult<Movies>
}

function Search() {
  const [searchQuery, setSearchQuery] = useState("");
  const movies = useQuery({
    queryKey: ["movieSearch", searchQuery],
    queryFn: () => getMoviesBySearch({query: searchQuery}),
    enabled: !!searchQuery,
  });
  const viewProps: SearchViewProps = {
    searchQuery: searchQuery,
    setSearchQuery: setSearchQuery,
    moviesResult: movies
  }

  return (
    <React.Suspense>
      <BrowserView renderWithFragment>
        <SearchDesktopLazy {...viewProps}/>
      </BrowserView>

      <MobileView renderWithFragment>
        <SearchMobileLazy {...viewProps}/>
      </MobileView>
    </React.Suspense>
  );
}

export default Search;