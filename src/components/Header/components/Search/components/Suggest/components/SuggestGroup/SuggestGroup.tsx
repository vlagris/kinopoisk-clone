import React from "react";
import classes from "./styles.module.scss";


interface SuggestGroupProps {
  title?: string,
  children?: React.ReactNode,
}

function SuggestGroup({title, children}: SuggestGroupProps) {
  return (
    <div className={classes.suggestGroup}>
      <h3 className={classes.title}>
        {title}
      </h3>
      <ul className={classes.list}>
        {children}
      </ul>
    </div>
  );
}

export default SuggestGroup;