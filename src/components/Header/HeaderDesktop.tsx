import {Logo} from "@/components/Header/components/Logo";
import {Search} from "@/components/Header/components/Search";
import classes from "./styles.module.scss";


function HeaderDesktop() {
  return (
    <header className={classes.header}>
      <div className={classes.container}>
        <Logo/>
        <div className={classes.searchContainer}>
          <Search/>
        </div>
      </div>
    </header>
  );
}

export default HeaderDesktop;