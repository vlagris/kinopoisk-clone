import {IGetListBySlug, IGetLists, ListResponse, ListsResponse} from "@/services/api/kinopoiskdevApi/types";
import {kinopoiskdevClient} from "@/services/api/kinopoiskdevApi/kinopoiskdevClient.ts";


export async function getLists(requestParams: IGetLists) {
  try {
    const params = { page: 1, limit: 10 }
    const response = await kinopoiskdevClient.get<ListsResponse>(
      "/v1.4/list",
      {
        params: { ...params, ...requestParams },
        paramsSerializer: { indexes: null }
      }
    )
    return response.data;
  } catch (err) {
    return Promise.reject(err)
  }
}


export async function getListBySlug(data: IGetListBySlug) {
  try {
    const response = await kinopoiskdevClient.get<ListResponse>(
      "/v1.4/list/" + data.slug
    )
    return response.data;
  } catch (err) {
    return Promise.reject(err)
  }
}


