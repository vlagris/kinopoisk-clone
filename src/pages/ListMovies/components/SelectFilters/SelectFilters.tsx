import React from "react";
import {BrowserView, MobileView} from "react-device-detect";
import {PossibleValueByField} from "@/types";
import {UseQueryResult} from "react-query";



const SelectFiltersDesktopLazy = React.lazy(() => import("./SelectFiltersDesktop.tsx"))
const SelectFiltersMobileLazy = React.lazy(() => import("./SelectFiltersMobile.tsx"))


export interface SelectFiltersProps {
  countriesResult: UseQueryResult<PossibleValueByField[]>,
  genresResult: UseQueryResult<PossibleValueByField[]>,

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
