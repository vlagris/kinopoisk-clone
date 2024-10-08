import React from 'react';
import {clsx} from "clsx";
import {ItemProps, PaginationItemTypes} from "@/components/UI/Pagination/components/Item.tsx";
import classes from "@/components/UI/Pagination/styles.module.scss";



function ArrowButton({type, page, onChange}: ItemProps) {
  let arrowClass = clsx(classes.btnArrow, type === PaginationItemTypes.next && classes.btnArrowEnd);


  function handleClick(event: React.MouseEvent<HTMLElement>) {
    if (onChange && page) {
      onChange(event, page);
      window.scrollTo(0, 0);
    }
  }


  return (
    <>
      {onChange?
        <button className={arrowClass} onClick={handleClick}/>
        :
        <button className={arrowClass}/>
      }
    </>
  );
}

export default ArrowButton;