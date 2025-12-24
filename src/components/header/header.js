// import { OverflowNav } from "../../scripts/overflow-nav.js";

import { OverflowNav } from '../../scripts/overflow-nav.js';

const isDesktop = () => window.matchMedia('(min-width:769px)').matches;

function updateHeaderHeight() {
  const header = document.querySelector('.header--main');
  const headerHeight = header ? header.getBoundingClientRect().height : 65;
  document.documentElement.style.setProperty('--headerHeight', `${headerHeight}px`);
}

function updateViewportHeight() {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
}

initBaseVariables();
// if ( window.matchMedia('(min-width:1140px)').matches) {
  initHeaderScroll();
// }


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
  const updateHeaderScrollState = () => {
    const header = document.querySelector(".header");
    if (!header) return;
    if (document.documentElement.scrollTop > 0) {
      header.classList.add("is_scrolled");
    } else {
      header.classList.remove("is_scrolled");
    }
  };
  window.addEventListener("scroll", updateHeaderScrollState);
  window.addEventListener("load", updateHeaderScrollState);
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
if (window.matchMedia("(min-width:999px)").matches) {
  initHeaderNav();
}
