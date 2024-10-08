import Skeleton from "@/components/Skeleton";
import classes from "../../styles.mobile.module.scss";



function MovieDescriptionSkeletonMobile(){
  return (
    <div className={classes.description}>
      <p className={classes.paragraph}>
        <Skeleton width="100%" count={3} />
      </p>
    </div>
  );
}

export default MovieDescriptionSkeletonMobile;