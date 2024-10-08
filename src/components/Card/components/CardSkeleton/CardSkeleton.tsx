import Skeleton from "@/components/Skeleton";
import {isMobile} from "react-device-detect";
import classes from "../../styles.module.scss";


function CardSkeleton() {



  return (
    <div className={classes.card}>
      <div className={classes.posterWrapper}>
        <Skeleton variant='rect' width={"100%"} height={isMobile? 150 : 225}/>
      </div>

      <div className={classes.info}>
        <span className={classes.title}>
          <Skeleton variant="text" width={"100%"} />
        </span>
        <span className={classes.subtitle}>
          <Skeleton variant="text" width={100} />
          </span>
      </div>
    </div>
  );
}

export default CardSkeleton;