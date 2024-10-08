import {useContext} from 'react';
import {clsx} from "clsx";
import {SelectContext} from "@/components/UI/Select/SelectContext.ts";
import {DropdownToggle} from "@/components/UI/Dropdown";
import classes from "@/components/UI/Select/styles.module.scss";
import ArrowBottom from "@/assets/icons/arrow-fill-bottom.svg?react";


interface DropdownButtonProps {
  className?: string
}

function SelectButton({ className }: DropdownButtonProps) {
  const { selectedItem } = useContext(SelectContext);


  return (
    <DropdownToggle
      className={({active}) => clsx(classes.button, className, active && classes.button_active)}
    >
      <span className={classes.buttonText}>
        {selectedItem.children}
      </span>
      <ArrowBottom className={classes.arrowIcon}/>
    </DropdownToggle>
  );
}

export default SelectButton;


