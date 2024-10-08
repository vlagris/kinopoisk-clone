import {Link} from "react-router-dom";
import {clsx} from "clsx";
import classes from "../styles.module.scss";



export interface ToggleFiltersItemProps {
  value?: string,
  to: string,
  active?: boolean,
  disabled?: boolean
}

function ToggleFiltersItem({ value, to, active, disabled }: ToggleFiltersItemProps) {
  return (
    <Link
      to={to}
      className={clsx(classes.item, active && classes.item_active, disabled && classes.item_disabled)}
    >
      {value}
    </Link>
);
}

export default ToggleFiltersItem;