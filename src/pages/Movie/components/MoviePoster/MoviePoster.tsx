import {clsx} from "clsx";
import {isMobile} from "react-device-detect";
import {MoviePosterType} from "@/types";
import classes from "./styles.module.scss";
import EmptyPosterImage from "@/assets/icons/placeholder.svg";



interface MoviePosterProps {
  poster?: MoviePosterType,
  name?: string,
}

function MoviePoster({poster, name}: MoviePosterProps) {
  return (
    <div className={classes.poster}>
      <img
        src={poster?.previewUrl || EmptyPosterImage}
        alt={name || ""}
        className={clsx(isMobile ? classes.imageSmall : classes.image)}
      />
    </div>
  );
}

export default MoviePoster;