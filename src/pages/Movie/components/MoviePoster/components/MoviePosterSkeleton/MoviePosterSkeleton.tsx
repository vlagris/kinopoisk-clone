import {clsx} from "clsx";
import {isMobile} from "react-device-detect";
import Skeleton from "@/components/Skeleton";
import classes from "../../styles.module.scss";



function MoviePosterSkeleton() {
  return (
    <div className={classes.poster}>
      <div className={clsx(isMobile ? classes.imageSmall : classes.image)}>
        <Skeleton width="100%" height={isMobile ? 320 : 430}/>
      </div>
    </div>
  );
}

export default MoviePosterSkeleton;