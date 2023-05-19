import { useCallback, useEffect } from "react";
import { ArrowRight, Logo } from "@assets/svg";
import { motion, useAnimation } from "framer-motion";
import classes from "./PreviewSection.module.scss";

export default function PreviewSection(): JSX.Element {
  const imageControls = useAnimation();
  const logocontrols = useAnimation();

  const animateLogo = useCallback(async () => {
    await logocontrols.start({
      opacity: 1,
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      transition: { duration: 1 },
    });
    await logocontrols.start({
      opacity: 1,
      transition: { duration: 1 },
    });
    await logocontrols.start({
      opacity: 0,
      visibility: 'hidden',
      transition: { delay: 1, duration: 0.5 },
    });
  }, []);

  const animateImage = useCallback(async () => {
    await imageControls.start({
      backgroundImage: 'url("/img/background.png")',
      backgroundSize: "300% 300%",
      transition: { delay: 1, duration: 1 },
    });
    await imageControls.start({
      backgroundSize: "200% 200%",
      backgroundImage: 'url("/img/background.png")',
      transition: { duration: 1 },
    });
    await imageControls.start({
      backgroundSize: "100% 100%",
      backgroundImage: 'url("/img/background.png")',
      transition: { duration: 1 },
    });
  }, []);

  useEffect(() => {
    animateLogo();
    animateImage();
  }, []);

  return (
    <motion.section
      className={classes.preview}
      animate={imageControls}
      transition={{ delay: 2 }}
    >
      <motion.div
        className={classes.container}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4, duration: 0.5 }}
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
      <motion.div
        className={classes.firstAnimation}
        animate={logocontrols}
        transition={{ duration: 1 }}
      >
        <Logo />
      </motion.div>
    </motion.section>
  );
}
