import {ListMoviesViewProps} from "@/pages/ListMovies/ListMovies.tsx";
import {ListMoviesHeader} from "@/pages/ListMovies/components/ListMoviesHeader";
import {ListMoviesInfo} from "@/pages/ListMovies/components/ListMoviesInfo";
import {ToggleFilters} from "./components/ToggleFilters";
import {SelectFilters} from "@/pages/ListMovies/components/SelectFilters";
import {ListMoviesListsFilters, ListMoviesListsFiltersItem} from "@/pages/ListMovies/components/ListMoviesListsFilters";
import {ListMoviesList} from "@/pages/ListMovies/components/ListMoviesList";
import {Sorting} from "@/pages/ListMovies/components/Sorting";
import {ListMoviesPagination} from "./components/ListMoviesPagination";
import classes from "@/pages/ListMovies/styles.desktop.module.scss";



function ListMoviesDesktop({ listInfoResult, moviesResult, countriesSelectResult, genresSelectResult }: ListMoviesViewProps) {
  const movies = moviesResult.data;
  const listInfo = listInfoResult.data;


  return (
    <div className={classes.listMovies}>
      <ListMoviesHeader/>

      <div className={classes.sidebar}>
        <div className={classes.sidebarFilters}>
          <ToggleFilters category={listInfo?.category}/>
          <SelectFilters
            countriesResult={countriesSelectResult}
            genresResult={genresSelectResult}
          />
        </div>
      </div>

      <div className={classes.content}>
        <ListMoviesInfo listInfoResult={listInfoResult}/>

        <div className={classes.listHeader}>
          <ListMoviesListsFilters>
            <ListMoviesListsFiltersItem
              to="."
              title="Все"
              count={movies?.total}
            />
          </ListMoviesListsFilters>
          <Sorting/>
        </div>

        <ListMoviesList
          movies={movies?.docs}
          isSuccess={moviesResult.isSuccess}
        />

        <ListMoviesPagination
          className={classes.pagination}
          page={movies?.page}
          pages={movies?.pages}
        />
      </div>
    </div>
  );
}

export default ListMoviesDesktop;