import React, {useState} from 'react';
import {clsx} from "clsx";
import {SearchFormViewProps} from "@/components/Header/components/Search/components/SearchForm/SearchForm.tsx";
// import {Link} from "react-router-dom";
// import {PATH_LINK} from "@/constants";
import classes from "@/components/Header/components/Search/styles.module.scss";
import SearchIcon from "@/assets/icons/search.svg?react";
// import FilterIcon from "@/assets/icons/filter.svg?react";


export interface SearchFormDesktopProps extends SearchFormViewProps {
  isFocused: boolean,
}

function SearchFormDesktop({isFocused, searchQuery, setSearchQuery}: SearchFormDesktopProps) {
  const [searchValue, setSearchValue] = useState(searchQuery);


  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSearchQuery(searchValue);
  }


  return (
    <form
      className={clsx(classes.searchForm, isFocused && classes.searchForm_active)}
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        name="search"
        className={clsx(classes.input, isFocused && classes.input_active)}
        placeholder="Фильмы, сериалы, персоны"
        autoComplete="off"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />

      <div className={classes.control}>
        {/*<Link*/}
        {/*  to={PATH_LINK.SEARCH}*/}
        {/*  className={classes.advancedSearch}*/}
        {/*>*/}
        {/*  <FilterIcon className={clsx(classes.iconSmall, isFocused ? classes.iconLight : classes.iconDark)}/>*/}
        {/*</Link>*/}
        <button type="submit" className={classes.submit}>
          <SearchIcon className={clsx(classes.iconSmall, isFocused ? classes.iconLight : classes.iconDark)}/>
        </button>
      </div>
    </form>
  );
}

export default SearchFormDesktop;