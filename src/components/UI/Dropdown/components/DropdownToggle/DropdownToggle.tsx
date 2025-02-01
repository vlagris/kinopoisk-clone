import {useContext, ReactNode, useCallback} from 'react';
import {DropdownContext} from "@/components/UI/Dropdown/DropdownContext.ts";


interface DropdownToggleProps {
  children?: ReactNode,
  className?: string | (({active}: {active: boolean}) => string),
}

function DropdownToggle({ children, className }: DropdownToggleProps) {
  const {show, setShow, seToggle} = useContext(DropdownContext);


  const ref = useCallback((node: HTMLButtonElement | null) => {
    if (node) {
      seToggle(node)
    }
  }, [show]);


  const handleClick = () => setShow(!show)


  return (
    <button
      ref={ref}
      className={typeof className === "function"? className({active: show}): className}
      onClick={handleClick}
    >
      {children}
    </button>
  )
    ;
}

export default DropdownToggle;