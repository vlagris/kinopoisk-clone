import {clsx} from "clsx";
import {transformToThousands} from "@/utils/transformToThousands.ts";
import {MovieRatingItemProps} from "@/pages/Movie/components/MovieRating/MovieRating.tsx";
import classes from "../../styles.module.scss";


function MovieRatingAwait({votes, className}: MovieRatingItemProps) {
  return (
    <div className={clsx(classes.movieRating, className)}>
      <div className={classes.textWrapper}>
          <span className={classes.valueAwait}>
            {votes?.await ?
              transformToThousands(votes?.await, 3)
              :
              "—"
            }
          </span>
        <div className={classes.text}>
          {votes?.await ?
           "Добавили в «Буду смотреть»\n и ждут премьеры"
            :
            "Количество добавивших\n в «Буду смотреть» появится позже"
          }
        </div>
      </div>
    </div>
  );
}

export default MovieRatingAwait;