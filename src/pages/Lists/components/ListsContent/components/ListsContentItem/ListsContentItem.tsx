import {Link} from "react-router-dom";
import {ListType} from "@/types";
import {PATH_LINK} from "@/constants";
import classes from "./styles.module.scss";


interface ListsContentItemProps {
  list: ListType
}

function ListsContentItem({list}: ListsContentItemProps) {
  return (
    <Link
      to={PATH_LINK.LISTS_MOVIES(list.slug)}
      className={classes.item}
    >
      <div className={classes.preview}>
        <img
          src={list.cover.url || list.cover.previewUrl || ""}
          alt={list.name}
          className={classes.cover}
          loading="lazy"
        />
      </div>

      <div className={classes.info}>
        <span className={classes.name}>{list.name}</span>
        <span className={classes.filmCount}>{list.moviesCount}</span>
      </div>
    </Link>
  );
}

export default ListsContentItem;