import PageButton from "@/components/UI/Pagination/components/PageButton.tsx";
import ArrowButton from "@/components/UI/Pagination/components/ArrowButton.tsx";
import CurrentPageButton from "@/components/UI/Pagination/components/CurrentPageButton.tsx";
import EllipsisButton from "@/components/UI/Pagination/components/EllipsisButton.tsx";
import {PaginationOnChange} from "@/components/UI/Pagination";



export enum PaginationItemTypes {
  page,
  current,
  ellipsis,
  prev,
  next
}

const ITEM_COMPONENTS = {
  [PaginationItemTypes.page]: PageButton,
  [PaginationItemTypes.current]: CurrentPageButton,
  [PaginationItemTypes.ellipsis]: EllipsisButton,
  [PaginationItemTypes.prev]: ArrowButton,
  [PaginationItemTypes.next]: ArrowButton,
}



export interface ItemProps {
  type: PaginationItemTypes,
  onChange?: PaginationOnChange,
  page?: number,
}

function Item(props: ItemProps) {
  const Component = ITEM_COMPONENTS[props.type];


  return (
    <Component {...props}/>
  );
}

export default Item;