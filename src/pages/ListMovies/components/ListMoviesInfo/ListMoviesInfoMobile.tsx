import classes from "./styles.mobile.module.scss";
import {ListMoviesInfoViewProps} from "@/pages/ListMovies/components/ListMoviesInfo/ListMoviesInfo.tsx";
import Skeleton from "@/components/Skeleton";



function ListMoviesInfoMobile({listInfo, title}: ListMoviesInfoViewProps) {

  return (
    <div className={classes.info}>
      {listInfo.data?.cover?.url &&
        <div className={classes.coverWrapper}>
          <img
            className={classes.cover}
            src={listInfo.data.cover.url}
            alt={listInfo.data.name}
          />
        </div>
      }

      <h1 className={classes.title}>
        {listInfo.isSuccess || listInfo.fetchStatus === "idle" ? (
          listInfo.data?.name || title
        ):(
          <Skeleton variant="text" width={"70%"} />
        )}
      </h1>
    </div>
  );
}

export default ListMoviesInfoMobile;