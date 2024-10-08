import React, {useContext, useEffect, useLayoutEffect, useRef, useState} from 'react';
import {clsx} from "clsx";
import {Portal} from "@/components/UI/Portal";
import {DropdownContext} from "@/components/UI/Dropdown/DropdownContext.ts";
import classes from "@/components/UI/Dropdown/styles.module.scss";


export interface DropdownMenuProps {
  children?: React.ReactNode,
  className?: string,
  inheritWidth?: boolean,
}

function DropdownMenu({ children, className, inheritWidth }: DropdownMenuProps) {
  const {
    show,
    elements,
    setElements
  } = useContext(DropdownContext);
  const [style, setStyle] = useState<React.CSSProperties>({
    top: 0,
    left: 0,
  });
  const menuRef = useRef<HTMLDivElement>(null);


  useEffect(() => {
    const menuElement = menuRef.current;
    if (menuElement) {
      setElements(prev => ({ ...prev, menu: menuElement }));
    }
  }, [menuRef]);


  useLayoutEffect(() => {
    if (!menuRef.current || !show || !elements.toggle) {
      return
    }
    const menuRect = menuRef.current.getBoundingClientRect();
    const toggleRect = elements.toggle.getBoundingClientRect();
    const toggleTop = toggleRect.top + window.scrollY;
    const toggleBottom = toggleRect.bottom + window.scrollY;
    const newStyle: React.CSSProperties = {
      left: toggleRect.left,
      top: toggleBottom
    }

    if (toggleRect.left + toggleRect.width / 2 > window.innerWidth / 2) {
      newStyle.left = toggleRect.right - menuRect.width;
    }
    if (toggleBottom + menuRect.height > window.innerHeight) {
      newStyle.top = toggleTop - menuRect.height;
    }
    if (inheritWidth) {
      newStyle.width = toggleRect.width;
    }
    setStyle(newStyle)
  }, [show]);


  return (
    <Portal>
      <div
        ref={menuRef}
        className={clsx(classes.menu, show && classes.menu_show)}
        style={style}
      >
        <ul className={clsx(classes.menuList, className)}>
          {children}
        </ul>
      </div>
    </Portal>
  );
}

export default DropdownMenu;