import {ReactNode} from "react";
import {ModalCloseButton} from "@/components/UI/Modal/components/ModalCloseButton";
import classes from "../../styles.module.scss";


interface ModalHeaderProps {
  children?: ReactNode,
  buttonClose?: boolean,
}

function ModalHeader({children, buttonClose = true}: ModalHeaderProps) {
  return (
    <div className={classes.header}>
      {children}

      {buttonClose && (
        <ModalCloseButton/>
      )}
    </div>
  );
}

export default ModalHeader;