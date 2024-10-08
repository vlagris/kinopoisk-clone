import {Link} from "react-router-dom";
import {clsx} from "clsx";
import classes from "./styles.module.scss";



interface ListMoviesGroupsItemProps {
  to?: string,
  title?: string,
  count?: string | number
}

function ListMoviesListsFiltersItem({to, count, title}: ListMoviesGroupsItemProps) {
  return (
    <Link to={to || ""} className={clsx(classes.item, classes.item_active)}>
      <span className={classes.title}>
        { title }
      </span>
      <span className={classes.subtitle}>
        {!!count && count + " фильмов"}
      </span>
    </Link>
  );
}

export default ListMoviesListsFiltersItem;