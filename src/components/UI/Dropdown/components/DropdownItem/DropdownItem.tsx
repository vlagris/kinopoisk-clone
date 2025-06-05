import {useContext, MouseEvent, ReactNode} from 'react';
import {DropdownContext} from "@/components/UI/Dropdown/DropdownContext.ts";
import classes from "@/components/UI/Dropdown/styles.module.scss";


interface DropdownItemProps {
  children?: ReactNode,
  onClick?: (event: MouseEvent<HTMLLIElement>) => void
}

function DropdownItem({ children, onClick }: DropdownItemProps) {
  const {setShow} = useContext(DropdownContext);

  function handleClick(event: MouseEvent<HTMLLIElement>) {
    if (onClick) {
      onClick(event)
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