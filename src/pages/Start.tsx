import { FC, useEffect, useState } from "react";
import style from "../styles/mainPage/main.module.scss";
import recipes from "../components/mainPage/RecipeData";
import Search from "../components/mainPage/Search";
import FilterOptions from "../components/mainPage/FilterOptions";
import SortOptions from "../components/mainPage/SortOptions";
import instance from "../api/instance";
import Card from "../components/cardRecipe/Card";
import { recipeType } from "../models/recipe";
//import { alertMassage } from "../actions/alerts";

const Start: FC = () => {
  const [recipeList, setRecipeList] = useState<recipeType[]>([]);
  const [sort, setSort] = useState<string>("view");
  const [category, setCategory] = useState<string[]>([]);
  const [pageNr, setPageNr] = useState<number>(1);

  useEffect(() => {
    instance
      .get<recipeType[]>(`/recipe/page/${pageNr}`, {
        params: { sort, category: category.join(",") },
      })
      .then((res) => {
        setRecipeList(res.data);
        // console.log("dataaaa", res.data[1]);
      })
      .catch((err) => console.log(err));
  }, [sort, pageNr, category]);

  // const { isError, isLoading, data } = useQuery("fetchRecipes", async () => {
  //   return instance
  //     .get<recipeType[]>("recipe/page/1", { params: { sort } })
  //     .then((res) => res.data)
  //     .catch((err) => console.log(err));
  // });

  // if (isError) {
  //   alertMassage("fehler beim fetch data", "error");
  // }

  // if (isLoading) {
  //   return <h2>Loading</h2>;
  // }

  return (
    <>
      <div className={style.start}>
        <Search recipes={recipes} />
        <FilterOptions changeCategory={setCategory} />
        <SortOptions changeSort={setSort} />
      </div>

      {/* {recipeList.map((item, index) => {
        return <Card data={item} key={index} />;
      })} */}
      <div className={style.cardsContainer}>
        {recipeList.map((item, index) => {
          if (category.length === 0 || category.includes(item.category[1])) {
            return <Card data={item} key={index} />;
          }
          return null;
        })}
      </div>
    </>
  );
};

export default Start;