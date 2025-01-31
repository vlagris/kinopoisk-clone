import React from "react";
import {UseQueryResult} from "@tanstack/react-query";
import {BrowserView, MobileView} from "react-device-detect";
import {PossibleValueByField} from "@/types";



const SelectFiltersDesktopLazy = React.lazy(() => import("./SelectFiltersDesktop.tsx"))
const SelectFiltersMobileLazy = React.lazy(() => import("./SelectFiltersMobile.tsx"))


export interface SelectFiltersProps {
  countries: UseQueryResult<PossibleValueByField[]>,
  genres: UseQueryResult<PossibleValueByField[]>,

}

function SelectFilters(props: SelectFiltersProps) {
  return (
    <React.Suspense>
      <BrowserView renderWithFragment>
        <SelectFiltersDesktopLazy {...props} />
      </BrowserView>

      <MobileView renderWithFragment>
        <SelectFiltersMobileLazy {...props} />
      </MobileView></React.Suspense>
  );
}

export default SelectFilters;
