import {useMemo} from "react";
import {createSearchParams, useSearchParams} from "react-router-dom";
import {clsx} from "clsx";
import {isDesktop} from "react-device-detect";
import ChipsFiltersItem from "@/pages/ListMovies/components/ChipsFilters/components/ChipsFiltersItem.tsx";
import {ListCategory} from "@/types";
import classes from "@/pages/ListMovies/components/ChipsFilters/styles.module.scss";



type ChipsFiltersItemInitial = {
  value: string,
  paramValue: string,
  oppositeParam: string,
  oppositeCategory?: ListCategory
}

const items: ChipsFiltersItemInitial[] = [
  { value: "Фильмы", paramValue: "movie", oppositeParam: "tv-series", oppositeCategory: "Сериалы" },
  { value: "Сериалы", paramValue: "tv-series", oppositeParam: "movie", oppositeCategory: "Фильмы" },
  { value: "Российские", paramValue: "russian", oppositeParam: "foreign" },
  { value: "Зарубежные", paramValue: "foreign", oppositeParam: "russian" },
]


export interface ChipsFiltersProps {
  category?: ListCategory
}

function ChipsFilters({category}: ChipsFiltersProps) {
  const [searchParams] = useSearchParams();
  const paramName = "b";
  const param = searchParams.get(paramName);


  const itemsProps = useMemo(() => {
    return items.map(({value, paramValue, oppositeParam, oppositeCategory}) => {
      const newSearchParams = createSearchParams(searchParams);
      const isActive = searchParams.has(paramName, paramValue);
      const isOppositeParam = searchParams.has(paramName, oppositeParam);
      const isOppositeCategory = !!category && category === oppositeCategory;

      if (isActive) {
        newSearchParams.delete(paramName, paramValue)
      } else {
        newSearchParams.append(paramName, paramValue)
      }

      return {
        value,
        to: "?" + newSearchParams.toString(),
        active: isActive,
        disabled: isOppositeParam || isOppositeCategory
      }
    })
  }, [param, category]);


  return (
    <div className={clsx(classes.root, isDesktop && classes.rootDesktop)}>
      {itemsProps.map((props) => (
        <ChipsFiltersItem
          key={props.to}
          {...props}
        />
      ))}
    </div>
  );
}

export default ChipsFilters;