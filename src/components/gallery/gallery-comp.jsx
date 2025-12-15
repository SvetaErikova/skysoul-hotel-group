import clsx from 'clsx';

export const Gallery = ({ images = [], isSlider = true, col = '', group = "gallery-1" }) => {
  return (
    <div className={clsx("gallery", isSlider && "js-gallerySwiper", col && `col-${col}`)} >
      {images.map((img, index) => {
        const content = img.video ? (

            <video src={img.video} poster={img.poster} loop autoplay playsinline muted data-fancybox={group}/>
        ) : (
          <img src={img.src} alt="" data-fancybox={group} loading="lazy" />
        );

        return (
          <div key={index} className={"gallery--item"}>
            {content}
          </div>
        );
      })}
    </div>
  );
};
