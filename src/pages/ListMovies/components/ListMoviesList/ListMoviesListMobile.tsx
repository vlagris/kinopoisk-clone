import {ListMoviesListProps} from "@/pages/ListMovies/components/ListMoviesList/ListMoviesList.tsx";
import {ListMoviesListItem} from "@/pages/ListMovies/components/ListMoviesList/components/ListMoviesListItem";
import classes from "./styles.mobile.module.scss";


function ListMoviesListMobile({movies}: ListMoviesListProps) {
  return (
    <div className={classes.list}>
      {!!movies && movies.map(movie => (
        <ListMoviesListItem key={movie.id} movie={movie}/>
      ))}
    </div>
  );
}

export default ListMoviesListMobile;