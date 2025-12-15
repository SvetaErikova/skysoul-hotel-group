import { Button } from "../components/_ui/button/button.jsx";
import { Block_Head } from "../components/block/_ui/block--head/block--head.jsx";
import HeroLayout from "../layouts/HeroLayout.jsx";
import { metaPages } from "../shared/meta-pages";
import MainLayout from '../layouts/MainLoyout.jsx';

export default function Home() {
	return (
    <MainLayout meta={metaPages.home}>
      <div class="block block_html_code content_error">
        <div class="block--wrapper">
          <Block_Head subtitle={" Страница не найдена"} title={"503"} caption={'Сервер временно не отвечает, возможно, он на привале. Попробуйте зайти чуть позже или вернитесь на главную страницу.'} action={
            <Button type={'filled'} color={'primary'} link={"/"}>на главную</Button>}>
          </Block_Head>
        </div>
      </div>
    </MainLayout>
	);
}
