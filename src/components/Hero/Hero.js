
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import styles from './Hero.module.css';

const Hero = ({ updateRecipe }) => {
  const [recipe, setRecipe] = useState("");

  const handleChnage = (e) => setRecipe(e.target.value)
  
  const handleSubmit = (e) => {
    e.preventDefault();
    updateRecipe(recipe)
    setRecipe("");
};
  
 return (
  <form onSubmit={handleSubmit} className={styles.hero}>
   <div className={styles.hero__text}>Find Your favorite Recipes</div>
   <div className={styles.hero__input}>
    <FaSearch size={30} />
    <input
     type='text'
     value={recipe}
     placeholder='Search for Recipes'
     onChange={handleChnage}
    />
    <button type='submit'>search</button>
   </div>
  </form>
 );
};


export default Hero
