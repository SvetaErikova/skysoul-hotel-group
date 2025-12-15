import MainLayout from '../layouts/MainLoyout.jsx';
import { metaPages } from '../shared/meta-pages';
import { Block_Head } from '../components/block/_ui/block--head/block--head.jsx';
import {Accordion_full} from "../components/_ui/accordion/accordion-full.jsx";
import {Contacts} from "../components/content/contacts/contacts-comp.jsx";
import {Faq} from "../components/content/faq/faq-comp.jsx";
import {Button} from "../components/_ui/button/button.jsx";

export default function Home() {
  return (
    <MainLayout meta={metaPages.home} colorMode='-light-mode'>
      <Contacts></Contacts>
      <Faq
				title={
					<Block_Head
						title={"Часто задаваемые вопросы"}
						caption={"Если не нашли ответ, на пишите нам -- постараемся ответить как можно быстрее"}
						headingSize={"f-h2"}
						action={
							<>
                <Button type="filled" color="primary">Кнопка 1</Button>
                <Button type="filled" color="primary">Кнопка 2</Button>
							</>
						}
					></Block_Head>
				}
			>
				<Accordion_full />
			</Faq>
    </MainLayout>
  );
}
