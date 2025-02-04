import {useSearchParams} from "react-router-dom";
import {SearchParamsNames} from "@/types";



export function useUpdateSearchParams() {
  const [searchParams, setSearchParams] = useSearchParams();


  function updateSearchParam(name: SearchParamsNames, value: string | number | null | undefined) {
    if (searchParams.get(name) === value) {
      return;
    }
    if (value != null) {
      searchParams.set(name, value.toString());
      setSearchParams(searchParams);
    }
    else if (searchParams.has(name)) {
      searchParams.delete(name);
      setSearchParams(searchParams);
    }
  }

  return { searchParams, setSearchParams, updateSearchParam }
}