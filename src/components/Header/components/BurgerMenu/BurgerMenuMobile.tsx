import {useState} from 'react';
import {clsx} from "clsx";
import {MobileView} from "react-device-detect";
import {Modal} from "@/components/UI/Modal";
import {Navbar} from "@/components/Navbar";
import classes from "./styles.module.scss";
import BurgerMenuIcon from "@/assets/icons/burger-menu.svg?react"
import CloseIcon from "@/assets/icons/close.svg?react"



function BurgerMenuMobile() {
  const [show, setShow] = useState(false);


  const handleToggle = () => setShow(!show)


  return (
    <MobileView renderWithFragment>
      <div className={classes.burgerMenu}>
        <button className={classes.button} onClick={handleToggle}>
          {show ?
            <CloseIcon className={classes.buttonIcon}/>
            :
            <BurgerMenuIcon className={classes.buttonIcon}/>
          }
        </button>

        <Modal show={show} onHide={() => setShow(false)}>
          <MobileView renderWithFragment>
            <div className={clsx(classes.menuModal, show && classes.menu_active)}>
              <div className={classes.menuModalInner}>
                <div className={classes.menuNavbar}>
                  <Navbar variant="dark"/>
                </div>
              </div>
            </div>
          </MobileView>
        </Modal>
      </div>
    </MobileView>
  );
}

export default BurgerMenuMobile;