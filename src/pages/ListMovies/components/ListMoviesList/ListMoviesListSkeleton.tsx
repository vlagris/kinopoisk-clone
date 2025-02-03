import {ListMoviesItemSkeleton} from "@/pages/ListMovies/components/ListMoviesItem";
import classes from "./styles.desktop.module.scss";


function ListMoviesListSkeleton() {
  return (
    <div className={classes.list}>
      {Array(50).fill(1).map((_, index) => (
        <ListMoviesItemSkeleton key={index}/>
      ))}
    </div>
  );
}

export default ListMoviesListSkeleton;