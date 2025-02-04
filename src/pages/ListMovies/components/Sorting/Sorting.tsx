import {clsx} from "clsx";
import {isMobile} from "react-device-detect";
import {Select, SelectButton, SelectItem, SelectMenu} from "@/components/UI/Select";
import {useUpdateSearchParams} from "@/hooks/useUpdateSearchParams.ts";
import classes from "./styles.module.scss";



const items = [
  {value: "votes", title: "По количеству оценок"},
  {value: "rating", title: "По рейтингу"},
  {value: "date", title: "По дате выхода"},
  {value: "title", title: "По названию"}
]

function Sorting() {
  const {searchParams, updateSearchParam} = useUpdateSearchParams();
  const sort = searchParams.get("sort");


  return (
    <Select
      className={clsx(isMobile && classes.resetPosition)}
      onChange={(value) => updateSearchParam("sort", value)}
    >
      <SelectButton className={classes.button}/>

      <SelectMenu>
        <SelectItem
          className={classes.itemTitle}
          active={!sort}
        >
          По порядку
        </SelectItem>

        {items.map(({value, title}) => (
          <SelectItem
            key={value}
            className={classes.itemTitle}
            value={value}
            active={sort === value}
          >
          <span className={classes.itemTitle}>
            {title}
          </span>
          </SelectItem>
        ))}
      </SelectMenu>
    </Select>
);
}

export default Sorting;