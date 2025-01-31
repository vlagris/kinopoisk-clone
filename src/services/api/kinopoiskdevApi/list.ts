import {IGetLists, ListResponse, ListsResponse} from "@/services/api/kinopoiskdevApi/types";
import {kinopoiskdevClient} from "@/services/api/kinopoiskdevApi/kinopoiskdevClient.ts";


export async function getLists(requestParams: IGetLists) {
  try {
    const defaultParams = { page: 1, limit: 10 }
    const response = await kinopoiskdevClient.get<ListsResponse>(
      "/v1.4/list",
      {
        params: { ...defaultParams, ...requestParams },
        paramsSerializer: { indexes: null }
      }
    )
    return response.data;
  } catch (error) {
    throw error;
  }
}


export async function getListBySlug(slug: string) {
  try {
    const response = await kinopoiskdevClient.get<ListResponse>(`/v1.4/list/${slug}`)
    return response.data;
  } catch (error) {
    throw error;
  }
}


