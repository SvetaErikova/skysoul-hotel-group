import MainLayout from '../layouts/MainLoyout.jsx';
import {metaPages} from '../shared/meta-pages.js';
import {Article} from '../components/content/article/article.jsx';
import {Accordion_full} from "../components/_ui/accordion/accordion-full.jsx";
import {Gallery} from "../components/gallery/gallery-comp.jsx";
import clsx from "clsx";
import {Block_Head} from "../components/block/_ui/block--head/block--head.jsx";
import {Is_cascade_full} from "../components/_ui/is_cascade/is_cascade-full.jsx";
import {Block} from "../components/block/block.jsx";

export default function Home() {
  return (
    <MainLayout meta={metaPages.forBusiness}
                className={'page-article'}>

      <div className="breadcrumbs"
           itemScope=""
           itemType="https://schema.org/BreadcrumbList">
        <a itemProp="itemListElement"
           itemScope=""
           itemType="https://schema.org/ListItem"
           href="/">
          <span itemProp="name">Главная</span>
        </a>
        <a itemProp="itemListElement"
           itemScope=""
           itemType="https://schema.org/ListItem"
           href="/for-business">
          <span itemProp="name">Для бизнеса</span>
        </a>
      </div>

      <Block className={'content_article'}
             title={<Block_Head title={'Для бизнеса'}
                                caption={'Контент на этой странице выведен для теста. Либо мы его скроем, либо нужно будет заполнить его актуальной информацией. В целом показываем такую страницу как пример, чтобы понимали, что она готова и можно использовать.'}></Block_Head>}>
        <div className={'is_cascade'}>
          <figure>
            <img src="/assets/img/ruslans-content/for-business/1.jpg"
                 alt=""/>
            <figcaption>Подпись к картинке</figcaption>
          </figure>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci alias distinctio doloremque dolorum
            esse eum facere harum incidunt laborum, libero magni molestias neque nostrum optio provident qui, ratione
            sequi sint sunt, tempore totam veniam. Cupiditate, quis, voluptatum? Asperiores assumenda autem commodi
            dolores eaque earum et impedit ipsam laboriosam, minima modi nihil placeat praesentium qui repellendus,
            rerum saepe, similique vel veritatis voluptates! Assumenda dicta ea est incidunt, inventore iure laborum
            maiores mollitia, porro quisquam reiciendis sapiente? Atque aut cupiditate excepturi fugit id, in iure
            laborum minus optio possimus quam reiciendis rem repellendus, reprehenderit saepe sapiente, totam! Facilis
            placeat sapiente sit!
          </p>
          <figure>
            <img src="/assets/img/ruslans-content/for-business/2.jpg"
                 alt=""/>
            <figcaption>Подпись к картинке</figcaption>
          </figure>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium beatae, exercitationem fuga
            hic impedit iste nobis omnis optio rerum totam vitae? Error maxime minima quasi rerum temporibus? At
            delectus deleniti deserunt dignissimos enim id molestiae officiis possimus quam sapiente. Accusantium
            aliquam aperiam deleniti earum, esse illum praesentium. Animi at culpa, cumque dolore et labore laborum,
            magnam modi necessitatibus numquam odit omnis perspiciatis quisquam ratione rem reprehenderit sint tempore
            totam.
          </p>
        </div>
      </Block>

    </MainLayout>
  );
}
