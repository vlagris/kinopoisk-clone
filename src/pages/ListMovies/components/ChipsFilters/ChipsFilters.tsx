import {useMemo} from "react";
import {createSearchParams, useSearchParams} from "react-router-dom";
import {clsx} from "clsx";
import {isDesktop} from "react-device-detect";
import ChipsFiltersItem, {ToggleFiltersItemProps} from "@/pages/ListMovies/components/ToggleFilters/components/ChipsFiltersItem.tsx";
import {ListCategory} from "@/types";
import classes from "@/pages/ListMovies/components/ToggleFilters/styles.module.scss";



type ToggleFiltersItemInitial = {
  value: string,
  paramValue: string,
  oppositeParam: string,
  oppositeCategory?: ListCategory
}

const items: ToggleFiltersItemInitial[] = [
  { value: "Фильмы", paramValue: "movie", oppositeParam: "tv-series", oppositeCategory: "Сериалы" },
  { value: "Сериалы", paramValue: "tv-series", oppositeParam: "movie", oppositeCategory: "Фильмы" },
  { value: "Российские", paramValue: "russian", oppositeParam: "foreign" },
  { value: "Зарубежные", paramValue: "foreign", oppositeParam: "russian" },
]


export interface ToggleFiltersProps {
  category?: ListCategory
}

function ChipsFilters({category}: ToggleFiltersProps) {
  const [searchParams] = useSearchParams();
  const paramName = "b";
  const param = searchParams.get(paramName);


  const itemsProps: ToggleFiltersItemProps[] = useMemo(() => {
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