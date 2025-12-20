import { metaPages } from "../../shared/meta-pages";
import {Contacts} from "../../components/content/contacts/contacts-comp.jsx";
import { Calculator } from '../../components/content/calculator/calculator-comp.jsx';
import MainLayout from '../../layouts/MainLoyout.jsx';
import { Info } from '../../components/content/info/info.jsx';
import { Block_Head } from '../../components/block/_ui/block--head/block--head.jsx';

export default function Home() {
  const tabs = [
    { label: "Все" },
    { label: "Номера" },
    { label: "Рестораны и бары" },
    { label: "Spa и бассейны" }
  ];
	return (
		<MainLayout meta={metaPages.home} >
      <Info title={<Block_Head title={'Блок инфо'} caption={'дефолт'}></Block_Head>}
            content={<>
              <p>Мы подготовили подробную памятку, в которой собрали всю ключевую информацию о сотрудничестве с отельным оператором.</p>
              <p>В документе — принципы работы, финансовая модель, описание инфраструктуры и условий для собственников.</p>
              <p>Памятка поможет вам:</p>
              <ul>
                <li>рассчитать доходность</li>
                <li>понять, как устроено управление апартаментами</li>
                <li>узнать, какие преимущества вы получите как партнёр</li>
              </ul>
            </>}
      images={['../../assets/img/1.jpg', '../../assets/img/2.jpg', '../../assets/img/4.jpg', '../../assets/img/5.jpg']}></Info>
      <Calculator></Calculator>
      <Contacts></Contacts>
		</MainLayout>
	);
}
