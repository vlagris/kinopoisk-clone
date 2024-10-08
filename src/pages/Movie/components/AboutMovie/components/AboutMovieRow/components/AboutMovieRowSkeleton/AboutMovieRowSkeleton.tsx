import Skeleton from "@/components/Skeleton";
import classes from "../../../../styles.module.scss";


function AboutMovieRowSkeleton() {
  return (
    <div className={classes.row}>
        {/*<Skeleton variant="rect" width="100%"/>*/}
      <span className={classes.rowTitle}>
        <Skeleton variant="rect" width="100%"/>
      </span>
      <div className={classes.rowValues}>
        <span className={classes.rowValue}>
          <Skeleton variant="rect" width={"100%"}/>
        </span>
      </div>
    </div>
  );
}

export default AboutMovieRowSkeleton;