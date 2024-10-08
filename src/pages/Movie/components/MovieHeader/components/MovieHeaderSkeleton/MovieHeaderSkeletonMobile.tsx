import classes from "../../styles.mobile.module.scss";
import {MoviePosterSkeleton} from "@/pages/Movie/components/MoviePoster";
import {MovieDescriptionSkeleton} from "@/pages/Movie/components/MovieDescription";
import Skeleton from "@/components/Skeleton";


function MovieHeaderSkeletonMobile() {
  return (
    <div>
      <div className={classes.posterContainer}>
        <MoviePosterSkeleton/>
      </div>

      <div className={classes.content}>
        <div className={classes.mainInfo}>
          <h1 className={classes.title}>
            <Skeleton variant="text" width="100%"/>
          </h1>
          <div className={classes.subtitle}>
            <Skeleton variant="text" width="100%"/>
          </div>

          <div className={classes.aboutMovie}>
            <Skeleton variant="text" width="100%"/>
          </div>
          <div className={classes.aboutMovie}>
            <Skeleton variant="text" width="100%"/>
          </div>
        </div>

        <MovieDescriptionSkeleton/>
      </div>
    </div>
  );
}

export default MovieHeaderSkeletonMobile;