import {ListCategory, ListsType, ListType} from "@/types";
import {SortType} from "@/services/api/kinopoiskdevApi/types/common.ts";

type ListSelectFields = "name" | "category" | "slug" | "moviesCount" | "cover" | "updatedAt" | "createdAt";
type ListSortFields = "name" | "category" | "slug" | "moviesCount" | "cover.url" | "cover.previewUrl" | "updatedAt" | "createdAt";


export type ListResponse = ListType;

export type ListsResponse = ListsType;



export interface IGetLists {
  page?: number,
  limit?: number,
  selectFields?: ListSelectFields[],
  notNullFields?: ListSelectFields[],
  sortField?:  ListSortFields[],
  sortType?: SortType[],
  slug?: string[],
  category?: ListCategory[],
  moviesCount?: string[],
  updatedAt?: string[],
  createdAt?: string[]
}

export interface IGetListBySlug {
  slug: string
}
