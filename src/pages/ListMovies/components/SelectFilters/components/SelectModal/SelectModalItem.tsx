import React, {useContext, useEffect} from "react";
import classes from "./styles.module.scss";
import {clsx} from "clsx";
import {SelectModalContext} from "./SelectModalContext.ts";



interface SelectModalItemProps {
  children?: React.ReactNode;
  value?: any,
  active?: boolean,
}

function SelectModalItem({children, value, active}: SelectModalItemProps) {
  const { selectedItem, setSelectedItem } = useContext(SelectModalContext);


  useEffect(() => {
    if (active) {
      setSelectedItem({value, children});
    }
  }, []);


  function handleClick() {
    setSelectedItem({value, children});
  }


  return (
    <button
      className={clsx(classes.item, selectedItem.value === value && classes.item_active)}
      onClick={handleClick}
    >
      <span className={classes.itemTitle}>
        {children}
      </span>
    </button>
  );
}

export default SelectModalItem;