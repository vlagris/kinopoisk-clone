import React, {useLayoutEffect, useState} from "react";
import {useParams, useSearchParams} from "react-router-dom";
import {BrowserView, MobileView} from "react-device-detect";
import {UseMutationResult} from "@tanstack/react-query";
import {ListType} from "@/types";
import {PageTitle} from "@/components/PageTitle";



const ListMoviesInfoDesktopLazy = React.lazy(() => import("./ListMoviesInfoDesktop.tsx"))
const ListMoviesInfoMobileLazy = React.lazy(() => import("./ListMoviesInfoMobile.tsx"))

const listInfoTitles = [
  { title: "Лучшие фильмы", params: [["b", "films"], ["b", "top"]] },
  { title: "Лучшие сериалы", params: [["b", "series"], ["b", "top"]] },
  { title: "Фильмы", params: [["b", "films"]] },
  { title: "Сериалы", params: [["b", "series"]] },
  { title: "Фильмы и сериалы", params: [] },
];


export interface ListMoviesInfoProps {
  listInfo: UseMutationResult<ListType, Error, string>,
}

export interface ListMoviesInfoViewProps {
  title?: string,
  img?: string | null,
  isSuccess: boolean,
}

function ListMoviesInfo({listInfo}: ListMoviesInfoProps) {
  const { listSlug } = useParams();
  const [searchParams] = useSearchParams();
  const [title, setTitle] = useState(listInfoTitles[5].title);


  useLayoutEffect(() => {
    if (listSlug) {
      return;
    }
    const result = listInfoTitles.find(({params}) => {
      return params.every(([name, value]) => {
        return searchParams.getAll(name).includes(value)
      })
    })
    if (result) {
      setTitle(result.title)
    }
  }, [listSlug]);


  const pageTitle = [listInfo.data?.name || title, "Кинопоиск"]
    .filter(Boolean).join(" — ");


  const props: ListMoviesInfoViewProps = {
    title: listInfo.data?.name || title,
    isSuccess: listInfo.isSuccess || listInfo.isIdle,
    img: listInfo.data?.cover?.url
  }

  return (
    <>
      <PageTitle title={pageTitle}/>
      <React.Suspense>
        <BrowserView renderWithFragment>
          <ListMoviesInfoDesktopLazy {...props}/>
        </BrowserView>

        <MobileView renderWithFragment>
          <ListMoviesInfoMobileLazy {...props}/>
        </MobileView>
      </React.Suspense>
    </>
  );
}

export default ListMoviesInfo;