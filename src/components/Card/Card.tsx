import {clsx} from "clsx";
import {Link} from "react-router-dom";
import {isMobile} from "react-device-detect";
import {PATH_LINK} from "@/constants";
import {SimilarMovieType} from "@/types";
import classes from "./styles.module.scss";
import ImagePlaceholder from "@/assets/icons/placeholder.svg";



interface CardProps {
  movie: SimilarMovieType
}

function Card({movie}: CardProps) {
  const rating = movie.rating.kp


  return (
    <div className={clsx(classes.card, isMobile && classes.card_small)}>
      <Link to={PATH_LINK.MOVIE(movie.id)} className={classes.link}>

      <div className={classes.posterWrapper}>
        <img
          className={classes.poster}
          src={movie.poster.previewUrl || ImagePlaceholder}
          alt={movie.name || ""}
        />

        <div className={classes.posterOverlay}>
          {!!rating &&
            <div className={clsx(classes.rating, rating >= 7 && classes.rating_green)}>
              {rating.toFixed(1)}
            </div>
          }
        </div>
      </div>

      <div className={classes.info}>
        <span className={classes.title}>
          {movie.name}
        </span>
        {!!movie.year &&
          <span className={classes.subtitle}>
            {movie.year}
          </span>
        }
      </div>
      </Link>
    </div>
  );
}

export default Card;