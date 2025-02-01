import classes from "./styles.mobile.module.scss";
import {ListMoviesInfoViewProps} from "@/pages/ListMovies/components/ListMoviesInfo/ListMoviesInfo.tsx";
import Skeleton from "@/components/Skeleton";



function ListMoviesInfoMobile({title, img, isSuccess}: ListMoviesInfoViewProps) {

  return (
    <div className={classes.info}>
      {img &&
        <div className={classes.coverWrapper}>
          <img
            className={classes.cover}
            src={img}
            alt={title}
          />
        </div>
      }

      <h1 className={classes.title}>
        {isSuccess ? (
          title
        ):(
          <Skeleton variant="text" width={"70%"} />
        )}
      </h1>
    </div>
  );
}

export default ListMoviesInfoMobile;