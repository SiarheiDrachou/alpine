import { Arrow, LinkArrow, Logo } from "@assets/svg";
import classes from "./Footer.module.scss";
import { Container } from "@components/Container";

export default function Footer(): JSX.Element {
  return (
    <footer className={classes.footer}>
      <Container className={classes.container}>
        <Logo />
        <div className={classes.grid}>
          <div className={classes.info}>
            <h2 className={classes.heading}>
              {"Давайте развивать ваш бизнес вместе!"}
            </h2>

            <p className={classes.text}>
              {
                "Не стесняйтесь спрашивать – обсудим ваши идеи и начнём воплощать их в эффективные digital-проекты."
              }
            </p>

            <button className={classes.button}>
              {"Обсудить проект"}
              <Arrow />
            </button>
          </div>
          <div className={classes.info}>
            <h3 className={classes.subHeading}>{"Связаться с нами"}</h3>
            <a href="#" className={classes.link}>
              {"e-mail"}
              <LinkArrow />
            </a>
            <a href="#" className={classes.link}>
              {"telegram"}
              <LinkArrow />
            </a>
            <a href="#" className={classes.link}>
              {"whatsapp"}
              <LinkArrow />
            </a>
          </div>
          <div className={classes.info}>
            <h3 className={classes.subHeading}>{"Наши проекты"}</h3>
            <a href="#" className={classes.link}>
              {"vk"}
              <LinkArrow />
            </a>
            <a href="#" className={classes.link}>
              {"behance"}
              <LinkArrow />
            </a>
          </div>
        </div>
      </Container>
      <Container className={classes.copyright}>
        <p className={classes.text}>{"alpine.studio © 2023"}</p>
        <p className={classes.text}>
          {"Все права защищены 🞄 Политика конфиденциальности"}
        </p>
      </Container>
    </footer>
  );
}
