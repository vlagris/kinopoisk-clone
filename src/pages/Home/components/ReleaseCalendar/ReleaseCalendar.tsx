import {clsx} from "clsx";
import {isMobile} from "react-device-detect";
import {useQuery} from "react-query";
import {kinopoiskdevApi} from "@/services/api/kinopoiskdevApi";
import {MovieSectionTitle} from "@/components/MovieSectionTitle";
import {ReleaseCalendarItem} from "@/pages/Home/components/ReleaseCalendar/components/ReleaseCalendarItem";
import {ReleaseCalendarSkeleton} from "./components/ReleaseCalendarSkeleton";
import classes from "./styles.module.scss";


function ReleaseCalendar() {
  const startDate = new Date().toLocaleDateString("ru");
  const endDate = new Date(new Date().setDate(new Date().getDate() + 30)).toLocaleDateString("ru");
  const { data: movies, isSuccess } = useQuery({
    queryKey: ["moviesRelease"],
    queryFn: () => kinopoiskdevApi.getMoviesByFilters({
      limit: 10,
      notNullFields: ["premiere.russia"],
      selectFields: ["id", "name", "alternativeName", "poster", "premiere"],
      sortField: ["premiere.russia"],
      sortType: ['1'],
      "premiere.russia": [`${startDate}-${endDate}`],
      year: ["2024"],
      type: ["movie"]
    })
  });



  if (isSuccess && !movies.docs?.length) {
    return (<></>)
  }

  if (!isSuccess) {
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
          {movies.docs?.map((movie, i) => (
            <ReleaseCalendarItem
              key={movie.id}
              movie={movie}
              index={i + 1}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ReleaseCalendar;


// const {
//   data,
//   isSuccess,
//   fetchNextPage,
//   hasNextPage
//   // @ts-ignore
// } = useInfiniteQuery<Movies, any, Movies>({
//   queryKey: ["moviesRelease"],
//   queryFn: ({pageParam}) => kinopoiskdevApi.getMoviesByFilters({
//     page: pageParam,
//     limit: 250,
//     notNullFields: ["premiere.russia"],
//     selectFields: ["id", "name", "alternativeName", "poster", "premiere"],
//     sortField: ["premiere.russia"],
//     sortType: ['1'],
//     year: ["2024"],
//     type: ["movie"]
//   }),
//   initialPageParam: 1,
//   getNextPageParam: (lastPage) => {
//     if (lastPage.pages > lastPage.page) {
//       return lastPage.page + 1
//     }
//   },
// });
//
// if (hasNextPage) {
//   fetchNextPage().then();
// }
//
// const currentDate = new Date();
// const allMovies = data?.pages.map(item => item.docs).flat();
// const filteredMovie = allMovies?.filter((movie) => {
//   const premiereRussia = movie.premiere.russia as string;
//   const premiereDate = new Date(premiereRussia);
//   return premiereDate.getFullYear() >= currentDate.getFullYear() &&
//     premiereDate.getMonth() >= currentDate.getMonth() &&
//     premiereDate.getDate() >= currentDate.getDate();
// });
// const slicedMovie = filteredMovie?.slice(0, 10);