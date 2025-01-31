import {ListCategory, ListsType, ListType} from "@/types";
import {SortType} from "@/services/api/kinopoiskdevApi/types/common.ts";

type ListSelectFields = "name" | "category" | "slug" | "moviesCount" | "cover" | "updatedAt" | "createdAt";
type ListSortFields = "name" | "category" | "slug" | "moviesCount" | "cover.url" | "cover.previewUrl" | "updatedAt" | "createdAt";


export type ListResponse = ListType;

export type ListsResponse = ListsType;



export interface IGetLists {
  page?: number,
  limit?: number,
  selectFields?: ListSelectFields | ListSelectFields[],
  notNullFields?: ListSelectFields | ListSelectFields[],
  sortField?: ListSortFields | ListSortFields[],
  sortType?: SortType | SortType[],
  slug?: string | string[],
  category?: ListCategory | ListCategory[],
  moviesCount?: string | string[],
  updatedAt?: string | string[],
  createdAt?: string | string[]
}
