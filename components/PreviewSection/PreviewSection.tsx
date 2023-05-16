import { useCallback, useEffect } from "react";
import { ArrowRight } from "@assets/svg";
import { motion, useAnimation } from "framer-motion";
import classes from "./PreviewSection.module.scss";

export default function PreviewSection(): JSX.Element {
  const controls = useAnimation();

  const animateImage = useCallback(async () => {
    await controls.start({
      backgroundSize: "300% 300%",
      transition: { duration: 1 },
    });
    await controls.start({
      backgroundSize: "200% 200%",
      transition: { duration: 1 },
    });
    await controls.start({
      backgroundSize: "100% 100%",
      transition: { duration: 1 },
    });
  }, []);

  useEffect(() => {
    animateImage();
  }, []);

  return (
    <motion.section className={classes.preview} animate={controls}>
      <motion.div
        className={classes.container}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 0.5 }}
      >
        <div className={classes.designer}>
          <h1 className={classes.heading}>
            {
              "Комплексное развитие бизнеса с упором на Маркетинг, Бренд & Автоматизацию."
            }
          </h1>

          <p className={classes.description}>
            {"Креативная студия дизайна и разработки."}
          </p>
        </div>

        <div className={classes.project}>
          <p className={classes.subDescription}>
            {
              "Передадим ценности вашей компании с помощью разработки и продвижения сайта / сервиса / приложения"
            }
          </p>
          <button className={classes.button}>
            {"Обсудить проект"}

            <ArrowRight />
          </button>
        </div>

        <div className={classes.achievements}>
          <p className={classes.circle1}>
            {"70%"}
            <span>{"наших клиентов приходят по рекомендации"}</span>
          </p>
          <p className={classes.circle2}>
            {"25%"}
            <span>{"средняя конверсия в заявку благодаря нам"}</span>
          </p>
          <p className={classes.circle3}>
            {"9 лет"}
            <span>{"наш опыт работы в разработке и digital"}</span>
          </p>
        </div>
      </motion.div>
    </motion.section>
  );
}
