import {useEffect, ReactNode} from "react";
import {clsx} from "clsx";
import {useLocation} from "react-router-dom";
import {ModalContext} from "@/components/UI/Modal/ModalContext.ts";
import {Portal} from "@/components/UI/Portal";
import {ModalOverlay, OverlayType} from "@/components/UI/Modal/components/ModalOverlay";
import classes from "@/components/UI/Modal/styles.module.scss";




interface ModalProps {
  children?: ReactNode,
  show: boolean,
  onHide: () => void,
  className?: string,
  closeOnRedirect?: boolean
  overlay?: OverlayType
}

function Modal({children, show, onHide, className, closeOnRedirect = true, overlay}: ModalProps) {
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
              <ModalOverlay overlay={overlay}>
                {children}
              </ModalOverlay>
            </div>
          </ModalContext.Provider>
        </Portal>
      }
    </>
  );
}

export default Modal;