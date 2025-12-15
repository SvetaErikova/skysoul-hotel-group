// import { OverflowNav } from "../../scripts/overflow-nav.js";

import { OverflowNav } from '../../scripts/overflow-nav.js';

const isDesktop = () => window.matchMedia('(min-width:769px)').matches;

function updateHeaderHeight() {
  const header = document.querySelector('.header');
  const headerHeight = header ? header.getBoundingClientRect().height : 104;
  document.documentElement.style.setProperty('--headerHeight', `${headerHeight}px`);
}

function getHeaderHeight(fallbackElement = null) {
  const rawValue = getComputedStyle(document.documentElement).getPropertyValue('--headerHeight');
  const parsed = parseFloat(rawValue);
  if (!Number.isNaN(parsed)) return parsed;
  if (fallbackElement) return fallbackElement.getBoundingClientRect().height;
  return 104;
}

function updateViewportHeight() {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
}

initBaseVariables();
initHeaderScroll();

/* Base Variables */
function initBaseVariables() {
  const updateVariables = () => {
    updateViewportHeight();
    updateHeaderHeight()
  };

  window.addEventListener('load', updateVariables);
  window.addEventListener('resize', updateVariables);
}


/* Header Scroll */
function initHeaderScroll() {
  const header = document.querySelector('.header');
  const headerBottom = document.querySelector('.header--bottom');
  if (!header || !headerBottom) return;

  const mainPage = document.querySelector('.page-main');
  const shouldDelayHide = Boolean(mainPage);
  let lastScrollTop = window.scrollY;

  const updateHeaderScrollState = () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop || 0;
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight || 0;
    const hideThreshold = shouldDelayHide ? viewportHeight : 1;
    const hasPassedHideThreshold = scrollTop >= hideThreshold;
    const isScrollingUp = scrollTop < lastScrollTop;

    const shouldHideNow = isDesktop()
      ? hasPassedHideThreshold
      : scrollTop > 0 || hasPassedHideThreshold;

    header.classList.toggle('is_scrolled', shouldHideNow);

    if (isDesktop()) {
      const hasPassedSecondaryThreshold = scrollTop >= viewportHeight;
      headerBottom.classList.toggle(
        'is_secondary_visible',
        hasPassedSecondaryThreshold && isScrollingUp,
      );
    } else {
      const mobileThreshold = viewportHeight * 0.5;
      headerBottom.classList.toggle(
        'is_secondary_visible',
        scrollTop >= mobileThreshold,
      );
    }

    lastScrollTop = scrollTop;
  };

  window.addEventListener('scroll', updateHeaderScrollState, { passive: true });
  window.addEventListener('load', updateHeaderScrollState);
}

function initAnimHeaderOnPageMain() {
  const pageMain = document.querySelector('.page-main');
  if (!pageMain) return;

  const headerLogoWrapper = document.querySelector('.header--main .header--logo');
  const headerLogo = headerLogoWrapper?.querySelector('.header--logo_logo');
  const headerLogoIcon = headerLogoWrapper?.querySelector('.header--logo_icon svg');
  const heroBlock = document.querySelector('.block_banner-hero');
  const headerElement = document.querySelector('.header');
  const booking = document.querySelector('.block_banner-hero ~ .block--search')

  if (!headerLogoWrapper || !headerLogo || !heroBlock) return;

  const getInitialShift = () => window.innerHeight * 0.1 + getHeaderHeight(headerLogoWrapper);

  const getMaxScale = () => {
    const logoWidth = headerLogo.getBoundingClientRect().width || 1;
    const viewportLimit = window.innerWidth * 0.95;
    if (!viewportLimit) return 1;
    const rawScale = viewportLimit / logoWidth;
    const integerScale = Math.max(Math.floor(rawScale), 1);
    return Math.min(integerScale, 8);
  };

  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: heroBlock,
      start: 'top top',
      end: 'center top',
      scrub: true,
      invalidateOnRefresh: true,
    },
    defaults: {
      ease: 'power2.out',
    },
  });

  timeline.fromTo(
    headerLogo,
    {
      y: () => getInitialShift(),
      scaleX: () => getMaxScale(),
      scaleY: () => getMaxScale(),
      transformOrigin: 'center center',
    },
    {
      scaleX: 1,
      scaleY: 1,
      transformOrigin: 'center center',
      y: 0,
    },
  );

  if (headerLogoIcon) {
    timeline.to(
      headerLogoIcon,
      {
        scale: 1,
        transformOrigin: 'center center',
      },
      '<',
    );
  }

  timeline.to(
    headerLogoWrapper,
    {
      '--logo-flare-scale': 0,
    },
    '<',
  );

  if (heroBlock) {
    gsap.timeline({
      scrollTrigger: {
        trigger: heroBlock,
        start: 'center top',
        end: 'bottom top',
        scrub: true,
        pin: true,
        pinSpacing: false,
        anticipatePin: 1,
        onEnter: () => headerElement?.classList.add('is_pin_hidden'),
        onLeave: () => headerElement?.classList.remove('is_pin_hidden'),
        onEnterBack: () => headerElement?.classList.add('is_pin_hidden'),
        onLeaveBack: () => headerElement?.classList.remove('is_pin_hidden'),
      },
    }).to(heroBlock, {
      opacity: 0,
    })
      .to(booking, {
        opacity: 0,
      }, '<');
  }
}

if (isDesktop()) {
  initAnimHeaderOnPageMain();
}


function initHeaderNav() {
  document.addEventListener("DOMContentLoaded", () => {
    new OverflowNav({
      changeItemFn: (el, { hidden }) => {
        if (hidden) {
          el.classList.add("dropdown--item");
          el.classList.remove("nav--item");
        } else {
          el.classList.remove("dropdown--item");
          el.classList.add("nav--item");
        }
      },
    });
  });
}
// if (window.matchMedia("(min-width:769px)").matches) {
//   initHeaderNav();
// }
