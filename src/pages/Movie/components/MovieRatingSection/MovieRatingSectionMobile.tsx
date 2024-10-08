import {MovieRatingSectionProps} from "@/pages/Movie/components/MovieRatingSection/MovieRatingSection.tsx";
import {MovieSectionTitle} from "@/components/MovieSectionTitle";
import {MovieRating} from "@/pages/Movie/components/MovieRating";
import {MovieRatingSectionCarousel}  from "./components/MovieRatingSectionCarousel";
import {MovieRatingSectionSkeletonMobile} from "@/pages/Movie/components/MovieRatingSection/components/MovieRatingSectionSkeleton";
import classes from "./styles.mobile.module.scss";



function MovieRatingSectionMobile({rating, top250, votes, isSuccess}: MovieRatingSectionProps) {

  if (!isSuccess) {
    return (<MovieRatingSectionSkeletonMobile/>);
  }

  return (
    <div className={classes.ratingSection}>
      <MovieSectionTitle>
        Рейтинг фильма
      </MovieSectionTitle>
      <div className={classes.rating}>
        <MovieRating variant="large" rating={rating} votes={votes} top250={top250}/>
      </div>

      <MovieRatingSectionCarousel rating={rating} votes={votes}/>
    </div>
  );
}

export default MovieRatingSectionMobile;