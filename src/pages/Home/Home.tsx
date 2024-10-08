import {clsx} from "clsx";
import {isMobile} from "react-device-detect";
import {Navbar} from "@/components/Navbar";
import {MovieTicketsSection} from "@/components/MovieTicketsSection";
import {ReleaseCalendar} from "./components/ReleaseCalendar";
import classes from "./styles.module.scss";


function Home() {
  return (
    <div className={classes.home}>

      {!isMobile &&
        <div className={clsx(classes.column, classes.columnSidebar)}>
          <div className={classes.sidebarContainer}>
            <div className={classes.sidebarSticky}>
              <Navbar/>
            </div>
          </div>
        </div>
      }

      <div className={clsx(classes.column, classes.columnContent)}>

        <section className={classes.section}>
          <MovieTicketsSection settings={{
            desktop: {slidesPerView: 6, slidesPerGroup: 5}
          }}/>
        </section>

        <section className={classes.section}>
          <ReleaseCalendar/>
        </section>

      </div>
    </div>
  );
}

export default Home;