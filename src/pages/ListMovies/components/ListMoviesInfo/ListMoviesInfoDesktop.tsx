import {ListMoviesInfoViewProps} from "@/pages/ListMovies/components/ListMoviesInfo/ListMoviesInfo.tsx";
import Skeleton from "@/components/Skeleton";
import classes from "./styles.desktop.module.scss";


function ListMoviesInfoDesktop({listInfo, title}: ListMoviesInfoViewProps) {

  return (
    <div className={classes.info}>
      <div className={classes.main}>

        <h1 className={classes.title}>
          {listInfo.isSuccess || listInfo.fetchStatus === "idle" ? (
            listInfo.data?.name || title
          ):(
            <Skeleton variant="text" width={"70%"} />
          )}
        </h1>
      </div>


      {listInfo.data?.cover?.url &&
        <div className={classes.coverWrapper}>
          <img
            className={classes.cover}
            src={listInfo.data.cover.url}
            alt={listInfo.data.name}
          />
        </div>
      }
    </div>
  );
}

export default ListMoviesInfoDesktop;