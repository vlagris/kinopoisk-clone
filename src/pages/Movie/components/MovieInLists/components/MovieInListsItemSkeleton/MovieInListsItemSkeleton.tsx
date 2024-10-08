import Skeleton from "@/components/Skeleton";
import classes from "../../styles.module.scss";


function MovieInListsItemSkeleton() {
  return (
    <div className={classes.item}>
      <div className={classes.itemImage}>
        <Skeleton variant="rect" height="100%" width="100%" />
      </div>
      <div className={classes.itemInfo}>
        <h3 className={classes.itemTitle}>
          <Skeleton variant="text" width="100%" />
        </h3>
        <span className={classes.itemSubtitle}>
          <Skeleton variant="text" width={50} />
        </span>
      </div>
    </div>
  );
}

export default MovieInListsItemSkeleton;