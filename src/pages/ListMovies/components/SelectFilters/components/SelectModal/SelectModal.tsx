import React, {useEffect, useLayoutEffect, useRef, useState, ReactNode} from "react";
import {Modal, ModalPanel, ModalHeader, ModalCloseButton, OverlayType} from "@/components/UI/Modal";
import {SelectModalContext} from "./SelectModalContext.ts";
import classes from "./styles.module.scss";


type SelectItemValue = string | number | undefined | null


export type SelectedItem = {
  value: SelectItemValue;
  children: ReactNode;
}

interface SelectFiltersSelectModalProps {
  title?: string,
  children?: ReactNode,
  onChange?: (value: SelectItemValue) => void,
  overlay?: OverlayType
}

function SelectModal({title, children, onChange = () => {}, overlay}: SelectFiltersSelectModalProps) {
  const [show, setShow] = useState(false);
  const [selectedItem, setSelectedItem] = useState<SelectedItem>({
    value: "",
    children: ""
  });
  const firstUpdate = useRef(true);


  useEffect(() => {
    if (!firstUpdate.current) {
      onChange(selectedItem.value);
    }
    firstUpdate.current = false;
  }, [selectedItem.value]);


  useLayoutEffect(() => {
    React.Children.forEach(children,element  => {
      if (!React.isValidElement(element)){
        return
      }
      const {active, children, value} = element.props;
      if (active) {
        setSelectedItem({value, children});
      }
    })
  }, [children]);


  const handleClose = () => setShow(false);
  const handleOpen = () => setShow(true);


  return (
    <SelectModalContext.Provider value={{selectedItem, setSelectedItem}}>
      <button className={classes.button} onClick={handleOpen}>
        <span className={classes.buttonTitle}>
          {title}
        </span>
        <span className={classes.buttonValue}>
          {selectedItem.children}
        </span>
      </button>

      <Modal
        show={show}
        onHide={handleClose}
        overlay={overlay}
      >
        <ModalPanel variant="bottom">
          <ModalHeader>
            <h2 className={classes.modalTitle}>
              {title}
            </h2>
            <ModalCloseButton/>
          </ModalHeader>
          <div className={classes.list}>
            {children}
          </div>
        </ModalPanel>
      </Modal>
    </SelectModalContext.Provider>
  );
}

export default SelectModal;