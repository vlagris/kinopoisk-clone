import classes from "../../styles.module.scss";
import {MovieInListsItemSkeleton} from "../MovieInListsItemSkeleton";
import Skeleton from "@/components/Skeleton";


function MovieInListsSkeleton() {
  return (
    <div className={classes.inLists}>
      <h3 className={classes.title}>
        <Skeleton variant="text" width={200} />
      </h3>

      <div className={classes.list}>
        {Array(5).fill("").map((_, index) => (
          <MovieInListsItemSkeleton key={index}/>
        ))}
      </div>
    </div>
  );
}

export default MovieInListsSkeleton;