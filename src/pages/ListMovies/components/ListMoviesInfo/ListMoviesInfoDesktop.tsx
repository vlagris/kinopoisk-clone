import {ListMoviesInfoViewProps} from "@/pages/ListMovies/components/ListMoviesInfo/ListMoviesInfo.tsx";
import Skeleton from "@/components/Skeleton";
import classes from "./styles.desktop.module.scss";


function ListMoviesInfoDesktop({title, img, isSuccess}: ListMoviesInfoViewProps) {

  return (
    <div className={classes.info}>
      <div className={classes.main}>

        <h1 className={classes.title}>
          {isSuccess ? (
            title
          ):(
            <Skeleton variant="text" width={"70%"} />
          )}
        </h1>
      </div>


      {img &&
        <div className={classes.coverWrapper}>
          <img
            className={classes.cover}
            src={img}
            alt={title}
          />
        </div>
      }
    </div>
  );
}

export default ListMoviesInfoDesktop;