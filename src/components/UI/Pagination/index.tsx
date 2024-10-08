import React from "react";
import Item, {PaginationItemTypes} from "@/components/UI/Pagination/components/Item.tsx";
import useItemProps from "@/components/UI/Pagination/useItemProps.ts";
import classes from "@/components/UI/Pagination/styles.module.scss";



export type PaginationOnChange = (
  event: React.MouseEvent<HTMLElement>,
  page: number
) => void



interface PaginationProps {
  count: number,
  page: number,
  offset?: number,
  onChange: PaginationOnChange
}

function Pagination({count, page, offset = 3, onChange}: PaginationProps) {
  const {itemsProps} = useItemProps({count, page, onChange, offset})


  return (
    <div className={classes.pagination}>
      {page > 1 &&
        <Item type={PaginationItemTypes.prev}/>
      }

      {itemsProps.map((itemProps, index) =>
        <Item
          key={index}
          {...itemProps}
        />
      )}

      {page < count &&
        <Item type={PaginationItemTypes.next}/>
      }
    </div>
  );
}

export default Pagination;








