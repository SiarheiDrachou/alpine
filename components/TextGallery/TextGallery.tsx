import { useMemo, useState } from "react";
import { CardData, TextData } from "@models/models";
import { motion } from "framer-motion";
import cn from 'clsx'

import classes from "./TextGallery.module.scss";

export default function TextGallery(props: {
  texts: CardData[] | TextData[];
  setClickedItem: (item: TextData) => void;
  clickedItem: TextData | null;
}): JSX.Element {
  const { texts, setClickedItem, clickedItem } = props || {};
  const [selectedItem, setSelectedItem] = useState<CardData | TextData | null>(null);

  const variants = useMemo(() => {
    return {
      hover: { backgroundImage: selectedItem?.backgroundImage, color: "white" },
      noHover: { backgroundImage: "none" },
    };
  }, [selectedItem]);

  return (
    <ul className={clickedItem ? classes.listActive : classes.list}>
      {texts.map((item) => {
        return (
          <motion.li
            variants={variants}
            initial="noHover"
            animate={selectedItem?.title === item.title ? "hover" : "noHover"}
            key={item.title}
            className={classes.listItem}
            style={item.style}
            onMouseEnter={() => setSelectedItem(item)}
            onMouseLeave={() => setSelectedItem(null)}
            onClick={clickedItem ? () => {} : () => setClickedItem(item) }
          >
            <p className={classes.title}>
              <b>{item.title}</b>
            </p>

            <p className={classes.description}>{item.description}</p>

            <p className={cn(classes.price, selectedItem?.title === item.title? classes.white : '')}>
            {item?.price && 
              <span className={classes.text}>
                {'Цена'}
                <b>
                  {item?.price}
                </b>
              </span>}

              {item?.timeRange && 
              <span className={classes.text}>
                {'Сроки'}
                <b>
                {item?.timeRange}
                </b>
              </span>}
            </p>
          </motion.li>
        );
      })}
    </ul>
  );
}
