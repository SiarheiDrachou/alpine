import { TextGallery } from "@components/TextGallery";
import classes from "./CooperationSection.module.scss";

export default function CooperationSection(): JSX.Element {
  const texts = [
    {
      title: 'Комплексная разработка сайта / приложения / сервиса «под ключ»',
      description: 'Мы предоставляем услуги по созданию сайтов, сервисов и приложений «под ключ». Это значит, что мы возьмем на себя все этапы создания проекта, начиная с дизайна и заканчивая запуском проекта в интернете.',
      style: {
        gridColumn: 'span 2 / span 2',
        fontSize: '2.5rem'
      }
    },
    {
      title: 'Маркетинг (SEO / Контекстная / Таргетированная реклама)',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet turpis justo. Pellentesque eget accumsan elit. Etiam lectus ex, ultrices vitae consequat eget, accumsan vel sem. ',
      style: {
        gridColumn: 'span 1 / span 1',
        fontSize: '1.5rem'
      }
    },
    {
      title: 'Разработка сайта / сервиса / приложения',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet turpis justo. Pellentesque eget accumsan elit. Etiam lectus ex, ultrices vitae consequat eget, accumsan vel sem. ',
      style: {
        gridColumn: 'span 1 / span 1',
        fontSize: '1.5rem'
      }
    },
    {
      title: 'Дизайн сайта / сервиса / приложения',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet turpis justo. Pellentesque eget accumsan elit. Etiam lectus ex, ultrices vitae consequat eget, accumsan vel sem. ',
      style: {
        gridColumn: 'span 1 / span 1',
        fontSize: '1.5rem'
      }
    },
    {
      title: 'Бизнес-услуги',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet turpis justo. Pellentesque eget accumsan elit. Etiam lectus ex, ultrices vitae consequat eget, accumsan vel sem. ',
      style: {
        gridColumn: 'span 1 / span 1',
        fontSize: '1.5rem'
      }
    },
  ]
  return (
    <section className={classes.cooperation}>
      <div className={classes.container}>
        <h3 className={classes.title}>{"Давайте сотрудничать"}</h3>

        <p className={classes.subTitle}>
          <b>{"Мы будем полезны в вопросах"}</b>{" "}
          <span>
            <b>{"Маркетинга"}</b>
          </span>
        </p>

        <div className={classes.info}>
          <img src="/img/designer1.png" alt="" />
          <TextGallery texts={texts} />
        </div>
      </div>
    </section>
  );
}
