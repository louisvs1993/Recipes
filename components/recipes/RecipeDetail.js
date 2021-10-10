import classes from './RecipeDetail.module.css'
import RecipeItem from './RecipeItem';

function RecipeDetail(props) {

  return (
    <section className={classes.detail}>
      <img src={props.image} alt={props.title}></img>
      <h1>{props.title}</h1>
      <p>Time: {props.time}</p>
      <p>Servings: {props.servings}</p>
      <br/>
      <h3>{props.ingredientsTitle}</h3>
      {props.ingredients.map((ingredient) => (
        <p>{ingredient.item}</p>
      ))}
      <br/>
      <h3>Instructies</h3>
      {props.instructions.map((instruction) => (
        <div>
        <h4>{instruction.step_title[0].text}</h4>
        <p>{instruction.description_of_step[0].text}</p>
        </div>
      ))}
    </section>
  );
}

export default RecipeDetail;
