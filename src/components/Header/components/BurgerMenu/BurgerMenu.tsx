import React from "react";
import {BrowserView, MobileView} from "react-device-detect";
import {BurgerMenuDesktopProps} from "@/components/Header/components/BurgerMenu/BurgerMenuDesktop.tsx";



const BurgerMenuDesktopLazy = React.lazy(() => import("./BurgerMenuDesktop.tsx"))
const BurgerMenuMobileLazy = React.lazy(() => import("./BurgerMenuMobile.tsx"))


function BurgerMenu(props: BurgerMenuDesktopProps) {
  return (
    <>
      <BrowserView renderWithFragment>
        <BurgerMenuDesktopLazy {...props}/>
      </BrowserView>

      <MobileView renderWithFragment>
        <BurgerMenuMobileLazy/>
      </MobileView>
    </>
  );
}

export default BurgerMenu;