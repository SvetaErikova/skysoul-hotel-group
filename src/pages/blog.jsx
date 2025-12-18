import MainLayout from '../layouts/MainLoyout.jsx';
import { metaPages } from '../shared/meta-pages.js';
import { Article, Blog } from '../components/content/article/article.jsx';
import { Block_banner_cascade } from '../components/block/block_banner/block_banner.jsx';
import { Block_Head } from '../components/block/_ui/block--head/block--head.jsx';
import { Form_subscription } from '../components/form/form-subscription.jsx';
import {Block} from "../components/block/block.jsx";

export default function Home() {
  return <MainLayout meta={metaPages.home} className={'page-blog'} colorMode={'-light-mode'}>
    <Block
    className={'-no-padding'}
      title={
      <Block_Head title={'Заголовок энного уровня'} headingLevel={'1'} headingSize={'f-h1'}></Block_Head>
    }></Block>
    {/*<Blog></Blog>*/}
  </MainLayout>;
}
