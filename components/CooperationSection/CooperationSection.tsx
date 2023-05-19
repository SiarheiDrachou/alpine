import { TextGallery } from "@components/TextGallery";
import classes from "./CooperationSection.module.scss";
import { Container } from "@components/Container";
import { TextData } from "@models/models";
import { useState } from "react";
import { Arrow } from "@assets/svg";

export default function CooperationSection(): JSX.Element {
  const texts = [
    {
      title: "Комплексная разработка сайта / приложения / сервиса «под ключ»",
      description:
        "Мы предоставляем услуги по созданию сайтов, сервисов и приложений «под ключ». Это значит, что мы возьмем на себя все этапы создания проекта, начиная с дизайна и заканчивая запуском проекта в интернете.",
      style: {
        gridColumn: "span 2 / span 2",
        fontSize: "2.5rem",
      },
      backgroundImage: "url('/img/background.png')",
      cards: [
        {
          title:
            "Комплексная разработка сайта / приложения / сервиса «под ключ»1",
          description:
            "Мы предоставляем услуги по созданию сайтов, сервисов и приложений «под ключ». Это значит, что мы возьмем на себя все этапы создания проекта, начиная с дизайна и заканчивая запуском проекта в интернете.",
          timeRange: "от 20 дней",
          price: "от 60 тыс. руб.",
          style: {
            fontSize: "1.5rem",
          },
          backgroundImage: "url('/img/background.png')",
        },
        {
          title: "Маркетинг (SEO / Контекстная / Таргетированная реклама)1",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet turpis justo. Pellentesque eget accumsan elit. Etiam lectus ex, ultrices vitae consequat eget, accumsan vel sem. ",
          timeRange: "от 20 дней",
          price: "от 60 тыс. руб.",
          style: {
            fontSize: "1.5rem",
          },
          backgroundImage: "url('/img/background.png')",
        },
        {
          title: "Разработка сайта / сервиса / приложения1",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet turpis justo. Pellentesque eget accumsan elit. Etiam lectus ex, ultrices vitae consequat eget, accumsan vel sem. ",
          timeRange: "от 20 дней",
          price: "от 60 тыс. руб.",
          style: {
            fontSize: "1.5rem",
          },
          backgroundImage: "url('/img/background.png')",
        },
        {
          title: "Дизайн сайта / сервиса / приложения1",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet turpis justo. Pellentesque eget accumsan elit. Etiam lectus ex, ultrices vitae consequat eget, accumsan vel sem. ",
          timeRange: "от 20 дней",
          price: "от 60 тыс. руб.",
          style: {
            fontSize: "1.5rem",
          },
          backgroundImage: "url('/img/background.png')",
        },
        {
          title: "Бизнес-услуги",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet turpis justo. Pellentesque eget accumsan elit. Etiam lectus ex, ultrices vitae consequat eget, accumsan vel sem. ",
          timeRange: "от 20 дней",
          price: "от 60 тыс. руб.",
          style: {
            fontSize: "1.5rem",
          },
          backgroundImage: "url('/img/background.png')",
        },
      ],
    },
    {
      title: "Маркетинг (SEO / Контекстная / Таргетированная реклама)",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet turpis justo. Pellentesque eget accumsan elit. Etiam lectus ex, ultrices vitae consequat eget, accumsan vel sem. ",
      style: {
        gridColumn: "span 1 / span 1",
        fontSize: "1.5rem",
      },
      backgroundImage: "url('/img/background.png')",
      cards: [
        {
          title:
            "Комплексная разработка сайта / приложения / сервиса «под ключ»",
          description:
            "Мы предоставляем услуги по созданию сайтов, сервисов и приложений «под ключ». Это значит, что мы возьмем на себя все этапы создания проекта, начиная с дизайна и заканчивая запуском проекта в интернете.",
          timeRange: "от 20 дней",
          price: "от 60 тыс. руб.",
          style: {
            fontSize: "2.5rem",
          },
          backgroundImage: "url('/img/background.png')",
        },
        {
          title: "Маркетинг (SEO / Контекстная / Таргетированная реклама)",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet turpis justo. Pellentesque eget accumsan elit. Etiam lectus ex, ultrices vitae consequat eget, accumsan vel sem. ",
          timeRange: "от 20 дней",
          price: "от 60 тыс. руб.",
          style: {
            fontSize: "1.5rem",
          },
          backgroundImage: "url('/img/background.png')",
        },
        {
          title: "Разработка сайта / сервиса / приложения",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet turpis justo. Pellentesque eget accumsan elit. Etiam lectus ex, ultrices vitae consequat eget, accumsan vel sem. ",
          timeRange: "от 20 дней",
          price: "от 60 тыс. руб.",
          style: {
            fontSize: "1.5rem",
          },
          backgroundImage: "url('/img/background.png')",
        },
        {
          title: "Дизайн сайта / сервиса / приложения",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet turpis justo. Pellentesque eget accumsan elit. Etiam lectus ex, ultrices vitae consequat eget, accumsan vel sem. ",
          timeRange: "от 20 дней",
          price: "от 60 тыс. руб.",
          style: {
            fontSize: "1.5rem",
          },
          backgroundImage: "url('/img/background.png')",
        },
        {
          title: "Бизнес-услуги",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet turpis justo. Pellentesque eget accumsan elit. Etiam lectus ex, ultrices vitae consequat eget, accumsan vel sem. ",
          timeRange: "от 20 дней",
          price: "от 60 тыс. руб.",
          style: {
            fontSize: "1.5rem",
          },
          backgroundImage: "url('/img/background.png')",
        },
      ],
    },
    {
      title: "Разработка сайта / сервиса / приложения",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet turpis justo. Pellentesque eget accumsan elit. Etiam lectus ex, ultrices vitae consequat eget, accumsan vel sem. ",
      style: {
        gridColumn: "span 1 / span 1",
        fontSize: "1.5rem",
      },
      backgroundImage: "url('/img/background.png')",
      cards: [
        {
          title:
            "Комплексная разработка сайта / приложения / сервиса «под ключ»",
          description:
            "Мы предоставляем услуги по созданию сайтов, сервисов и приложений «под ключ». Это значит, что мы возьмем на себя все этапы создания проекта, начиная с дизайна и заканчивая запуском проекта в интернете.",
          timeRange: "от 20 дней",
          price: "от 60 тыс. руб.",
          style: {
            fontSize: "2.5rem",
          },
          backgroundImage: "url('/img/background.png')",
        },
        {
          title: "Маркетинг (SEO / Контекстная / Таргетированная реклама)",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet turpis justo. Pellentesque eget accumsan elit. Etiam lectus ex, ultrices vitae consequat eget, accumsan vel sem. ",
          timeRange: "от 20 дней",
          price: "от 60 тыс. руб.",
          style: {
            fontSize: "1.5rem",
          },
          backgroundImage: "url('/img/background.png')",
        },
        {
          title: "Разработка сайта / сервиса / приложения",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet turpis justo. Pellentesque eget accumsan elit. Etiam lectus ex, ultrices vitae consequat eget, accumsan vel sem. ",
          timeRange: "от 20 дней",
          price: "от 60 тыс. руб.",
          style: {
            fontSize: "1.5rem",
          },
          backgroundImage: "url('/img/background.png')",
        },
        {
          title: "Дизайн сайта / сервиса / приложения",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet turpis justo. Pellentesque eget accumsan elit. Etiam lectus ex, ultrices vitae consequat eget, accumsan vel sem. ",
          timeRange: "от 20 дней",
          price: "от 60 тыс. руб.",
          style: {
            fontSize: "1.5rem",
          },
          backgroundImage: "url('/img/background.png')",
        },
        {
          title: "Бизнес-услуги",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet turpis justo. Pellentesque eget accumsan elit. Etiam lectus ex, ultrices vitae consequat eget, accumsan vel sem. ",
          timeRange: "от 20 дней",
          price: "от 60 тыс. руб.",
          style: {
            fontSize: "1.5rem",
          },
          backgroundImage: "url('/img/background.png')",
        },
      ],
    },
    {
      title: "Дизайн сайта / сервиса / приложения",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet turpis justo. Pellentesque eget accumsan elit. Etiam lectus ex, ultrices vitae consequat eget, accumsan vel sem. ",
      style: {
        gridColumn: "span 1 / span 1",
        fontSize: "1.5rem",
      },
      backgroundImage: "url('/img/background.png')",
      cards: [
        {
          title:
            "Комплексная разработка сайта / приложения / сервиса «под ключ»",
          description:
            "Мы предоставляем услуги по созданию сайтов, сервисов и приложений «под ключ». Это значит, что мы возьмем на себя все этапы создания проекта, начиная с дизайна и заканчивая запуском проекта в интернете.",
          timeRange: "от 20 дней",
          price: "от 60 тыс. руб.",
          style: {
            fontSize: "2.5rem",
          },
          backgroundImage: "url('/img/background.png')",
        },
        {
          title: "Маркетинг (SEO / Контекстная / Таргетированная реклама)",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet turpis justo. Pellentesque eget accumsan elit. Etiam lectus ex, ultrices vitae consequat eget, accumsan vel sem. ",
          timeRange: "от 20 дней",
          price: "от 60 тыс. руб.",
          style: {
            fontSize: "1.5rem",
          },
          backgroundImage: "url('/img/background.png')",
        },
        {
          title: "Разработка сайта / сервиса / приложения",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet turpis justo. Pellentesque eget accumsan elit. Etiam lectus ex, ultrices vitae consequat eget, accumsan vel sem. ",
          timeRange: "от 20 дней",
          price: "от 60 тыс. руб.",
          style: {
            fontSize: "1.5rem",
          },
          backgroundImage: "url('/img/background.png')",
        },
        {
          title: "Дизайн сайта / сервиса / приложения",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet turpis justo. Pellentesque eget accumsan elit. Etiam lectus ex, ultrices vitae consequat eget, accumsan vel sem. ",
          timeRange: "от 20 дней",
          price: "от 60 тыс. руб.",
          style: {
            fontSize: "1.5rem",
          },
          backgroundImage: "url('/img/background.png')",
        },
        {
          title: "Бизнес-услуги",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet turpis justo. Pellentesque eget accumsan elit. Etiam lectus ex, ultrices vitae consequat eget, accumsan vel sem. ",
          timeRange: "от 20 дней",
          price: "от 60 тыс. руб.",
          style: {
            fontSize: "1.5rem",
          },
          backgroundImage: "url('/img/background.png')",
        },
      ],
    },
    {
      title: "Бизнес-услуги",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet turpis justo. Pellentesque eget accumsan elit. Etiam lectus ex, ultrices vitae consequat eget, accumsan vel sem. ",
      style: {
        gridColumn: "span 1 / span 1",
        fontSize: "1.5rem",
      },
      backgroundImage: "url('/img/background.png')",
      cards: [
        {
          title:
            "Комплексная разработка сайта / приложения / сервиса «под ключ»",
          description:
            "Мы предоставляем услуги по созданию сайтов, сервисов и приложений «под ключ». Это значит, что мы возьмем на себя все этапы создания проекта, начиная с дизайна и заканчивая запуском проекта в интернете.",
          timeRange: "от 20 дней",
          price: "от 60 тыс. руб.",
          style: {
            fontSize: "2.5rem",
          },
          backgroundImage: "url('/img/background.png')",
        },
        {
          title: "Маркетинг (SEO / Контекстная / Таргетированная реклама)",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet turpis justo. Pellentesque eget accumsan elit. Etiam lectus ex, ultrices vitae consequat eget, accumsan vel sem. ",
          timeRange: "от 20 дней",
          price: "от 60 тыс. руб.",
          style: {
            fontSize: "1.5rem",
          },
          backgroundImage: "url('/img/background.png')",
        },
        {
          title: "Разработка сайта / сервиса / приложения",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet turpis justo. Pellentesque eget accumsan elit. Etiam lectus ex, ultrices vitae consequat eget, accumsan vel sem. ",
          timeRange: "от 20 дней",
          price: "от 60 тыс. руб.",
          style: {
            fontSize: "1.5rem",
          },
          backgroundImage: "url('/img/background.png')",
        },
        {
          title: "Дизайн сайта / сервиса / приложения",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet turpis justo. Pellentesque eget accumsan elit. Etiam lectus ex, ultrices vitae consequat eget, accumsan vel sem. ",
          timeRange: "от 20 дней",
          price: "от 60 тыс. руб.",
          style: {
            fontSize: "1.5rem",
          },
          backgroundImage: "url('/img/background.png')",
        },
        {
          title: "Бизнес-услуги",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet turpis justo. Pellentesque eget accumsan elit. Etiam lectus ex, ultrices vitae consequat eget, accumsan vel sem. ",
          timeRange: "от 20 дней",
          price: "от 60 тыс. руб.",
          style: {
            fontSize: "1.5rem",
          },
          backgroundImage: "url('/img/background.png')",
        },
      ],
    },
  ];

  const [clickedItem, setClickedItem] = useState<any>(null);

  return (
    <section className={classes.cooperation}>
      <Container className={classes.container}>
        <h3 className={classes.title}>{"Давайте сотрудничать"}</h3>

        <p className={classes.subTitle}>
          <b>{"Мы будем полезны в вопросах"}</b>{" "}
          <span>
            <b>{"Маркетинга"}</b>
          </span>
        </p>

        <div className={clickedItem ? classes.infoActive : classes.info}>
          {!clickedItem && <img src="/img/designer1.png" alt="" />}
          {clickedItem && (
            <button
              className={classes.button}
              onClick={() => setClickedItem(null)}
            >
              <Arrow className={classes.arrowLeft} color={"black"} />
              {"Вернуться назад"}
            </button>
          )}
          {clickedItem ? (
            <TextGallery
              texts={clickedItem.cards}
              clickedItem={clickedItem}
              setClickedItem={setClickedItem}
            />
          ) : (
            <TextGallery
              texts={texts}
              clickedItem={clickedItem}
              setClickedItem={setClickedItem}
            />
          )}
        </div>
      </Container>
    </section>
  );
}
