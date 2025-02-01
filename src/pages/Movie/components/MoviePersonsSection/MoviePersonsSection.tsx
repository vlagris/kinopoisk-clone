import {clsx} from "clsx";
import {isMobile} from "react-device-detect";
import {MoviePersonType} from "@/types";
import {MovieSectionTitle} from "@/components/MovieSectionTitle";
import {Carousel, CarouselItem} from "@/components/Carousel";
import {MoviePersonsSectionCard} from "./components/MoviePersonsSectionCard";
import classes from "./styles.module.scss";
import {
  MoviePersonsSectionSkeleton
} from "@/pages/Movie/components/MoviePersonsSection/components/MoviePersonsSectionSkeleton";
import {useMemo} from "react";



export interface MoviePersonsSectionProps {
  title: string,
  persons?: MoviePersonType[],
  rows?: number,
  itemSubtitleFieldName: keyof MoviePersonType,
  isSuccess: boolean
}

function MoviePersonsSection({title, persons, rows = 1, itemSubtitleFieldName, isSuccess}: MoviePersonsSectionProps) {
  const chunkedPersons = useMemo(() => {
    return persons?.reduce((result, item, i) => {
      const chunkI = Math.floor(i / rows);
      result[chunkI] = [...(result[chunkI] || []), item];
      return result;
    }, [] as MoviePersonType[][]);
  }, [persons])


  if (!isSuccess) {
    return (<MoviePersonsSectionSkeleton rows={rows}/>);
  }

  if (!persons) {
    return (<></>);
  }

  return (
    <div className={classes.moviePersonsSection}>
      <MovieSectionTitle className={clsx(isMobile && classes.titleSmall)}>
        {title}
      </MovieSectionTitle>
      <Carousel
        spaceBetween={16}
      >
        {chunkedPersons?.map((chunk, index) => (
          <CarouselItem key={index}>
            {chunk?.map((person, rowIndex) => (
              <MoviePersonsSectionCard
                key={rowIndex}
                image={person.photo || ""}
                title={person.name || person.enName || ""}
                subtitle={person[itemSubtitleFieldName]}
              />
            ))}
          </CarouselItem>
        ))}
      </Carousel>
    </div>
  );
}

export default MoviePersonsSection;