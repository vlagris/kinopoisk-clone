import ToggleFiltersItem from "@/pages/ListMovies/components/ToggleFilters/components/ToggleFiltersItem.tsx";
import {ToggleFiltersViewProps} from "@/pages/ListMovies/components/ToggleFilters/ToggleFilters.tsx";



function ToggleFiltersMobile({items}: ToggleFiltersViewProps) {
  return (
    <>
      {items.map((itemProps) => (
        <ToggleFiltersItem
          key={itemProps.to}
          {...itemProps}
        />
      ))}
    </>
  );
}

export default ToggleFiltersMobile;