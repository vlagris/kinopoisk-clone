import {Link} from "react-router-dom";
import {ListType} from "@/types";
import {PATH_LINK} from "@/constants";
import classes from "../../styles.module.scss";


interface MovieInListsItemProps {
  list?: ListType
}

function MovieInListsItem({list}: MovieInListsItemProps){

  return (
    <Link className={classes.item} to={PATH_LINK.LISTS_MOVIES(list?.slug)}>
      <img
        className={classes.itemImage}
        src={list?.cover?.url || ""}
        alt={list?.name}
      />
      <div className={classes.itemInfo}>
        <h3 className={classes.itemTitle}>
          {list?.name}
        </h3>
        <span className={classes.itemSubtitle}>
          {list?.moviesCount}
        </span>
      </div>
    </Link>
  );
}

export default MovieInListsItem;