import React from "react";
import classes from "./styles.module.scss";



interface ListMoviesGroupsProps {
  children?: React.ReactNode;
}

function ListMoviesListsFilters({children}: ListMoviesGroupsProps) {
  return (
    <div className={classes.groups}>
      { children }
    </div>
  );
}

export default ListMoviesListsFilters;