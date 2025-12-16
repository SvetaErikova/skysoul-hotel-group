
import HeroLayout from '../layouts/HeroLayout.jsx';
import { metaPages } from '../shared/meta-pages';
import { Block_List } from '../components/block/block_list/block_list.jsx';
import { Block_Head } from '../components/block/_ui/block--head/block--head.jsx';
import { All_card_steps } from '../components/_ui/card/all_card.jsx';


const tabs = [
  { label: 'Все' },
  { label: 'Номера' },
  { label: 'Рестораны и бары' },
  { label: 'Spa и бассейны' },
];

export default function Home() {
  return (
    <HeroLayout meta={metaPages.home} className={'page-main'}>
      {/*Картчки пошаговые грид*/}
      <Block_List
        className="content_steps"
        title={
          <Block_Head
            title={"грид "}
            subtitle={"Блок-список стандартный"}
            caption={"Карточки пошаговые "}
            headingLevel={2}
          ></Block_Head>
        }
      >
        <All_card_steps></All_card_steps>

      </Block_List>
      <br></br>
    </HeroLayout>
  );
}
