import Image from 'next/image';
import Link from 'next/link';
import styles from './RecipeList.module.css';

function RecipeList({ recipes }) {

 return (
  <>
   <div className={styles.row}>
    {recipes.map((recipe) => (
     <Link href={`/recipes/${recipe.idMeal}`} key={recipe.strMeal} passHref>
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
       <button className={styles.button}>View Recipe</button>
      </div>
     </Link>
    ))}
   </div>
  </>
 );
}
export default RecipeList;
