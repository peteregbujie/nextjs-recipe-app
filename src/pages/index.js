import axios from "axios";
import { useState } from 'react';
import useSWR from 'swr';
import Hero from "../components/Hero/Hero";
import Layout from '../components/Layout/Layout';
import RecipeList from '../components/RecipeList/RecipeList';

export default function Home({ randomRecipes }) {  
 console.log(randomRecipes);
   const [searchTerm, setSearchTerm] = useState('');

 const updateRecipe = recipe => setSearchTerm(recipe); 

 const searchUrl = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`;

 const fetcher = async (url) => await axios.get(url).then((res) => res.data);
 const { data: searchResult, error } = useSWR(searchUrl, fetcher);

 console.log(searchResult);
   
 if (error) return <p>Something went wrong!</p>;
 if (!searchResult) return <h1>Loading...</h1>;

 return (
  <Layout>
   <Hero updateRecipe={updateRecipe} />
     <RecipeList recipes={searchResult ? searchResult.meals : randomRecipes} />
  </Layout>
 );
}



export const getStaticProps = async () => {
 const res = await axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s=');

 const randomRecipes = res.data;
 return {
  props: {
   randomRecipes,
  },
 };
};
