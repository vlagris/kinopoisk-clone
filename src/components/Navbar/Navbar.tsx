import React from "react";
import {BrowserView, MobileView} from "react-device-detect";
import {PATH_LINK} from "@/constants";
import HomeOutlineImage from "@/assets/icons/home-outline.svg";
import HomeFillImage from "@/assets/icons/home-fill.svg";
import FilmOutlineImage from "@/assets/icons/film-outline.svg";
import FilmFillImage from "@/assets/icons/film-fill.svg";
import SerialOutlineImage from "@/assets/icons/serial-outline.svg";
import SerialFillImage from "@/assets/icons/serial-fill.svg";



const NavbarDesktopLazy = React.lazy(() => import("./NavbarDesktop.tsx"))
const NavbarMobileLazy = React.lazy(() => import("./NavbarMobile.tsx"))


export const items = [
  {to: PATH_LINK.HOME, title: "Главная", icon: (isActive: boolean) => (isActive? HomeFillImage : HomeOutlineImage) },
  {to: PATH_LINK.LISTS_CATEGORIES_MOVIES, title: "Фильмы", icon: (isActive: boolean) => (isActive? FilmFillImage : FilmOutlineImage) },
  {to: PATH_LINK.LISTS_CATEGORIES_SERIALS, title: "Сериалы", icon: (isActive: boolean) => (isActive? SerialFillImage : SerialOutlineImage) },
]


export interface NavbarProps {
  variant?: "light" | "dark",
  className?: string
}

function Navbar(props: NavbarProps){
  return (
    <>
      <BrowserView renderWithFragment>
        <NavbarDesktopLazy {...props}/>
      </BrowserView>

      <MobileView renderWithFragment>
        <NavbarMobileLazy {...props}/>
      </MobileView>
    </>
  );
}

export default Navbar;