import {clsx} from "clsx";
import classes from "./styles.module.scss";



interface MoviePersonsSectionCardProps {
  image: string,
  title: string,
  subtitle?: string | number | null,
}

function MoviePersonsSectionCard({image, title, subtitle}:MoviePersonsSectionCardProps) {
  return (
    <div className={classes.personCard}>
      <img
        className={classes.img}
        src={image}
        alt={title}
      />
      <div className={classes.info}>
        <span className={clsx(classes.title, classes.textEllipsis)}>
          {title}
        </span>
        {!!subtitle &&
          <span className={clsx(classes.subtitle, classes.textEllipsis)}>
            {subtitle}
          </span>
        }
      </div>
    </div>
  );
}

export default MoviePersonsSectionCard;