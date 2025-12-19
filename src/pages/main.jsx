
import HeroLayout from '../layouts/HeroLayout.jsx';
import { metaPages } from '../shared/meta-pages';
import { Block_List } from '../components/block/block_list/block_list.jsx';
import { Block_Head } from '../components/block/_ui/block--head/block--head.jsx';
import {Steps} from "../components/content/steps/steps-comp.jsx";
import { Block_banner } from '../components/block/block_banner/block_banner.jsx';
import { Block } from '../components/block/block.jsx';
import { Card_personnel, Card_resort } from '../components/_ui/card/card.jsx';
import { Button } from '../components/_ui/button/button.jsx';
import { Block_image_text } from '../components/block/block_image_text/block_image_text.jsx';
import { Calculator } from '../components/content/calculator/calculator-comp.jsx';
import { Faq } from '../components/content/faq/faq-comp.jsx';
import { Accordion_full } from '../components/_ui/accordion/accordion-full.jsx';
import { Block_form } from '../components/footer/block_form.jsx';


const tabs = [
  { label: 'Все' },
  { label: 'Номера' },
  { label: 'Рестораны и бары' },
  { label: 'Spa и бассейны' },
];

export default function Home() {
  return (
    <HeroLayout meta={metaPages.home} className={'page-main'}>
      <Block_banner
        banners={[
          {
            title: <Block_Head  title="Skysoul <br> hotel group" headingSize={'f-h1'}  caption="Создаём идеальные курорты 4–5 звёзд, где каждая деталь ради идеального Курорта" headingLevel={1} />,
            imageSrc: "/assets/img/banner-main.jpg",
          },
        ]}
        className={"block_banner-hero"}
      ></Block_banner>
      <Block
      className={'block_html-code'}>
        <div class="is_cascade" style={'max-width: 700px; margin: 0 auto'}>
          <blockquote class='blockquote'>
            <div className="blockquote--decor"></div>
            <div className="blockquote--text">
              <p><span class={'-accent'}>Наша команда</span> — это люди с опытом более 10 лет в HoReCa, девелопменте и сервисе, объединённые одной задачей: </p>
              <span>создать понятную, надёжную и эффективную систему управления, где интересы собственника и комфорт гостя идут рядом.</span>
            </div>
            <div className="blockquote--author">
              <div className="blockquote--author_img">
                <img src="/assets/img/1.jpg" alt=""/>
              </div>
              <div className="blockquote--author_text">
                <p>Сергей Петрович Киселев</p>
                <span>СЕО Skysoul hotel group</span>
              </div>
            </div>
          </blockquote>
        </div>
      </Block>
      <Block_List
        className="content_personnel"
        slider={true}
        title={
          <Block_Head
            title={"Команда "}
            caption={"Команда сайта Skygroup Hotel — это профессионалы, которые превращают бронирование отеля в приятное и лёгкое путешествие по цифровому пространству."}
            headingLevel={2}
          ></Block_Head>
        }
      >
        <Card_personnel title={'Сергей Петрович Киселев'} text={'CEO Skysoul hotel group'} image={'/assets/img/1.jpg'} />
        <Card_personnel title={'Кинжали Анастасия Игоревна'} text={'Директор по маркетингу и рекламе'} image={'/assets/img/1.jpg'} />
        <Card_personnel title={'Демидова Алена Алексеевна'} text={'CEO Skysoul hotel group'} image={'/assets/img/1.jpg'} />
        <Card_personnel title={'Абросимов Сергей Юрьевич'} text={'Финансовый директор'} image={'/assets/img/1.jpg'} />
        <Card_personnel title={'Сухорукова Елена Валерьевна'} text={'HR директор'} image={'/assets/img/1.jpg'} />
      </Block_List>
      <Block_List
        className="content_resorts"
        title={
          <Block_Head
            title={"Наши курорты "}
            caption={"Три мира под одним небом — от морского дыхания до тишины гор. Каждый курорт SKYSOUL — это пространство, где забота чувствуется в каждой детали, а время подстраивается под ваш ритм“."}
            headingLevel={2}
          ></Block_Head>
        }
      >
        <Card_resort image={'../../assets/img/2.jpg'} title={'«Птица»'} subtitle={'Санаторный курорт будущего'} text={'Уже возведено 60% комплекса. Уникальное сочетание курорта и апарт-отеля. Санаторная база, экология, архитектура нового уровня'} labels={[{ text: 'Курорт 5+' }, { text: 'г.Саки', icon: 'icon-location' }]} action={<Button type={'outlined'} color={'primary'} icon={'icon-arrow-up-right'} />} />
        <Card_resort image={'../../assets/img/2.jpg'} title={'«Skysoul ResOrt»'} subtitle={'Флагман, с которого всё началось'} text={'Первая очередь сдана, 4 этапа строительства. Инвестиционный рост: от 170 000 до 725 000 руб/м². Победитель Urban Awards, лидер Юга'} labels={[{ text: 'Курорт 5+' }, { text: 'г. Феодосия', icon: 'icon-location' }]} action={<Button type={'outlined'} color={'primary'} icon={'icon-arrow-up-right'} />} />
        <Card_resort image={'../../assets/img/2.jpg'} title={'«Сантерра»'} subtitle={'Элитная бухта, новый стандарт Юга'} text={'Апартаменты, виллы, таунхаусы. Получен РНС, старт строительства. Архитектура международного уровня. Бренд как инвестиция — от 1 млн руб/м²'} labels={[{ text: 'Курорт 5+' }, { text: 'г.Судак', icon: 'icon-location' }]} action={<Button type={'outlined'} color={'primary'} icon={'icon-arrow-up-right'} />} />
      </Block_List>

      <Block_image_text
        contentBottom={true}
        images={[
          { src: '../../assets/img/1.jpg' },
        ]}
        title={<Block_Head
        title={'Финансы и продажи'} caption={'Финансы — это не просто цифры, а отражение доверия, устойчивости и роста. Мы выстраиваем прозрачные механизмы сотрудничества, чтобы каждая сделка приносила не только результат, но и уверенность в завтрашнем дне. В Sky Group цифры работают на вашу репутацию.'}></Block_Head>}
      />

      <Calculator></Calculator>
      <Faq
        title={
          <Block_Head
            accentTitleBefore={'Самые частые <br>'}
            title={"вопросы  и ответы"}
            caption={"Мы уже знаем, что вы хотели спросить.  Вот ответы, которые экономят ваше время"}
            headingSize={"f-h2"}
            action={
              <>
                <Button type="filled" color="primary">Задать свой вопрос</Button>
                <Button type="outlined" color="secondary" dark={true} icon={'icon-arrow-right'}>Все вопросы</Button>
              </>
            }
          ></Block_Head>
        }
      >
        <Accordion_full />
      </Faq>
      <Steps></Steps>
      <Block_form></Block_form>
    </HeroLayout>
  );
}
