import {clsx} from "clsx";
import {isMobile} from "react-device-detect";
import Skeleton from "@/components/Skeleton";
import classes from "../../styles.module.scss";


function ListMoviesListItemSkeleton() {
  return (
    <div className={clsx(classes.item, isMobile && classes.itemSmall)}>
      <div className={classes.poster}>
        <div className={classes.image}>
          <Skeleton variant="rect" width="100%" height="100%"/>
        </div>
      </div>

      <div className={classes.content}>
        <div className={classes.info}>
           <span className={classes.title}>
             <Skeleton variant="text" width={300}/>
           </span>

          <div className={classes.subtitle}>
            <Skeleton variant="text" width={150}/>
          </div>

          <div className={classes.additional}>
            <span className={classes.additionalText}>
            <Skeleton variant="text" width={100}/>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListMoviesListItemSkeleton;