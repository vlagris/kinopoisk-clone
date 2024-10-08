import classes from "./styles.module.scss";



interface MobileAppsMenuItemProps {
  to: string,
  img: string
}

function MobileAppsMenuItem({to, img}: MobileAppsMenuItemProps) {
  return (
    <a
      href={to}
      className={classes.mobileAppsMenuItem}
      target="_blank"
    >
      <img src={img} alt=""/>
    </a>
  );
}

export default MobileAppsMenuItem;