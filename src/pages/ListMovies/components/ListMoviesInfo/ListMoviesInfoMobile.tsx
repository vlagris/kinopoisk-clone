import classes from "./styles.mobile.module.scss";
import {ListMoviesInfoViewProps} from "@/pages/ListMovies/components/ListMoviesInfo/ListMoviesInfo.tsx";
import Skeleton from "@/components/Skeleton";



function ListMoviesInfoMobile({listInfoResult, title}: ListMoviesInfoViewProps) {
  const listInfo = listInfoResult.data

  return (
    <div className={classes.info}>
      {listInfo?.cover?.url &&
        <div className={classes.coverWrapper}>
          <img
            className={classes.cover}
            src={listInfo.cover.url}
            alt={listInfo.name}
          />
        </div>
      }

      <h1 className={classes.title}>
        {listInfoResult.isSuccess || listInfoResult.isIdle ? (
          listInfo?.name || title
        ):(
          <Skeleton variant="text" width={"70%"} />
        )}
      </h1>
    </div>
  );
}

export default ListMoviesInfoMobile;