//import { useRouter } from 'next/router';
import RecipeDetail from "../../components/recipes/RecipeDetail";
import Prismic from "@prismicio/client";

// our-domain.com/recipes/specific-recipes

function RecipeDetails() {
  //const router = useRouter();

  //const recipeId = router.query.recipeId;

  //send a request to the backend API
  // to fetch the recipe itmem with recipeId

  return (
    <RecipeDetail
      image="https://upload.wikimedia.org/wikipedia/commons/3/31/Spaghetti_al_pomodoro%2C_icona_della_cucina_italiana_nel_mondo._.jpg"
      title="Pomodoro"
    />
  );
}

export async function getStaticPaths() {
  const client = Prismic.client('https://vansteelantlouisrecipes.prismic.io/api/v2/', {})
  const documents = await client.query();
  const recipes = documents.results;


  return {
    fallback: false,
    /*paths: recipes.map((recipe) => ({
      params: {recipeId: recipe.slugs[0].toString()},
    }))*/
    paths: [
      {
        params: {
          recipeId: "r1",
        },
      },
      {
        params: {
          recipeId: "r2",
        },
      },
      {
        params: {
          recipeId: "r3",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  // fetch data for a single meetup

  const recipeId = context.params.slug;

  return {
    props: {
      recipeData: {
        image:
          "https://upload.wikimedia.org/wikipedia/commons/3/31/Spaghetti_al_pomodoro%2C_icona_della_cucina_italiana_nel_mondo._.jpg",
        title: "Pomodoro",
        id: recipeId,
      },
    },
  };
}

export default RecipeDetails;
