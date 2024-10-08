import {useQuery} from "react-query";
import {kinopoiskdevApi} from "@/services/api/kinopoiskdevApi";
import {CarouselSettings} from "@/components/Carousel/Carousel.tsx";
import {Carousel, CarouselItem} from "@/components/Carousel";
import {MovieSectionTitle, MovieSectionTitleSkeleton} from "@/components/MovieSectionTitle";
import {Card, CardSkeleton} from "@/components/Card";
import classes from "./styles.module.scss";
import {clsx} from "clsx";


interface MovieTicketsSectionProps {
  settings?: CarouselSettings,
  className?: string,
}

function MovieTicketsSection({settings, className}: MovieTicketsSectionProps) {
  const {data: movies, isSuccess} = useQuery({
    queryKey: "moviesTickets",
    queryFn: () => kinopoiskdevApi.getMoviesByFilters({
      limit: 20,
      notNullFields: ["premiere.russia"],
      sortField: ["premiere.russia"],
      sortType: ['-1'],
      ticketsOnSale: ["true"],
    })
  });
  const defaultSettings: CarouselSettings = {
    desktop: { spaceBetween: 8, ...settings?.desktop },
    mobile: { spaceBetween: 8, ...settings?.mobile }
  }


  if (!isSuccess) {
    return (
      <div className={clsx(className)}>
        <MovieSectionTitleSkeleton width={300}/>
        <div style={{display: "flex", width: "100%", overflow: "hidden"}}>
          {Array(10).fill(0).map((_, index) => (
            <div style={{marginRight: "8px"}} key={index}>
              <CardSkeleton/>
            </div>
          ))}
        </div>
      </div>
    );
  }


  if (!movies) {
    return (<></>);
  }


  return (
    <section className={clsx(className)}>
      <MovieSectionTitle>
        Билеты в кино
      </MovieSectionTitle>
      <Carousel
        settings={defaultSettings}
        buttonNextClassName={classes.button}
        buttonPrevClassName={classes.button}
      >
        {movies?.docs.map((movie) => (
          <CarouselItem key={movie.id}>
            <Card movie={movie}/>
          </CarouselItem>
        ))}
      </Carousel>
    </section>
  );
}

export default MovieTicketsSection;