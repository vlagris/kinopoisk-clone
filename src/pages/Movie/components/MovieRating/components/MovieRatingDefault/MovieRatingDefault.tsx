import classes from "../../styles.module.scss";
import {clsx} from "clsx";
import {Link} from "react-router-dom";
import {PATH_LINK} from "@/constants";
import {MovieRatingItemProps} from "@/pages/Movie/components/MovieRating/MovieRating.tsx";


function MovieRatingDefault({top250, rating, votes, className, valueClassName, variant}: MovieRatingItemProps) {
  return (
    <div className={clsx(classes.movieRating, className)}>
      <div className={classes.valueWrapper}>
        <span className={valueClassName}>
          {rating?.kp?.toFixed(1)}
        </span>

        {top250 && (
          <Link className={classes.topListPositionBadge} to={PATH_LINK.LISTS_MOVIES("top250")}>
            <span className={clsx(classes.topListIcon, classes.topListIcon_left)}/>
            <div className={classes.topListInfo}>
              <span className={classes.topListTitle}>топ 250</span>
              <span className={classes.topListPosition}>{top250} место</span>
            </div>
            <span className={clsx(classes.topListIcon, classes.topListIcon_right)}/>
          </Link>
        )}
      </div>

      <div className={classes.countWrapper}>
        {!!votes?.kp &&
          <span className={classes.count}>{votes?.kp?.toLocaleString()} оценок</span>
        }
        {variant === "medium" && !!rating?.imdb &&
          <span className={classes.count}>
          <span className={classes.countTitle}>IMDb: {rating?.imdb?.toFixed(1)}</span>
            {votes?.imdb?.toLocaleString("ru")} оценок
          </span>
        }
      </div>
    </div>
  );
}

export default MovieRatingDefault;