import classes from "./RecipeDetail.module.css";
import RecipeItem from "./RecipeItem";
import Image from "next/image";

function RecipeDetail(props) {
  return (
    <section className={classes.detail}>
      <Image
        src={props.image}
        alt="Food picture"
        width={1500}
        height={750}
      />
      <h1>{props.title}</h1>
      <div className={classes.shortdetails}>
        <p>Time: {props.time}</p>
        <p>Servings: {props.servings}</p>
      </div>
      <hr />
      <div className={classes.ingredients}>
        <h3>{props.ingredientsTitle}</h3>
        {props.ingredients.map((ingredient) => (
          <p key={ingredient.key}>{ingredient.item}</p>
        ))}
      </div>
      <hr />
      <div className={classes.instructions}>
        <h3>{props.instructionsTitle}</h3>
        {props.instructions.map((instruction) => (
          <div key={instruction.key}>
            <h4>{instruction.step_title[0].text}</h4>
            <p>{instruction.description_of_step[0].text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default RecipeDetail;
