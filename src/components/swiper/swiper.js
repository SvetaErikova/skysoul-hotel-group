import {buildControls, withNavigationAndPagination, defaultSwiperOptions} from "./helpers";

const updateVisibleSlides = (swiper) => {
  if (!window.matchMedia("(min-width: 769px)").matches) return;

  const visibleIndexes = [];
  const activeIndex = swiper.activeIndex;
  const slidesToShow = Math.ceil(swiper.params.slidesPerView || 1);

  for (let i = 0; i < slidesToShow; i++) {
    visibleIndexes.push(activeIndex + i);
  }

  swiper.slides.forEach((slide, index) => {
    visibleIndexes.includes(index)
      ? slide.classList.remove("hide")
      : slide.classList.add("hide");
  });
};

/* Slider for banners */
const activateBannerSlider = (banner_block) => {
  const banner_wrapper = banner_block.querySelector(".block--wrapper");
  const isHeroBanner = banner_block.classList.contains("block_banner-hero");
  const slidesCount = banner_wrapper.querySelectorAll(".banner").length;

  const {controls, prev, next} = buildControls({pagination: false, darkMode: isHeroBanner});
  banner_wrapper.append(controls);

  const swiperOptions = {
    slideClass: "banner",
    slidesPerView: 1,
    grabCursor: false,
    centeredSlides: true,
    focusableElements: "a, button",
    loop: isHeroBanner ? true : slidesCount >= 3,
    pagination: false,
  };

  if (isHeroBanner) {
    swiperOptions.effect = "fade";
  } else {
    swiperOptions.breakpoints = {
      0: {slidesPerView: 1, spaceBetween: 8},
      768: {slidesPerView: 1, spaceBetween: 16},
    };
    swiperOptions.on = {
      init() {
        updateVisibleSlides(this);
      },
      slideChange() {
        updateVisibleSlides(this);
      },
    };
  }

  const banner_slider = new Swiper(
    banner_block.querySelector(".block--wrapper"),
    withNavigationAndPagination(
      swiperOptions,
      {pagination: false, prev, next}
    )
  );
};

const banner_slider_block = document.querySelectorAll(".block_banner-group");
banner_slider_block.forEach((bs) => {
  activateBannerSlider(bs);
});

/* Block_list slider Слайдеры в списках */
const activateBlocklistSlider = (swiper_item) => {


  let slides_per_view_desktop = 5,
    slides_per_view_desktop_small = 4,
    slides_per_view_pad = 2.2,
    slides_per_view_mob = 1.2,
    space_between = 16;

  switch (true) {
    case swiper_item.classList.contains("content_card"):
      slides_per_view_desktop = 5;
      slides_per_view_desktop_small = 4;
      break;
    case swiper_item.classList.contains("content_personnel"):
      slides_per_view_desktop = 5;
      slides_per_view_desktop_small = 4;
      break;
    case swiper_item.classList.contains("content_resorts"):
      slides_per_view_desktop = 4;
      slides_per_view_desktop_small = 3;
      break;
    case swiper_item.classList.contains("content_partners"):
      slides_per_view_desktop = 5;
      slides_per_view_desktop_small = 4;
      break;
    case swiper_item.classList.contains("content_article"):
      slides_per_view_desktop = 4;
      slides_per_view_desktop_small = 3;
      break;
    case swiper_item.classList.contains("content_advantages"):
      slides_per_view_desktop = 4;
      slides_per_view_desktop_small = 5;
      break;
    // case swiper_item.classList.contains("content_steps"):
    //   slides_per_view_desktop = 2;
    //   slides_per_view_desktop_small = 2;
    //   break;
    case swiper_item.classList.contains("content_services"):
      slides_per_view_desktop = 3;
      slides_per_view_desktop_small = 2;
      break;
    case swiper_item.classList.contains("content_directions"):
      slides_per_view_desktop = 5;
      slides_per_view_desktop_small = 4;
      break;
    case swiper_item.classList.contains("content_vacancies"):
      slides_per_view_desktop = 2;
      slides_per_view_desktop_small = 2;
      slides_per_view_pad = 1.2;
      break;
    case swiper_item.classList.contains("content_media"):
      slides_per_view_desktop = 4;
      slides_per_view_desktop_small = 3;
      break;
    case swiper_item.classList.contains("content_blog"):
      slides_per_view_desktop = 4;
      slides_per_view_desktop_small = 3;
      break;
    default:
      slides_per_view_desktop = 4;
      slides_per_view_desktop_small = 3;
      slides_per_view_pad = 2.2;
      slides_per_view_mob = 1.2;
  }

  const {controls, prev, next} = buildControls({pagination: false});
  const blockElements = swiper_item.querySelector(".block--elements");

  if (!blockElements) return;

  blockElements.append(controls);

  const swiper = new Swiper(
    blockElements,
    withNavigationAndPagination(
      {
        slideClass: "card",
        freeMode: false,
        noSwipingClass: "swiper-no-swiping-block",
        spaceBetween: space_between,
        thumbs: false,
        watchOverflow: true,
        pagination: false,
        autoHeight: true,
        breakpoints: {
          220: {slidesPerView: slides_per_view_mob},
          640: {slidesPerView: slides_per_view_pad},
          1024: {slidesPerView: slides_per_view_desktop_small},
          1440: {slidesPerView: slides_per_view_desktop},
        },
      },
      {pagination: false, prev, next}
    )
  );

};

const block_list_sliders = document.querySelectorAll(".block_list-slider");
block_list_sliders.forEach((slider) => {
  activateBlocklistSlider(slider);
});


let activateGallerySliders = (gallery) => {
  if(gallery.querySelectorAll('img').length <=1) return
  const {controls, pagination, prev, next} = buildControls({pagination: true, navigation: true, darkMode: true});
  gallery.append(controls);

  const swiperOptions = withNavigationAndPagination(
    {
      slideClass: "gallery--item",
      slidesPerView: 1,
      spaceBetween: 8,
      freeMode: false,
      loop: true,
      grabCursor: true,
      navigation: true,
      pagination: true,
    },
    {pagination, prev, next}
  );
  new Swiper(gallery, swiperOptions);
};

const galleries = document.querySelectorAll(".js-gallerySwiper");
galleries.forEach((gallery) => {
  activateGallerySliders(gallery);
})


const activateInfoSlider = (block) => {
  let card_image_slider = block.querySelectorAll(".block--cards_container")
  const isReversed = block.classList.contains('-reversed');
  card_image_slider.forEach(slider => {
    let cards = slider.querySelectorAll('.card')
    if (cards.length > 1) {
      const {controls, pagination, prev, next} = buildControls({pagination: true, navigation: true});
      const swiperOptions = withNavigationAndPagination(
        {
          slideClass: 'card',
          slidesPerView: 1,
          spaceBetween: 20,
          grabCursor: true,
          simulateTouch: true,
          freeMode: false,
          allowTouchMove: true,
          // loop: true,
          speed: 500,
          mousewheel: {
            forceToAxis: true,
          },
          effect: window.innerWidth >= 768 ? "creative" : "slide",
          creativeEffect: window.innerWidth >= 768
            ? {
              prev: isReversed ? {
                translate: ["105%", 0, 0],
                opacity: 0
              } : {
                translate: ["-110%", 0, 0],
                opacity: 0
              },
              next: isReversed ? {
                translate: ["-110%", 0, 0],
              } : {
                translate: ["105%", 0, 0],
              },
            } : false,
          pagination: window.innerWidth < 768 ? true : false,
        },
        {pagination, prev, next}
      );
      const card_slider = new Swiper(slider, swiperOptions);
      if(window.matchMedia('(min-width:769px)').matches) {
        block.querySelector('.block--cards').appendChild(controls);
      }
      else {
        block.querySelector('.block--cards').appendChild(pagination);
      }
    }
  });
};

const info_block = document.querySelectorAll(".content_info");

info_block.forEach((block) => {

  activateInfoSlider(block);

});
