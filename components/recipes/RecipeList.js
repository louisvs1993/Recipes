import RecipeItem from './RecipeItem';
import classes from './RecipeList.module.css';

function RecipeList(props) {
  return (
    <ul className={classes.list}>
      {props.recipes.map((recipe) => (
        <RecipeItem
          key={recipe.id}
          id={recipe.id}
          image={recipe.image}
          title={recipe.title}
          uid={recipe.uid}
        />
      ))}
    </ul>
  );
}

export default RecipeList;
