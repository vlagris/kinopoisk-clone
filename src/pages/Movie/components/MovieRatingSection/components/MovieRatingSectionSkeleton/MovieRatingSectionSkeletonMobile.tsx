import Skeleton from "@/components/Skeleton";
import {MovieSectionTitleSkeleton} from "@/components/MovieSectionTitle";
import {MovieRatingSkeleton} from "@/pages/Movie/components/MovieRating";
import classes from "../../styles.mobile.module.scss";



function MovieRatingSectionSkeletonMobile() {
  return (
    <div className={classes.ratingSection}>
      <MovieSectionTitleSkeleton width="100%"/>
      <div className={classes.rating}>
        <MovieRatingSkeleton variant="large"/>
      </div>
      <div style={{display: "flex", padding: "8px 16px 0"}}>
        <div style={{width: '100%', paddingRight: '8px'}}>
          <Skeleton width="100%" height={150}/>
        </div>
        <div style={{width: '100%', paddingRight: '8px'}}>
          <Skeleton width="100%" height={150}/>
        </div>
        <div style={{width: '100%'}}>
          <Skeleton width="100%" height={150}/>
        </div>
      </div>
    </div>
  );
}

export default MovieRatingSectionSkeletonMobile;