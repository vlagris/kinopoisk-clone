import React from "react";
import {BrowserView, MobileView} from "react-device-detect";

const MovieHeaderSkeletonDesktopLazy = React.lazy(() => import("./MovieHeaderSkeletonDesktop.tsx"))
const MovieHeaderSkeletonMobileLazy = React.lazy(() => import("./MovieHeaderSkeletonMobile.tsx"))


function MovieHeaderSkeleton() {
  return (
    <React.Suspense>
      <BrowserView renderWithFragment>
        <MovieHeaderSkeletonDesktopLazy/>
      </BrowserView>

      <MobileView renderWithFragment>
        <MovieHeaderSkeletonMobileLazy/>
      </MobileView>
    </React.Suspense>
  );
}

export default MovieHeaderSkeleton;