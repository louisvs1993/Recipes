
import RecipeDetail from "../../components/recipes/RecipeDetail";
import Prismic from "@prismicio/client";



function RecipeDetails(props) {

  return (
    <RecipeDetail
      image={props.recipeData.data.image.url}
      title={props.recipeData.data.title[0].text}
      time={props.recipeData.data.time}
      servings={props.recipeData.data.servings}
      ingredientsTitle={props.recipeData.data.body[0].primary.items_title[0].text}
      ingredients={props.recipeData.data.body[0].items}
      instructionsTitle={props.recipeData.data.body[1].primary.steps[0].text}
      instructions={props.recipeData.data.body[1].items}
    />
  );
}

export async function getStaticPaths() {
  const client = Prismic.client('https://vansteelantlouisrecipes.prismic.io/api/v2/', {})
  const documents = await client.query(Prismic.Predicates.at('document.type', 'recipe'));
  const recipes = documents.results;


  return {
    fallback: false,
    paths:
      recipes.map((recipe) => ({
      params: {recipeId: recipe.uid}
    }))};

    
}

export async function getStaticProps(context) {


  const recipeId = context.params.recipeId;


  const client = Prismic.client('https://vansteelantlouisrecipes.prismic.io/api/v2/', {})
  const selectedRecipe = await client.getByUID('recipe', recipeId);


  return {
    props: {
      recipeData: selectedRecipe
    },
  };
}

export default RecipeDetails;
