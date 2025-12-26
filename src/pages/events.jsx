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
    <MainLayout meta={metaPages.events}>

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
           href="/events">
          <span itemProp="name">Проведение мероприятий</span>
        </a>
      </div>

      <Block_image_text
        images={[
          { src: '../../assets/img/ruslans-content/events/1.jpg' },
        ]}
        title={
        <Block_Head
          accentTitleBefore={'Организация '}
          title={'бизнес мероприятий'}
        >
        </Block_Head>
        }
        content={
          <>
            <p>
              Проведите деловое событие, где вдохновляет сам пейзаж. Современные конференц-залы курортов Sky Soul с панорамными видами на море и горы создают идеальную атмосферу для продуктивных переговоров, стратегических сессий и нетворкинга. Мы обеспечим безупречный сервис, передовые технологии и индивидуальный подход, чтобы ваш бизнес-форум запомнился результатом и уровнем.
            </p>
          </>
        }
      />

      <Block_image_text
        images={[
          { src: '../../assets/img/ruslans-content/events/2.jpg' },
        ]}
        reversed={true}
        title={
        <Block_Head
          accentTitleBefore={'Организация '}
          title={'праздников и торжеств'}
        >
        </Block_Head>
        }
        content={
          <>
            <p>
              Сделайте самый важный день в жизни неповторимым на фоне крымской красоты. Sky Soul предлагает эксклюзивные локации для свадеб, юбилеев и семейных праздников: от частных вилл с выходом к морю до элегантных ресторанов. Наша команда воплотит вашу мечту в реальность, взяв на себя все хлопоты по организации праздника вашей мечты.
            </p>
          </>
        }
      />

      <Block_image_text
        images={[
          { src: '../../assets/img/ruslans-content/events/3.jpg' },
        ]}
        title={
          <Block_Head
            accentTitleBefore={'Проведение '}
            title={'выставок'}
          >
          </Block_Head>
        }
        content={
          <>
            <p>
              Представьте ваши проекты и продукты в пространстве, которое само является произведением искусства. Курорты Sky Soul — это престижная и вдохновляющая площадка для отраслевых выставок, арт-презентаций и показов. Уникальная природная среда и современная инфраструктура помогут привлечь целевую аудиторию и создать мощное эстетическое впечатление от вашего бренда.
            </p>
          </>
        }
      />

      {/*<Block_form></Block_form>*/}

    </MainLayout>
  );
}
