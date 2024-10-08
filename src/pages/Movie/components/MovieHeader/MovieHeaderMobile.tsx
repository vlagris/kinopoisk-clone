import {MovieHeaderProps} from "@/pages/Movie/components/MovieHeader/MovieHeader.tsx";
import {MoviePoster} from "@/pages/Movie/components/MoviePoster";
import {convertMinutesToHours} from "@/utils/convertMinutesToHours.ts";
import {MovieDescriptionMobile} from "@/pages/Movie/components/MovieDescription";
import {MovieRating} from "@/pages/Movie/components/MovieRating";
import {MovieHeaderSkeletonMobile} from "@/pages/Movie/components/MovieHeader/components/MovieHeaderSkeleton";
import classes from "./styles.mobile.module.scss";



function MovieHeaderMobile({movie, isSuccess}: MovieHeaderProps) {
  const genres = movie?.genres?.map((genre) => genre.name).join(", ");


  if (!isSuccess) {
    return (<MovieHeaderSkeletonMobile/>);
  }

  return (
    <div>
      <div className={classes.posterContainer}>
        <MoviePoster poster={movie?.poster}/>
      </div>

      <div className={classes.content}>
        <div className={classes.mainInfo}>
          <h1 className={classes.title}>{movie?.name || movie?.alternativeName}</h1>
          <div className={classes.subtitle}>
            <div className={classes.movieRatingContainer}>
              <MovieRating variant="mini" rating={movie?.rating} votes={movie?.votes} top250={movie?.top250}/>
            </div>
            {(movie?.name && movie?.alternativeName) &&
              <span className={classes.originalName}>{movie.alternativeName}</span>
            }
          </div>

          <div className={classes.aboutMovie}>
            {[movie?.year, genres].filter(Boolean).join(", ")}
          </div>
          <div className={classes.aboutMovie}>
            {
              [movie?.countries?.[0].name,
              convertMinutesToHours(movie?.movieLength || 0),
              movie?.ageRating && movie?.ageRating + "+"]
              .filter(Boolean).join(", ")
            }
          </div>
        </div>

        <MovieDescriptionMobile description={movie?.description} shortDescription={movie?.shortDescription} isSuccess={isSuccess}/>
      </div>
    </div>
  );
}

export default MovieHeaderMobile;