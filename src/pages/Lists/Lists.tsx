import {useParams} from "react-router-dom";
import {PageTitle} from "@/components/PageTitle";
import {ListCategory} from "@/types";
import {kinopoiskdevApi} from "@/services/api/kinopoiskdevApi";
import {ListsCategories} from "@/pages/Lists/components/ListsCategories";
import {ListsContent} from "@/pages/Lists/components/ListsContent";
import {useQuery} from "@tanstack/react-query";
import classes from "@/pages/Lists/styles.module.scss";



const categoryArray: { [p: string]: ListCategory } = {
  "1": "Фильмы",
  "2": "Онлайн-кинотеатр",
  "3": "Сериалы",
  "4": "Сборы",
  "5": "Премии"
}

function ListsPage() {
  const { categoryIndex } = useParams();
  if (!categoryIndex || !categoryArray[categoryIndex]) {
    throw "Category not found"
  }
  const category = categoryArray[categoryIndex];
  const lists = useQuery({
    queryKey: ["lists", category],
    queryFn: () => kinopoiskdevApi.getLists({
      limit: 250,
      category: category,
      sortField: "moviesCount",
      sortType: "-1"
    })
  });


  return (
    <div className={classes.categories}>
      <PageTitle title={
        `Смотреть онлайн лучшие фильмы, 
      сериалы и мультфильмы в подборках 
      Кинопоиска в категории “${category}“`
      }/>
      <div className={classes.header}>
        <h1 className={classes.headerTitle}>
          Списки
        </h1>
      </div>
      <ListsCategories/>
      <ListsContent lists={lists.data}/>
    </div>
  );
}

export default ListsPage;