import {MovieSectionTitleSkeleton} from "@/components/MovieSectionTitle";
import Skeleton from "@/components/Skeleton";
import classes from "../../styles.mobile.module.scss";


function MovieFactsSkeletonMobile() {
  return (
    <section className={classes.root}>
      <MovieSectionTitleSkeleton width={280}/>
      <div className={classes.scrollBar} style={{overflowX: "hidden"}}>
        {Array(5).fill(0).map((_, index) => (
          <div key={index} style={{marginRight: "8px"}}>
            <Skeleton variant="rect" width={300} height={164} />
          </div>
        ))}
      </div>

    </section>
  );
}

export default MovieFactsSkeletonMobile;