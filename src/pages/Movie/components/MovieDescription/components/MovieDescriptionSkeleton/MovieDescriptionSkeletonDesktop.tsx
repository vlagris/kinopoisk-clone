import Skeleton from "@/components/Skeleton";
import classes from "../../styles.desktop.module.scss";



function MovieDescriptionSkeletonDesktop(){
  return (
    <div className={classes.descriptionSection}>
      <div className={classes.description}>
        <p className={classes.paragraph}>
          <Skeleton width={"100%"} count={3} />
        </p>
      </div>
    </div>
  );
}

export default MovieDescriptionSkeletonDesktop;