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
    slides_per_view_pad = 2,
    slides_per_view_mob = 1.4,
    space_between = 16;

  switch (true) {
    case swiper_item.classList.contains("content_card"):
      slides_per_view_desktop = 4;
      slides_per_view_desktop_small = 3;
      slides_per_view_pad = 2.2;
      slides_per_view_mob = 1.4;
      break;
    case swiper_item.classList.contains("content_personnel"):
      slides_per_view_desktop = 5;
      slides_per_view_desktop_small = 4;
      slides_per_view_mob = 1.4;
      break;
    case swiper_item.classList.contains("content_resorts"):
      slides_per_view_desktop = 4;
      slides_per_view_desktop_small = 3;
      slides_per_view_mob = 1.2;
      break;
    case swiper_item.classList.contains("content_partners"):
      slides_per_view_desktop = 2;
      slides_per_view_desktop_small = 2;
      slides_per_view_mob = 1.1;
      break;
    case swiper_item.classList.contains("content_article"):
      slides_per_view_desktop = 4;
      slides_per_view_desktop_small = 3;
      slides_per_view_mob = 1.1;
      break;
    case swiper_item.classList.contains("content_advantages"):
      slides_per_view_desktop = 2;
      slides_per_view_desktop_small = 2;
      slides_per_view_pad = 1;
      slides_per_view_mob = 1.1;
      break;
    case swiper_item.classList.contains("content_steps"):
      slides_per_view_desktop = 2;
      slides_per_view_desktop_small = 2;
      slides_per_view_mob = 1.1;
      break;
    case swiper_item.classList.contains("content_services"):
      slides_per_view_desktop = 3;
      slides_per_view_desktop_small = 2;
      slides_per_view_mob = 1.1;
      break;
    case swiper_item.classList.contains("content_directions"):
      slides_per_view_desktop = 2;
      slides_per_view_desktop_small = 2;
      slides_per_view_pad = 1;
      slides_per_view_mob = 1.1;
      break;
    case swiper_item.classList.contains("content_vacancies"):
      slides_per_view_desktop = 2;
      slides_per_view_desktop_small = 2;
      slides_per_view_pad = 1;
      slides_per_view_mob = 1.1;
      break;
    case swiper_item.classList.contains("content_media"):
      slides_per_view_desktop = 4;
      slides_per_view_desktop_small = 3;
      slides_per_view_mob = 1.1;
      break;
    case swiper_item.classList.contains("content_blog"):
      slides_per_view_desktop = 4;
      slides_per_view_desktop_small = 3;
      slides_per_view_mob = 1.1;
      break;
    default:
      slides_per_view_desktop = 4;
      slides_per_view_desktop_small = 3;
      slides_per_view_pad = 2.2;
      slides_per_view_mob = 1.13;
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
          768: {slidesPerView: slides_per_view_desktop_small},
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

const initRoomsSliders = () => {
  const sliders = document.querySelectorAll(".content_room .block--elements");

  const createThumbsSwiper = (block, slider) => {
    const existing = block.querySelector(".content_room__thumbs");
    if (existing?.swiper) return existing.swiper;

    const images = Array.from(slider.querySelectorAll(".card--image img"))
      .map((img) => img?.getAttribute("src"))
      .filter(Boolean);

    if (!images.length) return null;

    const thumbsContainer = document.createElement("div");
    thumbsContainer.className = "content_room__thumbs swiper";

    const wrapper = document.createElement("div");
    wrapper.className = "swiper-wrapper";

    images.forEach((src) => {
      const slide = document.createElement("div");
      slide.className = "swiper-slide";
      slide.style.backgroundImage = `url(${src})`;
      wrapper.append(slide);
    });

    thumbsContainer.append(wrapper);
    block.prepend(thumbsContainer);

    return new Swiper(thumbsContainer, {
      slidesPerView: 1,
      allowTouchMove: false,
      effect: "fade",
      fadeEffect: {
        crossFade: true,
      },
      // speed: 600,
    });
  };

  sliders.forEach((slider) => {
    if (!slider || !slider.querySelector(".card")) return;

    const block = slider.closest(".content_room");
    if (!block) return;

    const thumbsSwiper = createThumbsSwiper(block, slider);

    const {controls, prev, next} = buildControls({pagination: false, navigation: true, darkMode: true});
    slider.append(controls);

    const pagination = document.createElement("div");
    pagination.className = "swiper-pagination";
    slider.append(pagination);

    new Swiper(
      slider,
      withNavigationAndPagination(
        {
          slideClass: "card",
          spaceBetween: 16,
          freeMode: false,
          loop: false,
          centeredSlides: true,
          slidesPerView: 1.3,
          effect: "slide",
          pagination: true,
          thumbs: thumbsSwiper
            ? {
              swiper: thumbsSwiper,
            }
            : undefined,
          breakpoints: {
            220: {
              slidesPerView: 1,
              centeredSlides: false,
            },
            1024: {
              slidesPerView: 1.3,
              centeredSlides: true,
              spaceBetween: 0,
            },
          },
        },
        {pagination, prev, next}
      )
    );
  });
};

initRoomsSliders();

// accomodation
function initAccomodationCardSlider() {
  let card_room_slider = document.querySelectorAll(".content_accomodation .card .card--image");
  card_room_slider.forEach((slider) => {
    let images = slider.querySelectorAll("img");

    if (images.length > 1) {
      const slider_controls = document.createElement("div");
      slider_controls.classList.add("slider_controls");

      const swiper_nav_prev = document.createElement("div");
      swiper_nav_prev.classList.add("swiper--prev");
      slider_controls.append(swiper_nav_prev);

      const swiper_nav_next = document.createElement("div");
      swiper_nav_next.classList.add("swiper--next");
      slider_controls.append(swiper_nav_next);

      const swiper_pagination = document.createElement("div");
      swiper_pagination.classList.add("swiper-pagination");

      slider.append(swiper_pagination);
      slider.append(slider_controls);


      const card_room_slider = new Swiper(slider, {
        createElements: true,
        slidesPerView: 1,
        grabCursor: true,
        // simulateTouch: true,
        freeMode: false,
        allowTouchMove: true,
        loop: false,
        effect: "fade",
        fadeEffect: {
          crossFade: true,
        },
        navigation: {
          nextEl: swiper_nav_next,
          prevEl: swiper_nav_prev,
        },
        pagination: {
          el: swiper_pagination,
          type: 'custom',
          renderCustom: function (swiper, current, total) {
            return `
							<span>${current}</span>
							<span>/</span>
							<span>${total}</span>
						`;
          }
        },
        mousewheel: {
          forceToAxis: true,
        },
        slideClass: "card__image_slide",

      });
    }
  });
}

// initAccomodationCardSlider();


let activateGallerySliders = (gallery) => {

  const colClass = Array.from(gallery.classList).find((cls) => cls.startsWith("col-"));
  const col = colClass ? parseInt(colClass.replace("col-", ""), 10) || 1 : 1;

  if (gallery.querySelectorAll('.gallery--item').length <= col) {
    return
  }
  const content_gallery = gallery.closest('.content_gallery');

  let slides_per_view_desktop = 1,
    slides_per_view_desktop_small = 1,
    slides_per_view_pad = 1,
    slides_per_view_mob = 1;

  if (content_gallery) {
    switch (true) {
      case col === 3:
        slides_per_view_desktop = 3;
        slides_per_view_desktop_small = 2;
        slides_per_view_pad = 2;
        slides_per_view_mob = 1.2;
        break;
      case col === 2:
        slides_per_view_desktop = 2;
        slides_per_view_desktop_small = 2;
        slides_per_view_pad = 1.5;
        slides_per_view_mob = 1.2;
        break;
      default:
        slides_per_view_desktop = 1.3;
        slides_per_view_desktop_small = 1.2;
        slides_per_view_pad = 1;
        slides_per_view_mob = 1;
    }
  }
  let controlsSet;
  if (content_gallery) {
    controlsSet = buildControls({pagination: false, navigation: true, darkMode: true});
  } else {
    controlsSet = buildControls({pagination: true, navigation: true, darkMode: true});
  }
  gallery.append(controlsSet.controls);

  // if (controlsSet.controls && controlsSet.controls.children.length) {
  //   gallery.append(controlsSet.controls);
  // }

  const isCenteredDesktop = col === 1;


  const swiperOptions = withNavigationAndPagination(
    {
      slideClass: "gallery--item",
      slidesPerView: slides_per_view_mob,
      spaceBetween: 8,
      freeMode: false,
      loop: true,
      centeredSlides: isCenteredDesktop,
      grabCursor: true,
      navigation: true,
      pagination: true,
      breakpoints: {
        220: {slidesPerView: slides_per_view_mob, centeredSlides: true},
        640: {slidesPerView: slides_per_view_pad, spaceBetween: 16},
        768: {slidesPerView: slides_per_view_desktop_small},
        1240: {slidesPerView: slides_per_view_desktop},
      },
    },
    controlsSet
  );
  new Swiper(gallery, swiperOptions);
};

const galleries = document.querySelectorAll(".js-gallerySwiper");
galleries.forEach((gallery) => {
  activateGallerySliders(gallery);
})


function Services_init_slider(block) {

  let service = block.querySelector('.block--elements')

  const bgImages = Array.from(block.querySelectorAll('.block--image img'));

  if (!bgImages.length) return;
  const updateActiveImage = (swiper) => {
    bgImages.forEach(img => img.classList.remove('is_visible'));
    const realIndex = swiper.realIndex;
    const imageIndex = realIndex % bgImages.length;
    if (bgImages[imageIndex]) {
      bgImages[imageIndex].classList.add('is_visible');
    }
  };

  const updateSlidesOpacity = (swiper) => {
    const activeIndex = swiper.activeIndex;
    swiper.slides.forEach((slide, index) => {
      const distance = Math.abs(index - activeIndex);
      if (distance === 0) {
        slide.style.opacity = '1';
      } else if (distance === 1) {
        slide.style.opacity = '0.6';
      } else {
        slide.style.opacity = '0.2';
      }
    });
  };

  const {controls, prev, next} = buildControls({pagination: false, navigation: true, darkMode: true});
  service.append(controls);

  const swiperOptions = withNavigationAndPagination(
    {
      slideClass: "card",
      freeMode: false,
      slidesPerView: "auto",
      centeredSlides: true,
      allowTouchMove: false,
      watchSlidesProgress: true,
      loop: false,
      spaceBetween: 64,
      navigation: true,
      pagination: false,

      on: {
        init: function (swiper) {
          updateActiveImage(swiper);
          updateSlidesOpacity(swiper);
        },
        slideChange: function (swiper) {
          updateActiveImage(swiper);
          updateSlidesOpacity(swiper);
        },
        setTransition: function (swiper, duration) {
          updateSlidesOpacity(swiper);
        }
      }
    },
    {controls, pagination: null, prev, next}
  );
  new Swiper(service, swiperOptions);
}

const services = document.querySelectorAll(".content_services-slider");
services.forEach((block) => {
  Services_init_slider(block);
})
