import {Link} from "react-router-dom";
import {clsx} from "clsx";
import {ListMoviesListItemProps} from "./ListMoviesListItem.tsx";
import {convertMinutesToHours} from "@/utils/convertMinutesToHours.ts";
import {PATH_LINK} from "@/constants";
import classes from "./styles.module.scss";
import PlaceholderImage from "@/assets/icons/placeholder.svg";



function ListMoviesListItemMobile({movie}: ListMoviesListItemProps) {
  return (
    <div className={clsx(classes.item, classes.itemSmall)}>
      <Link to={PATH_LINK.MOVIE(movie.id)} className={classes.poster}>
        <img
          src={movie.poster?.previewUrl || PlaceholderImage}
          alt=""
          loading="lazy"
          className={classes.image}
        />
        {!!movie.rating.kp &&
          <div className={clsx(classes.posterRating, movie.rating.kp < 7 && classes.posterRating_gray)}>
            {movie.rating.kp.toFixed(1)}
          </div>
        }
      </Link>

      <div className={classes.content}>
        <Link to={PATH_LINK.MOVIE(movie.id)} className={classes.info}>
           <span className={classes.title}>
             {movie.name}
           </span>

          <div className={classes.subtitle}>
            {movie.alternativeName &&
              <span className={clsx(classes.subtitleText, classes.truncatedText)}>
                  {movie.alternativeName}
              </span>
            }
            <span className={classes.subtitleText}>
              {movie.alternativeName && ", "}
              {movie.year && movie.year + ", "}
              {movie.movieLength && convertMinutesToHours(movie.movieLength)}
            </span>
          </div>

          <div className={classes.additional}>
            <span className={clsx(classes.additionalText, classes.truncatedText)}>
              {movie.countries?.[0].name}
              {movie.genres?.[0].name && " • " + movie.genres[0].name}
            </span>
          </div>
        </Link>
      </div>

    </div>
  );
}

export default ListMoviesListItemMobile;