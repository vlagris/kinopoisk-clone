import {clsx} from "clsx";
import {isMobile} from "react-device-detect";
import {useInfiniteQuery} from "react-query";
import {Movies} from "@/types";
import {kinopoiskdevApi} from "@/services/api/kinopoiskdevApi";
import {MovieSectionTitle} from "@/components/MovieSectionTitle";
import {ReleaseCalendarItem} from "@/pages/Home/components/ReleaseCalendar/components/ReleaseCalendarItem";
import {ReleaseCalendarSkeleton} from "./components/ReleaseCalendarSkeleton";
import classes from "./styles.module.scss";


function ReleaseCalendar() {
  const {
    data,
    isSuccess,
    fetchNextPage,
    hasNextPage
    // @ts-ignore
  } = useInfiniteQuery<Movies, any, Movies>({
    queryKey: ["moviesRelease"],
    queryFn: ({pageParam}) => kinopoiskdevApi.getMoviesByFilters({
      page: pageParam,
      limit: 250,
      notNullFields: ["premiere.russia"],
      selectFields: ["id", "name", "alternativeName", "poster", "premiere"],
      sortField: ["premiere.russia"],
      sortType: ['1'],
      year: ["2024"],
      type: ["movie"]
    }),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      if (lastPage.pages > lastPage.page) {
       return lastPage.page + 1
      }
    },
  });

  if (hasNextPage) {
    fetchNextPage().then();
  }

  const currentDate = new Date();
  const allMovies = data?.pages.map(item => item.docs).flat();
  const filteredMovie = allMovies?.filter((movie) => {
    const premiereRussia = movie.premiere.russia as string;
    const premiereDate = new Date(premiereRussia);
    return premiereDate.getFullYear() >= currentDate.getFullYear() &&
      premiereDate.getMonth() >= currentDate.getMonth() &&
      premiereDate.getDate() >= currentDate.getDate();
  });
  const slicedMovie = filteredMovie?.slice(0, 10);


  if (isSuccess && !allMovies?.length) {
    return (<></>)
  }

  if (!isSuccess || !slicedMovie?.length) {
    return (<ReleaseCalendarSkeleton/>)
  }

  return (
    <div className={clsx(classes.root, isMobile && classes.root_small)}>
      <h2 className={classes.title}>
        Календарь релизов
      </h2>
      <MovieSectionTitle className={classes.subtitle}>
        Билеты в кино
      </MovieSectionTitle>

      <div className={classes.scrollBar}>
        <ul className={classes.list}>
          {slicedMovie?.map((movie, index) => (
            <ReleaseCalendarItem movie={movie} index={index + 1} key={movie.id}/>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ReleaseCalendar;