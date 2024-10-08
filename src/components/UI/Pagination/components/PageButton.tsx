import React from 'react';
import classes from "@/components/UI/Pagination/styles.module.scss";
import {ItemProps} from "@/components/UI/Pagination/components/Item.tsx";



function PageButton({page, onChange}: ItemProps) {
  function handleClick (event: React.MouseEvent<HTMLElement>) {
    if(onChange && page) {
      onChange(event, page);
      window.scrollTo(0, 0);
    }
  }

  return (
    <button className={classes.btnPage} onClick={handleClick}>
      {page}
    </button>
  );
}

export default PageButton;