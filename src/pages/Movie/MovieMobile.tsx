import {useMemo} from "react";
import {MoviePersonType} from "@/types";
import {MovieAdaptiveProps} from "@/pages/Movie/Movie.tsx";
import {MovieHeaderMobile} from "@/pages/Movie/components/MovieHeader";
import {MoviePersonsSection} from "@/pages/Movie/components/MoviePersonsSection";
import {MovieRatingSection} from "@/pages/Movie/components/MovieRatingSection";
import {SimilarMovies} from "@/pages/Movie/components/SimilarMovies";
import {MovieTicketsSection} from "@/components/MovieTicketsSection";
import {MovieFactsMobile} from "@/pages/Movie/components/MovieFacts";
import classes from "./styles.mobile.module.scss";
import {AboutMovieMobile} from "@/pages/Movie/components/AboutMovie";



function MovieMobile({movie, isSuccess}: MovieAdaptiveProps) {
  const actors = useMemo(() => {
    const professions = ["actor"];
    return movie?.persons?.filter(({enProfession}) => professions.includes(enProfession))
  }, [movie?.persons]);

  const authors = useMemo(() => {
    return movie?.persons?.reduce((result, person): MoviePersonType[] => {
      const professions = ["director", "operator", "composer", "producer", "writer"];
      if (!professions.includes(person.enProfession)) {
        return result;
      }
      person.profession = person.profession[0].toUpperCase() + person.profession.slice(1);
      const isAdd = !!result?.find(({id}) => id === person.id);
      if (!isAdd) {
        return [...result, person]
      }
      result?.forEach((item) => {
        if (item.id === person.id) {
          item.profession += ", " + person.profession;
        }
      });
      return result
    }, [] as MoviePersonType[]);
  }, [movie?.persons]);


  return (
    <div className={classes.root}>
      <MovieHeaderMobile movie={movie} isSuccess={isSuccess}/>
      <div className={classes.sectionContainer}>
        <MoviePersonsSection
          title="Актеры"
          subTitle="enName"
          rows={4}
          persons={actors}
          isSuccess={isSuccess}
        />
      </div>
      <div className={classes.sectionContainer}>
        <MoviePersonsSection
          title="Создатели"
          subTitle="profession"
          rows={2}
          persons={authors}
          isSuccess={isSuccess}
        />
      </div>
      <div className={classes.sectionContainer}>
        <MovieRatingSection
          rating={movie?.rating}
          votes={movie?.votes}
          top250={movie?.top250}
          premiere={movie?.premiere}
          isSuccess={isSuccess}
        />
      </div>
      <div className={classes.sectionContainer}>
        <SimilarMovies
          similarMovies={movie?.similarMovies}
          isSuccess={isSuccess}
        />
      </div>
      <div className={classes.sectionContainer}>
        <MovieTicketsSection/>
      </div>
      <div className={classes.sectionContainer}>
        <MovieFactsMobile
          title="Знаете ли вы, что…"
          facts={movie?.facts?.filter(item => item.type === "FACT")}
          poster={movie?.poster}
          name={movie?.name}
          isSuccess={isSuccess}
        />
      </div>
      <div className={classes.sectionContainer}>
        <MovieFactsMobile
          title="Ошибки в фильме"
          facts={movie?.facts?.filter(item => item.type === "BLOOPER")}
          isSuccess={isSuccess}
        />
      </div>

      <div className={classes.sectionContainer}>
        <AboutMovieMobile
          title="Дополнительные данные"
          movie={movie}
        />
      </div>
    </div>
  );
}

export default MovieMobile;