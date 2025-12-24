import { metaPages } from "../../shared/meta-pages";
import {Contacts} from "../../components/content/contacts/contacts-comp.jsx";
import { Calculator } from '../../components/content/calculator/calculator-comp.jsx';
import MainLayout from '../../layouts/MainLoyout.jsx';
import { Info } from '../../components/content/info/info.jsx';
import { Block_Head } from '../../components/block/_ui/block--head/block--head.jsx';
import { Steps } from '../../components/content/steps/steps-comp.jsx';
import { Block_form } from '../../components/form/block_form.jsx';
import { Block } from '../../components/block/block.jsx';
import { Advantages } from '../../components/content/advantages/advantages-comp.jsx';
import { History } from '../../components/content/history/history.jsx';

export default function Home() {
  const tabs = [
    { label: "Все" },
    { label: "Номера" },
    { label: "Рестораны и бары" },
    { label: "Spa и бассейны" }
  ];
	return (
		<MainLayout meta={metaPages.home} >
      <History></History>
      <Advantages></Advantages>
      <Steps></Steps>
      <Block_form></Block_form>
      <Info title={<Block_Head title={'Блок инфо'} caption={'дефолт'}></Block_Head>}
            content={<>
              <p>Мы подготовили подробную памятку, в которой собрали всю ключевую информацию о сотрудничестве с отельным оператором.</p>
              <p>В документе — принципы работы, финансовая модель, описание инфраструктуры и условий для собственников.</p>
              <p>Памятка поможет вам:</p>
              <ul>
                <li>рассчитать доходность</li>
                <li>понять, как устроено управление апартаментами</li>
                <li>узнать, какие преимущества вы получите как партнёр</li>
              </ul>
            </>}
      images={['../../assets/img/1.jpg', '../../assets/img/2.jpg', '../../assets/img/4.jpg', '../../assets/img/5.jpg']}></Info>

      <Info title={<Block_Head title={'Блок инфо'} caption={'reversed'}></Block_Head>}
            content={<>
              <p>Мы подготовили подробную памятку, в которой собрали всю ключевую информацию о сотрудничестве с отельным оператором.</p>
              <p>В документе — принципы работы, финансовая модель, описание инфраструктуры и условий для собственников.</p>
              <p>Памятка поможет вам:</p>
              <ul>
                <li>рассчитать доходность</li>
                <li>понять, как устроено управление апартаментами</li>
                <li>узнать, какие преимущества вы получите как партнёр</li>
              </ul>
            </>}
      images={['../../assets/img/1.jpg', '../../assets/img/2.jpg', '../../assets/img/4.jpg', '../../assets/img/5.jpg']}
      reversed={true}></Info>

      {/*Calculator Будет заготовкой*/}
      <Calculator></Calculator>
      <Contacts></Contacts>

      {/*таблица  Будет заготовкой*/}
      <Block className={'block block_html-code content_table'}
             colorMode={'-dark-mode'}

             title={
               <Block_Head accentTitleBefore={'Условия<br>'} title={'для собственников'} subtitle={'При сдаче в аренду жилья через управляющую компанию. '} caption={'Партнёрство, которым можно гордиться: увеличивайте доходность, сохраняйте контроль и доверяйте экспертам. Ваш актив — наша ответственность, ваше доверие — наша мотивация.'}></Block_Head>}>
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
		</MainLayout>
	);
}
