import { LinkArrow } from "@assets/svg";
import classes from "./Gallery.module.scss";
import { GalleryData } from "@models/models";
import { motion } from "framer-motion";

export default function ProjectSection(props: {
  gallery: GalleryData[];
}): JSX.Element {
  const { gallery } = props || {};

  return (
    <ul className={classes.list}>
      {gallery.map((item) => {
        return (
          <motion.li
            key={item.type}
            className={classes.listItem}
            style={item.style}
            whileHover={{ scale: 0.95 }}
            transition={{ duration: 0.5 }}
          >
            <span className={classes.projectType}>{item.type}</span>
            {item.isDevelopment && (
              <span className={classes.cardDevelop}>{"В разработке"}</span>
            )}
            {item.year && <span className={classes.year}>{item.year}</span>}
            {item.card && (
              <a className={classes.card} href={item.card.link} target="_blank">
                <span className={classes.cardType}>{item.card.type}</span>
                <span className={classes.cardYear}>{item.card.year}</span>
                <h3 className={classes.cardTitle}>
                  {item.card.title}
                  <LinkArrow width="20" height="20" color="black" />
                </h3>
              </a>
            )}
          </motion.li>
        );
      })}
    </ul>
  );
}
