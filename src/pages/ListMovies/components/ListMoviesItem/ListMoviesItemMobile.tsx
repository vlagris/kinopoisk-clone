import {Link} from "react-router-dom";
import {clsx} from "clsx";
import {ListMoviesListItemProps} from "./ListMoviesItem.tsx";
import {PATH_LINK} from "@/constants";
import ListMoviesItemPoster from "./components/ListMoviesItemPoster/ListMoviesItemPoster.tsx";
import classes from "./styles.module.scss";



function ListMoviesItemMobile({movie}: ListMoviesListItemProps) {
  const href = PATH_LINK.MOVIE(movie.id);

  return (
    <div className={clsx(classes.item, classes.itemSmall)}>
      <ListMoviesItemPoster
        poster={movie.poster}
        rating={movie.rating}
        href={href}
        alt={movie.name}
      />


      <div className={classes.content}>
        <Link to={href} className={classes.info}>
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
              {movie.alternativeName && movie.year && ", " + movie.year}
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

export default ListMoviesItemMobile;