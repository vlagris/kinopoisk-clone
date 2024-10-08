import {Link} from "react-router-dom";
import {PATH_LINK} from "@/constants";
import classes from "@/pages/ErrorPage/styles.module.scss";
import LogoImage from "@/assets/icons/logo.svg";



function ErrorPage() {
  return (
    <div className={classes.errorPage}>
      <div className={classes.container}>
        <div className={classes.logoContainer}>
          <a href={PATH_LINK.HOME} className={classes.logo}>
            <img src={LogoImage} alt=""/>
          </a>
        </div>

        <div className={classes.content}>
          <h1 className={classes.title}>
            404. Страница не найдена
          </h1>
          <p className={classes.desc}>
            Возможно, она была перемещена, или вы просто неверно указали адрес страницы.
          </p>
          <div className={classes.links}>
            <Link to={PATH_LINK.HOME} className={classes.link}>
              Перейти на главную
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ErrorPage;