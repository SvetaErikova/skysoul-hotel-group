import MainLayout from '../layouts/MainLoyout.jsx';
import {metaPages} from '../shared/meta-pages.js';
import {Article} from "../components/content/article/article.jsx";


export default function Home() {
  return <MainLayout meta={metaPages.home} colorMode={'-light-mode'}>
    <Article></Article>
  </MainLayout>;
}
