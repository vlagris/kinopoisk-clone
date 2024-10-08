import {useEffect, useRef, useState} from 'react';
import {BrowserView} from 'react-device-detect';
import {SearchFormDesktop} from "@/components/Header/components/Search/components/SearchForm";
import {Suggest} from "@/components/Header/components/Search/components/Suggest";
import classes from "@/components/Header/components/Search/styles.module.scss";
import {SearchViewProps} from "@/components/Header/components/Search/Search.tsx";
import {useLocation} from "react-router-dom";


function SearchDesktop({searchQuery, setSearchQuery, moviesResult}: SearchViewProps) {
  const [isFocused, setIsFocused] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const location = useLocation();


  useEffect(() => {
    setIsFocused(false);
  }, [location]);


  useEffect(() => {
    function handleClick(event: MouseEvent) {
      const eventTarget = event.target as Element
      const searchElement = searchRef.current;
      if (searchElement?.contains(eventTarget)) {
        return setIsFocused(true);
      }
      setIsFocused(false);
    }

    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [searchRef]);


  return (
    <BrowserView renderWithFragment>
      <div className={classes.search} ref={searchRef}>
        <SearchFormDesktop
          isFocused={isFocused}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
        <Suggest moviesResult={moviesResult} show={isFocused}/>
      </div>
    </BrowserView>
  );
}

export default SearchDesktop;