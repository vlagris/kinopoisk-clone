import Skeleton from "@/components/Skeleton";
import classes from "../../styles.module.scss";



function ListsContentItemSkeleton() {
  return (
    <div className={classes.item}>
      <div className={classes.preview}>
        <Skeleton variant="rect" height="100%"/>
      </div>

      <div className={classes.info}>
        <span className={classes.name}>
          <Skeleton variant="text" width="580px"/>
        </span>
        <span className={classes.filmCount}>
          <Skeleton variant="text" width="300px"/>
        </span>
      </div>
    </div>
  );
}

export default ListsContentItemSkeleton;