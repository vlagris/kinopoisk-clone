import classes from "../../styles.module.scss";
import {useContext} from "react";
import {ModalContext} from "@/components/UI/Modal/ModalContext.ts";


function ModalCloseButton() {
  const {onClose} = useContext(ModalContext);

  return (
    <button type="button" className={classes.buttonClose} onClick={onClose}>
      Закрыть
    </button>
  );
}

export default ModalCloseButton;