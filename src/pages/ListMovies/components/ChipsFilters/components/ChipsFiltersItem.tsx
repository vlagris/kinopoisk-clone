import {Link} from "react-router-dom";
import {clsx} from "clsx";
import classes from "../styles.module.scss";



interface ChipsFiltersItemProps {
  value?: string,
  to: string,
  active?: boolean,
  disabled?: boolean
}

function ChipsFiltersItem({ value, to, active, disabled }: ChipsFiltersItemProps) {
  return (
    <Link
      to={to}
      className={clsx(classes.item, active && classes.item_active, disabled && classes.item_disabled)}
    >
      {value}
    </Link>
);
}

export default ChipsFiltersItem;