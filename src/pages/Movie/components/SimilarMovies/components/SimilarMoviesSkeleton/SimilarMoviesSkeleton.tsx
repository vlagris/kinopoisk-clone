import {CardSkeleton} from "@/components/Card";
import {MovieSectionTitleSkeleton} from "@/components/MovieSectionTitle";
import classes from "../../styles.module.scss";


function SimilarMoviesSkeleton() {
  return (
    <div className={classes.similar}>
      <MovieSectionTitleSkeleton className={classes.title} width={300}/>
      <div style={{display: "flex", width: "100%", overflow: "hidden", padding: "0 16px"}}>
        <div style={{marginRight: "8px"}}>
          <CardSkeleton/>
        </div>
        <div style={{marginRight: "8px"}}>
          <CardSkeleton/>
        </div>
        <div style={{marginRight: "8px"}}>
          <CardSkeleton/>
        </div>
        <div style={{marginRight: "8px"}}>
          <CardSkeleton/>
        </div>
        <div style={{marginRight: "8px"}}>
          <CardSkeleton/>
        </div>
        <div style={{marginRight: "8px"}}>
          <CardSkeleton/>
        </div>
        <div>
          <CardSkeleton/>
        </div>
      </div>
    </div>
  );
}

export default SimilarMoviesSkeleton;