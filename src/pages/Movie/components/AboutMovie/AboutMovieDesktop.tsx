import {MovieMoneyType, MoviePersonType} from "@/types";
import {AboutMovieProps} from "@/pages/Movie/components/AboutMovie/AboutMovie.tsx";
import {AboutMovieRow} from "@/pages/Movie/components/AboutMovie/components/AboutMovieRow";
import {MovieSectionTitleDesktop} from "@/components/MovieSectionTitle";
import {transformDate} from "@/utils/transformDate.ts";
import {convertMinutesToHours} from "@/utils/convertMinutesToHours.ts";
import classes from "./styles.module.scss";


// @ts-ignore
function getPersonsByProfession(persons?: MoviePersonType[], enProfession: string) {
  if (!persons) {
    return;
  }
  const result = persons.filter(item => item.enProfession === enProfession);
  if (result.length > 0) {
    return result.map(item => ({value: item.name || item.enName}));
  }
}


function getFormatedMoney(money?: MovieMoneyType) {
  const currency = money?.currency || "";
  const value = money?.value?.toLocaleString() || "";
  const result = currency + value;
  if (result) {
    return [{value: result}];
  }
}



function AboutMovieDesktop({title, movie}: AboutMovieProps) {
  const year = [{value: movie?.year}];
  const countries = movie?.countries?.map(item => ({value: item.name}));
  const genres = movie?.genres?.map(item => ({value: item.name}));
  const slogan = [{ value: movie?.slogan && `«${movie?.slogan}»` }];
  const directors = getPersonsByProfession(movie?.persons, "director");
  const writers = getPersonsByProfession(movie?.persons, "writer");
  const producers = getPersonsByProfession(movie?.persons, "producer");
  const operators = getPersonsByProfession(movie?.persons, "operator");
  const composers = getPersonsByProfession(movie?.persons, "composer");
  const designers = getPersonsByProfession(movie?.persons, "designer");
  const editor = getPersonsByProfession(movie?.persons, "editor");
  const budget = getFormatedMoney(movie?.budget);
  const feesUsa = getFormatedMoney(movie?.fees?.usa);
  const feesWorld = getFormatedMoney(movie?.fees?.world);
  const feesRussia = getFormatedMoney(movie?.fees?.russia);
  const premiereRussia = movie?.premiere?.russia && transformDate(new Date(movie.premiere.russia));
  const premiereWorld = movie?.premiere?.world && transformDate(new Date(movie.premiere.world));
  const premiereDvd = movie?.premiere?.dvd && transformDate(new Date(movie.premiere.dvd));
  const premiereBluray = movie?.premiere?.bluray && transformDate(new Date(movie.premiere.bluray));
  const movieLength = movie?.movieLength && convertMinutesToHours(movie?.movieLength);
  const seriesLength = movie?.seriesLength && convertMinutesToHours(movie?.seriesLength);


  return (
    <div>
      <MovieSectionTitleDesktop className={classes.title}>
        {title}
      </MovieSectionTitleDesktop>
      <div>
        <AboutMovieRow title="Год производства" values={year} required/>
        <AboutMovieRow title="Страна" values={countries} required/>
        <AboutMovieRow title="Жанры" values={genres} required/>
        <AboutMovieRow title="Слоган" values={slogan} required/>
        <AboutMovieRow title="Режиссер" values={directors} required limited/>
        <AboutMovieRow title="Сценарий" values={writers} required limited/>
        <AboutMovieRow title="Продюсер" values={producers} required limited/>
        <AboutMovieRow title="Оператор" values={operators} limited/>
        <AboutMovieRow title="Композитор" values={composers} required limited/>
        <AboutMovieRow title="Художник" values={designers} limited/>
        <AboutMovieRow title="Монтаж" values={editor} limited/>
        <AboutMovieRow title="Бюджет" values={budget}/>
        <AboutMovieRow title="Сборы в США" values={feesUsa}/>
        <AboutMovieRow title="Сборы в мире" values={feesWorld}/>
        <AboutMovieRow title="Сборы в России" values={feesRussia}/>
        <AboutMovieRow title="Премьера в России" values={[{value: premiereRussia}]} limited/>
        <AboutMovieRow title="Премьера в мире" values={[{value: premiereWorld}]} limited/>
        <AboutMovieRow title="Релиз на DVD" values={[{value: premiereDvd}]} limited/>
        <AboutMovieRow title="Релиз на Blu-ray" values={[{value: premiereBluray}]} limited/>
        <AboutMovieRow title="Возраст">
          {!!movie?.ageRating &&
            <span className={classes.ageRating}>
              {movie?.ageRating}+
            </span>
          }
        </AboutMovieRow>
        <AboutMovieRow title="Рейтинг MPAA">
          {!!movie?.ratingMpaa &&
            <span className={classes.ageRating}>
              {movie?.ratingMpaa}
            </span>
          }
        </AboutMovieRow>
        {movie?.isSeries ? (
          <AboutMovieRow title="Время серии" values={[{value: seriesLength}]} required/>
        ) : (
          <AboutMovieRow title="Время" values={[{value: movieLength}]} required/>
        )}
      </div>
    </div>
  );
}

export default AboutMovieDesktop;