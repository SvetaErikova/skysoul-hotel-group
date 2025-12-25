const map_contacts = document.getElementById("map");
if (map_contacts) {
  document.addEventListener("DOMContentLoaded", () => {
    initMap();
  });

  function initMap() {
    ymaps.ready(() => {
      const isMobile = window.matchMedia("(max-width: 768px)").matches;

      const mapCenter = isMobile ? [44.974710, 34.076783] : [44.970917, 34.072790];


      const map = new ymaps.Map("map", {
        center: mapCenter,
        zoom: 16,
        controls: [],
      });

      map.behaviors.disable(['drag', 'scrollZoom', 'dblClickZoom',]);

      var myGeoObject = new ymaps.GeoObject({
        geometry: {
          type: "Point",
          coordinates: [44.971134, 34.076997]
        },
        // Добавляем свойства для тултипа
        properties: {
          hintContent: 'Центральный офис',
          balloonContent: 'Центральный офис'
        }
      }, {
        iconLayout: 'default#image',
        iconImageHref: '/assets/img/favicon.svg',
        iconImageSize: [60, 60],
        iconImageOffset: [-30, -30]
      });

      map.geoObjects.add(myGeoObject);
    });
  }
}
