import CategoriesItem from "@/pages/Lists/components/ListsCategories/CategoriesItem.tsx";
import {PATH_LINK} from "@/constants";
import classes from "@/pages/Lists/styles.module.scss";



const items = [
  {value: "Фильмы", to: PATH_LINK.LISTS_CATEGORIES_MOVIES },
  {value: "Онлайн-кинотеатр", to: PATH_LINK.LISTS_CATEGORIES_ONLINE_CINEMA },
  {value: "Сериалы", to: PATH_LINK.LISTS_CATEGORIES_SERIALS },
  {value: "Сборы", to: PATH_LINK.LISTS_CATEGORIES_FEES },
  {value: "Премии", to: PATH_LINK.LISTS_CATEGORIES_AWARDS },
]

function Categories() {
  return (
    <div className={classes.categoriesList}>
      {items.map(({value, to}) => (
        <CategoriesItem key={value} to={to}>
          {value}
        </CategoriesItem>
      ))}
    </div>
  );
}

export default Categories;