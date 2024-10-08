import {clsx} from "clsx";
import {MovieRatingItemProps} from "@/pages/Movie/components/MovieRating/MovieRating.tsx";
import classes from "../../styles.module.scss";


function MovieRatingEmpty({className}: MovieRatingItemProps) {
  return (
    <div className={clsx(classes.movieRating, className)}>
      <div className={classes.valueWrapper}>
        <span className={clsx(classes.value, classes.valueUnknown)}>
          —
        </span>
      </div>
      <div className={classes.text}>
        Недостаточно оценок, &#10;
        рейтинг формируется
      </div>
    </div>
  );
}

export default MovieRatingEmpty;