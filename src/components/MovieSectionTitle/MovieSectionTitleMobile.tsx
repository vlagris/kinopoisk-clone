import {Link} from "react-router-dom";
import {clsx} from "clsx";
import {MovieSectionTitleProps} from "./MovieSectionTitle.tsx";
import classes from "./styles.mobile.module.scss";



function MovieSectionTitleMobile({className, linkClassName, href, children}: MovieSectionTitleProps) {
  return (
    <h3 className={clsx(classes.movieSectionTitle, className)}>
      <span>
        {children}
      </span>
      {!!href &&
        <Link to={href} className={clsx(classes.link, linkClassName)}>
          Все
        </Link>
      }
    </h3>
  );
}

export default MovieSectionTitleMobile;