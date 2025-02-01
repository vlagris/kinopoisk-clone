import React, {useCallback, useContext, useState} from 'react';
import {clsx} from "clsx";
import {DropdownContext} from "@/components/UI/Dropdown/DropdownContext.ts";
import classes from "@/components/UI/Dropdown/styles.module.scss";


export interface DropdownMenuProps {
  children?: React.ReactNode,
  className?: string,
  inheritWidth?: boolean,
}

function DropdownMenu({ children, className }: DropdownMenuProps) {
  const {show, toggle} = useContext(DropdownContext);
  const [classesPosition, setClassesPosition] = useState<string[]>([]);


  const ref = useCallback((node: HTMLDivElement | null) => {
    setClassesPosition([])
    if (!node || !toggle) {
      return;
    }
    const menuRect = node.getBoundingClientRect();
    const toggleRect = toggle.getBoundingClientRect();
    const newClasses: string[] = [];
      if (toggleRect.left + menuRect.width / 2 > window.innerWidth / 2) {
        newClasses.push(classes.menuLeft)
      }
      if (toggleRect.top + menuRect.height > window.innerHeight) {
        newClasses.push(classes.menuTop)
      }
      setClassesPosition(newClasses)
  }, [show]);


  return (
      <div
        ref={ref}
        className={clsx(classes.menu, show && classes.menu_show, classesPosition)}
      >
        <ul className={clsx(classes.menuList, className)}>
          {children}
        </ul>
      </div>
  );
}

export default DropdownMenu;