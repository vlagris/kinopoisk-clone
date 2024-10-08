import {clsx} from "clsx";
import {isMobile} from "react-device-detect";
import SocialMenuItem from "@/components/Footer/components/SocialMenu/SocialMenuItem.tsx";
import classes from "./styles.module.scss";
import vkImage from "@/assets/icons/vk.svg";
import twitterImage from "@/assets/icons/twitter.svg";
import telegramImage from "@/assets/icons/telegram.svg";
import youtubeImage from "@/assets/icons/youtube.svg";



export const items = [
  { id: 1, to: "https://vk.com/kinopoisk", img: vkImage as string },
  { id: 2, to: "https://twitter.com/kinopoiskru", img: twitterImage as string },
  { id: 3, to: "https://telegram.me/kinopoisk", img: telegramImage as string },
  { id: 4, to: "https://www.youtube.com/user/kinopoisk", img: youtubeImage as string },
]

function SocialMenu() {
  return (
    <div className={clsx(classes.socialMenu, isMobile && classes.socialMenuSmall)}>
      {items.map(({to, img, id}) => (
        <SocialMenuItem key={id} img={img} to={to}/>
      ))}
    </div>
  );
}

export default SocialMenu;