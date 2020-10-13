'use strict';
(function () {
  var ESCAPE = 27;
  var burger = document.querySelector('.header__burger');
  var nav = document.querySelector('.header__nav');
  var navOpen = document.querySelector('.header__nav--open');

  var preSetMenu = function () {
    navOpen.style.position = 'absolute';
    navOpen.style.margin = '0';
  }

  var hideMenuHandler = function () {
    preSetMenu();
    document.querySelector('.header__nav').classList.remove('header__nav--open');
    document.querySelector('.header__burger').classList.remove('header__burger--hidden');
  };

  var switchMenuHandler = function () {
    preSetMenu();
    document.querySelector('.header__nav').classList.toggle('header__nav--open');
    document.querySelector('.header__burger').classList.toggle('header__burger--close');
  };

  var closeEscMenuHandler = function (evt) {
    if (evt.keyCode === ESCAPE) {
      if (nav.classList.contains('header__nav--open')) {
        document.querySelector('.header__nav').classList.remove('header__nav--open');
        document.querySelector('.header__burger').classList.remove('header__burger--close');
      }
    }
  };

  var closeOutMenuHandler = function (evt) {
    window.vendor.changeMatchesForIE();
    if (!evt.target.matches('.header__burger')) {
      var dropdowns = document.getElementsByClassName('header__nav');
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('header__nav--open')) {
          openDropdown.classList.remove('header__nav--open');
          document.querySelector('.header__burger').classList.toggle('header__burger--close');
        }
      }
    }
  };

  window.headerMenu = {
    switchMenuHandler: switchMenuHandler,
    hideMenuHandler: hideMenuHandler,
    closeOutMenuHandler: closeOutMenuHandler,
    closeEscMenuHandler: closeEscMenuHandler,
  };

  window.addEventListener('load', window.headerMenu.hideMenuHandler);
  document.addEventListener('click', window.headerMenu.closeOutMenuHandler);
  document.addEventListener('keydown', window.headerMenu.closeEscMenuHandler);
  burger.addEventListener('click', window.headerMenu.switchMenuHandler);
})();

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
    maskPhoneHandler: maskPhoneHandler
  };

  phoneInput.addEventListener('keydown', window.maskPhone.maskPhoneHandler);
})();
