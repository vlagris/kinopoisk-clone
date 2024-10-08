import {MoviePremiereType, MovieRatingType, MovieVotesType} from "@/types";
import {clsx} from "clsx";
import {MovieRatingMini} from "@/pages/Movie/components/MovieRating/components/MovieRatingMini";
import {MovieRatingAwait} from "@/pages/Movie/components/MovieRating/components/MovieRatingAwait";
import {MovieRatingDefault} from "@/pages/Movie/components/MovieRating/components/MovieRatingDefault";
import {MovieRatingEmpty} from "@/pages/Movie/components/MovieRating/components/MovieRatingEmpty";
import classes from "./styles.module.scss";
import {useMemo} from "react";
import {getIsPremiered} from "@/utils/getIsPremiered.ts";


export type MovieRatingVariant = "mini" | "small" | "medium" | "large"

interface MovieRatingProps {
  top250?: number | null,
  rating?: MovieRatingType,
  votes?: MovieVotesType,
  premiere?: MoviePremiereType,
  variant?: MovieRatingVariant
}

export interface MovieRatingItemProps {
  top250?: number | null,
  rating?: MovieRatingType,
  votes?: MovieVotesType,
  variant?: MovieRatingVariant,
  className?: string,
  valueClassName: string
}

function MovieRating({top250, rating, votes, premiere, variant = "medium"}: MovieRatingProps) {
  const isPremiered = useMemo(() => getIsPremiered(premiere), [premiere]);
  const ratingClassName = clsx(variant !== "medium" && classes[`movieRating_${variant}`]);
  const valueClassName = clsx(
    classes.value,
    classes.valueRating,
    rating?.kp &&
    ((top250 && classes.valueRating_gold) ||
      (rating.kp >= 7 && classes.valueRating_green) ||
      (rating.kp <= 5 && classes.valueRating_red))
  );
  const MovieRatingItem: MovieRatingItemProps = {
    variant: variant,
    top250: top250,
    rating: rating,
    votes: votes,
    className: ratingClassName,
    valueClassName: valueClassName,
  }

  console.log(isPremiered, votes?.await)


  if (variant === "mini") {
    return (
      <MovieRatingMini {...MovieRatingItem} />
    );
  }

  if (isPremiered && !rating?.kp) {
    return (
      <MovieRatingEmpty {...MovieRatingItem} />
    );
  }

  if (!isPremiered) {
    return (
      <MovieRatingAwait {...MovieRatingItem} />
    );
  }

  return (
    <MovieRatingDefault {...MovieRatingItem} />
  );
}

export default MovieRating;