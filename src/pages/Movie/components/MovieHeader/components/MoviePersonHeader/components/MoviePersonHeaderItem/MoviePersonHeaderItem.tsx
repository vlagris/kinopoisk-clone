import {MoviePersonType} from "@/types";
import classes from "../../styles.module.scss";



interface MoviePersonHeaderItemProps {
  person: MoviePersonType
}

function MoviePersonHeaderItem({person}: MoviePersonHeaderItemProps) {
  return (
    <li className={classes.item}>
      {person.name}
    </li>
  );
}

export default MoviePersonHeaderItem;