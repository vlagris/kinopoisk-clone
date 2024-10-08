import {clsx} from "clsx";
import {isBrowser, isMobile} from "react-device-detect";
import {FooterBottomMenu} from "@/components/Footer/components/FooterBottom/components/FooterBottomMenu";
import classes from "./styles.module.scss";



function FooterBottom() {
  return (
    <div className={clsx(classes.footerBottom, isMobile && classes.footerBottomSmall)}>
      <div className={classes.info}>
        <span className={classes.text}>© 2003 — 2024,</span>
        <a
          href="https://www.kinopoisk.ru/"
          className={clsx(classes.text, classes.infoLink)}
        >
          Кинопоик
        </a>
        <span className={clsx(classes.text, classes.infoAge)}>18+</span>
      </div>

      {isBrowser && <FooterBottomMenu/>}

      <div className={classes.company}>
        <span className={clsx(classes.text, classes.companyTitle)}>Проект компании</span>
        <a
          href="https://yandex.ru/all"
          className={clsx(classes.text, classes.companyLink)}
          target="_blank"
        >
          Яндекс
        </a>
      </div>
    </div>
  );
}

export default FooterBottom;