import {clsx} from "clsx";
import {isMobile} from "react-device-detect";
import {useQuery} from "@tanstack/react-query";
import {getMoviesByFilters} from "@/services/moviesService.ts";
import {MovieSectionTitle} from "@/components/MovieSectionTitle";
import {ReleaseCalendarItem} from "@/pages/Home/components/ReleaseCalendar/components/ReleaseCalendarItem";
import {ReleaseCalendarSkeleton} from "./components/ReleaseCalendarSkeleton";
import classes from "./styles.module.scss";


function ReleaseCalendar() {
  const startDate = new Date().toLocaleDateString("ru");
  const endDate = new Date(new Date().setDate(new Date().getDate() + 30)).toLocaleDateString("ru");
  const { data: movies, isSuccess } = useQuery({
    queryKey: ["moviesRelease"],
    queryFn: () => getMoviesByFilters({
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