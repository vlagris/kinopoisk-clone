import {Link} from "react-router-dom";
import {clsx} from "clsx";
import {MovieType} from "@/types";
import {PATH_LINK} from "@/constants";
import classes from "./styles.module.scss";
import EmptyPosterImage from "@/assets/icons/placeholder.svg";


interface SuggestItemProps {
  movie: MovieType,
}

function SuggestItem({movie}: SuggestItemProps) {
  const ratingClassName = clsx(
    classes.rating,
    movie.rating.kp &&
    ((movie.rating.kp >= 7 && classes.rating_green) ||
    (movie.rating.kp <= 5 && classes.rating_red) ||
    classes.rating_neutral)
  );
  const release = movie.releaseYears?.[0]?.start + "-" + (movie.releaseYears?.[0]?.end || "...");
  const year = movie.isSeries ? release : movie.year;
  const subtitle = [movie.alternativeName, movie.isSeries && "сериал", year].filter(Boolean).join(", ");


  return (
    <li className={classes.suggestItem}>
      <div className={classes.main}>
        <div className={classes.imgContainer}>
          <img
            className={classes.img}
            src={movie.poster?.previewUrl || EmptyPosterImage}
            alt={movie.name || ""}
          />
        </div>
        <div className={classes.info}>
          <h4 className={classes.title}>
            <Link className={classes.link} to={PATH_LINK.MOVIE(movie.id)}>
              {movie.name}
            </Link>
          </h4>
          <div className={classes.subtitleContainer}>
            <span className={ratingClassName}>
              {movie.rating.kp ? movie.rating.kp.toFixed(1) : "—"}
            </span>
            <span className={classes.subtitle}>
              {subtitle}
            </span>
          </div>
        </div>
      </div>
    </li>
  );
}

export default SuggestItem;