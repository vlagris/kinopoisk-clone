import {clsx} from "clsx";
import {ItemProps} from "@/components/UI/Pagination/components/Item.tsx";
import classes from "@/components/UI/Pagination/styles.module.scss";


function CurrentPageButton({page}: ItemProps) {

  return (
    <button className={clsx(classes.btnPage, classes.active)}>
      {page}
    </button>
  );
}

export default CurrentPageButton;