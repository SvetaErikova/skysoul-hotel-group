import { metaPages } from "../../shared/meta-pages";
import {Contacts} from "../../components/content/contacts/contacts-comp.jsx";
import HeroLayout from '../../layouts/HeroMain.jsx';

export default function Home() {
  const tabs = [
    { label: "Все" },
    { label: "Номера" },
    { label: "Рестораны и бары" },
    { label: "Spa и бассейны" }
  ];
	return (
		<HeroLayout meta={metaPages.home} >
      <Contacts></Contacts>
		</HeroLayout>
	);
}
