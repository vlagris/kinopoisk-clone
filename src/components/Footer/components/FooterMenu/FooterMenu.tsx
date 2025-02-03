import {isMobile} from "react-device-detect";
import {clsx} from "clsx";
import FooterMenuItem from "@/components/Footer/components/FooterMenu/FooterMenuItem.tsx";
import classes from "./styles.module.scss";



const items = [
  { to: "https://yandex.ru/jobs/vacancies?services=kinopoisk", value: "Вакансии" },
  { to: "https://ya.ru/funtech-sales/portal", value: "Реклама" },
  { to: "/lists/movies/?b=movie", value: "Все фильмы" },
  { to: "/lists/movies/?b=tv-series", value: "Все сериалы" },
  // { to: "/lists/movies/genre--animation/?ss_subscription=ANY", value: "Все мультфильмы" },
  // { to: "/lists/movies/genre--reality-tv/?b=series", value: "Передачи и шоу" },
]

function FooterMenu() {
  return (
    <ul className={clsx(classes.menu, isMobile && classes.menuSmall)}>
      {items.map(({to, value}) => (
        <FooterMenuItem key={value} to={to}>
          { value }
        </FooterMenuItem>
      ))}
    </ul>
  );
}

export default FooterMenu;