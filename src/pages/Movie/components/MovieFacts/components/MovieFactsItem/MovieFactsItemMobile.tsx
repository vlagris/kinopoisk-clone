import {useState} from "react";
import {clsx} from "clsx";
import {MoviePosterType} from "@/types";
import {MovieFactsItemCommonProps} from "@/pages/Movie/components/MovieFacts/components/MovieFactsItem/MovieFactsItem.tsx";
import {Modal, ModalPanel, ModalHeader} from "@/components/UI/Modal";
import classes from "./styles.mobile.module.scss";
import PlaceholderImage from "@/assets/icons/placeholder.svg";


export interface MovieFactsItemMobileProps extends MovieFactsItemCommonProps {
  poster?: MoviePosterType,
  name?: string | null,
}

function MovieFactsItemMobile({fact, poster, name}: MovieFactsItemMobileProps) {
  const [show, setShow] = useState(false);
  const [spoiler, setSpoiler] = useState(fact.spoiler);


  const handleOpenModal = () => setShow(true);
  const handleCloseModal = () => setShow(false);
  const handleCloseSpoiler = () => setSpoiler(false);


  return (
    <>
    <div className={classes.item}>
      <button
        type="button"
        className={classes.button}
        onClick={handleOpenModal}
      >
        <div
          className={clsx(classes.shortValue, spoiler && classes.spoilerValue)}
          dangerouslySetInnerHTML={{__html: fact.value}}
        />
      </button>

      {spoiler &&
        <button
          type="button"
          className={classes.spoilerOverlay}
          onClick={handleCloseSpoiler}
        >
          <span className={classes.spoilerIcon}/>
          <span className={classes.spoilerText}>
            Осторожно: спойлеры!
          </span>
        </button>
      }
    </div>

      <Modal show={show} onHide={handleCloseModal}>

        <ModalPanel variant="bottom">
          <ModalHeader>
            <div className={classes.modalInfo}>
              <img
                className={classes.poster}
                src={poster?.previewUrl || PlaceholderImage}
                alt={name || ""}
              />
              <div className={classes.titleContainer}>
                <div className={classes.modalTitle}>
                  Интересный факт
                </div>
                <div className={classes.subtitle}>
                  {name}
                </div>
              </div>
            </div>
          </ModalHeader>

          <div
            className={classes.modalText}
            dangerouslySetInnerHTML={{__html: fact.value}}
          />
        </ModalPanel>
      </Modal>
    </>
  );
}

export default MovieFactsItemMobile;