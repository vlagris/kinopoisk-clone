import {useCustomSearchParams} from "@/hooks/useCustomSearchParams.ts";
import {Select, SelectButton, SelectItem, SelectMenu} from "@/components/UI/Select";
import {Collapse} from "@/components/UI/Collapse";
import {SelectFiltersProps} from "@/pages/ListMovies/components/SelectFilters/SelectFilters.tsx";
import classes from "./styles.desktop.module.scss";



function SelectFiltersDesktop({countries, genres}: SelectFiltersProps) {
  const {searchParams, updateSearchParam} = useCustomSearchParams();
  const country = searchParams.get("country");
  const genre = searchParams.get("genre");


  return (
    <>
      <Collapse title="Страны" open>
        <Select onChange={(value) => updateSearchParam("country", value)}>
          <SelectButton/>

          {countries.isSuccess &&
            <SelectMenu className={classes.menu} inheritWidth>
              <div className={classes.list}>
                <SelectItem active={!country}>
                  Все страны
                </SelectItem>
                {countries.data?.map(({name, slug}) => (
                  <SelectItem key={slug} value={slug} active={country === slug}>
                    {name}
                  </SelectItem>
                ))}
              </div>
            </SelectMenu>
          }
        </Select>
      </Collapse>

      <Collapse title="Жанры" open>
        <Select onChange={(value) => updateSearchParam("genre", value)}>
          <SelectButton/>

          {genres.isSuccess &&
            <SelectMenu className={classes.menu} inheritWidth>
              <div className={classes.list}>
                <SelectItem active={!genre}>
                  Все жанры
                </SelectItem>
                {genres.data?.map(({name, slug}) => (
                  <SelectItem key={slug} value={slug} active={genre === slug}>
                    {name}
                  </SelectItem>
                ))}
              </div>
            </SelectMenu>
          }
        </Select>
      </Collapse>
    </>
  );
}

export default SelectFiltersDesktop;