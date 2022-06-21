import axios from "axios";
import { useState } from "react";
import useSWR from "swr";
import Hero from "../components/Hero/Hero";
import Layout from "../components/Layout/Layout";
import RecipeList from "../components/RecipeList/RecipeList";
import { fetchMeals } from "../lib/requests";

export default function Home({ randomRecipes }) {
 const [searchTerm, setSearchTerm] = useState("");

 const updateRecipe = (recipe) => setSearchTerm(recipe);

 const searchUrl = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`;

 const fetcher = async (url) => await axios.get(url).then((res) => res.data);
 const { data: searchResult, error } = useSWR(searchUrl, fetcher);

 if (error) return <span>Something went wrong!</span>;
 if (!searchResult) return <span>Loading...</span>;

 return (
  <Layout>
   <Hero updateRecipe={updateRecipe} />
   <RecipeList
    recipes={searchResult ? searchResult.meals : randomRecipes.meals}
   />
  </Layout>
 );
}

export const getStaticProps = async () => {
 const randomRecipes = await fetchMeals();

 return {
  props: {
   randomRecipes,
  },
 };
};
