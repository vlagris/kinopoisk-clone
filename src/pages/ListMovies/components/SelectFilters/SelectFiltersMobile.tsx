import {useState} from "react";
import {useCustomSearchParams} from "@/hooks/useCustomSearchParams.ts";
import {SelectFiltersProps} from "@/pages/ListMovies/components/SelectFilters/SelectFilters.tsx";
import {Modal, ModalOverlay, ModalPanel, ModalHeader, ModalCloseButton} from "@/components/UI/Modal";
import {SelectModal,  SelectModalItem} from "@/pages/ListMovies/components/SelectFilters/components/SelectModal";
import classes from "./styles.mobile.module.scss";
import FilterIcon from "@/assets/icons/filter.svg?react";



function SelectFiltersMobile({countriesResult, genresResult}: SelectFiltersProps) {
  const [show, setShow] = useState(false);
  const {searchParams, updateSearchParam} = useCustomSearchParams();
  const countries = countriesResult.data;
  const genres = genresResult.data;
  const country = searchParams.get("country");
  const genre = searchParams.get("genre");


  const handleClose = () => setShow(false);
  const handleOpen = () => setShow(true);


  return (
    <>
      <button className={classes.button} onClick={handleOpen}>
        <FilterIcon className={classes.buttonIcon}/>
      </button>

      <Modal show={show} onHide={handleClose}  closeOnRedirect={false}>
        <ModalOverlay>
          <ModalPanel variant="bottom">
            <ModalHeader>
              <h2 className={classes.modalTitle}>
                Фильтры
              </h2>
              <ModalCloseButton/>
            </ModalHeader>

            <div>
              <SelectModal
                title="Страны"
                onChange={(value) => updateSearchParam("country", value)}
              >
                <SelectModalItem active={!country}>
                  Все страны
                </SelectModalItem>
                {countries?.map(({name, slug}) => (
                  <SelectModalItem key={slug} value={slug} active={country === slug}>
                    {name}
                  </SelectModalItem>
                ))}
              </SelectModal>

              <SelectModal
                title="Жанры"
                onChange={(value) => updateSearchParam("genre", value)}
              >
                <SelectModalItem active={!genre}>
                  Все жанры
                </SelectModalItem>
                {genres?.map(({name, slug}) => (
                  <SelectModalItem key={slug} value={slug} active={genre === slug}>
                    {name}
                  </SelectModalItem>
                ))}
              </SelectModal>
            </div>

          </ModalPanel>
        </ModalOverlay>
      </Modal>
    </>
  );
}

export default SelectFiltersMobile;