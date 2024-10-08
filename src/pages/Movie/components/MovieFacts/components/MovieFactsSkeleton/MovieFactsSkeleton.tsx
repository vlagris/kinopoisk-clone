import React from "react";
import {BrowserView, MobileView} from "react-device-detect";

const MovieFactsSkeletonDesktopLazy = React.lazy(() => import("./MovieFactsSkeletonDesktop.tsx"))
const MovieFactsSkeletonMobileLazy = React.lazy(() => import("./MovieFactsSkeletonMobile.tsx"))


function MovieFactsSkeleton() {
  return (
    <React.Suspense>
      <BrowserView renderWithFragment>
        <MovieFactsSkeletonDesktopLazy/>
      </BrowserView>

      <MobileView renderWithFragment>
        <MovieFactsSkeletonMobileLazy/>
      </MobileView>
    </React.Suspense>
  );
}

export default MovieFactsSkeleton;