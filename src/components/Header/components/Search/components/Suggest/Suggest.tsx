import {UseQueryResult} from "@tanstack/react-query";
import {clsx} from "clsx";
import {isMobile} from "react-device-detect";
import {Movies} from "@/types";
import {SuggestGroup} from "@/components/Header/components/Search/components/Suggest/components/SuggestGroup";
import {SuggestItem} from "@/components/Header/components/Search/components/Suggest/components/SuggestItem";
import classes from "./styles.module.scss";


interface SuggestProps {
  moviesResult: UseQueryResult<Movies>,
  show?: boolean
}

function Suggest({moviesResult, show = true}: SuggestProps) {


  if (!show || !moviesResult.isSuccess) {
    return (<></>);
  }


  if (moviesResult.data?.docs?.length === 0) {
    return (
      <div className={clsx(classes.suggest, isMobile && classes.suggestSmall)}>
        <div className={classes.empty}>
          По вашему запросу ничего не найдено
        </div>
      </div>
    );
  }

  return (
    <div className={clsx(classes.suggest, isMobile && classes.suggestSmall)}>
      <SuggestGroup title="Фильмы и сериалы">
        {moviesResult.data?.docs.map(movie => (
          <SuggestItem key={movie.id} movie={movie}/>
        ))}
      </SuggestGroup>
    </div>
  );
}

export default Suggest;