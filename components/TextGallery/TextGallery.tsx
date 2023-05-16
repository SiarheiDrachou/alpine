import classes from "./TextGallery.module.scss";
import { TextData } from "@models/models";

export default function TextGallery(props: {
  texts: TextData[];
}): JSX.Element {
  const { texts } = props || {};

  return (
    <ul className={classes.list}>
      {texts.map((item) => {
        return (
          <li key={item.title} className={classes.listItem} style={item.style}>
            <p className={classes.title}>
              <b>
                {item.title}
              </b>
            </p>

            <p className={classes.description}>
              {item.description}
            </p>
          </li>
        );
      })}
    </ul>
  );
}
