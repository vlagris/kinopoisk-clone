import React, {useContext, useEffect} from 'react';
import {clsx} from "clsx";
import {SelectContext} from "@/components/UI/Select/SelectContext.ts";
import {DropdownItem} from "@/components/UI/Dropdown";
import classes from "@/components/UI/Select/styles.module.scss";



interface SelectItemProps {
  children?: React.ReactNode,
  value?: any,
  active?: boolean,
  onClick?: () => void,
  className?: string
}

function SelectItem({ children, value, active, onClick, className }: SelectItemProps) {
  const { selectedItem, setSelectedItem } = useContext(SelectContext);


  useEffect(() => {
    if (active) {
      setSelectedItem({value, children});
    }
  }, [active]);


  function handleClick() {
      if (onClick) {
        onClick()
      }
    setSelectedItem({value, children});
  }


  return (
    <DropdownItem onClick={handleClick}>
      <div className={clsx(classes.item, className, selectedItem.value === value && classes.item_active)}>
        {children}
      </div>
    </DropdownItem>
  );
}

export default SelectItem;