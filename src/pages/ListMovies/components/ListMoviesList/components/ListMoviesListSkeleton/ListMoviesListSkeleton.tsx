import {ListMoviesListItemSkeleton} from "@/pages/ListMovies/components/ListMoviesList/components/ListMoviesListItem";
import classes from "../../styles.desktop.module.scss";


function ListMoviesListSkeleton() {
  return (
    <div className={classes.list}>
      {Array(50).fill(1).map((_, index) => (
        <ListMoviesListItemSkeleton key={index}/>
      ))}
    </div>
  );
}

export default ListMoviesListSkeleton;