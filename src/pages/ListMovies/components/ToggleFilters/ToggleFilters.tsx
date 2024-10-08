import React, {useMemo} from "react";
import {createSearchParams, useSearchParams} from "react-router-dom";
import {BrowserView, MobileView} from "react-device-detect";
import {ToggleFiltersItemProps} from "@/pages/ListMovies/components/ToggleFilters/components/ToggleFiltersItem.tsx";
import {ListCategory} from "@/types";



const ToggleFiltersDesktopLazy = React.lazy(() => import("./ToggleFiltersDesktop.tsx"))
const ToggleFiltersMobileLazy = React.lazy(() => import("./ToggleFiltersMobile.tsx"))

type ToggleFiltersItemInitial = {
  value: string,
  paramValue: string,
  oppositeParam: string,
  oppositeCategory?: ListCategory
}

const items: ToggleFiltersItemInitial[] = [
  { value: "Фильмы", paramValue: "films", oppositeParam: "series", oppositeCategory: "Сериалы" },
  { value: "Сериалы", paramValue: "series", oppositeParam: "films", oppositeCategory: "Фильмы" },
  { value: "Российские", paramValue: "russian", oppositeParam: "foreign" },
  { value: "Зарубежные", paramValue: "foreign", oppositeParam: "russian" },
]


export interface ToggleFiltersViewProps {
  items: ToggleFiltersItemProps[]
}

export interface ToggleFiltersProps {
  category?: ListCategory
}

function ToggleFilters({category}: ToggleFiltersProps) {
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
    <React.Suspense>
      <BrowserView renderWithFragment>
        <ToggleFiltersDesktopLazy items={itemsProps}/>
      </BrowserView>

      <MobileView renderWithFragment>
        <ToggleFiltersMobileLazy items={itemsProps}/>
      </MobileView>
    </React.Suspense>
  );
}

export default ToggleFilters;