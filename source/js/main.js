'use strict';

(function () {
  // ------------------ валидация телефона ------------------
  function maskPhone(selector, masked = '+7 (___) ___-__-__') {
    const elems = document.querySelectorAll(selector);

    function mask(event) {
      const keyCode = event.keyCode;
      const template = masked,
      def = template.replace(/\D/g, ''),
        val = this.value.replace(/\D/g, '');
      console.log(template);
      let i = 0,
        newValue = template.replace(/[_\d]/g, function (a) {
          return i < val.length ? val.charAt(i++) || def.charAt(i) : a;
        });
      i = newValue.indexOf('_');
      if (i !== -1) {
        newValue = newValue.slice(0, i);
      }
      let reg = template.substr(0, this.value.length).replace(/_+/g,
        function (a) {
          return '\\d{1,' + a.length + '}';
        }).replace(/[+()]/g, '\\$&');
      reg = new RegExp('^' + reg + '$');
      if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) {
        this.value = newValue;
      }
      if (event.type === 'blur' && this.value.length < 5) {
        this.value = '';
      }

    }

    for (const elem of elems) {
      elem.addEventListener('input', mask);
      elem.addEventListener('focus', mask);
      elem.addEventListener('blur', mask);
    }

  }

  // ------------------ меню ------------------
  var ESCAPE = 'Escape';
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
    if (evt.key === ESCAPE) {
      if (nav.classList.contains('header__nav--open')) {
        document.querySelector('.header__nav').classList.remove('header__nav--open');
        document.querySelector('.header__burger').classList.remove('header__burger--close');
      }
    }
  };

  var closeOutMenuHeander = function (evt) {
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
    maskPhone: maskPhone,
    switchMenuHeandler: switchMenuHeandler,
    hiddenMenuHeandler: hiddenMenuHeandler,
    closeOutMenuHeander: closeOutMenuHeander,
    closeEscMenuHeander: closeEscMenuHeander,
  };

  window.main.maskPhone('#phone');
  window.addEventListener('load', window.main.hiddenMenuHeandler);
  document.addEventListener('click', window.main.closeOutMenuHeander);
  document.addEventListener('keydown', window.main.closeEscMenuHeander);
  burger.addEventListener('click', window.main.switchMenuHeandler);

})();
