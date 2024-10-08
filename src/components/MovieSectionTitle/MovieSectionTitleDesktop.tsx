import {Link} from "react-router-dom";
import {clsx} from "clsx";
import {MovieSectionTitleProps} from "./MovieSectionTitle.tsx";
import classes from "./styles.desktop.module.scss";


function MovieSectionTitleDesktop({className, linkClassName, href, children}: MovieSectionTitleProps) {
  return (
    <h3 className={clsx(classes.movieSectionTitle, className)}>
      {href ? (
        <Link to={href} className={clsx(classes.link, linkClassName)}>
          {children}
        </Link>
        ) : (
        <span>
          {children}
        </span>
      )}
    </h3>
  );
}

export default MovieSectionTitleDesktop;