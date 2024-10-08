import {Logo} from "@/components/Header/components/Logo";
import {Search} from "@/components/Header/components/Search";
import classes from "./styles.module.scss";
import {clsx} from "clsx";


function HeaderMobile() {
  return (
    <header className={clsx(classes.header, classes.headerMobile)}>
      <div className={classes.container}>
        <Logo/>

        <div className={classes.searchContainer}>
          <Search/>
        </div>
      </div>
    </header>
  );
}

export default HeaderMobile;