import {transformDate} from "@/utils/transformDate.ts";
import {MovieSectionTitleMobile} from "@/components/MovieSectionTitle";
import {AboutMovieRow} from "@/pages/Movie/components/AboutMovie/components/AboutMovieRow";
import {AboutMovieProps} from "@/pages/Movie/components/AboutMovie/AboutMovie.tsx";
import {MovieMoneyType} from "@/types";
import classes from "./styles.module.scss";


function getFormatedMoney(money?: MovieMoneyType) {
  const currency = money?.currency || "";
  const value = money?.value?.toLocaleString() || "";
  const result = currency + value;
  if (result) {
    return [{value: result}];
  }
}


function AboutMovieMobile({movie, title}: AboutMovieProps) {
  const slogan = [{ value: movie?.slogan && `«${movie?.slogan}»` }];
  const budget = getFormatedMoney(movie?.budget);
  const feesUsa = getFormatedMoney(movie?.fees?.usa);
  const feesWorld = getFormatedMoney(movie?.fees?.world);
  const feesRussia = getFormatedMoney(movie?.fees?.russia);
  const premiereRussia = movie?.premiere?.russia && transformDate(new Date(movie.premiere.russia));
  const premiereWorld = movie?.premiere?.world && transformDate(new Date(movie.premiere.world));
  const premiereDvd = movie?.premiere?.dvd && transformDate(new Date(movie.premiere.dvd));
  const premiereBluray = movie?.premiere?.bluray && transformDate(new Date(movie.premiere.bluray));


  return (
    <div className={classes.root_small}>
      <MovieSectionTitleMobile className={classes.title}>
        {title}
      </MovieSectionTitleMobile>
      <div className={classes.content}>
        <AboutMovieRow title="Слоган" values={slogan} required/>
        <AboutMovieRow title="Рейтинг MPAA">
          {!!movie?.ratingMpaa &&
            <span className={classes.ageRating}>
              {movie?.ratingMpaa}
            </span>
          }
        </AboutMovieRow>
        <AboutMovieRow title="Бюджет" values={budget}/>
        <AboutMovieRow title="Сборы в США" values={feesUsa}/>
        <AboutMovieRow title="Сборы в мире" values={feesWorld}/>
        <AboutMovieRow title="Сборы в России" values={feesRussia}/>
        <AboutMovieRow title="Премьера в России" values={[{value: premiereRussia}]} limited/>
        <AboutMovieRow title="Премьера в мире" values={[{value: premiereWorld}]} limited/>
        <AboutMovieRow title="Релиз на DVD" values={[{value: premiereDvd}]} limited/>
        <AboutMovieRow title="Релиз на Blu-ray" values={[{value: premiereBluray}]} limited/>
      </div>
    </div>
  );
}

export default AboutMovieMobile;