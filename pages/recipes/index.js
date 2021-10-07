// our-domain.com/recipes
import RecipeList from "../../components/recipes/RecipeList";

function RecipesPage(props) {
  return <RecipeList recipes={props.recipes} />;
}

export async function getStaticProps() {
  const res = await fetch(
    "https://recipesvansteelantlouis.prismic.io/api/v2/documents/search?ref=YV8KKREAACsAcNWD#format=json"
  );
  const data = await res.json();

  return {
    props: {
      recipes: data.results.map(recipe => ({
        title: recipe.data.title[0].text,
        key: recipe.id.toString(),
        id: recipe.id.toString(),
        image: recipe.data.image.url,
      }))
    },
    // In case page needs to be updated regularly (in seconds)
    //revalidate: 120
  };
}

export default RecipesPage;
