import {Button} from "../../_ui/button/button.jsx";
import {
   All_card_article,  All_card_default, All_card_job, All_card_personnel,
} from '../../_ui/card/all_card.jsx';
import {Card, Card_personnel} from '../../_ui/card/card.jsx';
import {Block_Head} from "../_ui/block--head/block--head.jsx";
import {Block_pagination} from "../_ui/block--pagination/block--pagination.jsx";
import {Block_selection} from "../_ui/block--selection/block--selection-comp.jsx";
import {Block_List} from "./block_list.jsx";

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
        <Card title={'Карточка ссылка с лейблами'}
              text={'In the heart of Altai, on the slope of Mount Malaya Sinyukha, there is a unique chalet complex'}
              image={'../../assets/img/2.jpg'} link={'/'}
              action={<Button icon={'icon-arrow_r'} className={'button-arrow button-dark'}/>}
              labels={[{text: '3 по цене 2', accent: true}, {text: 'До 22.12.2025', dark: true}]}/>
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
          title={"Карточка попап"}
          images={[{src: "../../assets/img/1.jpg"}]}
          popup={"popup_for_cascade"}
          action={
            <Button icon={'icon-file'} className={'button-arrow button-dark'} />
          }
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
          title={"Карточка попап"}
          images={[{src: "../../assets/img/1.jpg"}]}
          popup={"popup_for_cascade"}
          action={<Button type="filled" color="primary" icon={"icon-eye"}></Button>}
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
                        text={'In the heart of Altai, on the slope of Mount Malaya Sinyukha, there is a unique chalet complex'}
                        action={<Button icon={'icon-arrow_r'} className={'button-arrow button-dark'} />} />
      </Block_List>
      <br></br>
      </>
  );
};
