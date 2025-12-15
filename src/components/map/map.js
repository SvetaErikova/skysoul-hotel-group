const map_contacts = document.getElementById("map");
if (map_contacts) {
  document.addEventListener("DOMContentLoaded", () => {
    initMap();
  });

  function initMap() {
    ymaps.ready(() => {
      const isMobile = window.matchMedia("(max-width: 768px)").matches;

      const iconSize = isMobile ? 42 : 68;

      const mapCenter = isMobile ? [44.997951, 35.257043] : [44.970661, 35.224936];

      const map = new ymaps.Map("map", {
        center: mapCenter,
        zoom: 13,
        controls: [],
      });

      const markerLayout = ymaps.templateLayoutFactory.createClass(
        `<div class="marker-image"><img src="/assets/img/pin.svg" style="width: ${iconSize}px; height: ${iconSize}px;"></div>`
      );

      const marker = new ymaps.Placemark(
        [44.969145, 35.258812],
        {
          balloonContent: "Hello World!<br>kind and bright",
          hintContent: "Hello World!",
        },
        {
          iconLayout: markerLayout,
          iconOffset: [-iconSize / 2, -iconSize],
        }
      );

      map.geoObjects.add(marker);
      map.behaviors.disable("scrollZoom");
    });
  }
}
