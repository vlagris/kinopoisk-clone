import MobileAppsMenuItem from "@/components/Footer/components/MobileAppsMenu/MobileAppsMenuItem.tsx";
import classes from "./styles.module.scss";
import appStoreImage from "@/assets/icons/download-in-app-store.svg";
import googlePlayImage from "@/assets/icons/download-in-google-play.svg";
import appGalleryImage from "@/assets/icons/download-in-appgallery.svg";
import ruStoreImage from "@/assets/icons/download-in-rustore.svg";



export const items = [
  { id: 1, to: "https://10267.redirect.appmetrica.yandex.com/mainView?appmetrica_tracking_id=170895231946863928", img: appStoreImage as string },
  { id: 2, to: "https://10267.redirect.appmetrica.yandex.com/?appmetrica_tracking_id=603240792315703184", img: googlePlayImage as string },
  { id: 3, to: "https://10267.redirect.appmetrica.yandex.com/?appmetrica_tracking_id=1179706852124993595", img: appGalleryImage as string },
  { id: 4, to: "https://apps.rustore.ru/app/ru.kinopoisk?rsm=1&mt_link_id=me10h4", img: ruStoreImage as string },
]


function MobileAppsMenu() {
  return (
    <div className={classes.mobileAppsMenu}>
      {items.map(({to, img, id}) => (
        <MobileAppsMenuItem key={id} to={to} img={img}/>
      ))}
    </div>
  );
}

export default MobileAppsMenu;