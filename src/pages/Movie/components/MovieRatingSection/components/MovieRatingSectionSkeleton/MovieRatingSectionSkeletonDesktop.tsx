import {MovieSectionTitleSkeleton} from "@/components/MovieSectionTitle";
import {MovieRatingSkeleton} from "@/pages/Movie/components/MovieRating";
import classes from "../../styles.desktop.module.scss";
import Skeleton from "@/components/Skeleton";


function MovieRatingSectionSkeletonDesktop() {
  return (
    <div className={classes.ratingSection}>
      <MovieSectionTitleSkeleton className={classes.title} width={200}/>

      <div className={classes.content}>
        <div className={classes.form}>
            <Skeleton width={374} height={50}/>
        </div>

        <div className={classes.rating}>
          <MovieRatingSkeleton variant="medium"/>
        </div>
      </div>
    </div>
  );
}

export default MovieRatingSectionSkeletonDesktop;