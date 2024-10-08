import {RatingCarouselItem}  from "@/pages/Movie/components/MovieRatingSection/components/MovieRatingSectionCarousel/components/RatingCarouselItem";
import {MovieRatingType} from "@/types";
import classes from "./styles.module.scss";


// type MovieRatingTypePick = keyof Pick<MovieRatingType, "imdb" | "filmCritics" | "russianFilmCritics">

interface MovieRatingSectionCarouselProps {
  rating?: MovieRatingType,
  votes?: MovieRatingType;
}

function MovieRatingSectionCarousel({rating, votes}: MovieRatingSectionCarouselProps) {
  const itemsProps = [
    { title: "IMDb", rating: rating?.imdb, votes: votes?.imdb },
    { title: "Рейтинг кинокритиков", rating: rating?.filmCritics, votes: votes?.filmCritics },
    { title: "Рос. кинокритики", rating: Math.round(rating?.russianFilmCritics || 0) + "%", votes: votes?.russianFilmCritics },
  ]


  return (
    <div className={classes.carousel}>
      <div className={classes.scrollbar}>
        {itemsProps.map((item, index) => (
          (!!(item.title && item.rating && item.votes) &&
            <RatingCarouselItem
              title={item.title}
              key={index}
              rating={item.rating}
              votes={item.votes}
            />
          )
        ))}
      </div>
    </div>
  );
}

export default MovieRatingSectionCarousel;