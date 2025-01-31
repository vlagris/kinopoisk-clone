import {useQuery} from "@tanstack/react-query";
import {MovieListType} from "@/types";
import {kinopoiskdevApi} from "@/services/api/kinopoiskdevApi";
import {MovieSectionTitle} from "@/components/MovieSectionTitle";
import {MovieInListsSkeleton} from "./components/MovieInListsSkeleton";
import {MovieInListsItem} from "@/pages/Movie/components/MovieInLists/components/MovieInListsItem";
import classes from "./styles.module.scss";


interface MovieInListsProps {
  movieLists?: MovieListType[] | null,
  isSuccess: boolean
}

function MovieInLists({movieLists, isSuccess}: MovieInListsProps) {
  const lists = useQuery({
    queryKey: ["lists", movieLists],
    queryFn: () => kinopoiskdevApi.getLists({slug: movieLists as string[]}),
    enabled: !!(movieLists && movieLists.length > 0),
  })



  if (!movieLists || movieLists.length === 0) {
    return (<></>);
  }

  if (!isSuccess || !lists.isSuccess) {
    return (<MovieInListsSkeleton/>);
  }

  return (
    <div className={classes.inLists}>
      <MovieSectionTitle className={classes.title}>
        В списках
      </MovieSectionTitle>

      <div className={classes.list}>
        {lists.data?.docs.map((list, index) => (
          <MovieInListsItem key={index} list={list}/>
        ))}
      </div>
    </div>
  );
}

export default MovieInLists;