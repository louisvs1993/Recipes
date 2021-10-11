import Prismic from "@prismicio/client";
import classes from "../styles/Home.module.css";
// our-domain.com/

function HomePage(props) {
  return (
    <div className={classes.content}>
      <div className={classes.columnLeft}>
        <h1>{props.page.data.title[0].text}</h1>
        <p>{props.page.data.desciption[0].text}</p>
      </div>
      <div className={classes.columnRight}>
        <img src={props.page.data.backgroundimage.url}></img>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const client = Prismic.client(
    "https://vansteelantlouisrecipes.prismic.io/api/v2/",
    {}
  );
  const documents = await client.query(
    Prismic.Predicates.at("document.type", "homepage")
  );
  const homepage = documents.results[0];

  return {
    props: {
      page: homepage,
    },
    // In case page needs to be updated regularly (in seconds)
    //revalidate: 120
  };
}

export default HomePage;
