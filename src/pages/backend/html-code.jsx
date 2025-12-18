import { metaPages } from "../../shared/meta-pages";
import {Contacts} from "../../components/content/contacts/contacts-comp.jsx";
import { Calculator } from '../../components/content/calculator/calculator-comp.jsx';
import MainLayout from '../../layouts/MainLoyout.jsx';

export default function Home() {
  const tabs = [
    { label: "Все" },
    { label: "Номера" },
    { label: "Рестораны и бары" },
    { label: "Spa и бассейны" }
  ];
	return (
		<MainLayout meta={metaPages.home} >
      <Calculator></Calculator>
      <Contacts></Contacts>
		</MainLayout>
	);
}
