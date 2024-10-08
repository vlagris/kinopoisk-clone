import React from "react";
import {BrowserView, MobileView} from "react-device-detect";
import MovieSectionTitleDesktop from "@/components/MovieSectionTitle/MovieSectionTitleDesktop.tsx";
import MovieSectionTitleMobile from "@/components/MovieSectionTitle/MovieSectionTitleMobile.tsx";



export interface MovieSectionTitleProps {
  children?: React.ReactNode,
  className?: string,
  linkClassName?: string,
  href?: string,
}

function MovieSectionTitle(props: MovieSectionTitleProps) {
  return (
    <React.Suspense>
      <BrowserView renderWithFragment>
        <MovieSectionTitleDesktop {...props}/>
      </BrowserView>

      <MobileView renderWithFragment>
        <MovieSectionTitleMobile {...props}/>
      </MobileView>
    </React.Suspense>
  );
}

export default MovieSectionTitle;