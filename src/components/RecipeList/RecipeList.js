
function RecipeList({recipes}) {
    return (
     <>
      {recipes.map((recipe) => (
       <Link href={`/recipe/${recipe.idMeal}`} key={recipe.strMeal}>
        <div className={styles.card}></div>
       </Link>
      ))}
     </>
    );
}

export default RecipeList



