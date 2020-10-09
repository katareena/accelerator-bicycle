'use strict';
(function () {
  var ESCAPE = 27;
  var burger = document.querySelector('.header__burger');
  var nav = document.querySelector('.header__nav');

  var hideMenuHandler = function () {
    document.querySelector('.header__nav').classList.remove('header__nav--open');
    document.querySelector('.header__burger').classList.remove('header__burger--hidden');
  };

  var switchMenuHandler = function () {
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
