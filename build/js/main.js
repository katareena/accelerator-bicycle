'use strict';

// (function () {
// ------------------ карта ------------------
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

ymaps.ready(mapInit);

// ------------------ валидация телефона ------------------
var maskedInputs = document.querySelectorAll('[data-mask]');

for (var index = 0; index < maskedInputs.length; index++) {
  maskedInputs[index].addEventListener('input', validationPhone);
}

function validationPhone() {
  var input = this;
  var mask = input.dataset.mask;
  var value = input.value;
  var literalPattern = /[0\*]/;
  var numberPattern = /[0-9]/;
  var newValue = '';
  try {
    var maskLength = mask.length;
    var valueIndex = 0;
    var maskIndex = 0;

    for (; maskIndex < maskLength;) {
      if (maskIndex >= value.length) break;

      if (mask[maskIndex] === '0' && value[valueIndex].match(numberPattern) === null) break;

      // Found a literal
      while (mask[maskIndex].match(literalPattern) === null) {
        if (value[valueIndex] === mask[maskIndex]) break;
        newValue += mask[maskIndex++];
      }
      newValue += value[valueIndex++];
      maskIndex++;
    }

    input.value = newValue;
  } catch (e) {
    console.log(e);
  }
}
