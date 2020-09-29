'use strict';

(function () {
// ------------------ яндекс карта ------------------
  // function mapInit() {
  //   var screens = {
  //     sm: 320,
  //     md: 768,
  //     xl: 1024
  //   };
  //   var iconSize = {
  //     sm: [50, 50],
  //     md: [70, 70],
  //     xl: [70, 70]
  //   };
  //   var iconOffset = {
  //     sm: [-31, -53],
  //     md: [-58, -66],
  //     xl: [-58, -66]
  //   };
  //   var mapCenter = {
  //     sm: [59.938631, 30.323055],
  //     md: [59.938631, 30.323055],
  //     xl: [59.938631, 30.319809]
  //   };
  //   var mapZoom = {
  //     sm: 16,
  //     md: 16,
  //     xl: 17
  //   };

  //   function getScreenSize() {
  //     var documentWidth = document.documentElement.clientWidth;

  //     if (documentWidth < screens.md) {
  //       return 'sm';
  //     }

  //     if (documentWidth < screens.xl) {
  //       return 'md';
  //     }

  //     return 'xl';
  //   }

  //   var screenSize = getScreenSize();
  //   var map = new ymaps.Map(document.querySelector('.contacts__map'), {
  //     center: mapCenter[screenSize],
  //     zoom: mapZoom[screenSize],
  //     controls: ['zoomControl']
  //   });
  //   map.container.fitToViewport();
  //   map.behaviors.disable('scrollZoom');

  //   function createMarker(screenWidth) {
  //     return new ymaps.Placemark([59.938631, 30.323055], {}, {
  //       iconLayout: 'default#image',
  //       iconImageHref: 'img/map-pin.png',
  //       iconImageSize: iconSize[screenWidth],
  //       iconImageOffset: iconOffset[screenWidth]
  //     });
  //   }

  //   var marker = createMarker(screenSize);
  //   map.geoObjects.add(marker);
  //   map.events.add('sizechange', function (event) {
  //     var oldWidth = event.get('oldSize')[0];
  //     var newWidth = event.get('newSize')[0];

  //     function updateMarker() {
  //       map.geoObjects.remove(marker);
  //       marker = createMarker(getScreenSize());
  //       map.geoObjects.add(marker);
  //     }

  //     if (oldWidth < screens.md && newWidth >= screens.md) {
  //       updateMarker();
  //     }

  //     if (oldWidth >= screens.md && newWidth < screens.md) {
  //       updateMarker();
  //     }

  //     if (oldWidth < screens.xl && newWidth >= screens.xl) {
  //       map.setCenter(mapCenter.xl, mapZoom.xl);
  //     }

  //     if (oldWidth >= screens.xl && newWidth < screens.xl) {
  //       map.setCenter(mapCenter.md, mapZoom.md);
  //     }
  //   });
  // }

  // ------------------ валидация телефона ------------------
  // function maskPhone(selector, masked = '+7 (___) ___-__-__') {
  //   const elems = document.querySelectorAll(selector);

  //   function mask(event) {
  //     const keyCode = event.keyCode;
  //     const template = masked,
  //     def = template.replace(/\D/g, ""),
  //       val = this.value.replace(/\D/g, "");
  //     console.log(template);
  //     let i = 0,
  //       newValue = template.replace(/[_\d]/g, function (a) {
  //         return i < val.length ? val.charAt(i++) || def.charAt(i) : a;
  //       });
  //     i = newValue.indexOf("_");
  //     if (i !== -1) {
  //       newValue = newValue.slice(0, i);
  //     }
  //     let reg = template.substr(0, this.value.length).replace(/_+/g,
  //       function (a) {
  //         return "\\d{1," + a.length + "}";
  //       }).replace(/[+()]/g, "\\$&");
  //     reg = new RegExp("^" + reg + "$");
  //     if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) {
  //       this.value = newValue;
  //     }
  //     if (event.type === "blur" && this.value.length < 5) {
  //       this.value = "";
  //     }

  //   }

  //   for (const elem of elems) {
  //     elem.addEventListener("input", mask);
  //     elem.addEventListener("focus", mask);
  //     elem.addEventListener("blur", mask);
  //   }

  // }

  // window.main = {
  //   maskPhone: maskPhone,
  //   mapInit: mapInit
  // };

  // window.main.maskPhone('#phone');
  // ymaps.ready(window.main.mapInit);

})();
