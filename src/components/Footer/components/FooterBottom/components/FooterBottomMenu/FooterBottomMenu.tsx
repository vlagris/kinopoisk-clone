import FooterBottomMenuItem from "./FooterBottomMenuItem.tsx";
import classes from "../../styles.module.scss";



const menuItems = [
  { to: "https://tv.yandex.ru/", value: "Телепрограмма" },
  { to: "https://music.yandex.ru/", value: "Музыка" },
  { to: "https://afisha.yandex.ru/", value: "Афиша" },
  { to: "https://bookmate.ru/", value: "Букмейт" }
]

function FooterBottomMenu() {
  return (
    <ul className={classes.menu}>
      {menuItems.map(({to, value}) => (
        <FooterBottomMenuItem key={value} value={value} to={to}/>
      ))}
    </ul>
  );
}

export default FooterBottomMenu;