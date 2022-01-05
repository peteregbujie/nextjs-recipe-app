import Image from 'next/image';
import Link from 'next/link';
import styles from './RecipeList.module.css';


function RecipeList({ recipes }) {

 return (
  <>
   <div className={styles.row}>
    {recipes.map((recipe) => (
     <Link href={`/recipe/${recipe.idMeal}`} key={recipe.strMeal}>      
       <div className={styles.card}>
        <Image
         src={recipe.strMealThumb + '/preview'}
         alt={recipe.strMeal}
         className={styles.img}
         width='280px'
         height='214px'
         objectFit='cover'
        />
        <div className={styles.name}>{recipe.strMeal}</div>
        <div className={styles.card__details}>
         <span className={styles.tag}>{recipe.strIngredient1}</span>
         <span className={styles.tag}>{recipe.strIngredient2}</span>
         <span className={styles.tag}>{recipe.strIngredient3}</span>
        </div>
        <button className={styles.button}>details</button>
       </div>
          </Link>
    ))}
   </div>
  </>
 );
}
export default RecipeList;
