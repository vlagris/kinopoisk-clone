import {useCustomSearchParams} from "@/hooks/useCustomSearchParams.ts";
import {Select, SelectButton, SelectItem, SelectMenu} from "@/components/UI/Select";
import {Collapse} from "../Collapse";
import {SelectFiltersProps} from "@/pages/ListMovies/components/SelectFilters/SelectFilters.tsx";
import classes from "./styles.desktop.module.scss";



function SelectFiltersDesktop({countriesResult, genresResult}: SelectFiltersProps) {
  const {searchParams, updateSearchParam} = useCustomSearchParams();
  const countries = countriesResult.data;
  const genres = genresResult.data;
  const country = searchParams.get("country");
  const genre = searchParams.get("genre");


  return (
    <>
      <Collapse title="Страны" open>
        <Select onChange={(value) => updateSearchParam("country", value)}>
          <SelectButton/>

          {countriesResult.isSuccess &&
            <SelectMenu className={classes.menu} inheritWidth>
              <div className={classes.list}>
                <SelectItem value={""} active={!country}>
                  Все страны
                </SelectItem>
                {countries?.map(({name, slug}) => (
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

          {genresResult.isSuccess &&
            <SelectMenu className={classes.menu} inheritWidth>
              <div className={classes.list}>
                <SelectItem value={""} active={!genre}>
                  Все жанры
                </SelectItem>
                {genres?.map(({name, slug}) => (
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