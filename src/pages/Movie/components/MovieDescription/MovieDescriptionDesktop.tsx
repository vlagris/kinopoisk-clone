import {MovieDescriptionProps} from "@/pages/Movie/components/MovieDescription/MovieDescription.tsx";
import {MovieDescriptionSkeleton} from "@/pages/Movie/components/MovieDescription/components/MovieDescriptionSkeleton";
import classes from "./styles.desktop.module.scss";



function MovieDescriptionDesktop({description, isSuccess}: MovieDescriptionProps) {

  if (!isSuccess) {
    return (<MovieDescriptionSkeleton/>);
  }

  if (!description) {
    return (<></>);
  }

  return (
    <div className={classes.descriptionSection}>
      <div className={classes.description}>
        <p className={classes.paragraph}>
          {description}
        </p>
      </div>
    </div>
  );
}

export default MovieDescriptionDesktop;