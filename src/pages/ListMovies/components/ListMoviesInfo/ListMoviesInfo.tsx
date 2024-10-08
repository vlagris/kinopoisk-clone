import React, {useEffect, useState} from "react";
import {BrowserView, MobileView} from "react-device-detect";
import {useParams, useSearchParams} from "react-router-dom";
import {ListType} from "@/types";
import {UseMutationResult} from "react-query";



const ListMoviesInfoDesktopLazy = React.lazy(() => import("./ListMoviesInfoDesktop.tsx"))
const ListMoviesInfoMobileLazy = React.lazy(() => import("./ListMoviesInfoMobile.tsx"))

const listInfoTitles = [
  { title: "Лучшие фильмы", params: [{ name: "b", value: "films" }, { name: "b", value: "top" }] },
  { title: "Лучшие сериалы", params: [{ name: "b", value: "series" }, { name: "b", value: "top" }] },
  { title: "Фильмы", params: [{ name: "b", value: "films" }] },
  { title: "Сериалы", params: [{ name: "b", value: "series" }] },
  { title: "Фильмы и сериалы", params: [] },
];




export interface ListMoviesInfoProps {
  listInfoResult:  UseMutationResult<ListType, unknown, any>,
}

export interface ListMoviesInfoViewProps extends ListMoviesInfoProps {
  title?: string
}

function ListMoviesInfo({listInfoResult}: ListMoviesInfoProps) {
  const { listSlug } = useParams();
  const [searchParams] = useSearchParams();
  const [title, setTitle] = useState(getListInfoTitle(listSlug));


  useEffect(() => {
    setTitle(getListInfoTitle(listSlug))
  }, [listSlug]);


  function getListInfoTitle(slug?: string) {
    if (slug) {
      return;
    }
    const result = listInfoTitles.find(({params}) => {
      return params.every(({name, value}) => searchParams.getAll(name).includes(value))
    })
    return result?.title || listInfoTitles[0].title;
  }


  return (
    <React.Suspense>
      <BrowserView renderWithFragment>
        <ListMoviesInfoDesktopLazy listInfoResult={listInfoResult} title={title}/>
      </BrowserView>

      <MobileView renderWithFragment>
        <ListMoviesInfoMobileLazy listInfoResult={listInfoResult} title={title}/>
      </MobileView>
    </React.Suspense>
  );
}

export default ListMoviesInfo;