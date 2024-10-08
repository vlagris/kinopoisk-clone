import React from 'react';
import classes from "./styles.module.scss";



interface FooterMenuItemProps {
  to: string,
  children?: React.ReactNode
}

function FooterMenuItem({to, children}: FooterMenuItemProps) {
  return (
    <li className={classes.menuItem}>
      <a
        href={to}
        className={classes.menuLink}
      >
        { children }
      </a>
    </li>
  );
}

export default FooterMenuItem;