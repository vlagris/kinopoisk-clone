import {createHashRouter, createBrowserRouter, RouteObject} from "react-router-dom";
import {PATH_ROUTE} from "@/constants";
import {Layout} from "@/components/Layout";
import {Home} from "@/pages/Home";
import {Lists} from "@/pages/Lists";
import ErrorPage from "@/pages/ErrorPage";
import {ListMovies} from "@/pages/ListMovies";
import {Movie} from "@/pages/Movie";

export const routes: RouteObject[] = [
  {
    path: PATH_ROUTE.HOME,
    element: <Layout/>,
    errorElement: (
        <ErrorPage/>
    ),
    children: [
      {
        index: true,
        element: <Home/>,
      },
      {
        path: PATH_ROUTE.LISTS_CATEGORIES,
        element: <Lists/>,
      },
      {
        path: PATH_ROUTE.LISTS_MOVIES,
        element: <ListMovies/>,
      },
      {
        path: PATH_ROUTE.MOVIE,
        element: <Movie/>,
      },
    ]
  },
]

export const router = import.meta.env.DEV ? createBrowserRouter(routes) : createHashRouter(routes);