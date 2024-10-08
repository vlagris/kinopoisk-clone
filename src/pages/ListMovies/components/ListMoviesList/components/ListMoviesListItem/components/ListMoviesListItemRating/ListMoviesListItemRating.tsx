import {clsx} from "clsx";
import {MovieRatingType} from "@/types";
import {transformToThousands} from "@/utils/transformToThousands.ts";
import classes from "./styles.module.scss";


interface ListMoviesListItemRatingProps {
  top250: number | null,
  rating: MovieRatingType,
  votes: MovieRatingType

}

function ListMoviesListItemRating({top250, rating, votes}: ListMoviesListItemRatingProps) {
  const valueClassName = clsx(
    classes.rate,
    rating.kp &&
    ((top250 && classes.rate_gold) ||
    (rating.kp >= 7 && classes.rate_green) ||
    (rating.kp <= 5 && classes.rate_red))
  );


  if (rating.kp) {
    return (
      <div className={classes.rating}>
        <div className={classes.rateContainer}>
          {!!top250 && <span className={classes.leftLeaf}/>}
          <span className={valueClassName}>
              {rating.kp?.toFixed(1)}
          </span>
          {!!top250 && <span className={classes.rightLeaf}/>}
        </div>
          <span className={classes.count}>
          {!!votes.kp && transformToThousands(votes.kp, 6)}
        </span>
      </div>
    );
  }

  if (votes.await) {
    return (
      <div className={classes.rating}>
        <span className={clsx(classes.count, classes.countAwait)}>
          {transformToThousands(votes.await, 3)}
        </span>
        <span className={classes.count}>
          Добавили в «Буду смотреть»
        </span>
      </div>
    );
  }

  return (
    <div className={classes.rating}>
      <div className={classes.empty}>
        —
      </div>
    </div>
  );
}

export default ListMoviesListItemRating;