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
            title="Слайдер с одной картинкой"
            subtitle="Галерея"
            caption="isSlider=true, col=1"
            headingLevel={2}
          />
        }
        images={defaultImages}
        isSlider={true}
        col={1}
        showSelection={false}
      />

      <GalleryFull
        title={
          <Block_Head
            title="Слайдер с двумя картинками"
            subtitle="Галерея"
            caption="isSlider=true, col=1"
            headingLevel={2}
          />
        }
        images={defaultImages}
        isSlider={true}
        col={2}
        showSelection={false}
      />
      <GalleryFull
        title={
          <Block_Head
            title="Слайдер с тремя картинками"
            subtitle="Галерея"
            caption="isSlider=true, col=1"
            headingLevel={2}
          />
        }
        images={defaultImages}
        isSlider={true}
        col={3}
        showSelection={false}
      />
      <GalleryFull
        title={
          <Block_Head
            title="Грид на одну картинку"
            subtitle="Галерея"
            caption="isSlider=false, col=1"
            headingLevel={2}
          />
        }
        images={defaultImages}
        isSlider={false}
        col={2}
        group="gallery-grid-single"
        showSelection={false}
      />

      <GalleryFull
        title={
          <Block_Head
            title="Грид на три картинки"
            subtitle="Галерея"
            caption="isSlider=false, col=3"
            headingLevel={2}
          />
        }
        images={defaultImages}
        isSlider={false}
        col={3}
        group="gallery-grid-triple"
        showSelection={false}
      />
    </MainLayout>
  );
}
