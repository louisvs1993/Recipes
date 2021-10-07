import classes from './RecipeDetail.module.css'

function RecipeDetail(props) {
  return (
    <section className={classes.detail}>
      <img src={props.image} alt={props.title}></img>
      <h1>{props.title}</h1>
    </section>
  );
}

export default RecipeDetail;
