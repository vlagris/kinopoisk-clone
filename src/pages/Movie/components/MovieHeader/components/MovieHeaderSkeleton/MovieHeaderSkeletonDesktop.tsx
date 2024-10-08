import {clsx} from "clsx";
import {MoviePosterSkeleton} from "@/pages/Movie/components/MoviePoster";
// import {Trailer} from "@/pages/Movie/components/Trailer";
import {MoviePersonHeaderSkeleton} from "@/pages/Movie/components/MovieHeader/components/MoviePersonHeader";
import {MovieRatingSkeleton} from "@/pages/Movie/components/MovieRating";
import {AboutMovieSkeleton} from "@/pages/Movie/components/AboutMovie";
import Skeleton from "@/components/Skeleton";
import classes from "../../styles.desktop.module.scss";



function MovieHeaderSkeletonDesktop() {
  return (
    <div className={classes.header}>
      <div className={classes.container}>
        <div className={classes.column}>
          <div className={classes.posterContainer}>
            <MoviePosterSkeleton/>
          </div>
          {/*<Trailer/>*/}
        </div>


        <div className={classes.column}>
          <div className={clsx(classes.row, classes.top)}>
            <div className={classes.column}>
              <h1 className={classes.title}>
                <Skeleton variant="text" width="60%"/>
              </h1>
              <div className={classes.subtitle}>
                  <span className={classes.subtitleText}>
                    <Skeleton variant="text" width={140}/>
                  </span>
              </div>
            </div>
            <div className={classes.column}>
              <div className={classes.ratingContainer}>
                <MovieRatingSkeleton variant="small"/>
              </div>
            </div>
          </div>

          <div className={classes.row}>
            <div className={classes.column}>
              <AboutMovieSkeleton/>
            </div>
            <div className={classes.column}>
              <div className={classes.crewContainer}>
                <MoviePersonHeaderSkeleton limit={10}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieHeaderSkeletonDesktop;