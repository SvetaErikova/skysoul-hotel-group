import {Button} from "../components/_ui/button/button.jsx";
import {Block_Head} from "../components/block/_ui/block--head/block--head.jsx";
import {metaPages} from "../shared/meta-pages";
import MainLayout from '../layouts/MainLoyout.jsx';

export default function Home() {
  return (
    <MainLayout meta={metaPages.not_found_page}>

      <div class="breadcrumbs"
           itemscope=""
           itemtype="https://schema.org/BreadcrumbList">
        <a itemprop="itemListElement"
           itemscope=""
           itemtype="https://schema.org/ListItem"
           href="/">
          <span itemprop="name">Главная</span>
        </a>
        <a itemprop="itemListElement"
           itemscope=""
           itemtype="https://schema.org/ListItem"
           href="/404">
          <span itemProp="name">404</span>
        </a>
      </div>

      <div className="block block_html_code content_error">
        <div className="block--wrapper">
          <Block_Head
            title={" 404"}
            subtitle={"Страница не найдена"}
            caption={'Кажется такой страницы не существует. Возможно такой страницы не существует или она в разработке. Попробуйте обновить позже или вернитесь на главную страницу.'}
            action={
              <Button type={'filled'}
                      color={'primary'}
                      link={"/"}>На главную</Button>
            }
          >
          </Block_Head>
        </div>
      </div>
    </MainLayout>
  );
}
