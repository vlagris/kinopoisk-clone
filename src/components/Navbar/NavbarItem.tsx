import React from 'react';
import {clsx} from "clsx";
import {NavLink} from "react-router-dom";
import classes from "./styles.module.scss";



interface NavbarItemProps {
  to: string,
  icon: (isActive: boolean) => string,
  children: React.ReactNode
}

function NavbarItem({to, icon, children}: NavbarItemProps) {
  return (
    <li className={classes.item}>
      <NavLink
        to={to}
        className={({isActive}) => clsx(classes.link, isActive && classes.link_active)}
      >
        {({isActive}) => (
          <>
            <img className={classes.itemImage} src={icon(isActive)} alt=""/>
            {children}
          </>
        )}
      </NavLink>
    </li>
  );
}

export default NavbarItem;