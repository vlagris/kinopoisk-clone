import {MovieSectionTitleSkeleton} from "@/components/MovieSectionTitle";
import Skeleton from "@/components/Skeleton";
import classes from "../../styles.module.scss";


interface MoviePersonHeaderSkeletonProps {
  limit?: number
}

function MoviePersonHeaderSkeleton({limit = 10}: MoviePersonHeaderSkeletonProps) {
  return (
    <div className={classes.personHeader}>
      <MovieSectionTitleSkeleton className={classes.title} width={170}/>
      <ul className={classes.list}>
        {Array(limit).fill(0).map((_, index) => (
          <li className={classes.item} key={index}>
            <Skeleton variant="text" width={120}/>
          </li>
        ))}
      </ul>
      <span className={classes.moreItemsLink}>
          <Skeleton variant="text" width={60}/>
      </span>
    </div>
  );
}

export default MoviePersonHeaderSkeleton;