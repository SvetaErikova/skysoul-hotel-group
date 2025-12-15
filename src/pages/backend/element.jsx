import MainLayout from '../../layouts/MainLoyout.jsx';
import { metaPages } from '../../shared/meta-pages.js';
import { GalleryFull } from '../../components/gallery/galleryFull.jsx';
import { Block_Head } from '../../components/block/_ui/block--head/block--head.jsx';
import { Block_element } from '../../components/block/block_element/block_element.jsx';
import { Services } from '../../components/content/services/services-comp.jsx';

export default function Home() {
  return (
    <MainLayout meta={metaPages.home}>

    </MainLayout>
  );
}
