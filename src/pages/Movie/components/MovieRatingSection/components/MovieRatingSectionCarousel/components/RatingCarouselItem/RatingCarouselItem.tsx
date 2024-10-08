import classes from "../../styles.module.scss";
import {transformToThousands} from "@/utils/transformToThousands.ts";



interface RatingCarouselItemProps {
  title: string,
  rating?: number | string | null,
  votes?: number | string | null
}

function RatingCarouselItem({ title, rating, votes }: RatingCarouselItemProps) {
  return (
    <div className={classes.item}>
      <div className={classes.itemRating}>
        <div className={classes.itemInfo}>
          <span className={classes.itemRate}>
            {rating}
          </span>
          <span className={classes.itemVote}>
            {transformToThousands(votes || 0, 4)}
          </span>
        </div>
        <div className={classes.itemTitle}>
          {title}
        </div>
      </div>
    </div>
  );
}

export default RatingCarouselItem;