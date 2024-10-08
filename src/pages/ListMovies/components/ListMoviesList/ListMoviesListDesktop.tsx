import {ListMoviesListProps} from "@/pages/ListMovies/components/ListMoviesList/ListMoviesList.tsx";
import {ListMoviesListItem} from "@/pages/ListMovies/components/ListMoviesList/components/ListMoviesListItem";
import {ListMoviesListItemSkeleton} from "@/pages/ListMovies/components/ListMoviesList/components/ListMoviesListItem";
import classes from "./styles.desktop.module.scss";


function ListMoviesListDesktop({movies}: ListMoviesListProps) {
  return (
    <div className={classes.list}>
      {movies ? (
        <>
          {movies.map(movie => (
            <ListMoviesListItem key={movie.id} movie={movie}/>
          ))}
        </>
        ):(
        <>
          {Array(50).fill(1).map((_, index) => (
            <ListMoviesListItemSkeleton key={index}/>
          ))}
        </>
      )}
    </div>
  );
}

export default ListMoviesListDesktop;