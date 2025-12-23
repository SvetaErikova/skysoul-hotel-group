import MainLayout from '../layouts/MainLoyout.jsx';
import {metaPages} from '../shared/meta-pages.js';
import {Article} from "../components/content/article/article.jsx";
import { Block } from '../components/block/block.jsx';
import { Block_Head } from '../components/block/_ui/block--head/block--head.jsx';
import { Is_cascade_full } from '../components/_ui/is_cascade/is_cascade-full.jsx';
import { Block_Sidebar } from '../components/block/_ui/block--sidebar/block--sidebar.jsx';


export default function Home() {
  return <MainLayout meta={metaPages.home} >
    <Block className={'content_article'}
           title={<Block_Head title={'Заголовок энного уровня'} subtitle={'Программа лояльности'} caption={'Tortor at donec in ornare et tellus. Nec blandit ultrices vitae iaculis vitae in dictum nec. Laoreet dignissim odio eu in. Vel.'}></Block_Head>}
    >
      <>
        <Block_Sidebar></Block_Sidebar>
        <div className={'is_cascade'}>
          <h1 id={'title'}>Заголовок первого уровня</h1>
          <h2>Заголовок второго уровня</h2>
          <h3>Заголовок третьего уровня</h3>
          <h4>Заголовок четвертого уровня</h4>
          <h5>Заголовок пятого уровня</h5>
          <h6>Заголовок шестого уровня</h6>
          <p className='-accent'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores et nisi quasi quis
            reprehenderit
            voluptatem.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur iste iure, molestiae nihil perferendis
            possimus praesentium quasi reprehenderit sed sunt tempore vero! <a href="" target="_blank">ссылка</a></p>

          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores et nisi quasi quis reprehenderit
            voluptatem.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque enim impedit in laboriosam nam
            necessitatibus rerum. A fugiat reiciendis repellendus rerum tempore totam unde voluptate.</p>
          <ul id={'ul'}>
            <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores et nisi quasi quis reprehenderit
              voluptatem.
            </li>
            <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores et nisi quasi quis reprehenderit
              voluptatem.
            </li>
            <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores et nisi quasi quis reprehenderit
              voluptatem.
            </li>
          </ul>
          </div>
        </>
    </Block>
  </MainLayout>
;
}
