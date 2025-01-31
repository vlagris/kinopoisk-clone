import {ListMoviesViewProps} from "@/pages/ListMovies/ListMovies.tsx";
import {ListMoviesHeader} from "@/pages/ListMovies/components/ListMoviesHeader";
import {ListMoviesInfo} from "@/pages/ListMovies/components/ListMoviesInfo";
import {Sorting} from "@/pages/ListMovies/components/Sorting";
import {SelectFilters} from "@/pages/ListMovies/components/SelectFilters";
import {ToggleFilters} from "@/pages/ListMovies/components/ToggleFilters";
import {ListMoviesListsFilters, ListMoviesListsFiltersItem} from "@/pages/ListMovies/components/ListMoviesListsFilters";
import {ListMoviesPagination} from "@/pages/ListMovies/components/ListMoviesPagination";
import {ListMoviesList} from "@/pages/ListMovies/components/ListMoviesList";
import classes from "@/pages/ListMovies/styles.mobile.module.scss";




function ListMoviesMobile({ listInfo, movies, countriesSelect, genresSelect }: ListMoviesViewProps) {


  return (
    <div className={classes.listMovies}>
      <ListMoviesHeader/>
      <ListMoviesInfo listInfo={listInfo}/>

      <div className={classes.topBar}>
        <div className={classes.topBarList}>
          <div className={classes.topBarItemWrap}>
            <SelectFilters countries={countriesSelect} genres={genresSelect}/>
          </div>
          <div className={classes.topBarItemWrap}>
            <Sorting/>
          </div>
          <ToggleFilters category={listInfo.data?.category}/>
        </div>
      </div>

      <div className={classes.listHeader}>
        <ListMoviesListsFilters>
          <ListMoviesListsFiltersItem to="." title="Все" count={movies.data?.total}/>
        </ListMoviesListsFilters>
      </div>

      <ListMoviesList movies={movies.data?.docs} isSuccess={movies.isSuccess}/>

      <ListMoviesPagination
        className={classes.pagination}
        page={movies.data?.page}
        pages={movies.data?.pages}
      />

    </div>
  );
}

export default ListMoviesMobile;