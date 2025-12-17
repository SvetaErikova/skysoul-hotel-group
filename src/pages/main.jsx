
import HeroLayout from '../layouts/HeroLayout.jsx';
import { metaPages } from '../shared/meta-pages';
import { Block_List } from '../components/block/block_list/block_list.jsx';
import { Block_Head } from '../components/block/_ui/block--head/block--head.jsx';
import { All_card_steps } from '../components/_ui/card/all_card.jsx';
import {Steps} from "../components/content/steps/steps-comp.jsx";


const tabs = [
  { label: 'Все' },
  { label: 'Номера' },
  { label: 'Рестораны и бары' },
  { label: 'Spa и бассейны' },
];

export default function Home() {
  return (
    <HeroLayout meta={metaPages.home} className={'page-main'}>
      <Steps></Steps>
    </HeroLayout>
  );
}
