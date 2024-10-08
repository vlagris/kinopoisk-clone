import React from "react";
import {BrowserView, MobileView} from "react-device-detect";

const MovieRatingSectionSkeletonDesktopLazy = React.lazy(() => import("./MovieRatingSectionSkeletonDesktop.tsx"))
const MovieRatingSectionSkeletonMobileLazy = React.lazy(() => import("./MovieRatingSectionSkeletonMobile.tsx"))


function MovieRatingSectionSkeleton() {
  return (
    <React.Suspense>
      <BrowserView renderWithFragment>
        <MovieRatingSectionSkeletonDesktopLazy/>
      </BrowserView>

      <MobileView renderWithFragment>
        <MovieRatingSectionSkeletonMobileLazy/>
      </MobileView>
    </React.Suspense>
  );
}

export default MovieRatingSectionSkeleton;