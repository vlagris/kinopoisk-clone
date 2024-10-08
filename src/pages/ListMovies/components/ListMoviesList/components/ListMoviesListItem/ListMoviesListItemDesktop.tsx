import {Link} from "react-router-dom";
import {clsx} from "clsx";
import {ListMoviesListItemProps} from "./ListMoviesListItem.tsx";
import {PATH_LINK} from "@/constants";
import {ListMoviesListItemRating} from "@/pages/ListMovies/components/ListMoviesList/components/ListMoviesListItem/components/ListMoviesListItemRating";
import {convertMinutesToHours} from "@/utils/convertMinutesToHours.ts";
import classes from "./styles.module.scss";
import PlaceholderImage from "@/assets/icons/placeholder.svg";



function ListMoviesListItemDesktop({movie}: ListMoviesListItemProps) {
  const duration = movie.movieLength && convertMinutesToHours(movie.movieLength);
  const name = movie.name || movie.alternativeName;
  const alternativeName = !!movie.name && movie.alternativeName || null;


  return (
    <div className={classes.item}>
      <Link to={PATH_LINK.MOVIE(movie.id)} className={classes.link}>
        <img
          src={movie.poster?.previewUrl || PlaceholderImage}
          alt=""
          loading="lazy"
          className={classes.image}
        />
      </Link>

      <div className={classes.content}>
        <Link to={PATH_LINK.MOVIE(movie.id)} className={classes.info}>
           <span className={classes.title}>
             {name}
           </span>

          <div className={classes.subtitle}>
            {alternativeName &&
              <span className={clsx(classes.subtitleText, classes.truncatedText)}>
                {alternativeName}
              </span>
            }
            <span className={classes.subtitleText}>
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
          <ListMoviesListItemRating top250={movie.top250} rating={movie.rating} votes={movie.votes}/>
        </div>

      </div>

    </div>
  );
}

export default ListMoviesListItemDesktop;