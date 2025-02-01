import React from 'react';
import {Link} from "react-router-dom";
import classes from "./styles.module.scss";



interface FooterMenuItemProps {
  to: string,
  children?: React.ReactNode
}

function FooterMenuItem({to, children}: FooterMenuItemProps) {
  return (
    <li className={classes.menuItem}>
      <Link
        to={to}
        className={classes.menuLink}
      >
        { children }
      </Link>
    </li>
  );
}

export default FooterMenuItem;