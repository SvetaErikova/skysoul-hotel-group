import {metaPages} from "../shared/meta-pages.js";
import {Block_List} from "../components/block/block_list/block_list.jsx";
import {Block_Head} from "../components/block/_ui/block--head/block--head.jsx";
import { Form_ilter } from '../components/form/form-filter.jsx';
import MainLayout from '../layouts/MainLoyout.jsx';
import { All_card_job } from '../components/_ui/card/all_card.jsx';


export default function Home() {
  return <MainLayout meta={metaPages.home}>
    <Block_List
      className="content_job"
      title={<Block_Head title={'Карьера'}></Block_Head>}
      filter={<Form_ilter></Form_ilter>}
    >
      <All_card_job></All_card_job>
    </Block_List>
  </MainLayout>;
}
