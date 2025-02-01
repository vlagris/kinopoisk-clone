import {clsx} from "clsx";
import {isMobile} from "react-device-detect";
import {SimilarMovieType} from "@/types";
import {Carousel, CarouselItem} from "@/components/Carousel";
import {MovieSectionTitle} from "@/components/MovieSectionTitle";
import {SimilarMoviesSkeleton} from "./components/SimilarMoviesSkeleton";
import {Card} from "@/components/Card";
import classes from "./styles.module.scss";



interface SimilarMoviesProps {
  similarMovies?: SimilarMovieType[],
  isSuccess: boolean,
  className?: string
}

function SimilarMovies({similarMovies, isSuccess, className}: SimilarMoviesProps) {

  if (!isSuccess) {
    return (
      <SimilarMoviesSkeleton/>
    );
  }

  if (!similarMovies?.length) {
    return (<></>);
  }

  return (
    <section className={clsx(classes.similar, className)}>
      <MovieSectionTitle>
        {isMobile? "Похожие" : "Если вам понравился этот фильм"}
      </MovieSectionTitle>
      <Carousel
        buttonNextClassName={classes.button}
        buttonPrevClassName={classes.button}
      >
        {similarMovies?.map((movie) => (
          <CarouselItem key={movie.id}>
            <Card movie={movie}/>
          </CarouselItem>
        ))}
      </Carousel>
    </section>
  );
}

export default SimilarMovies;