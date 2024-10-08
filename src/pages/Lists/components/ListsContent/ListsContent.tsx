import {ListsType} from "@/types";
import {ListsContentItem, ListsContentItemSkeleton} from "@/pages/Lists/components/ListsContent/components/ListsContentItem";
import classes from "./styles.module.scss";


interface ListsContentProps {
  lists: ListsType | undefined
}

function ListsContent({lists}: ListsContentProps) {
  return (
    <div className={classes.content}>
      <div className={classes.header}>
        <span className={classes.title}>СПИСОК</span>
      </div>

      {lists ?
        <div className={classes.list}>
          {lists.docs.map(list => (
            <ListsContentItem key={list.slug} list={list}/>
          ))}
        </div>
        :
        <div className={classes.list}>
          {Array(10).fill(0).map((_, index) => (
            <ListsContentItemSkeleton key={index}/>
          ))}
        </div>
      }
    </div>
  );
}

export default ListsContent;