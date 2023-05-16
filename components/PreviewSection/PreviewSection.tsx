import { ArrowRight } from "@assets/svg";
import classes from "./PreviewSection.module.scss";

export default function PreviewSection(): JSX.Element {
  return (
    <section className={classes.preview}>
      <div className={classes.container}>
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
            {'70%'}
            <span>
            {'наших клиентов приходят по рекомендации'}
            </span>
          </p>
          <p className={classes.circle2}>
            {'25%'}
            <span>
            {'средняя конверсия в заявку благодаря нам'}
            </span>
          </p>
          <p className={classes.circle3}>
            {'9 лет'}
            <span>
            {'наш опыт работы в разработке и digital'}
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
