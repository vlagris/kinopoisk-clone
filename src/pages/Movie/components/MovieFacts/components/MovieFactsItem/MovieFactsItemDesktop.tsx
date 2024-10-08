import {MovieFactsItemProps} from "@/pages/Movie/components/MovieFacts/components/MovieFactsItem/MovieFactsItem.tsx";
import classes from "./styles.desktop.module.scss";


function MovieFactsItemDesktop({fact}: MovieFactsItemProps) {
  return (
    <li
      className={classes.item}
      dangerouslySetInnerHTML={{__html: fact.value}}
    />
  );
}

export default MovieFactsItemDesktop;