import {MovieSectionTitleSkeleton} from "@/components/MovieSectionTitle";
import Skeleton from "@/components/Skeleton";
import classes from "../../styles.desktop.module.scss";


function MovieFactsSkeletonDesktop() {
  return (
    <section className={classes.root}>
      <MovieSectionTitleSkeleton width={300}/>

      <Skeleton variant="rect" width="100%" height={280}/>
    </section>
  );
}

export default MovieFactsSkeletonDesktop;