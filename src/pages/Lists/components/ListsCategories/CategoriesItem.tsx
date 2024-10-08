import React from 'react';
import {NavLink} from "react-router-dom";
import {clsx} from "clsx";
import classes from "@/pages/Lists/styles.module.scss";



interface CategoriesListItemProps {
  children: React.ReactNode,
  to: string
}

function CategoriesItem({children, to}: CategoriesListItemProps) {
  return (
    <NavLink
      to={to}
      className={({isActive}) => clsx(classes.categoriesItem, isActive && classes.categoriesItem_active)}
    >
      {children}
    </NavLink>
  );
}

export default CategoriesItem;