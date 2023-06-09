import { CloseIcon, LinkArrow, Logo, Menu } from "@assets/svg";
import classes from "./Header.module.scss";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Header(): JSX.Element {
  const [isVisibleMenu, setIsVisibleMenu] = useState(false);

  return (
    <header className={classes.header}>
      <motion.div
        className={classes.container}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 0.5 }}
      >
        <Logo className="" />

        <menu className={isVisibleMenu ? classes.menuActive : classes.menu}>
          {!isVisibleMenu && (
            <button
              className={classes.button}
              onClick={() => setIsVisibleMenu(true)}
            >
              {"Меню"}
              <Menu />
            </button>
          )}
          {isVisibleMenu && (
            <div className={classes.subMenu}>
              <button
                className={classes.closeButton}
                onClick={() => setIsVisibleMenu(false)}
              >
                {"Закрыть"}
                <CloseIcon />
              </button>
              <ul className={classes.routingList}>
                <li>{"Кейсы"}</li>
                <li>{"Услуги"}</li>
                <li>{"Отзывы"}</li>
                <li>{"Контакты"}</li>
              </ul>
              <ul className={classes.socialLists}>
                <li></li>
                <li>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    {"telegram"}
                  </a>
                  <LinkArrow />
                </li>
                <li>
                  <a
                    href="mailto:alpine.std@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {"alpine.std@gmail.com"}
                  </a>
                  <LinkArrow />
                </li>
                <li>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    {"whatsapp"}
                  </a>
                  <LinkArrow />
                </li>
              </ul>
            </div>
          )}
        </menu>
      </motion.div>
    </header>
  );
}
