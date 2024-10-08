import {MovieSectionTitleSkeleton} from "@/components/MovieSectionTitle";
import {AboutMovieRowSkeleton} from "@/pages/Movie/components/AboutMovie/components/AboutMovieRow";
import classes from "../../styles.module.scss";


function AboutMovieSkeleton() {
  return (
    <div>
      <MovieSectionTitleSkeleton className={classes.title} width={180}/>
      <div>
        {Array(15).fill(0).map((_, i) => (
          <AboutMovieRowSkeleton key={i}/>
        ))}
      </div>
    </div>
  );
}

export default AboutMovieSkeleton;