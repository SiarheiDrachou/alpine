import classes from "./ProjectSection.module.scss";
import { Gallery } from "@components/Gallery";

export default function ProjectSection(): JSX.Element {
  const gallery = [
    {
      type: "Fullstack-разработка",
      style: {
        backgroundImage: "url(/img/fullstack-bg.png)",
        gridColumnStart: "1",
        gridColumnEnd: "3",
      },
      isDevelopment: false,
      card: {
        type: "Refocus",
        year: "2022",
        title: "Путеводитель по IT",
        link: "#",
      },
    },
    {
      type: "Сайт «Под ключ»",
      style: {
        backgroundImage: "url('/img/dantist-bg.png')",
        gridColumnStart: "1",
        gridColumnEnd: "2",
      },
      isDevelopment: false,
      card: {
        type: "Medica Mente",
        year: "2022",
        title: "Стоматологическая клиника",
        link: "#",
      },
    },
    {
      type: "Бизнес-партнёр",
      year: "2023",
      style: {
        backgroundImage: "url('/img/development-bg.png')",
        gridColumnStart: "2",
        gridColumnEnd: "3",
      },
      isDevelopment: true,
    },
    {
      type: "Fullstack-разработка1",
      style: {
        backgroundImage: "url('/img/protection-bg.png')",
        gridColumnStart: "1",
        gridColumnEnd: "3",
      },
      isDevelopment: false,
      card: {
        type: "Югвидео",
        year: "2022",
        title: "Компания, занимающаяся системами безопасности",
        link: "#",
      },
    },
  ];

  return (
    <section className={classes.project}>
      <div className={classes.container}>
        <h3 className={classes.heading}>{"Проекты, которыми мы гордимся"}</h3>
        <Gallery gallery={gallery} />

        <article className={classes.description}>
          {`Мы делаем не только узкие задачи по дизайну и разработке  💻 , но и 
          в  🪄 дальнейшем занимаемся   продвижением  💡  и налаживанием бизнес-процессов в компании.`}
        </article>
      </div>
    </section>
  );
}
