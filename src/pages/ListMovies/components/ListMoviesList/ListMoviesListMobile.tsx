import {ListMoviesListProps} from "@/pages/ListMovies/components/ListMoviesList/ListMoviesList.tsx";
import {ListMoviesItem} from "@/pages/ListMovies/components/ListMoviesItem";
import classes from "./styles.mobile.module.scss";


function ListMoviesListMobile({movies}: ListMoviesListProps) {
  return (
    <div className={classes.list}>
      {!!movies && movies.map(movie => (
        <ListMoviesItem key={movie.id} movie={movie}/>
      ))}
    </div>
  );
}

export default ListMoviesListMobile;