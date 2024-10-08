import {clsx} from "clsx";
import {MovieRatingVariant} from "@/pages/Movie/components/MovieRating/MovieRating.tsx";
import Skeleton from "@/components/Skeleton";
import classes from "../../styles.module.scss";



interface MovieRatingSkeletonProps {
  variant: MovieRatingVariant
}

function MovieRatingSkeleton({variant}: MovieRatingSkeletonProps) {
  const size: {[p in MovieRatingVariant]: [number, number]} = {
    mini: [25, 40],
    small: [45, 100],
    medium: [65, 250],
    large: [100, 150],
  }

  return (
    <div className={clsx(classes.movieRating, variant !== "medium" && classes[`movieRating_${variant}`])}>
      <div className={classes.valueWrapper}>
        <span
          className={classes.value}>
          <Skeleton variant="text" width={size[variant][0]} />
        </span>
      </div>

      <div className={classes.countWrapper}>
        <span className={classes.count}>
          <Skeleton variant="text" width={size[variant][1]}/>
        </span>
      </div>
    </div>
  );
}

export default MovieRatingSkeleton;