import HeroLayout from '../layouts/HeroLayout.jsx';
import { metaPages } from '../shared/meta-pages';
import { Block_List } from '../components/block/block_list/block_list.jsx';
import { Block_Head } from '../components/block/_ui/block--head/block--head.jsx';
import { Steps } from '../components/content/steps/steps-comp.jsx';
import { Block_banner } from '../components/block/block_banner/block_banner.jsx';
import { Block } from '../components/block/block.jsx';
import { Card, Card_personnel, Card_resort } from '../components/_ui/card/card.jsx';
import { Button } from '../components/_ui/button/button.jsx';
import { Block_image_text } from '../components/block/block_image_text/block_image_text.jsx';
import { Calculator } from '../components/content/calculator/calculator-comp.jsx';
import { Faq } from '../components/content/faq/faq-comp.jsx';
import { Accordion_full } from '../components/_ui/accordion/accordion-full.jsx';
import { Block_form } from '../components/form/block_form.jsx';
import { Info } from '../components/content/info/info.jsx';
import { All_card_partners } from '../components/_ui/card/all_card.jsx';
import {Accordion} from "../components/_ui/accordion/accordion.comp.jsx";
import { Advantages } from '../components/content/advantages/advantages-comp.jsx';


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
            title:
              <Block_Head title="Skysoul <br> hotel group" headingSize={'f-h1'} subtitle="Создаём курорты категории 4 и 5 звёзд, куда хочется возвращаться. Всесезонный отдых, высокий сервис и команда с большим опытом, продумывающая каждую деталь ради идеального Курорта." headingLevel={1} />,
            imageSrc: '/assets/img/ruslans-content/main-page-banner.jpg',
          },
        ]}
        className={'block_banner-hero'}
      ></Block_banner>
      <Block
        className={'block_html-code'}>
        <div class="is_cascade" style={'max-width: 700px; margin: 0 auto'}>
          <blockquote class="blockquote">
            <div className="blockquote--decor"></div>
            <div className="blockquote--text">
              <p><span class={'-accent'}>Наша команда</span> — это люди с опытом более 10 лет в HoReCa, девелопменте и
                сервисе, объединённые одной задачей: </p>
              <span>создать понятную, надёжную и эффективную систему управления, где интересы собственника и комфорт гостя идут рядом.</span>
            </div>
            <div className="blockquote--author">
              <div className="blockquote--author_img">
                <img src="/assets/img/ruslans-content/team/sp-kiselev_resized.jpg"/>
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

      <Advantages></Advantages>


      <Block_List
        className="content_resorts"
        colorMode={'-light-mode'}
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

      <Block_image_text
        contentBottom={true}
        images={[
          { src: '/assets/img/ruslans-content/main-page-finance-and-sales.jpg' },
        ]}
        title={<Block_Head
          title={'Финансы и продажи'} subtitle={'Финансы — это не просто цифры, а отражение доверия, устойчивости и роста. Мы выстраиваем прозрачные механизмы сотрудничества, чтобы каждая сделка приносила не только результат, но и уверенность в завтрашнем дне. В Sky Group цифры работают на вашу репутацию.'}></Block_Head>}
      />

      <Calculator></Calculator>

      {/*
      <Block_List
        className="content_partners"
        slider={true}
        title={
          <Block_Head
            title={'Каналы продаж '}
            headingLevel={2}
          ></Block_Head>
        }
      >
        <Card image={'../../assets/img/logo.svg'}></Card>
        <Card image={'../../assets/img/logo.svg'}></Card>
        <Card image={'../../assets/img/logo.svg'}></Card>
        <Card image={'../../assets/img/logo.svg'}></Card>
        <Card image={'../../assets/img/logo.svg'}></Card>
      </Block_List>
      */}

      <Info title={
        <Block_Head
          accentTitleBefore={'Партнёрство, <br>'}
          title={'приносящее доход и уверенность'}
          subtitle={'Партнёрство, которым можно гордиться: увеличивайте доходность, сохраняйте контроль и доверяйте экспертам. Ваш актив — наша ответственность, ваше доверие — наша мотивация.'}
          action={
            <>
              <Button type="filled" color="primary" icon-arrow-right link={'/boiler-method'}>
                <span>Котловой метод</span>
              </Button>
              <Button type="outlined" color="secondary" className={'widsterForm'}>Оставить заявку</Button>
            </>
          }
        >
        </Block_Head>
      }

            images={['../../assets/img/ruslans-content/main-page-partners-3.jpg', '../../assets/img/ruslans-content/main-page-partners-2.jpg', '../../assets/img/ruslans-content/main-page-partners-1.jpg']}>
      </Info>

      <Block className={'block block_html-code content_table'}
             colorMode={'-dark-mode'}

             title={
               <Block_Head accentTitleBefore={'Условия<br>'} title={'для собственников'} subtitle={'При сдаче в аренду жилья через управляющую компанию. '} caption={'Партнёрство, которым можно гордиться: увеличивайте доходность, сохраняйте контроль и доверяйте экспертам. Ваш актив — наша ответственность, ваше доверие — наша мотивация.'}></Block_Head>}>
        <div class="block--content is_cascade">
          <div class="is_cascade--table">
            <table>
              <thead>
              <tr>
                <td>Показатель / Характеристика</td>
                <td>С управляющей компанией</td>
                <td>Самостоятельное управление</td>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>Круглогодичная загрузка</td>
                <td><span className="icon-check--circle"></span></td>
                <td><span className="icon-remove-circle"></span></td>
              </tr>
              <tr>
                <td>Комплексный маркетинг и продвижение (OTA, туроператоры, соцсети)</td>
                <td><span className="icon-check--circle"></span></td>
                <td><span className="icon-remove-circle"></span></td>
              </tr>
              <tr>
                <td>Консьерж-сервис 24/7</td>
                <td><span className="icon-check--circle"></span></td>
                <td><span className="icon-remove-circle"></span></td>
              </tr>
              <tr>
                <td>Современные системы бронирования и&nbsp;автоматизация процессов</td>
                <td><span className="icon-check--circle"></span></td>
                <td><span className="icon-remove-circle"></span></td>
              </tr>
              <tr>
                <td>Личный кабинет собственника с полной статистикой</td>
                <td><span className="icon-check--circle"></span></td>
                <td><span className="icon-remove-circle"></span></td>
              </tr>
              <tr>
                <td>Юридическая и бухгалтерская поддержка</td>
                <td><span className="icon-check--circle"></span></td>
                <td><span className="icon-remove-circle"></span></td>
              </tr>
              <tr>
                <td>Отсутствие необходимости заниматься операционной деятельностью</td>
                <td><span className="icon-check--circle"></span></td>
                <td><span className="icon-remove-circle"></span></td>
              </tr>
              <tr>
                <td>Профессиональная уборка и подготовка номера</td>
                <td><span className="icon-check--circle"></span></td>
                <td><span className="icon-remove-circle"></span></td>
              </tr>
              <tr>
                <td>Организация заезда и выезда гостей</td>
                <td><span className="icon-check--circle"></span></td>
                <td><span className="icon-remove-circle"></span></td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </Block>

      <Block_image_text
        images={[
          { src: '../../assets/img/ruslans-content/main-page-pamyatka.jpg' },
        ]}
        title={<Block_Head
          accentTitleBefore={'Памятка '}
          title={'инвестору'} subtitle={'Мы подготовили подробную памятку, в которой собрали всю ключевую информацию о сотрудничестве с отельным оператором.'}></Block_Head>}
        content={<>
          <p>Мы подготовили подробную памятку, в которой собрали всю ключевую информацию о сотрудничестве с отельным
            оператором.</p>
          <p>В документе — принципы работы, финансовая модель, описание инфраструктуры и условий для собственников.</p>
          <p>Памятка поможет вам:</p>
          <ul>
            <li>рассчитать доходность</li>
            <li>понять, как устроено управление апартаментами</li>
            <li>узнать, какие преимущества вы получите как партнёр</li>
          </ul>
          <div class="block--actions">
            <Button type={'outlined'} color={'secondary'} icon={'icon-arrow-right'} className={'widsterForm'}>Передать в управление</Button>
          </div>
        </>}
      />

      <Faq
        title={
          <Block_Head
            accentTitleBefore={'Самые частые <br>'}
            title={'вопросы  и ответы'}
            subtitle={'Мы уже знаем, что вы хотели спросить.  Вот ответы, которые экономят ваше время'}
            headingSize={'f-h2'}
            action={
              <>
                <Button type="filled" color="primary">Задать свой вопрос</Button>
                <Button type="outlined" color="secondary" dark={true} icon={'icon-arrow-right'}>Все вопросы</Button>
              </>
            }
          ></Block_Head>
        }
      >
        <Accordion
          title={"Почему выбран котловой метод распределения дохода?"}
          text={
            "Котловой метод позволяет обеспечить справедливое и стабильное распределение дохода между всеми участниками, независимо от индивидуальной загруженности конкретного номера. Эта модель нивелирует риски сезонности и простой, формируя единый пул доходов от всех лотов, переданных в управление, и обеспечивая предсказуемую доходность. Она используется большинством международных гостиничных операторов и соответствует требованиям российского законодательства в сфере доверительного управления недвижимостью. Котловой метод по своей природе позволяет инвестору владеть частью гостиничного бизнеса с профессиональным управлением."
          }
        ></Accordion>

        <Accordion
          title={"Есть ли скрытые платежи?"}
          text={
            "Нет. Вся финансовая информация отображается в личном кабинете: начисления, счета, показания приборов, резервы, комиссии агрегаторам, отчёты. Весь перечень услуг, за которые взимается плата детализирован в Вашем договоре. УК работает по принципам прозрачности и фиксированных условий. Отдельно оплачиваются только фактически принятые дополнительные сервисы вне тарифа — при их заказе."
          }
        ></Accordion>
        <Accordion
          title={"Нужно ли мне посещать объект для решения организационных вопросов?"}
          text={
            "Нет. Вы получаете доход без затраты времени на операционную, рекламную и хозяйственную деятельность. Отельный оператор закрывает все потребности гостей и собственников."
          }
        ></Accordion>
      </Faq>
      <Block_form></Block_form>
    </HeroLayout>
  );
}
