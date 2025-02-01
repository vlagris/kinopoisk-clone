import {clsx} from "clsx";
import {MovieAdaptiveProps} from "@/pages/Movie/Movie.tsx";
import {MovieHeaderDesktop} from "@/pages/Movie/components/MovieHeader";
import {MovieInLists} from "./components/MovieInLists";
import {MovieDescription} from "@/pages/Movie/components/MovieDescription";
import {MovieRatingSection} from "@/pages/Movie/components/MovieRatingSection";
import {SimilarMovies} from "@/pages/Movie/components/SimilarMovies";
import {MovieTicketsSection} from "@/components/MovieTicketsSection";
import {MovieFactsDesktop} from "@/pages/Movie/components/MovieFacts";
import classes from "./styles.desktop.module.scss";



function MovieDesktop({movie, isSuccess}: MovieAdaptiveProps) {
  return (
    <div className={classes.moviePage}>
      <MovieHeaderDesktop movie={movie} isSuccess={isSuccess}/>

      <div className={classes.main}>
        <div className={clsx("container", classes.mainContainer)}>
          <div className={classes.column}>
            <MovieDescription
              description={movie?.description}
              isSuccess={isSuccess}
            />
            <MovieRatingSection
              rating={movie?.rating}
              votes={movie?.votes}
              top250={movie?.top250}
              premiere={movie?.premiere}
              isSuccess={isSuccess}
            />
            <SimilarMovies
              className={classes.sectionContainer}
              similarMovies={movie?.similarMovies}
              isSuccess={isSuccess}
            />
            <MovieTicketsSection className={classes.sectionContainer}/>

            <MovieFactsDesktop
              title="Знаете ли вы, что…"
              facts={movie?.facts?.filter(item => item.type === "FACT")}
              isSuccess={isSuccess}
            />

            <MovieFactsDesktop
              title="Ошибки в фильме"
              facts={movie?.facts?.filter(item => item.type === "BLOOPER")}
              isSuccess={isSuccess}
            />
          </div>

          <div className={classes.column}/>

          <div className={classes.column}>
            <MovieInLists movieLists={movie?.lists} isSuccess={isSuccess}/>
          </div>
        </div>
      </div>

    </div>
  );
}

export default MovieDesktop;