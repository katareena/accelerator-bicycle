'use strict';
(function () {
  var phoneInput = document.querySelector('#phone');

  var maskPhoneHeandler = function (evt) {
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
  // ------------------ меню ------------------
  var ESCAPE = 27;
  var burger = document.querySelector('.header__burger');
  var nav = document.querySelector('.header__nav');

  var hiddenMenuHeandler = function () {
    document.querySelector('.header__nav').classList.remove('header__nav--open');
    document.querySelector('.header__burger').classList.remove('header__burger--hidden');
  };

  var switchMenuHeandler = function () {
    document.querySelector('.header__nav').classList.toggle('header__nav--open');
    document.querySelector('.header__burger').classList.toggle('header__burger--close');
  };

  var closeEscMenuHeander = function (evt) {
    if (evt.keyCode === ESCAPE) {
      if (nav.classList.contains('header__nav--open')) {
        document.querySelector('.header__nav').classList.remove('header__nav--open');
        document.querySelector('.header__burger').classList.remove('header__burger--close');
      }
    }
  };

  var closeOutMenuHeander = function (evt) {
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

  window.main = {
    maskPhoneHeandler: maskPhoneHeandler,
    switchMenuHeandler: switchMenuHeandler,
    hiddenMenuHeandler: hiddenMenuHeandler,
    closeOutMenuHeander: closeOutMenuHeander,
    closeEscMenuHeander: closeEscMenuHeander,
  };

  phoneInput.addEventListener('keydown', maskPhoneHeandler);
  window.addEventListener('load', window.main.hiddenMenuHeandler);
  document.addEventListener('click', window.main.closeOutMenuHeander);
  document.addEventListener('keydown', window.main.closeEscMenuHeander);
  burger.addEventListener('click', window.main.switchMenuHeandler);
})();
