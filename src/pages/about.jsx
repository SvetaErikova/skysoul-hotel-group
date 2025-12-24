import MainLayout from '../layouts/MainLoyout.jsx';
import { metaPages } from '../shared/meta-pages';
import { Block_Head } from '../components/block/_ui/block--head/block--head.jsx';
import {Accordion_full} from "../components/_ui/accordion/accordion-full.jsx";
import {Contacts} from "../components/content/contacts/contacts-comp.jsx";
import {Faq} from "../components/content/faq/faq-comp.jsx";
import {Button} from "../components/_ui/button/button.jsx";
import { Block_form } from '../components/form/block_form.jsx';
import {Info} from "../components/content/info/info.jsx";
import {Advantages} from "../components/content/advantages/advantages-comp.jsx";
import {Block_image_text} from "../components/block/block_image_text/block_image_text.jsx";
import {Steps} from "../components/content/steps/steps-comp.jsx";
import {Calculator} from "../components/content/calculator/calculator-comp.jsx";
import {Card, Card_personnel, Card_resort} from "../components/_ui/card/card.jsx";
import {Block_List} from "../components/block/block_list/block_list.jsx";
import {All_card_advantages} from "../components/_ui/card/all_card.jsx";

export default function Home() {
  return (
    <MainLayout meta={metaPages.about}>

      <div className="breadcrumbs"
           itemScope=""
           itemType="https://schema.org/BreadcrumbList">
        <a itemProp="itemListElement"
           itemScope=""
           itemType="https://schema.org/ListItem"
           href="/">
          <span itemProp="name">Главная</span>
        </a>
        <a itemProp="itemListElement"
           itemScope=""
           itemType="https://schema.org/ListItem"
           href="/about">
          <span itemProp="name">О нас</span>
        </a>
      </div>

      <Block_image_text
        images={[
          { src: '../../assets/img/ruslans-content/about/1.jpg' },
        ]}
        title={
          <Block_Head
            accentTitleBefore={'SkySoul Hotel Group '}
            subtitle={'В SkyGroup цифры работают на вашу репутацию.Управляющая компания, объединяющая курорты 4–5 звёзд в Крыму. Мы берём апартаменты в управление и превращаем их в стабильный источник дохода'}
          >
          </Block_Head>
        }
      />

      <Info title={
          <Block_Head
            title={'Кто мы?'}
            subtitle={'Партнёрство, которым можно гордиться: увеличивайте доходность, сохраняйте контроль и доверяйте экспертам. Ваш актив — наша ответственность, ваше доверие — наша мотивация.'}
          >
          </Block_Head>
        }
        reversed={true}
        images={['../../assets/img/ruslans-content/resorts/card-ptica.jpg', '../../assets/img/ruslans-content/resorts/card-santerra.jpg', '../../assets/img/ruslans-content/resorts/card-sky-soul-resort.jpg']}
        content={
          <>
            <p>
              SKYSOUL HOTEL GROUP управляет курортами 4–5 звёзд в Крыму, объединяя опыт международного гостиничного бизнеса и глубокое понимание локального рынка.
            </p>
            <p>
              В центре нашей работы — два направления: создание курортов мирового уровня для отдыхающих и надёжная система управления апартаментами для собственников. Такой баланс позволяет одновременно формировать безупречный сервис для гостей и стабильный доход для инвесторов.
            </p>
            <p>
              Мы строим долгосрочную модель, где каждый курорт становится примером высокого уровня сервиса, а каждый собственник чувствует уверенность в прозрачности и результативности управления.
            </p>
          </>
        }
      >
      </Info>

      <Block_List
        className="content_personnel"
        title={
          <Block_Head
            title={'Команда '}
            subtitle={'Команда сайта Skygroup Hotel — это профессионалы, которые превращают бронирование отеля в приятное и лёгкое путешествие по цифровому пространству.'}
            headingLevel={2}
          ></Block_Head>
        }
      >
        <Card_personnel title={'Сергей Петрович Киселев'} text={'CEO Отельный оператор «SKYGROUP Development»'} image={'/assets/img/ruslans-content/team/resized/sp-kiselev.jpg'} />
        <Card_personnel title={'Сухорукова Елена Валерьевна'} text={'HR директор'} image={'/assets/img/ruslans-content/team/resized/ev-suhorukova.jpg'} />
        <Card_personnel title={'Демидова Алена Алексеевна'} text={'Директор рекреации'} image={'/assets/img/ruslans-content/team/resized/aa-demidova.jpg'} />
        <Card_personnel title={'Кинжали Анастасия Игоревна'} text={'Директор по маркетингу и рекламе'} image={'/assets/img/ruslans-content/team/resized/ai-kinzali.jpg'} />
        <Card_personnel title={'Лаевский Александр Сергеевич'} text={'Директор департамента питания'} image={'/assets/img/ruslans-content/team/resized/as-layevsky.jpg'} />
        <Card_personnel title={'Абросимов Сергей Юрьевич'} text={'Финансовый директор'} image={'/assets/img/ruslans-content/team/resized/sy-absrosimov.jpg'} />
      </Block_List>

      <Block_List
        className="content_advantages advantages_with_banner"
        colorMode={'-accent-mode'}
        title={
          <Block_Head
            title={"Почему это "}
            accentTitleAfter={"выгодно"}
            caption={"Помогаем нашим инвесторам на каждом этапе — от оформления документов до получения стабильного дохода."}
            headingLevel={2}
          ></Block_Head>
        }
      >
        <All_card_advantages></All_card_advantages>
        <Card
          title={'Оставьте заявку на бесплатную&nbsp;консультацию'}
          image={'/assets/img/ruslans-content/about/2.jpg'}
          action={<Button type={'filled'} color={'primary'} icon={'icon-arrow-right'}>Оставить заявку</Button>}>
        </Card>
      </Block_List>

      <Block_form></Block_form>

    </MainLayout>
  );
}
