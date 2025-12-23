const map_contacts = document.getElementById("map");
if (map_contacts) {
  document.addEventListener("DOMContentLoaded", () => {
    initMap();
  });

  function initMap() {
    ymaps.ready(() => {
      const isMobile = window.matchMedia("(max-width: 768px)").matches;

      const iconSize = isMobile ? 42 : 68;

      const mapCenter = isMobile ? [44.997951, 35.257043] : [44.674488, 34.414378];

      const map = new ymaps.Map("map", {
        center: mapCenter,
        zoom: 18,
        controls: [],
      });

      map.behaviors.disable("scrollZoom");
    });
  }
}
