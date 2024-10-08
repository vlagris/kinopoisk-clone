import ToggleFiltersItem from "@/pages/ListMovies/components/ToggleFilters/components/ToggleFiltersItem.tsx";
import classes from "@/pages/ListMovies/components/ToggleFilters/styles.module.scss";
import {ToggleFiltersViewProps} from "@/pages/ListMovies/components/ToggleFilters/ToggleFilters.tsx";





function ToggleFilters({items}: ToggleFiltersViewProps) {
  return (
    <div className={classes.toggleFilters}>

      {items.map((itemProps) => (
        <ToggleFiltersItem
          key={itemProps.to}
          {...itemProps}
        />
      ))}

    </div>
  );
}

export default ToggleFilters;