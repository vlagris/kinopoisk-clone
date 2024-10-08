import {useSearchParams} from "react-router-dom";

export function useCustomSearchParams() {
  const [searchParams, setSearchParams] = useSearchParams();


  function updateSearchParam(name: string, value: string) {
    if (searchParams.get(name) === value) {
      return;
    }
    if (value) {
      searchParams.set(name, value);
      setSearchParams(searchParams);
    }
    else if (searchParams.has(name)) {
      searchParams.delete(name);
      setSearchParams(searchParams);
    }
  }

  return { searchParams, setSearchParams, updateSearchParam }
}