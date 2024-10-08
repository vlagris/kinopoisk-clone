import React from "react";
import {BrowserView, MobileView} from "react-device-detect";
import {SearchFormDesktopProps} from "@/components/Header/components/Search/components/SearchForm/SearchFormDesktop.tsx";
import {SearchFormMobileProps} from "@/components/Header/components/Search/components/SearchForm/SearchFormMobile.tsx";


const SearchFormDesktopLazy = React.lazy(() => import("./SearchFormDesktop.tsx"))
const SearchFormMobileLazy = React.lazy(() => import("./SearchFormMobile.tsx"))


export interface SearchFormViewProps {
  searchQuery: string,
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>,
}

interface SearchFormProps extends SearchFormDesktopProps, SearchFormMobileProps {}

function SearchForm(props: SearchFormProps) {
  return (
    <React.Suspense>
      <BrowserView renderWithFragment>
        <SearchFormDesktopLazy {...props}/>
      </BrowserView>

      <MobileView renderWithFragment>
        <SearchFormMobileLazy {...props}/>
      </MobileView>
    </React.Suspense>
  );
}

export default SearchForm;