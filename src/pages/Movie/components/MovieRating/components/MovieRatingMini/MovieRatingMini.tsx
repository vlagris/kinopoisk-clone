import {clsx} from "clsx";
import {transformToThousands} from "@/utils/transformToThousands.ts";
import {MovieRatingItemProps} from "@/pages/Movie/components/MovieRating/MovieRating.tsx";
import classes from "../../styles.module.scss";


function MovieRatingMini({rating, top250, votes, className, valueClassName}: MovieRatingItemProps) {
  if (!rating?.kp) {
    return (<></>);
  }

  return (
    <div className={clsx(classes.movieRating, className)}>
      <div className={classes.valueWrapper}>
        {top250 && <span className={clsx(classes.topListIcon, classes.topListIcon_left)}/>}
        <span className={valueClassName}>
          {rating?.kp?.toFixed(1)}
        </span>
        {top250 && <span className={clsx(classes.topListIcon, classes.topListIcon_right)}/>}
      </div>

      <div className={classes.countWrapper}>
        <span className={classes.count}>
          {transformToThousands(votes?.kp || 0, 3)}
        </span>
      </div>
    </div>
  );
}

export default MovieRatingMini;