import {ListMoviesListProps} from "@/pages/ListMovies/components/ListMoviesList/ListMoviesList.tsx";
import {ListMoviesListItem} from "@/pages/ListMovies/components/ListMoviesList/components/ListMoviesListItem";
import classes from "./styles.desktop.module.scss";


function ListMoviesListDesktop({movies}: ListMoviesListProps) {
  return (
    <div className={classes.list}>
      {!!movies && movies.map(movie => (
        <ListMoviesListItem key={movie.id} movie={movie}/>
      ))}
    </div>
  );
}

export default ListMoviesListDesktop;