import React, {useState} from "react";
import {clsx} from "clsx";
import {SearchFormViewProps} from "@/components/Header/components/Search/components/SearchForm/SearchForm.tsx";
import classes from "@/components/Header/components/Search/styles.module.scss";
import SearchIcon from "@/assets/icons/search.svg?react";
import CloseIcon from "@/assets/icons/close.svg?react";


export interface SearchFormMobileProps extends SearchFormViewProps {
  onClose: () => void
}

function SearchFormMobile({onClose, searchQuery, setSearchQuery}: SearchFormMobileProps) {
  const [searchValue, setSearchValue] = useState(searchQuery);


  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSearchQuery(searchValue)
  }

  const handleClose = () => {
    onClose()
    setSearchValue("")
    setSearchQuery("")
  }


  return (
    <form className={classes.searchFormMobile} onSubmit={handleSubmit}>
      <button type="submit" className={classes.submitMobile}>
        <SearchIcon className={clsx(classes.icon, classes.iconDark)}/>
      </button>

      <input
        name="search"
        type="text"
        className={classes.input}
        autoComplete="off"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />

      <button
        type="button"
        className={classes.buttonClose}
        onClick={handleClose}
      >
        <CloseIcon className={clsx(classes.icon, classes.iconDark)}/>
      </button>
    </form>
  );
}

export default SearchFormMobile;