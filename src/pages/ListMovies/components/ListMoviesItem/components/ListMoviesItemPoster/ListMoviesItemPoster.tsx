import {Link} from "react-router-dom";
import {isMobile} from "react-device-detect";
import {clsx} from "clsx";
import {MoviePosterType, MovieRatingType} from "@/types";
import classes from "./styles.module.scss";
import PlaceholderImage from "@/assets/icons/placeholder.svg";


interface ListMoviesItemPosterProps {
  poster?: MoviePosterType,
  rating?: MovieRatingType,
  href: string,
  alt?: string | null,
}

function ListMoviesItemPoster({ poster, href, alt, rating }: ListMoviesItemPosterProps) {
  return (
    <Link to={href} className={classes.poster}>
      <img
        src={poster?.previewUrl || PlaceholderImage}
        alt={alt || ""}
        loading="lazy"
        className={classes.image}
      />
      {isMobile && !!rating?.kp &&
        <div className={clsx(classes.rating, rating.kp < 7 && classes.ratingGray)}>
          {rating.kp.toFixed(1)}
        </div>
      }
    </Link>
  );
}

export default ListMoviesItemPoster;