import React, {useEffect, useState} from 'react';
import {DropdownContext} from "@/components/UI/Dropdown/DropdownContext.ts";
import classes from "@/components/UI/Dropdown/styles.module.scss";


export type SelectElementsType = {
  toggle?: HTMLButtonElement,
  menu?: HTMLDivElement
}

interface CustomSelectProps {
  children?: React.ReactNode,
}

function Dropdown({ children }: CustomSelectProps) {
  const [show, setShow] = useState(false);
  const [elements, setElements] = useState<SelectElementsType>({});


  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const eventTarget = event.target as Element
      const toggleElement = elements.toggle;
      const menuElement = elements.menu;
      if (!toggleElement?.contains(eventTarget) && !menuElement?.contains(eventTarget)) {
        setShow(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [elements]);


  return (
    <DropdownContext.Provider value={{ show, setShow, elements, setElements }}>
      <div className={classes.dropdown}>
        {children}
      </div>
    </DropdownContext.Provider>
  );
}

export default Dropdown;