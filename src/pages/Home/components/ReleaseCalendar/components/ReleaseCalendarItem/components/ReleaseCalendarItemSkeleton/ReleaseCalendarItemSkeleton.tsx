import {clsx} from "clsx";
import {isMobile} from "react-device-detect";
import Skeleton from "@/components/Skeleton";
import classes from "../../styles.module.scss";


function ReleaseCalendarItemSkeleton() {
  return (
    <li className={clsx(classes.root, isMobile && classes.root_small)}>
      <div className={classes.posterLink}>
        <div className={classes.poster}>
          <Skeleton variant="rect" width="100%" height="100%"/>
        </div>
      </div>
      <div className={classes.titleWrapper}>
        <div  className={classes.title}>
          <Skeleton variant="text" width={150}/>
        </div>
      </div>

      <div className={classes.date}>
        <div className={classes.dateDay}>
          <Skeleton variant="text" width={isMobile? 15 : 25}/>
        </div>
        <span>
          <Skeleton variant="text" width={isMobile? 20 : 50}/>
        </span>
      </div>
    </li>
  );
}

export default ReleaseCalendarItemSkeleton;