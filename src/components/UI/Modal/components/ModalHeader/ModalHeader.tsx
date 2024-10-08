import React from "react";
import classes from "../../styles.module.scss";


interface ModalHeaderProps {
  children?: React.ReactNode
}

function ModalHeader({children}: ModalHeaderProps) {
  return (
    <div className={classes.header}>
      {children}
    </div>
  );
}

export default ModalHeader;