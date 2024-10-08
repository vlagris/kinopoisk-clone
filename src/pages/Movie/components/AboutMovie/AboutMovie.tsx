import React from "react";
import {BrowserView, MobileView} from "react-device-detect";
import {MovieType} from "@/types";

const AboutMovieDesktopLazy = React.lazy(() => import("./AboutMovieDesktop.tsx"))
const AboutMovieMobileLazy = React.lazy(() => import("./AboutMovieMobile.tsx"))


export interface AboutMovieProps {
  title: string;
  movie?: MovieType,
}

function AboutMovie(props: AboutMovieProps) {
  return (
    <React.Suspense>
      <BrowserView renderWithFragment>
        <AboutMovieDesktopLazy {...props}/>
      </BrowserView>

      <MobileView renderWithFragment>
        <AboutMovieMobileLazy {...props}/>
      </MobileView>
    </React.Suspense>
  );
}

export default AboutMovie;