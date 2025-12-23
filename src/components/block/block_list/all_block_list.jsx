import {Button} from "../../_ui/button/button.jsx";
import {
  All_card_advantages,
  All_card_article, All_card_blog,
  All_card_default, All_card_directions,
  All_card_job,
  All_card_media, All_card_partners,
  All_card_personnel,
  All_card_resort,
  All_card_services, All_card_steps,
} from '../../_ui/card/all_card.jsx';
import {Card, Card_personnel} from '../../_ui/card/card.jsx';
import {Block_Head} from "../_ui/block--head/block--head.jsx";
import {Block_pagination} from "../_ui/block--pagination/block--pagination.jsx";
import {Block_selection} from "../_ui/block--selection/block--selection-comp.jsx";
import {Block_List} from "./block_list.jsx";
import {Steps} from "../../content/steps/steps-comp.jsx";

export const All_block_list = () => {
  const tabs = [
    { label: "Все" },
    { label: "Номера" },
    { label: "Рестораны и бары" },
    { label: "Spa и бассейны" }
  ];
  return (
    <>
      {/*Стандартные карточки грид без табов и пагинации*/}
      <Block_List
        className="content_card"
        title={
          <Block_Head
            title={"Грид"}
            subtitle={"Блок-список стандартный"}
            caption={"Стандартные карточки грид без табов и пагинации"}
            headingLevel={2}
            action={
              <>
                <Button type="filled" color="secondary">
                  <span>Кнопка 1</span>
                </Button>
                <Button type="filled" color="primary">Кнопка 2</Button>
              </>
            }
          ></Block_Head>
        }
      >
        <All_card_default></All_card_default>
        <Card
          title="Карточка информационная "
          image={'../../assets/img/1.jpg'}
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
        />
      </Block_List>
      <br></br>

      {/*Стандартные карточки слайдер без табов и пагинации*/}
      <Block_List
        className="block_list-slider  content_card"
        title={
          <Block_Head
            title={"Слайдер"}
            subtitle={"Блок-список без класса контента"}
            caption={"Стандартные карточки слайдер без табов и пагинации"}
            headingLevel={2}
            action={
              <>
                <Button type="filled" color="secondary">
                  <span>Кнопка 1</span>
                </Button>
                <Button type="filled" color="primary">Кнопка 2</Button>
              </>
            }
          ></Block_Head>
        }
      >
        <All_card_default></All_card_default>
        <Card
          title="Карточка информационная "
          image={'../../assets/img/1.jpg'}
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit."

        />
      </Block_List>

      <br></br>
      {/*Стандартные карточки слайдер c табами и пагинации*/}
      <Block_List
        className="block_list-slider content_card"
        title={
          <Block_Head
            title={"Слайдер"}
            subtitle={"Блок-список без класса контента"}
            caption={"Стандартные карточки слайдер c табами и пагинации"}
            headingLevel={2}
            action={
              <>
                <Button type="filled" color="primary">Кнопка 1</Button>
                <Button type="filled" color="primary">Кнопка 2</Button>
              </>
            }
          ></Block_Head>
        }
        selection={<Block_selection tabs={tabs}></Block_selection>}
        pagination={<Block_pagination page={false}></Block_pagination>}
      >
        <All_card_default></All_card_default>
        <Card
          title="Карточка информационная "
          image={'../../assets/img/1.jpg'}
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
        />
      </Block_List>

      {/*Стандартные карточки грид c табами и пагинацей*/}
      <Block_List
        className="content_card"
        title={
          <Block_Head
            title={"Грид"}
            subtitle={"Блок-список без класса контента "}
            caption={"Стандартные карточки грид c табами и пагинацей"}
            headingLevel={2}
            action={
              <>
                <Button type="filled" color="primary">Кнопка 1</Button>
                <Button type="filled" color="primary">Кнопка 2</Button>
              </>
            }
          ></Block_Head>
        }
        selection={<Block_selection tabs={tabs}></Block_selection>}
        pagination={<Block_pagination page={true}></Block_pagination>}
      >
        <All_card_default></All_card_default>
      </Block_List>

      <br></br>
      {/*Карточки Курорта */}
      <Block_List
        className="content_resorts"
        title={
          <Block_Head
            title={"Грид"}
            caption={"Карточки Курорта"}
            headingLevel={2}
          ></Block_Head>
        }
      >
        <All_card_resort/>
      </Block_List>
      <Block_List
        className="content_resorts"
        slider={true}
        title={
          <Block_Head
            title={"Слайдер "}
            caption={"Карточки Курорта"}
            headingLevel={2}
          ></Block_Head>
        }
      >
        <All_card_resort/>
      </Block_List>
      {/*Карточки вакансий */}
      <Block_List
        className="content_vacancies"
        title={
          <Block_Head
            title={"Грид"}
            subtitle={"Блок-список стандартный"}
            caption={"Карточки вакансий"}
            headingLevel={2}
          ></Block_Head>
        }
      >
        <All_card_job/>
      </Block_List>

      <br></br>
      {/*Карточки статей*/}
      <Block_List
        className="content_article"
        title={
          <Block_Head
            title={"Карточки статей"}
            subtitle={"грид"}
            caption={"грид"}
            headingLevel={2}
            action={
              <>
                <Button type="filled" color="secondary">
                  <span>Кнопка 1</span>
                </Button>
                <Button type="filled" color="primary">Кнопка 2</Button>
              </>
            }
          ></Block_Head>
        }>
        <All_card_article></All_card_article>
      </Block_List>
      <Block_List
        className="content_article"
        slider={true}
        title={
          <Block_Head
            title={"Карточки статей"}
            subtitle={"Слайдер"}
            caption={"Слайдер"}
            headingLevel={2}
            action={
              <>
                <Button type="filled" color="secondary">
                  <span>Кнопка 1</span>
                </Button>
                <Button type="filled" color="primary">Кнопка 2</Button>
              </>
            }
          ></Block_Head>
        }>
        <All_card_article></All_card_article>
      </Block_List>

      {/*Карточки статей*/}
      <Block_List
        className="content_media"
        title={
          <Block_Head
            title={"Карточки медиа"}
            subtitle={"грид"}
            caption={"грид"}
            headingLevel={2}
            action={
              <>
                <Button type="filled" color="secondary">
                  <span>Кнопка 1</span>
                </Button>
                <Button type="filled" color="primary">Кнопка 2</Button>
              </>
            }
          ></Block_Head>
        }>
        <All_card_media></All_card_media>
      </Block_List>

      {/*Картчки персонала грид*/}
      <Block_List
        className="content_personnel"
        title={
          <Block_Head
            title={"Грид"}
            subtitle={"Блок-список стандартный"}
            caption={"Карточки персонала "}
            headingLevel={2}
          ></Block_Head>
        }
      >
        <All_card_personnel></All_card_personnel>
      </Block_List>
      <br></br>
      {/*Картчки персонала слайдер*/}
      <Block_List
        className="content_personnel"
        slider={true}
        title={
          <Block_Head
            title={"Слайдер "}
            subtitle={"Блок-список стандартный"}
            caption={"Карточки персонала "}
            headingLevel={2}
          ></Block_Head>
        }
      >
        <All_card_personnel></All_card_personnel>
        <Card_personnel title={'Карточка ссылка'}
                        text={'In the heart of Altai, on the slope of Mount Malaya Sinyukha, there is a unique chalet complex'} />
      </Block_List>
      <br></br>
      {/*Картчки Услуг грид*/}
      <Block_List
        className="content_services"
        title={
          <Block_Head
            title={"грид "}
            subtitle={"Блок-список стандартный"}
            caption={"Карточки Услуг "}
            headingLevel={2}
          ></Block_Head>
        }
      >
        <All_card_services></All_card_services>

      </Block_List>
      <br></br>
      {/*Картчки Услуг слайдер*/}
      <Block_List
        className="content_services"
        slider={true}
        title={
          <Block_Head
            title={"slider "}
            subtitle={"Блок-список стандартный"}
            caption={"Карточки Услуг "}
            headingLevel={2}
          ></Block_Head>
        }
      >
        <All_card_services></All_card_services>

      </Block_List>
      <br></br>
      {/*Картчки Блог грид*/}
      <Block_List
        className="content_blog"
        title={
          <Block_Head
            title={"грид "}
            subtitle={"Блок-список стандартный"}
            caption={"Карточки Блог "}
            headingLevel={2}
          ></Block_Head>
        }
      >
        <All_card_blog></All_card_blog>

      </Block_List>
      <br></br>
      {/*Картчки Блог слайдер*/}
      <Block_List
        className="content_blog"
        slider={true}
        title={
          <Block_Head
            title={"slider "}
            subtitle={"Блок-список стандартный"}
            caption={"Карточки Блог "}
            headingLevel={2}
          ></Block_Head>
        }
      >
        <All_card_blog></All_card_blog>
      </Block_List>
      <br></br>
      {/*Картчки преимуществ  грид*/}
      <Block_List
        className="content_advantages"
        colorMode={'-accent-mode'}
        title={
          <Block_Head
            title={"грид "}
            caption={"Карточки преимуществ"}
            headingLevel={2}
          ></Block_Head>
        }
      >
        <All_card_advantages></All_card_advantages>
      </Block_List>
      <br></br>
      {/*Картчки преимуществ c баннером*/}
      <Block_List
        className="content_advantages advantages_with_banner"
        colorMode={'-light-mode'}
        title={
          <Block_Head
            title={"Карточки преимуществ с баннером "}
            caption={"Карточки преимуществ"}
            headingLevel={2}
          ></Block_Head>
        }
      >
        <All_card_advantages></All_card_advantages>
        <Card title={'Оставьте заявку на бесплатную&nbsp;консультацию'} image={'../../assets/img/1.jpg'} action={<Button type={'filled'} color={'primary'} icon={'icon-arrow-right'}>Оставить заявку</Button>}></Card>
      </Block_List>
      <br></br>
      {/*Картчки направлений  грид*/}
      <Block_List
        className="content_directions"
        colorMode={'-accent-mode'}
        title={
          <Block_Head
            title={"грид "}
            caption={"Карточки Направлений"}
            headingLevel={2}
          ></Block_Head>
        }
      >
        <All_card_directions></All_card_directions>
      </Block_List>
      <br></br>
      {/*Картчки направлений  Слайдер */}
      <Block_List
        className="content_directions"
        colorMode={'-accent-mode'}
        slider={true}
        title={
          <Block_Head
            title={"Слайдер "}
            caption={"Карточки Направлений"}
            headingLevel={2}
          ></Block_Head>
        }
      >
        <All_card_directions></All_card_directions>
      </Block_List>

      <br></br>
      {/*Картчки партнеров  грид*/}
      <Block_List
        className="content_partners"
        title={
          <Block_Head
            title={"грид "}
            caption={"Карточки партнеров"}
            headingLevel={2}
          ></Block_Head>
        }
      >
        <All_card_partners></All_card_partners>
      </Block_List>
      <br></br>
      {/*Картчки партнеров  Слайдер */}
      <Block_List
        className="content_partners"
        slider={true}
        title={
          <Block_Head
            title={"Слайдер "}
            caption={"Карточки партнеров"}
            headingLevel={2}
          ></Block_Head>
        }
      >
        <All_card_partners></All_card_partners>
        <Card image={'../../assets/img/logo.svg'}></Card>
      </Block_List>
      <br></br>


      {/*Картчки пошаговые грид*/}
      <Steps></Steps>
      <br></br>
      </>
  );
};
