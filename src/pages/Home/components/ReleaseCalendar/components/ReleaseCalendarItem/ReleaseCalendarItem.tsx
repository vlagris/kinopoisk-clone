import {Link} from "react-router-dom";
import {isMobile} from "react-device-detect";
import {clsx} from "clsx";
import {MovieType} from "@/types";
import {PATH_LINK} from "@/constants";
import classes from "./styles.module.scss";
import PlaceholderImage from "@/assets/icons/placeholder.svg"


export type ReleaseCalendarMovieType = Pick<MovieType, "id" | "name" | "alternativeName" | "poster" | "premiere">


interface ReleaseCalendarItemProps {
  movie: ReleaseCalendarMovieType,
  index: number
}

function ReleaseCalendarItem({ movie, index }: ReleaseCalendarItemProps) {
  const premiereDate = new Date(movie.premiere.russia as string);
  const dateMonth = premiereDate?.toLocaleString("ru", {
    month: isMobile ? "short" : "long",
  }).replace(".", '');


  return (
    <li className={clsx(classes.root, isMobile && classes.root_small)}>
      {!isMobile &&
        <span className={classes.index}>
          {index}.
        </span>
      }
      <Link to={PATH_LINK.MOVIE(movie.id)} className={classes.posterLink}>
        <img
          className={classes.poster}
          src={movie.poster?.previewUrl || PlaceholderImage || ""}
          alt={movie.name || ""}
        />
      </Link>
      <div className={classes.titleWrapper}>
        <Link to={PATH_LINK.MOVIE(movie.id)} className={classes.title}>
          {movie.name}
        </Link>
        <span className={classes.subtitle}>
          {movie.alternativeName}
        </span>
      </div>

      <div className={classes.date}>
        <div className={classes.dateDay}>
          {premiereDate?.getDate()}
        </div>
        <span>
          {dateMonth}
        </span>
      </div>
    </li>
  );
}

export default ReleaseCalendarItem;