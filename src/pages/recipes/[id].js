
import Image from 'next/image';
import Layout from '../../components/Layout/Layout';
import { fetchMeal, fetchMeals } from '../../lib/requests';
import styles from './Recipe.module.css';


function Recipe ({ recipe }) {  
    
    return (
     <Layout>
      <div className={styles.recipe}>
       <section className={styles.recipe__hero}>
        <Image
         src={recipe.strMealThumb}
         alt={recipe.strMeal}
         className={styles.recipe__hero__img}
         width='300px'
         height='300px'
        />
        <article className={styles.recipe__info}>
         <h2>{recipe.strMeal}</h2>
         <p>{recipe.strInstructions}</p>

         <p className={styles.reciperecipe__tags}>
          <span className={styles.recipe__tag}>{recipe.strCategory}</span>
          <span className={styles.recipe__tag}>{recipe.strArea}</span>
         </p>
        </article>
       </section>

       <section className={styles.recipe__content}>
        <article className={styles.recipe__column}>
         <div>
          <h4>INGREDIENTS</h4>
          <p className={styles.recipe__ingredient}>{recipe.strIngredient1}</p>
          <p className={styles.recipe__ingredient}>{recipe.strIngredient2}</p>
          <p className={styles.recipe__ingredient}>{recipe.strIngredient3}</p>
          <p className={styles.recipe__ingredient}>{recipe.strIngredient3}</p>
          <p className={styles.recipe__ingredient}>{recipe.strIngredient4}</p>
          <p className={styles.recipe__ingredient}>{recipe.strIngredient5}</p>
          <p className={styles.recipe__ingredient}>{recipe.strIngredient6}</p>
          {recipe.strIngredient7 !== '' && (
           <p className={styles.recipe__ingredient}>{recipe.strIngredient7}</p>
          )}
          {recipe.strIngredient8 !== '' && (
           <p className={styles.recipe__ingredient}>{recipe.strIngredient8}</p>
          )}
          {recipe.strIngredient9 !== '' && (
           <p className={styles.recipe__ingredient}>{recipe.strIngredient9}</p>
          )}
         </div>
        </article>
        <article className={styles.recipe__column}>
         <div>
          <h4>MEASURES</h4>
          <p className={styles.recipe__ingredient}>{recipe.strMeasure1}</p>
          <p className={styles.recipe__ingredient}>{recipe.strMeasure2}</p>
          <p className={styles.recipe__ingredient}>{recipe.strMeasure3}</p>
          <p className={styles.recipe__ingredient}>{recipe.strMeasure4}</p>
          <p className={styles.recipe__ingredient}>{recipe.strMeasure5}</p>
          <p className={styles.recipe__ingredient}>{recipe.strMeasure6}</p>
          {recipe.strMeasure7 !== '' && (
           <p className={styles.recipe__ingredient}>{recipe.strMeasure7}</p>
          )}
          {recipe.strMeasure8 !== '' && (
           <p className={styles.recipe__ingredient}>{recipe.strMeasure8}</p>
          )}
          {recipe.strMeasure9 !== '' && (
           <p className={styles.recipe__ingredient}>{recipe.strMeasure9}</p>
          )}
         </div>
        </article>
       </section>
      </div>
     </Layout>
    );
}

export default Recipe;

export async function getStaticPaths() {
  const res = await fetchMeals()
  const paths = res.map((meal) => ({
    params: { id: meal.idMeal },
  }))

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const recipe = await fetchMeal(params.id)

  return {
    props: {
      recipe,
    },
  }
}