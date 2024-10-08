import { useEffect, useState } from 'react';
import {ItemProps, PaginationItemTypes} from "@/components/UI/Pagination/components/Item.tsx";
import {PaginationOnChange} from "@/components/UI/Pagination/index.tsx";



interface UseItemProps {
  count: number,
  page: number,
  offset: number,
  onChange: PaginationOnChange
}

function useItemProps({count, page: currentPage, onChange, offset}: UseItemProps) {
  const [itemsProps, setItemsProps] = useState<ItemProps[]>([]);


  useEffect(() => {
    let nextItemsProps: ItemProps[] = [];
    const lengthBefore = currentPage - 1;
    const lengthAfter = count - currentPage;

    const offsetBefore = currentPage - (lengthBefore >= offset ? offset : lengthBefore);
    const offsetAfter = currentPage + (lengthAfter >= offset ? offset : lengthAfter);

    for(let i = offsetBefore; i <= offsetAfter; i++) {
      let type = PaginationItemTypes.page;
      if (i == currentPage) {
        type = PaginationItemTypes.current;
      }
      nextItemsProps.push({
        type: type,
        page: i,
        onChange
      });
    }

    if(offsetBefore > 2) {
      nextItemsProps.unshift({ type: PaginationItemTypes.ellipsis });
    }
    if(offsetBefore > 1) {
      nextItemsProps.unshift({
        type: PaginationItemTypes.page,
        page: 1,
        onChange
      });
    }

    if(offsetAfter < count - 1) {
      nextItemsProps.push({ type: PaginationItemTypes.ellipsis });
    }
    if(offsetAfter < count) {
      nextItemsProps.push({
        type: PaginationItemTypes.page,
        page: count,
        onChange
      });
    }

    setItemsProps(nextItemsProps);
  }, [count, currentPage]);


  return {itemsProps}
}


export default useItemProps;