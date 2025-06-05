export type ListCategory = "Фильмы" | "Сериалы" | "Сборы" | "Премии" | "Онлайн-кинотеатр";

export type ListType = {
  category: ListCategory,
  slug: string,
  moviesCount: number,
  cover: {
    url: string | null,
    previewUrl: string | null
  },
  name: string,
  updatedAt: string,
  createdAt: string
}

export type ListsType = {
  docs: ListType[],
  total: 0,
  limit: 0,
  page: 0,
  pages: 0
}