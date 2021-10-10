
import RecipeDetail from "../../components/recipes/RecipeDetail";
import Prismic from "@prismicio/client";



function RecipeDetails(props) {
  console.log(props.recipeData.data);

  return (
    <RecipeDetail
      image={props.recipeData.data.image.url}
      title={props.recipeData.data.title[0].text}
      time={props.recipeData.data.time}
      servings={props.recipeData.data.servings}
    />
  );
}

export async function getStaticPaths() {
  const client = Prismic.client('https://vansteelantlouisrecipes.prismic.io/api/v2/', {})
  const documents = await client.query();
  const recipes = documents.results;
  //console.log(recipes[0].id);


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
