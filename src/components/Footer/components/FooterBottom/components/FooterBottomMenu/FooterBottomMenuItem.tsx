import classes from "../../styles.module.scss";


interface FooterBottomMenuItemProps {
  value: string,
  to: string
}

function FooterBottomMenuItem({ value, to }: FooterBottomMenuItemProps) {
  return (
    <li className={classes.menuItem}>
      <a href={to} className={classes.text}>
        {value}
      </a>
    </li>
  );
}

export default FooterBottomMenuItem;