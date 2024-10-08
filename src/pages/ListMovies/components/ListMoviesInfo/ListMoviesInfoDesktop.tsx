import {ListMoviesInfoViewProps} from "@/pages/ListMovies/components/ListMoviesInfo/ListMoviesInfo.tsx";
import Skeleton from "@/components/Skeleton";
import classes from "./styles.desktop.module.scss";


function ListMoviesInfoDesktop({listInfoResult, title}: ListMoviesInfoViewProps) {
  const listInfo = listInfoResult?.data;

  return (
    <div className={classes.info}>
      <div className={classes.main}>

        <h1 className={classes.title}>
          {listInfoResult.isSuccess || listInfoResult.isIdle ? (
            listInfo?.name || title
          ):(
            <Skeleton variant="text" width={"70%"} />
          )}
        </h1>
      </div>


      {listInfo?.cover?.url &&
        <div className={classes.coverWrapper}>
          <img
            className={classes.cover}
            src={listInfo.cover.url}
            alt={listInfo.name}
          />
        </div>
      }
    </div>
  );
}

export default ListMoviesInfoDesktop;