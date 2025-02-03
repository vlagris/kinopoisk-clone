import {useContext, ReactNode, MouseEvent} from "react";
import {clsx} from "clsx";
import {ModalContext} from "@/components/UI/Modal/ModalContext.ts";
import classes from "../../styles.module.scss";


export type OverlayType = "default" | "none" | "transparent"

interface ModalOverlayProps {
  children?: ReactNode,
  overlay?: OverlayType
}

function ModalOverlay({children, overlay}: ModalOverlayProps) {
  const {onClose} = useContext(ModalContext);


  function handleClick(event: MouseEvent<HTMLElement>){
    if (event.target === event.currentTarget) {
      onClose()
    }
  }


  if (overlay === "none") {
    return children;
  }


  return (
    <div
      className={clsx(classes.overlay, overlay === "transparent" && classes.overlayTransparent)}
      onClick={handleClick}
    >
      {children}
    </div>
  );
}

export default ModalOverlay;