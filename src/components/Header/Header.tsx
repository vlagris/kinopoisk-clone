import React from "react";
import {BrowserView, MobileView} from "react-device-detect";


const HeaderDesktopLazy = React.lazy(() => import("./HeaderDesktop.tsx"))
const HeaderMobileLazy = React.lazy(() => import("./HeaderMobile.tsx"))


function Header() {
  return (
    <>
      <BrowserView renderWithFragment>
        <HeaderDesktopLazy/>
      </BrowserView>

      <MobileView renderWithFragment>
        <HeaderMobileLazy/>
      </MobileView>
    </>
  );
}

export default Header;