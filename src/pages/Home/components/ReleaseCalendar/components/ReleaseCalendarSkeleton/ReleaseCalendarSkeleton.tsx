import {clsx} from "clsx";
import {isMobile} from "react-device-detect";
import {MovieSectionTitle} from "@/components/MovieSectionTitle";
import {ReleaseCalendarItemSkeleton} from "@/pages/Home/components/ReleaseCalendar/components/ReleaseCalendarItem";
import classes from "../../styles.module.scss";


function ReleaseCalendarSkeleton() {
  return (
    <div className={clsx(classes.root, isMobile && classes.root_small)}>
      <h2 className={classes.title}>
        Календарь релизов
      </h2>
      <MovieSectionTitle className={classes.subtitle}>
        Билеты в кино
      </MovieSectionTitle>

      <ul className={classes.list}>
        {Array(10).fill(0).map((_, index) => (
          <ReleaseCalendarItemSkeleton key={index}/>
        ))}
      </ul>
    </div>
  );
}

export default ReleaseCalendarSkeleton;