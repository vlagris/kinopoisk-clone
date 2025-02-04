import {Link} from "react-router-dom";
import {clsx} from "clsx";
import {ListMoviesListItemProps} from "./ListMoviesItem.tsx";
import {PATH_LINK} from "@/constants";
import {ListMoviesItemRating} from "@/pages/ListMovies/components/ListMoviesItem/components/ListMoviesItemRating";
import {ListMoviesItemPoster} from "./components/ListMoviesItemPoster";
import {convertMinutesToHours} from "@/utils/convertMinutesToHours.ts";
import classes from "./styles.module.scss";



function ListMoviesItemDesktop({movie}: ListMoviesListItemProps) {
  const duration = movie.movieLength && convertMinutesToHours(movie.movieLength);
  const name = movie.name || movie.alternativeName;
  const alternativeName = !!movie.name && movie.alternativeName || null;
  const href = PATH_LINK.MOVIE(movie.id);


  return (
    <div className={classes.item}>
      <ListMoviesItemPoster
        poster={movie.poster}
        rating={movie.rating}
        href={href}
        alt={movie.name}
      />

      <div className={classes.content}>
        <Link to={href} className={classes.info}>
           <span className={classes.title}>
             {name}
           </span>

          <div className={classes.subtitle}>
            {alternativeName &&
              <span className={clsx(classes.subtitleText, classes.truncatedText)}>
                {alternativeName}
              </span>
            }
            <span className={clsx(classes.subtitleText, classes.truncatedText)}>
              {alternativeName && ", "}
              {[movie.year, duration].filter(Boolean).join(", ") }
            </span>
          </div>

          <div className={classes.additional}>
            <span className={clsx(classes.additionalText, classes.truncatedText)}>
              {[movie.countries?.[0]?.name, movie.genres?.[0].name].filter(Boolean).join(" • ") }
            </span>
          </div>
        </Link>


        <div className={classes.user}>
          <ListMoviesItemRating
            top250={movie.top250} rating={movie.rating} votes={movie.votes}/>
        </div>

      </div>

    </div>
  );
}

export default ListMoviesItemDesktop;