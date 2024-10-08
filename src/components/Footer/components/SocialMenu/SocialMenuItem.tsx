import classes from "./styles.module.scss";



interface SocialMenuItemProps {
  to: string,
  img: string
}

function SocialMenuItem({to, img}: SocialMenuItemProps) {
  return (
    <a
      href={to}
      className={classes.socialMenuItem}
      target="_blank"
    >
      <img src={img} alt=""/>
    </a>
  );
}

export default SocialMenuItem;