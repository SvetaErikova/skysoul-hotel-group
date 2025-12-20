import MainLayout from "../../layouts/MainLoyout.jsx";
import { metaPages } from "../../shared/meta-pages";
import { GalleryFull } from '../../components/gallery/galleryFull.jsx';
import { Block_Head } from '../../components/block/_ui/block--head/block--head.jsx';

export default function Home() {
  const defaultImages = [
    { src: "/assets/img/1.jpg" },
    { video: "/assets/video/@lepragram.mp4", poster: "/assets/img/1.jpg" },
    { src: "/assets/img/1.jpg" },
    { src: "/assets/img/1.jpg" },
  ];


  return (
    <MainLayout meta={metaPages.home}>
      <GalleryFull
        title={
          <Block_Head
            title="Галерея"
            subtitle="Галерея"
            caption=""
            headingLevel={2}
          />
        }
        images={defaultImages}
        isSlider={true}
        col={1}
        showSelection={false}
      />

    </MainLayout>
  );
}
