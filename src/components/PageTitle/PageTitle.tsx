import {useLayoutEffect} from "react";


interface PageTitleProps {
  title: string
}

function PageTitle({title}: PageTitleProps) {


  useLayoutEffect(() => {
    document.title = title;
  }, [title])


  return null;
}

export default PageTitle;