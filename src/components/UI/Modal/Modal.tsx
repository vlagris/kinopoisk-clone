import React, {useEffect} from "react";
import {clsx} from "clsx";
import {Portal} from "@/components/UI/Portal";
import classes from "@/components/UI/Modal/styles.module.scss";
import {ModalContext} from "@/components/UI/Modal/ModalContext.ts";
import {useLocation} from "react-router-dom";




interface ModalProps {
  children?: React.ReactNode,
  show: boolean,
  onHide: () => void,
  className?: string,
  closeOnRedirect?: boolean
}

function Modal({ children, show, onHide, className, closeOnRedirect = true }: ModalProps) {
  const location = useLocation();


  useEffect(() => {
    if (closeOnRedirect) {
      onHide();
    }
  }, [location]);


  return (
    <>
      {show &&
        <Portal>
          <ModalContext.Provider value={{show, onClose: onHide}}>
            <div className={clsx(classes.modal, className)}>
              {children}
            </div>
          </ModalContext.Provider>
        </Portal>
      }
    </>
  );
}

export default Modal;