import classes from "./styles.module.scss";
import StarIcon from "@/assets/icons/star.svg?react";
import {clsx} from "clsx";



interface MovieRatingSectionStarsItemProps {
  value: number,
  width?: number,
  type?: "active" | "hover",
  onMouseEnter: () => void,
  onMouseLeave: () => void
}

function MovieRatingSectionStarsItem({value, type, width, onMouseEnter, onMouseLeave}: MovieRatingSectionStarsItemProps) {
  const active = type === "active";
  const hover = type === "hover";


  return (
    <div
      className={classes.starItem}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className={classes.iconContainer}>
        <StarIcon className={clsx(classes.icon, !type && classes.iconDefault, active && classes.iconActive, hover && classes.iconHover)}/>
        {!!width &&
          <div className={classes.iconCroppedWrap} style={{width: `${width}%`}}>
            <StarIcon className={clsx(classes.icon, classes.iconActive)}/>
          </div>
        }
      </div>
      <span className={clsx(classes.text, active && classes.textActive, hover && classes.textHover)}>
        {value}
      </span>
    </div>
  );
}

export default MovieRatingSectionStarsItem;