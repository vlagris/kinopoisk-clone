import {useState} from 'react';
import {MobileView} from "react-device-detect";
import {clsx} from "clsx";
import {SearchViewProps} from "@/components/Header/components/Search/Search.tsx";
import {Modal, ModalOverlay} from "@/components/UI/Modal";
import {Suggest} from "@/components/Header/components/Search/components/Suggest";
import {SearchFormMobile} from "@/components/Header/components/Search/components/SearchForm";
import classes from "@/components/Header/components/Search/styles.module.scss";
import SearchIcon from "@/assets/icons/search.svg?react"



function SearchMobile({searchQuery, setSearchQuery, moviesResult}: SearchViewProps) {
  const [show, setShow] = useState(false);


  const handleToggle = () => setShow(!show);
  const handleClose = () => setShow(false);


  return (
    <MobileView renderWithFragment>
      <button onClick={handleToggle}>
        <SearchIcon className={clsx(classes.iconSmall, classes.iconDark)}/>
      </button>

      <Modal show={show} onHide={handleClose}>
        <ModalOverlay>
          <div className={classes.searchModal}>
            <SearchFormMobile
              onClose={handleClose}
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
            />
            <Suggest moviesResult={moviesResult}/>
          </div>
        </ModalOverlay>
      </Modal>
    </MobileView>
  );
}

export default SearchMobile;