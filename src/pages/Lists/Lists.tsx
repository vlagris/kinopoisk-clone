import {useParams} from "react-router-dom";
import {useQuery} from "@tanstack/react-query";
import {LIST_CATEGORY_MAP} from "@/constants";
import {PageTitle} from "@/components/PageTitle";
import {ListsCategories} from "@/pages/Lists/components/ListsCategories";
import {ListsContent} from "@/pages/Lists/components/ListsContent";
import {getLists} from "@/services/listService.ts";
import classes from "@/pages/Lists/styles.module.scss";



function ListsPage() {
  const { categoryIndex } = useParams();
  if (!categoryIndex) {
    throw new Error("category index is missing");
  }
  const category = LIST_CATEGORY_MAP[categoryIndex];
  const lists = useQuery({
    queryKey: ["lists", category],
    queryFn: () => getLists({
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