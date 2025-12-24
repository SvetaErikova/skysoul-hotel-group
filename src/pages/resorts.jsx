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
import {Card_resort} from "../components/_ui/card/card.jsx";
import {Block_List} from "../components/block/block_list/block_list.jsx";

export default function Home() {
  return (
    <MainLayout meta={metaPages.resorts}>

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
           href="/resorts">
          <span itemProp="name">Отели</span>
        </a>
      </div>

      <Block_List
        className="content_resorts"
        title={
          <Block_Head
            title={'Наши курорты'}
            subtitle={'Три мира под одним небом — от морского дыхания до тишины гор. Каждый курорт SKYSOUL — это пространство, где забота чувствуется в каждой детали, а время подстраивается под ваш ритм.'}
            headingLevel={2}
          ></Block_Head>
        }
      >
        <Card_resort link={'https://xn----7sbxkublblhh6a.xn--p1ai/'} image={'/assets/img/ruslans-content/resorts/card-ptica.jpg'} title={'«Птица»'} subtitle={'Санаторный курорт будущего'} text={'Уже возведено 60% комплекса. Уникальное сочетание курорта и апарт-отеля. Санаторная база, экология, архитектура нового уровня'} labels={[{
          text: 'Курорт 5+' }, {
          text: 'г.Саки',
          icon: 'icon-location',
        }]} action={<Button type={'outlined'} color={'primary'} icon={'icon-arrow-up-right'} />} />
        <Card_resort link={'https://skysoulhotel.ru/'} image={'/assets/img/ruslans-content/resorts/card-sky-soul-resort.jpg'} title={'«SkySoul Resort»'} subtitle={'Флагман, с которого всё началось'} text={'Первая очередь сдана, 4 этапа строительства. Инвестиционный рост: от 170 000 до 725 000 руб/м². Победитель Urban Awards, лидер Юга'} labels={[{
          text: 'Курорт 5+' }, {
          text: 'г. Феодосия',
          icon: 'icon-location',
        }]} action={<Button type={'outlined'} color={'primary'} icon={'icon-arrow-up-right'} />} />
        <Card_resort link={'https://sunterra.com.ru/'} image={'/assets/img/ruslans-content/resorts/card-santerra.jpg'} title={'«Сантерра»'} subtitle={'Элитная бухта, новый стандарт Юга'} text={'Апартаменты, виллы, таунхаусы. Получен РНС, старт строительства. Архитектура международного уровня. Бренд как инвестиция — от 1 млн руб/м²'} labels={[{
          text: 'Курорт 5+' }, {
          text: 'г.Судак',
          icon: 'icon-location',
        }]} action={<Button type={'outlined'} color={'primary'} icon={'icon-arrow-up-right'} />} />
      </Block_List>

      <Block_form></Block_form>

    </MainLayout>
  );
}
