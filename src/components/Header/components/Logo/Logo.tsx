import {useState} from 'react';
import {Link} from "react-router-dom";
import {PATH_LINK} from "@/constants";
import {BurgerMenu} from "@/components/Header/components/BurgerMenu";
import classes from "@/components/Header/styles.module.scss";
import LogoImg from "@/assets/icons/logo.svg";


function Logo() {
  const [show, setShow] = useState(false);

  const onOpen = () => setShow(true);
  const onClose = () => setShow(false);
  const onToggle = () => setShow(!show);

  return (
    <div
      className={classes.logo_wrap}
      onMouseEnter={onOpen}
      onMouseLeave={onClose}
    >
      <BurgerMenu show={show} onClick={onToggle}/>
      <Link to={PATH_LINK.HOME} className={classes.logo}>
        <img
          className={classes.logo_img}
          src={LogoImg as string}
          alt="Кино"
        />
      </Link>
    </div>
  );
}

export default Logo;