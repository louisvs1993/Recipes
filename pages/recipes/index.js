// our-domain.com/recipes
import RecipeList from "../../components/recipes/RecipeList";
import Prismic from "@prismicio/client";

function RecipesPage(props) {
  return <RecipeList recipes={props.recipes} />;
}

export async function getStaticProps() {

  const client = Prismic.client('https://vansteelantlouisrecipes.prismic.io/api/v2/', {})
  const documents = await client.query();
  //const piz = await client.getByID(documents.results[0].id);
  
  //console.log(piz);

  return {
    props: {
      recipes: documents.results.map(recipe => ({
        title: recipe.data.title[0].text,
        key: recipe.id.toString(),
        id: recipe.id.toString(),
        image: recipe.data.image.url,
        uid: recipe.uid
      }))
    },
    // In case page needs to be updated regularly (in seconds)
    //revalidate: 120
  };
}

export default RecipesPage;
