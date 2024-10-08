import Pagination from "@/components/UI/Pagination";
import {useSearchParams} from "react-router-dom";



interface ListMoviesPaginationProps {
  className?: string,
  pages?: number,
  page?: number,
}

function ListMoviesPagination({ className, pages, page}: ListMoviesPaginationProps) {
  const [searchParams,setSearchParams] = useSearchParams();


  const handlePageChange = (_: any, page: number) => {
    const name = "page";
    const pageString = page.toString();

    if (searchParams.has(name, pageString)) {
      return;
    }
    if (page) {
      searchParams.set(name, pageString);
      setSearchParams(searchParams);
    }
    else if (searchParams.has(name)) {
      searchParams.delete(name);
      setSearchParams(searchParams);
    }
  }


  return (
    <>
      {!!(page && pages && pages > 1) &&
        <div className={className}>
          <Pagination
            count={pages}
            page={page}
            onChange={handlePageChange}
          />
        </div>
      }
    </>
  );
}

export default ListMoviesPagination;