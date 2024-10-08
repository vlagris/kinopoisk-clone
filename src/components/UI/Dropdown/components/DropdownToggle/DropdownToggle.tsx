import React, {useContext, useEffect, useRef} from 'react';
import {DropdownContext} from "@/components/UI/Dropdown/DropdownContext.ts";


interface DropdownToggleProps {
  children?: React.ReactNode,
  className?: string | (({active}: {active: boolean}) => string),
}

function DropdownToggle({ children, className }: DropdownToggleProps) {
  const {
    show,
    setShow,
    setElements
  } = useContext(DropdownContext);
  const toggleRef = useRef<HTMLButtonElement>(null);


  const handleClick = () => setShow(!show)


  useEffect(() => {
    const toggleElement = toggleRef.current;
    if (toggleElement) {
      setElements(prev => ({ ...prev, toggle: toggleElement }));
    }
  }, [toggleRef]);


  return (
    <button
      ref={toggleRef}
      className={typeof className === "function"? className({active: show}): className}
      onClick={handleClick}
    >
      {children}
    </button>
  )
    ;
}

export default DropdownToggle;