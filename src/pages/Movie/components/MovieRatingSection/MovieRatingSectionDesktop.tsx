import {useMemo, useState} from "react";
import {MovieRatingSectionProps} from "@/pages/Movie/components/MovieRatingSection/MovieRatingSection.tsx";
import {MovieSectionTitle} from "@/components/MovieSectionTitle";
import {MovieRating} from "@/pages/Movie/components/MovieRating";
import {MovieRatingSectionStarsItem} from "./components/MovieRatingSectionStarsItem";
import {MovieRatingSectionSkeletonDesktop} from "./components/MovieRatingSectionSkeleton";
import classes from "./styles.desktop.module.scss";
import {getIsPremiered} from "@/utils/getIsPremiered.ts";



function MovieRatingSectionDesktop({rating, top250, premiere, votes, isSuccess}: MovieRatingSectionProps) {
  const [hoverIndex, setHoverIndex] = useState<number>();
  const isPremiered = useMemo(() => getIsPremiered(premiere), [premiere]);


  const starsArray = useMemo(() => {
    return Array(10).fill(0).map((_, index) => {
      const hovered = hoverIndex !== undefined;
      const ratingKp = rating?.kp || 0;
      const ratingFloor = Math.floor(ratingKp);
      const ratingFraction = ratingKp - ratingFloor;
      if (hovered && index <= hoverIndex) {
        return {hover: true};
      }
      if (hovered) {
        return {};
      }
      if (index < ratingFloor) {
        return {active: true};
      }
      if (index + 1 === Math.ceil(ratingKp) && ratingFraction > 0) {
        return {width: Math.round(100 * ratingFraction)};
      }
      return {};
    })
  }, [rating, hoverIndex])


  const createAddHoverIndex = (index: number) => () => setHoverIndex(index);
  const removeHoverIndex = () => setHoverIndex(undefined);


  if (!isSuccess) {
    return (<MovieRatingSectionSkeletonDesktop/>);
  }

  if (!isPremiered) {
    return (<></>);
  }

  return (
    <div className={classes.ratingSection}>
      <MovieSectionTitle className={classes.title}>
        Рейтинг фильма
      </MovieSectionTitle>

      <div className={classes.content}>
        <div className={classes.form}>
          {starsArray.map(({width, hover, active}, index) => (
            <MovieRatingSectionStarsItem
              key={index}
              value={index + 1}
              width={width}
              type={hover && "hover" || active && "active" || undefined}
              onMouseEnter={createAddHoverIndex(index)}
              onMouseLeave={removeHoverIndex}
            />
          ))}
        </div>

        <div className={classes.rating}>
          <MovieRating
            variant="medium"
            rating={rating}
            votes={votes}
            top250={top250}
            premiere={premiere}
          />
        </div>
      </div>
    </div>
  );
}

export default MovieRatingSectionDesktop;