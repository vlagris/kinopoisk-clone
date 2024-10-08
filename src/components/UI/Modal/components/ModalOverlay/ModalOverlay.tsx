import React, {useContext} from "react";
import {ModalContext} from "@/components/UI/Modal/ModalContext.ts";
import classes from "../../styles.module.scss";


interface ModalOverlayProps {
  children?: React.ReactNode
}

function ModalOverlay({children}: ModalOverlayProps) {
  const {onClose} = useContext(ModalContext);


  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    if (event.target === event.currentTarget) {
      onClose()
    }
  }


  return (
    <div className={classes.overlay} onClick={handleClick}>
      {children}
    </div>
  );
}

export default ModalOverlay;