import {MoviePersonType} from "@/types";
import {MovieSectionTitle} from "@/components/MovieSectionTitle";
import {declensionNoun} from "@/utils/declensionNoun.ts";
import {MoviePersonHeaderItem} from "./components/MoviePersonHeaderItem";
import classes from "./styles.module.scss";



interface MoviePersonHeaderProps {
  title: string,
  persons?: MoviePersonType[],
  limit?: number
}

function MoviePersonHeader({title, persons, limit = 10}: MoviePersonHeaderProps) {
  const personsLimited = persons?.slice(0, limit);
  const moreCount = persons?.length && persons.length - limit;


  if (!persons || !persons.length) {
    return (<></>);
  }

  return (
    <div className={classes.personHeader}>
      <MovieSectionTitle className={classes.title} linkClassName={classes.titleLink}>
        {title}
      </MovieSectionTitle>
      <ul className={classes.list}>
        {personsLimited?.map((person) => (
          <MoviePersonHeaderItem person={person} key={person.id}/>
        ))}
      </ul>
      {moreCount &&
        <span className={classes.moreItemsLink}>
          {moreCount} {declensionNoun(moreCount, ["актер", "актера", "актеров"])}
        </span>
      }
    </div>
  );
}

export default MoviePersonHeader;