import React, {useState} from "react";
import {MovieFactsCommonProps} from "@/pages/Movie/components/MovieFacts/MovieFacts.tsx";
import {MovieFactsItemDesktop} from "@/pages/Movie/components/MovieFacts/components/MovieFactsItem";
import {MovieSectionTitleDesktop} from "@/components/MovieSectionTitle";
import {MovieFactsSkeletonDesktop} from "@/pages/Movie/components/MovieFacts/components/MovieFactsSkeleton";
import classes from "./styles.desktop.module.scss";


function MovieFactsDesktop({facts, isSuccess, title}: MovieFactsCommonProps) {
  const [viewFacts, setViewFacts] = useState(3);
  let spoilers = false;

  const handleClick = () => {
    setViewFacts(viewFacts + 10)
  }


  if (!isSuccess) {
    return (<MovieFactsSkeletonDesktop/>)
  }


  if (!facts?.length) {
    return (<></>)
  }


  return (
    <section className={classes.root}>
      <MovieSectionTitleDesktop>
        {title}
      </MovieSectionTitleDesktop>

      <ul className={classes.list}>
        {facts?.slice(0, viewFacts).map((fact, index) => (
          <React.Fragment key={index}>
            {fact.spoiler && !spoilers &&
              <div className={classes.spoiler}>
                Внимание! Дальнейший список фактов о фильме содержит спойлеры. Будьте осторожны.
              </div>
            }
            {spoilers = fact.spoiler}
            <MovieFactsItemDesktop fact={fact}/>
          </React.Fragment>
        ))}
      </ul>

      {(!!facts && facts.length > viewFacts) && (
        <button onClick={handleClick} className={classes.buttonMore}>
          Показать еще
        </button>
      )}
    </section>
  );
}

export default MovieFactsDesktop;