import {useEffect, useRef, useState, ReactNode} from 'react';
import {DropdownContext} from "@/components/UI/Dropdown/DropdownContext.ts";
import classes from "@/components/UI/Dropdown/styles.module.scss";



interface DropdownProps {
  children?: ReactNode,
}

function Dropdown({ children }: DropdownProps) {
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
      <div ref={ref} className={classes.dropdown}>
        {children}
      </div>
    </DropdownContext.Provider>
  );
}

export default Dropdown;