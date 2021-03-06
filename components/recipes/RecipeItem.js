import { useRouter } from "next/router";
import Card from "../ui/Card";
import classes from "./RecipeItem.module.css";
import Image from "next/image";

function RecipeItem(props) {
  const router = useRouter();

  function showDetailsHandler() {
    router.push("/recipes/" + props.uid);
  }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <Image
            src={props.image}
            alt={props.title}
            width={1500}
            height={750}
          />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
        </div>
        <div className={classes.actions}>
          <button onClick={showDetailsHandler}>Show Details</button>
        </div>
      </Card>
    </li>
  );
}

export default RecipeItem;
