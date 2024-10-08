import React, {useContext} from 'react';
import {DropdownContext} from "@/components/UI/Dropdown/DropdownContext.ts";
import classes from "@/components/UI/Dropdown/styles.module.scss";


interface DropdownItemProps {
  children?: React.ReactNode,
  onClick?: () => void
}

function DropdownItem({ children, onClick }: DropdownItemProps) {
  const {setShow} = useContext(DropdownContext);

  function handleClick() {
      if (onClick) {
        onClick()
      }
      setShow(false);
  }

  return (
    <li
      className={classes.item}
      onClick={handleClick}
    >
      {children}
    </li>
  );
}

export default DropdownItem;