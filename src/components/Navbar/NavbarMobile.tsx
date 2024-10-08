import {clsx} from "clsx";
import {items, NavbarProps} from "@/components/Navbar/Navbar.tsx";
import NavbarItem from "@/components/Navbar/NavbarItem.tsx";
import classes from "./styles.module.scss";



function NavbarMobile({variant, className}: NavbarProps) {
  return (
    <nav className={clsx(classes.navbar, className, variant === "dark" && classes.navbar_dark)}>
      <ul>
        {items.map(({to, title, icon}) => (
          <NavbarItem key={to} to={to} icon={icon}>
            {title}
          </NavbarItem>
        ))}
      </ul>
    </nav>
  );
}

export default NavbarMobile;