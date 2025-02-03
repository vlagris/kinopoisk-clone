import {useEffect, useRef, useState, ReactNode} from 'react';
import {DropdownContext} from "@/components/UI/Dropdown/DropdownContext.ts";
import classes from "@/components/UI/Dropdown/styles.module.scss";
import {clsx} from "clsx";



interface DropdownProps {
  children?: ReactNode,
  className?: string
}

function Dropdown({ children, className }: DropdownProps) {
  const [show, setShow] = useState(false);
  const [toggle, seToggle] = useState<HTMLButtonElement | null>(null);
  const ref = useRef<HTMLDivElement>(null);


  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const eventTarget = event.target as Element
      if (show && ref.current && !ref.current.contains(eventTarget)) {
        setShow(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [show]);


  return (
    <DropdownContext.Provider value={{ show, setShow, toggle, seToggle}}>
      <div ref={ref} className={clsx(classes.dropdown, className)}>
        {children}
      </div>
    </DropdownContext.Provider>
  );
}

export default Dropdown;