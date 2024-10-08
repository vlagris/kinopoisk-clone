import {clsx} from "clsx";
import {Navbar} from "@/components/Navbar";
import classes from "@/components/Header/components/BurgerMenu/styles.module.scss";
import {BrowserView} from "react-device-detect";
import BurgerMenuIcon from "@/assets/icons/burger-menu.svg?react"



export interface BurgerMenuDesktopProps {
  show: boolean,
  onClick: () => void
}

function BurgerMenuDesktop({show, onClick}: BurgerMenuDesktopProps) {
  return (
    <BrowserView renderWithFragment>
      <div className={classes.burgerMenu}>
        <button className={classes.button} onClick={onClick}>
          <BurgerMenuIcon className={classes.buttonIcon}/>
        </button>

        <div className={clsx(classes.menu, show && classes.menu_active)}>
          <div className={classes.menuNavbar}>
            <Navbar variant="dark"/>
          </div>
        </div>
      </div>
    </BrowserView>
  );
}

export default BurgerMenuDesktop;