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

export default function Home() {
  return (
    <MainLayout meta={metaPages.toOwners}>

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
           href="/to-owners">
          <span itemProp="name">Собственникам</span>
        </a>
      </div>

      <Block_image_text
        images={[
          { src: '/assets/img/ruslans-content/to-owners/1.jpg' },
        ]}
        title={
          <Block_Head
            accentTitleBefore={'Собственникам'}
            subtitle={'Финансы — это не просто цифры, а отражение доверия, устойчивости и роста. Мы выстраиваем прозрачные механизмы сотрудничества, чтобы каждая сделка приносила не только результат, но и уверенность в завтрашнем дне. В Sky Group цифры работают на вашу репутацию.'}
          >
          </Block_Head>
        }
      />

      <Advantages></Advantages>

      <Block_image_text
        contentBottom={true}
        reversed={true}
        images={[
          { src: '/assets/img/ruslans-content/to-owners/1.jpg' },
        ]}
        title={
          <Block_Head
            accentTitleBefore={'Программа лояльености'}
            title={'для собственников'}
            subtitle={'Участие в программе лояльности увеличивает вашу доходность от каждого объекта, предоставляя эксклюзивные финансовые условия и приоритетный доступ к самым выгодным инвестиционным предложениям в Крыму.'}
            action={
              <Button type="filled" color="primary" link={'./assets/img/loyalty.pdf'}>Программа лояльности</Button>
            }
          >
          </Block_Head>
        }
      />

      <Block_image_text
        contentBottom={true}
        images={[
          { src: '/assets/img/ruslans-content/to-owners/3.jpg' },
        ]}
        title={
          <Block_Head
            accentTitleBefore={'Что такое '}
            title={'котловой метод?'}
            subtitle={'Котловой метод — это система распределения дохода, при которой все поступления от аренды объединяются в общий фонд. После вычета расходов 60% распределяются между инвесторами пропорционально площади их апартаментов.'}
            // action={
            //   <>
            //     <Button type="outlined"
            //             link={'/to-owners/boiler-method'}
            //             color="secondary"
            //             icon={'icon-arrow-right'}>
            //       <span>Подробнее</span>
            //     </Button>
            //
            //   </>
            // }
          >
          </Block_Head>
        }
      />

      <Steps></Steps>

      {/*<Calculator></Calculator>*/}

      <Block_image_text
        contentBottom={true}
        images={[
          { src: '/assets/img/ruslans-content/to-owners/4.jpg' },
        ]}
        reversed={true}
        title={
          <Block_Head
            accentTitleBefore={'Почему это выгодно'}
            title={'и безопасно для вас, как для инвестора?'}
            subtitle={'Вы получаете стабильность и предсказуемость дохода:'}
          >
          </Block_Head>
        }
        content={
          <>
            <ol>
              <li>В гостиничном бизнесе возможны колебания спроса, и один номер может быть занят, а другой — нет.</li>
              <li>При котловом методе вы не зависите от конкретной загрузки вашего лота.</li>
              <li>Вы получаете часть общей выручки — как если бы владели долей в целом отеле.</li>
            </ol>
            {/*<a href="/to-owners/boiler-method" className="button button-outlined button-secondary"><span><span>Подробнее</span></span><span className="icon-arrow-right"></span></a>*/}
          </>
        }
      />

    </MainLayout>
  );
}
