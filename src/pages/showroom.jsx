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
    <MainLayout meta={metaPages.showRoom}>

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
           href="/showroom">
          <span itemProp="name">Шоу-рум</span>
        </a>
      </div>

      <Info title={
        <Block_Head
          title={'Приглашаем в шоу-рум'}
          subtitle={'Партнёрство, которым можно гордиться: увеличивайте доходность, сохраняйте контроль и доверяйте экспертам. Ваш актив — наша ответственность, ваше доверие — наша мотивация.'}
          action={
            <>
              <Button type="filled" color="primary" icon-arrow-right link={'/contacts.html/'}>
                <span>Посетить</span>
              </Button>
            </>
          }
        >
        </Block_Head>
      }

            images={['../../assets/img/ruslans-content/to-owners/1.jpg', '../../assets/img/ruslans-content/to-owners/2.jpg', '../../assets/img/ruslans-content/to-owners/3.jpg']}>
      </Info>

      {/*<Block_form></Block_form>*/}

    </MainLayout>
  );
}
