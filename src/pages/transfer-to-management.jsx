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

export default function Home() {
  return (
    <MainLayout meta={metaPages.transferTOManagement}>

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
           href="/transfer-to-management">
          <span itemProp="name">Передача в управление</span>
        </a>
      </div>

      <Info
        title={
          <Block_Head
            accentTitleBefore={'Передача <br>'}
            title={'в управление'}
            subtitle={'Партнёрство, которым можно гордиться: увеличивайте доходность, сохраняйте контроль и доверяйте экспертам. Ваш актив — наша ответственность, ваше доверие — наша мотивация.'}
            action={
              <>
                <Button type="filled"
                        color="primary"
                        icon={'icon-arrow-right'}
                        className={'widsterForm'}>
                  <span>Передать в управление</span>
                </Button>

                {/*<Button type="outlined"*/}
                {/*        color="secondary"*/}
                {/*        icon={'icon-download'}*/}
                {/*        icon_left={true}*/}
                {/*        link={'/upload/pamyatka.pdf'}>Памятка инвестору</Button>*/}
              </>
            }
          >
          </Block_Head>
        }
        images={['../../assets/img/ruslans-content/main-page-partners-3.jpg', '../../assets/img/ruslans-content/main-page-partners-2.jpg', '../../assets/img/ruslans-content/main-page-partners-1.jpg']}>
      </Info>

      <Advantages></Advantages>

      <Info
        title={
          <Block_Head
            accentTitleBefore={'Передача <br>'}
            title={'в управление'}
            subtitle={'Партнёрство, которым можно гордиться: увеличивайте доходность, сохраняйте контроль и доверяйте экспертам. Ваш актив — наша ответственность, ваше доверие — наша мотивация.'}
            action={
              <>
                <Button type="filled"
                        color="primary"
                        icon={'icon-arrow-right'}
                        className={'widsterForm'}>
                  <span>Передать в управление</span>
                </Button>
              </>
            }
          >
          </Block_Head>
        }
        images={['../../assets/img/ruslans-content/main-page-partners-3.jpg', '../../assets/img/ruslans-content/main-page-partners-2.jpg', '../../assets/img/ruslans-content/main-page-partners-1.jpg']}
        reversed={true}
      >
      </Info>
    </MainLayout>
  );
}
