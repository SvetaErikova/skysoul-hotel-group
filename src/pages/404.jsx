import {Button} from "../components/_ui/button/button.jsx";
import {Block_Head} from "../components/block/_ui/block--head/block--head.jsx";
import {metaPages} from "../shared/meta-pages";
import MainLayout from '../layouts/MainLoyout.jsx';

export default function Home() {
  return (
    <MainLayout meta={metaPages.home}>
      <div class="block block_html_code content_error">
        <div class="block--wrapper">
          <Block_Head
            subtitle={"Page not found"} title={" 404"} caption={'Oops! It seems you\'ve wandered off the beaten path. Our cozy chalet retreat in the stunning Altai region, right at the foot of Mount Malaya Sinyukha, is waiting for you. Let\'s get you back on track!'}
            action={
              <Button type={'filled'} color={'primary'} link={"/"}>на главную</Button>}>
          </Block_Head>
        </div>
      </div>
    </MainLayout>
  );
}
