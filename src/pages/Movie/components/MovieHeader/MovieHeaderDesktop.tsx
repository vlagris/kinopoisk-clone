import {clsx} from "clsx";
import {MoviePoster} from "@/pages/Movie/components/MoviePoster";
import {Trailer} from "@/pages/Movie/components/Trailer";
import MovieRating from "../MovieRating/MovieRating.tsx";
import {AboutMovieDesktop} from "../AboutMovie";
import {MovieHeaderProps} from "@/pages/Movie/components/MovieHeader/MovieHeader.tsx";
import {MoviePersonHeader} from "./components/MoviePersonHeader";
import {MovieHeaderSkeletonDesktop} from "@/pages/Movie/components/MovieHeader/components/MovieHeaderSkeleton";
import classes from "./styles.desktop.module.scss";



function MovieHeaderDesktop({movie, isSuccess}: MovieHeaderProps) {
  const actors = movie?.persons?.filter(item => item.enProfession === "actor");
  const voiceActors = movie?.persons?.filter(item => item.enProfession === "voice_actor");


  if (!isSuccess) {
    return (<MovieHeaderSkeletonDesktop/>);
  }

  return (
      <div className={classes.header}>
        <div className={classes.container}>
          <div className={classes.column}>
            <div className={classes.posterContainer}>
              <MoviePoster poster={movie?.poster}/>
            </div>
            <Trailer/>
          </div>


          <div className={classes.column}>
            <div className={clsx(classes.row, classes.top)}>
              <div className={classes.column}>
                <h1 className={classes.title}>
                  {movie?.name} {movie?.year && `(${movie?.year})`}
                </h1>
                <div className={classes.subtitle}>
                  {movie?.alternativeName &&
                    <span className={classes.subtitleText}>
                      {movie?.alternativeName}
                    </span>
                  }
                  {movie?.ageRating &&
                    <span className={classes.subtitleText}>
                      {movie?.ageRating + "+"}
                    </span>
                  }
                </div>
              </div>
              <div className={classes.column}>
                <div className={classes.ratingContainer}>
                  <MovieRating
                    variant="small"
                    rating={movie?.rating}
                    votes={movie?.votes}
                    top250={movie?.top250}
                    premiere={movie?.premiere}
                  />
                </div>
              </div>
            </div>

            <div className={classes.row}>
              <div className={classes.column}>
                <AboutMovieDesktop title="О фильме" movie={movie}/>
              </div>
              <div className={classes.column}>
                <div className={classes.crewContainer}>
                  <MoviePersonHeader title="В главных ролях" persons={actors} limit={10}/>
                  <MoviePersonHeader title="Роли дублировали" persons={voiceActors} limit={5}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default MovieHeaderDesktop;