import React from "react";
import classes from "./styles.module.scss";


interface CollapseProps {
  children?: React.ReactNode,
  title?: string,
  open?: boolean
}

function Collapse({children, title, open}: CollapseProps) {
  return (
    <details className={classes.collapse} open={open}>
      <summary className={classes.header}>{ title }</summary>
      <div className={classes.content}>
        { children }
      </div>
    </details>
  );
}

export default Collapse;