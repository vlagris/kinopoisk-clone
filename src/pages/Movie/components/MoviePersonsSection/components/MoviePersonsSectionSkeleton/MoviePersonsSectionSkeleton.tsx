import {isMobile} from "react-device-detect";
import {clsx} from "clsx";
import {MovieSectionTitleSkeleton} from "@/components/MovieSectionTitle";
import {MoviePersonsSectionCardSkeleton} from "@/pages/Movie/components/MoviePersonsSection/components/MoviePersonsSectionCard";
import classes from "../../styles.module.scss";


interface MoviePersonsSectionSkeletonProps {
  rows?: number
}

function MoviePersonsSectionSkeleton({rows = 1}: MoviePersonsSectionSkeletonProps) {
  return (
    <div className={classes.moviePersonsSection}>
      <MovieSectionTitleSkeleton
        width={"100%"}
        className={clsx(isMobile && classes.titleSmall)}
      />
      <div className={classes.carouselSkeleton}>
        {Array(5).fill(0).map((_, indexCol) => (
          <div key={indexCol} className={classes.carouselColSkeleton}>
            {Array(rows).fill(0).map((_, indexRow) => (
              <div key={indexCol + indexRow} className={classes.carouselItemSkeleton}>
                <MoviePersonsSectionCardSkeleton />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default MoviePersonsSectionSkeleton;