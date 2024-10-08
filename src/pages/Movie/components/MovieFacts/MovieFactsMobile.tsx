import {MoviePosterType} from "@/types";
import {MovieFactsCommonProps} from "@/pages/Movie/components/MovieFacts/MovieFacts.tsx";
import {MovieFactsItemMobile} from "./components/MovieFactsItem";
import {MovieSectionTitleMobile} from "@/components/MovieSectionTitle";
import {MovieFactsSkeletonMobile} from "./components/MovieFactsSkeleton";
import classes from "./styles.mobile.module.scss";


export interface MovieFactsMobileProps extends MovieFactsCommonProps {
  poster?: MoviePosterType,
  name?: string | null,
}

function MovieFactsMobile({facts, poster, name, title, isSuccess}: MovieFactsMobileProps) {

  if (!isSuccess) {
    return (<MovieFactsSkeletonMobile/>)
  }


  if (!facts?.length) {
    return (<></>)
  }


  return (
    <section className={classes.root}>
      <MovieSectionTitleMobile>
        {title}
      </MovieSectionTitleMobile>

      <div className={classes.scrollBar}>
        {facts?.map((fact, index) => (
          <MovieFactsItemMobile
            key={index}
            fact={fact}
            poster={poster}
            name={name}
          />
        ))}
      </div>

    </section>
  );
}

export default MovieFactsMobile;