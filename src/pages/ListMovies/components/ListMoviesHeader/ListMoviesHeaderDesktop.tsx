import {Link} from "react-router-dom";
import {PATH_LINK} from "@/constants";
import classes from "./styles.desktop.module.scss";


function ListMoviesHeaderDesktop() {
  return (
    <div className={classes.header}>
      <Link to={PATH_LINK.LISTS_CATEGORIES_MOVIES} className={classes.btnLists}>
        Все списки
      </Link>
    </div>
  );
}

export default ListMoviesHeaderDesktop;