'use strict';
(function () {
  var phoneInput = document.querySelector('#phone');

  var maskPhoneHandler = function (evt) {
    if (!(evt.key === 'ArrowLeft' || evt.key === 'ArrowRight' || evt.key === 'Backspace' || evt.key === 'Tab')) {
      evt.preventDefault();
    }
    var mask = '+7 (111) 111-11-11';
    if (/[0-9\+\ \-\(\)]/.test(evt.key)) {
      var currentString = this.value;
      var currentLength = currentString.length;
      if (/[0-9]/.test(evt.key)) {
        if (mask[currentLength] === '1') {
          this.value = currentString + evt.key;
        } else {
          for (var i = currentLength; i < mask.length; i++) {
            if (mask[i] === '1') {
              this.value = currentString + evt.key;
              break;
            }
            currentString += mask[i];
          }
        }
      }
    }
  };

  window.maskPhone = {
    maskPhoneHandler: maskPhoneHandler,
  };

  phoneInput.addEventListener('keydown', window.maskPhone.maskPhoneHandler);

  function mapInit() {
    var screens = {
      sm: 320,
      md: 768,
      xl: 1024
    };
    var iconSize = {
      sm: [50, 50],
      md: [70, 70],
      xl: [70, 70]
    };
    var iconOffset = {
      sm: [-31, -53],
      md: [-58, -66],
      xl: [-58, -66]
    };
    var mapCenter = {
      sm: [59.938631, 30.323055],
      md: [59.938631, 30.323055],
      xl: [59.938631, 30.319809]
    };
    var mapZoom = {
      sm: 16,
      md: 16,
      xl: 17
    };

    function getScreenSize() {
      var documentWidth = document.documentElement.clientWidth;

      if (documentWidth < screens.md) {
        return 'sm';
      }

      if (documentWidth < screens.xl) {
        return 'md';
      }

      return 'xl';
    }

    var screenSize = getScreenSize();
    var map = new ymaps.Map(document.querySelector('.contacts__map'), {
      center: mapCenter[screenSize],
      zoom: mapZoom[screenSize],
      controls: ['zoomControl']
    });
    map.container.fitToViewport();
    map.behaviors.disable('scrollZoom');

    function createMarker(screenWidth) {
      return new ymaps.Placemark([59.938631, 30.323055], {}, {
        iconLayout: 'default#image',
        iconImageHref: 'img/map-pin.png',
        iconImageSize: iconSize[screenWidth],
        iconImageOffset: iconOffset[screenWidth]
      });
    }

    var marker = createMarker(screenSize);
    map.geoObjects.add(marker);
    map.events.add('sizechange', function (event) {
      var oldWidth = event.get('oldSize')[0];
      var newWidth = event.get('newSize')[0];

      function updateMarker() {
        map.geoObjects.remove(marker);
        marker = createMarker(getScreenSize());
        map.geoObjects.add(marker);
      }

      if (oldWidth < screens.md && newWidth >= screens.md) {
        updateMarker();
      }

      if (oldWidth >= screens.md && newWidth < screens.md) {
        updateMarker();
      }

      if (oldWidth < screens.xl && newWidth >= screens.xl) {
        map.setCenter(mapCenter.xl, mapZoom.xl);
      }

      if (oldWidth >= screens.xl && newWidth < screens.xl) {
        map.setCenter(mapCenter.md, mapZoom.md);
      }
    });
  }

  window.maskPhone = {
    mapInit: mapInit
  };

  ymaps.ready(window.maskPhone.mapInit);
})();
