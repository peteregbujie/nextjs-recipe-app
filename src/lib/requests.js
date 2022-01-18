import axios from 'axios';

axios.defaults.baseURL = 'https://www.themealdb.com/api/json/v1/1/';

export async function fetchMeal(id) {
 const res = await axios.get(`/lookup.php?i=${id}`);
 const meal = await res.data.meals[0];

 return meal;
}

export async function fetchMeals() {
 const res = await axios.get('/search.php?s=');
 const meal = await res.data.meals;

 return meal;
}

