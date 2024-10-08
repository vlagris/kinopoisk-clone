import {clsx} from "clsx";
import {isBrowser, isMobile} from "react-device-detect";
import {SocialMenu} from "@/components/Footer/components/SocialMenu";
import {FooterMenu} from "@/components/Footer/components/FooterMenu";
import {MobileAppsMenu} from "@/components/Footer/components/MobileAppsMenu";
import {FooterBottom} from "@/components/Footer/components/FooterBottom";
import classes from "@/components/Footer/styles.module.scss";



function Footer() {
  return (
    <footer className={clsx(classes.footer, isMobile && classes.footerSmall)}>
      <SocialMenu/>
      <FooterMenu/>
      {isBrowser && <MobileAppsMenu/>}
      <FooterBottom/>
    </footer>
  );
}

export default Footer;