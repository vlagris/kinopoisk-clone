import {clsx} from "clsx";
import Skeleton from "@/components/Skeleton";
import classes from "../../styles.module.scss";


function MoviePersonsSectionCardSkeleton() {
  return (
    <div className={classes.personCard}>
      <div className={classes.img}>
        <Skeleton variant="rect" width="100%" height="100%"  />
      </div>
      <div className={classes.info}>
        <span className={clsx(classes.title, classes.textEllipsis)}>
          <Skeleton variant="text" width={150} />
        </span>
        <span className={clsx(classes.subtitle, classes.textEllipsis)}>
          <Skeleton variant="text" width={150} />
        </span>
      </div>
    </div>
  );
}

export default MoviePersonsSectionCardSkeleton;