import React from "react";
import {BrowserView, MobileView} from "react-device-detect";


const ListMoviesHeaderDesktopLazy = React.lazy(() => import("./ListMoviesHeaderDesktop.tsx"))
const ListMoviesHeaderMobileLazy = React.lazy(() => import("./ListMoviesHeaderMobile.tsx"))


function ListMoviesHeader() {
  return (
    <React.Suspense>
      <BrowserView renderWithFragment>
        <ListMoviesHeaderDesktopLazy/>
      </BrowserView>

      <MobileView renderWithFragment>
        <ListMoviesHeaderMobileLazy/>
      </MobileView>
    </React.Suspense>
  );
}

export default ListMoviesHeader;