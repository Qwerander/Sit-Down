"use strict";

var _Swiper, _Swiper2;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
// main.js
var ratingShowMore = document.getElementById('rating-show-more');
var modalAnswer = document.getElementById('modal-answer');
var modalAnswerClose = document.getElementById('modal-answer-close');
var phoneInput = document.getElementById('feedback-tel');
var nameInput = document.getElementById('feedback-name');
var mailInput = document.getElementById('feedback-mail');
var burger = document.getElementById('burger');
var body = document.querySelector('body');
var headerCenterLink = document.querySelectorAll('.header-center__link');
var headerTopLink = document.querySelectorAll('.header-top__link');
var header = document.getElementById('header');
var headerLeft = document.getElementById('header-left');
var headerBottomRight = document.getElementById('header-bottom-right');
var headerContainerTop = document.getElementById('header-container-top');
var headerContainerBottom = document.getElementById('header-container-bottom');
var headerContainer1300 = document.getElementById('container-1300');
var headerContainerCenter = document.getElementById('header-container-center');
var headerCenterRight = document.getElementById('header-center-right');
var headerTopRight = document.getElementById('header-top-right');
var headderCenterLeft = document.getElementById('header-center-left');
var headerTop = document.getElementById('header-top');
var specialContainer = document.getElementById('special-container');
var specialTop = document.getElementById('special-top');
var specialBtns = document.getElementById('special-btns');
var usefulContainer = document.getElementById('useful-container');
var usefulTop = document.getElementById('useful-top');
var usefulBtns = document.getElementById('useful-btns');
function openHeaderTopSelect() {
  var headerSelectTop = document.getElementById('header-select-top');
  var headerTopList = document.getElementById('header-top-list');
  headerSelectTop.addEventListener('click', function () {
    headerSelectTop.classList.toggle('select-top--active');
    headerTopList.classList.toggle('select-top--active');
    headerTopList.addEventListener('mouseleave', function () {
      headerSelectTop.classList.remove('select-top--active');
      headerTopList.classList.remove('select-top--active');
    });
    document.querySelectorAll('.select-top__item').forEach(function (e) {
      e.addEventListener('click', function () {
        headerSelectTop.textContent = e.textContent;
        headerSelectTop.classList.remove('select-top--active');
        headerTopList.classList.remove('select-top--active');
        document.querySelectorAll('.select-top__item').forEach(function (e) {
          e.classList.remove('select-top__none');
        });
        if (e.textContent === headerSelectTop.textContent) {
          e.classList.add('select-top__none');
        }
      });
    });
  });
}
function openHeaderBottomSelect() {
  var headerSelectBottom = document.getElementById('header-select-bottom');
  var headerBottomList = document.getElementById('header-bottom-list');
  headerSelectBottom.addEventListener('click', function () {
    headerSelectBottom.classList.toggle('select-bottom--active');
    headerBottomList.classList.toggle('select-bottom--active');
    headerBottomList.addEventListener('mouseleave', function () {
      headerSelectBottom.classList.remove('select-bottom--active');
      headerBottomList.classList.remove('select-bottom--active');
    });
    document.querySelectorAll('.select-bottom__item').forEach(function (e) {
      e.addEventListener('click', function () {
        headerSelectBottom.textContent = e.textContent;
        headerSelectBottom.classList.remove('select-bottom--active');
        headerBottomList.classList.remove('select-bottom--active');
        document.querySelectorAll('.select-bottom__item').forEach(function (e) {
          e.classList.remove('select-bottom__none');
        });
        if (e.textContent === headerSelectBottom.textContent) {
          e.classList.add('select-bottom__none');
        }
      });
    });
  });
}
openHeaderTopSelect();
openHeaderBottomSelect();

// Слайдер
new Swiper('.hero__swiper', {
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 0,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true
  },
  autoplay: {
    delay: 4000
  }
});
var swiperSpecial = new Swiper('.special__swiper', (_Swiper = {
  slidesPerView: 3,
  slidesPerGroup: 3,
  spaceBetween: 30
}, _defineProperty(_Swiper, "slidesPerView", 'auto'), _defineProperty(_Swiper, "navigation", {
  nextEl: '.js-special-next',
  prevEl: '.js-special-prev'
}), _defineProperty(_Swiper, "breakpoints", {
  320: {
    slidesPerView: 1,
    slidesPerGroup: 1
  },
  768: {
    slidesPerView: 2,
    slidesPerGroup: 2
  },
  1024: _defineProperty({
    slidesPerView: 3
  }, "slidesPerView", 'auto')
}), _Swiper));
var swiperUseful = new Swiper('.useful__swiper', (_Swiper2 = {
  slidesPerView: 2,
  slidesPerGroup: 1,
  spaceBetween: 32
}, _defineProperty(_Swiper2, "slidesPerView", 'auto'), _defineProperty(_Swiper2, "navigation", {
  nextEl: '.js-useful-next',
  prevEl: '.js-useful-prev'
}), _defineProperty(_Swiper2, "breakpoints", {
  1: {
    slidesPerView: 1
    // slidesPerGroup: 1,
    // spaceBetween: 32,
  },

  532: {
    slidesPerView: 2,
    // slidesPerGroup: 2,
    spaceBetween: 16
  },
  768: {
    slidesPerView: 2,
    // slidesPerGroup: 2,
    spaceBetween: 32
  },
  890: {
    slidesPerView: 3,
    spaceBetween: 16
  },
  1023: {
    slidesPerView: 3,
    spaceBetween: 32
  },
  1301: {
    slidesPerView: 2,
    spaceBetween: 32
  }
}), _Swiper2));

// элементы для отрисовки на медиа запросах

function media1300() {
  if (window.matchMedia('(max-width: 1300px)').matches) {
    header.prepend(headerLeft);
    headerContainer1300.classList.add('container');
    headerContainerTop.append(headerBottomRight);
    document.querySelectorAll('.rating__card').forEach(function (e) {
      e.classList.remove('rating__card--active');
    });
    var i = 0;
    document.querySelectorAll('.rating__card').forEach(function (e) {
      if (i < 6) {
        e.classList.add('rating__card--active');
        i++;
      } else {
        e.classList.remove('rating__card--active');
      }
    });
    if (ratingShowMore) {
      ratingShowMore.classList.remove('rating__more--nomore');
    }
  } else {
    headerContainer1300.classList.remove('container');
    headerContainerTop.prepend(headerLeft);
    headerContainerBottom.append(headerBottomRight);
    document.querySelectorAll('.rating__card').forEach(function (e) {
      e.classList.remove('rating__card--active');
    });
    var _i = 0;
    document.querySelectorAll('.rating__card').forEach(function (e) {
      if (_i < 8) {
        e.classList.add('rating__card--active');
        _i++;
      } else {
        e.classList.remove('rating__card--active');
      }
    });
    if (ratingShowMore) {
      ratingShowMore.classList.remove('rating__more--nomore');
    }
  }
  ;
}
;
function media1023() {
  if (window.matchMedia('(max-width: 1023px)').matches) {
    headerContainerCenter.append(headerBottomRight);
  } else if (window.matchMedia('(max-width: 1300px)').matches) {
    headerContainerTop.append(headerBottomRight);
  }
  ;
}
;
function media767() {
  if (window.matchMedia('(max-width: 767px)').matches) {
    headerCenterRight.append(headerTopRight);
    headerContainerTop.append(headderCenterLeft);
    header.prepend(headerLeft);
    header.prepend(headerTop);
    specialContainer.append(specialBtns);
    usefulContainer.append(usefulBtns);
  } else if (window.matchMedia('(max-width: 1023px)').matches) {
    headerContainerTop.append(headerTopRight);
    headerContainerCenter.append(headderCenterLeft, headerCenterRight, headerBottomRight);
    header.prepend(headerLeft);
    specialTop.append(specialBtns);
    usefulTop.append(usefulBtns);
  }
  ;
}
;

// отрисовка на медиа запросах
media1300();
media1023();
media767();
window.matchMedia('(max-width: 767px)').addEventListener('change', media767);
window.matchMedia('(max-width: 1023px)').addEventListener('change', media1023);
window.matchMedia('(max-width: 1300px)').addEventListener('change', media1300);

// открвтие бургер меню

burger.addEventListener('click', function () {
  burger.classList.toggle('burger--active');
  body.classList.toggle('lock');
});
headerCenterLink.forEach(function (element) {
  element.addEventListener('click', function () {
    burger.classList.remove('burger--active');
    body.classList.remove('lock');
  });
});
headerTopLink.forEach(function (element) {
  element.addEventListener('click', function () {
    burger.classList.remove('burger--active');
    body.classList.remove('lock');
  });
});
if (phoneInput) {
  var im = new Inputmask("+7 (999)-999-99-99");
  im.mask(phoneInput);
}
phoneInput.addEventListener('keyup', function () {
  var phone = phoneInput.inputmask.unmaskedvalue();
  if (Number(phone) && phone.length === 10) {
    phoneInput.classList.add('js-validate-success-field');
  } else {
    phoneInput.classList.remove('js-validate-success-field');
  }
});
nameInput.addEventListener('keyup', function () {
  if (nameInput.value.length > 1 && nameInput.value.length < 21) {
    nameInput.classList.add('js-validate-success-field');
  } else {
    nameInput.classList.remove('js-validate-success-field');
  }
});
mailInput.addEventListener('keyup', function () {
  if (mailInput.value.includes('@') && mailInput.value.includes('.')) {
    mailInput.classList.add('js-validate-success-field');
  } else {
    mailInput.classList.remove('js-validate-success-field');
  }
});
var validateFeedback = new JustValidate(".feedback__form", {
  rules: {
    name: {
      required: true,
      minLength: 2,
      maxLength: 20
    },
    tel: {
      required: true,
      "function": function _function() {
        var phone = phoneInput.inputmask.unmaskedvalue();
        return Number(phone) && phone.length === 10;
      }
    },
    mail: {
      required: true,
      email: true
    },
    checkbox: {
      required: true
    }
  },
  focusWrongField: true,
  messages: {
    name: {
      required: '"Имя" обязательно для заполнения',
      minLength: '"Имя" введено некорректно, минимум 2 знака',
      maxLength: '"Имя" введено некорректно, максимум 20 знаков'
    },
    tel: {
      required: '"Телефон" обязательно для заполнения',
      "function": 'Заполните "Телефон"'
    },
    mail: {
      required: '"Email" обязательно для заполнения',
      email: 'Недопустимый формат "Email"'
    },
    checkbox: {
      required: 'Необходимо принять "Пользовательское соглашение"'
    }
  },
  colorWrong: '#FF6972'
});
var feedbackFormbtn = document.getElementById('feedback-form-submit');
function submitData(event) {
  if (phoneInput.classList.contains('js-validate-success-field') && mailInput.classList.contains('js-validate-success-field') && nameInput.classList.contains('js-validate-success-field')) {
    event.preventDefault();
    modalAnswer.classList.add('modal-answer--active');
    nameInput.value = '';
    mailInput.value = '';
    phoneInput.value = '';
    phoneInput.classList.remove('js-validate-success-field');
    mailInput.classList.remove('js-validate-success-field');
    nameInput.classList.remove('js-validate-success-field');
    console.log(validateFeedback.isValidationSuccess);
  }
  return feedbackFormbtn.removeEventListener('click', submitData);
}
feedbackFormbtn.addEventListener('click', function (event) {
  submitData(event);
});
modalAnswerClose.addEventListener('click', function (e) {
  modalAnswer.classList.remove('modal-answer--active');
});
modalAnswer.addEventListener('click', function (e) {
  if (e.target == modalAnswer) {
    modalAnswer.classList.remove('modal-answer--active');
  }
});
ratingShowMore.addEventListener('click', function () {
  document.querySelectorAll('.rating__card').forEach(function (e) {
    e.classList.add('rating__card--active');
  });
  ratingShowMore.classList.add('rating__more--nomore');
});

// end main.js
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm5hbWVzIjpbInJhdGluZ1Nob3dNb3JlIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIm1vZGFsQW5zd2VyIiwibW9kYWxBbnN3ZXJDbG9zZSIsInBob25lSW5wdXQiLCJuYW1lSW5wdXQiLCJtYWlsSW5wdXQiLCJidXJnZXIiLCJib2R5IiwicXVlcnlTZWxlY3RvciIsImhlYWRlckNlbnRlckxpbmsiLCJxdWVyeVNlbGVjdG9yQWxsIiwiaGVhZGVyVG9wTGluayIsImhlYWRlciIsImhlYWRlckxlZnQiLCJoZWFkZXJCb3R0b21SaWdodCIsImhlYWRlckNvbnRhaW5lclRvcCIsImhlYWRlckNvbnRhaW5lckJvdHRvbSIsImhlYWRlckNvbnRhaW5lcjEzMDAiLCJoZWFkZXJDb250YWluZXJDZW50ZXIiLCJoZWFkZXJDZW50ZXJSaWdodCIsImhlYWRlclRvcFJpZ2h0IiwiaGVhZGRlckNlbnRlckxlZnQiLCJoZWFkZXJUb3AiLCJzcGVjaWFsQ29udGFpbmVyIiwic3BlY2lhbFRvcCIsInNwZWNpYWxCdG5zIiwidXNlZnVsQ29udGFpbmVyIiwidXNlZnVsVG9wIiwidXNlZnVsQnRucyIsIm9wZW5IZWFkZXJUb3BTZWxlY3QiLCJoZWFkZXJTZWxlY3RUb3AiLCJoZWFkZXJUb3BMaXN0IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNsYXNzTGlzdCIsInRvZ2dsZSIsInJlbW92ZSIsImZvckVhY2giLCJlIiwidGV4dENvbnRlbnQiLCJhZGQiLCJvcGVuSGVhZGVyQm90dG9tU2VsZWN0IiwiaGVhZGVyU2VsZWN0Qm90dG9tIiwiaGVhZGVyQm90dG9tTGlzdCIsIlN3aXBlciIsInNsaWRlc1BlclZpZXciLCJzbGlkZXNQZXJHcm91cCIsInNwYWNlQmV0d2VlbiIsImxvb3AiLCJwYWdpbmF0aW9uIiwiZWwiLCJ0eXBlIiwiY2xpY2thYmxlIiwiYXV0b3BsYXkiLCJkZWxheSIsInN3aXBlclNwZWNpYWwiLCJuZXh0RWwiLCJwcmV2RWwiLCJzd2lwZXJVc2VmdWwiLCJtZWRpYTEzMDAiLCJ3aW5kb3ciLCJtYXRjaE1lZGlhIiwibWF0Y2hlcyIsInByZXBlbmQiLCJhcHBlbmQiLCJpIiwibWVkaWExMDIzIiwibWVkaWE3NjciLCJlbGVtZW50IiwiaW0iLCJJbnB1dG1hc2siLCJtYXNrIiwicGhvbmUiLCJpbnB1dG1hc2siLCJ1bm1hc2tlZHZhbHVlIiwiTnVtYmVyIiwibGVuZ3RoIiwidmFsdWUiLCJpbmNsdWRlcyIsInZhbGlkYXRlRmVlZGJhY2siLCJKdXN0VmFsaWRhdGUiLCJydWxlcyIsIm5hbWUiLCJyZXF1aXJlZCIsIm1pbkxlbmd0aCIsIm1heExlbmd0aCIsInRlbCIsIm1haWwiLCJlbWFpbCIsImNoZWNrYm94IiwiZm9jdXNXcm9uZ0ZpZWxkIiwibWVzc2FnZXMiLCJjb2xvcldyb25nIiwiZmVlZGJhY2tGb3JtYnRuIiwic3VibWl0RGF0YSIsImV2ZW50IiwiY29udGFpbnMiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnNvbGUiLCJsb2ciLCJpc1ZhbGlkYXRpb25TdWNjZXNzIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInRhcmdldCJdLCJzb3VyY2VzIjpbIm1haW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG4vLyBtYWluLmpzXHJcbmNvbnN0IHJhdGluZ1Nob3dNb3JlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JhdGluZy1zaG93LW1vcmUnKVxyXG5jb25zdCBtb2RhbEFuc3dlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb2RhbC1hbnN3ZXInKVxyXG5jb25zdCBtb2RhbEFuc3dlckNsb3NlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vZGFsLWFuc3dlci1jbG9zZScpXHJcbmNvbnN0IHBob25lSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmVlZGJhY2stdGVsJyk7XHJcbmNvbnN0IG5hbWVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmZWVkYmFjay1uYW1lJyk7XHJcbmNvbnN0IG1haWxJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmZWVkYmFjay1tYWlsJyk7XHJcbmNvbnN0IGJ1cmdlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidXJnZXInKTtcclxuY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcclxuY29uc3QgaGVhZGVyQ2VudGVyTGluayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5oZWFkZXItY2VudGVyX19saW5rJyk7XHJcbmNvbnN0IGhlYWRlclRvcExpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaGVhZGVyLXRvcF9fbGluaycpO1xyXG5jb25zdCBoZWFkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGVhZGVyJylcclxuY29uc3QgaGVhZGVyTGVmdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoZWFkZXItbGVmdCcpXHJcbmNvbnN0IGhlYWRlckJvdHRvbVJpZ2h0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hlYWRlci1ib3R0b20tcmlnaHQnKVxyXG5jb25zdCBoZWFkZXJDb250YWluZXJUb3AgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGVhZGVyLWNvbnRhaW5lci10b3AnKVxyXG5jb25zdCBoZWFkZXJDb250YWluZXJCb3R0b20gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGVhZGVyLWNvbnRhaW5lci1ib3R0b20nKVxyXG5jb25zdCBoZWFkZXJDb250YWluZXIxMzAwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhaW5lci0xMzAwJylcclxuXHJcbmNvbnN0IGhlYWRlckNvbnRhaW5lckNlbnRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoZWFkZXItY29udGFpbmVyLWNlbnRlcicpXHJcblxyXG5jb25zdCBoZWFkZXJDZW50ZXJSaWdodCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoZWFkZXItY2VudGVyLXJpZ2h0JylcclxuY29uc3QgaGVhZGVyVG9wUmlnaHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGVhZGVyLXRvcC1yaWdodCcpXHJcbmNvbnN0IGhlYWRkZXJDZW50ZXJMZWZ0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hlYWRlci1jZW50ZXItbGVmdCcpXHJcbmNvbnN0IGhlYWRlclRvcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoZWFkZXItdG9wJylcclxuXHJcbmNvbnN0IHNwZWNpYWxDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3BlY2lhbC1jb250YWluZXInKVxyXG5jb25zdCBzcGVjaWFsVG9wID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NwZWNpYWwtdG9wJylcclxuY29uc3Qgc3BlY2lhbEJ0bnMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3BlY2lhbC1idG5zJylcclxuXHJcbmNvbnN0IHVzZWZ1bENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1c2VmdWwtY29udGFpbmVyJylcclxuY29uc3QgdXNlZnVsVG9wID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VzZWZ1bC10b3AnKVxyXG5jb25zdCB1c2VmdWxCdG5zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VzZWZ1bC1idG5zJylcclxuXHJcbmZ1bmN0aW9uIG9wZW5IZWFkZXJUb3BTZWxlY3QoKSB7XHJcbiAgY29uc3QgaGVhZGVyU2VsZWN0VG9wID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hlYWRlci1zZWxlY3QtdG9wJylcclxuICBjb25zdCBoZWFkZXJUb3BMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hlYWRlci10b3AtbGlzdCcpXHJcblxyXG4gIGhlYWRlclNlbGVjdFRvcC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGhlYWRlclNlbGVjdFRvcC5jbGFzc0xpc3QudG9nZ2xlKCdzZWxlY3QtdG9wLS1hY3RpdmUnKVxyXG4gICAgaGVhZGVyVG9wTGlzdC5jbGFzc0xpc3QudG9nZ2xlKCdzZWxlY3QtdG9wLS1hY3RpdmUnKVxyXG5cclxuICAgIGhlYWRlclRvcExpc3QuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsICgpID0+IHtcclxuICAgICAgaGVhZGVyU2VsZWN0VG9wLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdC10b3AtLWFjdGl2ZScpXHJcbiAgICAgIGhlYWRlclRvcExpc3QuY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0LXRvcC0tYWN0aXZlJylcclxuICAgIH0pXHJcblxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNlbGVjdC10b3BfX2l0ZW0nKS5mb3JFYWNoKGUgPT4ge1xyXG4gICAgICBlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIGhlYWRlclNlbGVjdFRvcC50ZXh0Q29udGVudCA9IGUudGV4dENvbnRlbnRcclxuICAgICAgICBoZWFkZXJTZWxlY3RUb3AuY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0LXRvcC0tYWN0aXZlJylcclxuICAgICAgICBoZWFkZXJUb3BMaXN0LmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdC10b3AtLWFjdGl2ZScpXHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNlbGVjdC10b3BfX2l0ZW0nKS5mb3JFYWNoKGUgPT4ge1xyXG4gICAgICAgICAgZS5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3QtdG9wX19ub25lJylcclxuICAgICAgICB9KVxyXG4gICAgICAgIGlmIChlLnRleHRDb250ZW50ID09PSBoZWFkZXJTZWxlY3RUb3AudGV4dENvbnRlbnQpIHtcclxuICAgICAgICAgIGUuY2xhc3NMaXN0LmFkZCgnc2VsZWN0LXRvcF9fbm9uZScpXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgfSlcclxuICB9KVxyXG59XHJcblxyXG5mdW5jdGlvbiBvcGVuSGVhZGVyQm90dG9tU2VsZWN0KCkge1xyXG4gIGNvbnN0IGhlYWRlclNlbGVjdEJvdHRvbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoZWFkZXItc2VsZWN0LWJvdHRvbScpXHJcbiAgY29uc3QgaGVhZGVyQm90dG9tTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoZWFkZXItYm90dG9tLWxpc3QnKVxyXG5cclxuICBoZWFkZXJTZWxlY3RCb3R0b20uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBoZWFkZXJTZWxlY3RCb3R0b20uY2xhc3NMaXN0LnRvZ2dsZSgnc2VsZWN0LWJvdHRvbS0tYWN0aXZlJylcclxuICAgIGhlYWRlckJvdHRvbUxpc3QuY2xhc3NMaXN0LnRvZ2dsZSgnc2VsZWN0LWJvdHRvbS0tYWN0aXZlJylcclxuXHJcbiAgICBoZWFkZXJCb3R0b21MaXN0LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCAoKSA9PiB7XHJcbiAgICAgIGhlYWRlclNlbGVjdEJvdHRvbS5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3QtYm90dG9tLS1hY3RpdmUnKVxyXG4gICAgICBoZWFkZXJCb3R0b21MaXN0LmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdC1ib3R0b20tLWFjdGl2ZScpXHJcbiAgICB9KVxyXG5cclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zZWxlY3QtYm90dG9tX19pdGVtJykuZm9yRWFjaChlID0+IHtcclxuICAgICAgZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBoZWFkZXJTZWxlY3RCb3R0b20udGV4dENvbnRlbnQgPSBlLnRleHRDb250ZW50XHJcbiAgICAgICAgaGVhZGVyU2VsZWN0Qm90dG9tLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdC1ib3R0b20tLWFjdGl2ZScpXHJcbiAgICAgICAgaGVhZGVyQm90dG9tTGlzdC5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3QtYm90dG9tLS1hY3RpdmUnKVxyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zZWxlY3QtYm90dG9tX19pdGVtJykuZm9yRWFjaChlID0+IHtcclxuICAgICAgICAgIGUuY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0LWJvdHRvbV9fbm9uZScpXHJcbiAgICAgICAgfSlcclxuICAgICAgICBpZiAoZS50ZXh0Q29udGVudCA9PT0gaGVhZGVyU2VsZWN0Qm90dG9tLnRleHRDb250ZW50KSB7XHJcbiAgICAgICAgICBlLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdC1ib3R0b21fX25vbmUnKVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH0pXHJcbiAgfSlcclxufVxyXG5cclxub3BlbkhlYWRlclRvcFNlbGVjdCgpXHJcbm9wZW5IZWFkZXJCb3R0b21TZWxlY3QoKVxyXG5cclxuLy8g0KHQu9Cw0LnQtNC10YBcclxubmV3IFN3aXBlcignLmhlcm9fX3N3aXBlcicsIHtcclxuICBzbGlkZXNQZXJWaWV3OiAxLFxyXG4gIHNsaWRlc1Blckdyb3VwOiAxLFxyXG4gIHNwYWNlQmV0d2VlbjogMCxcclxuICBsb29wOiB0cnVlLFxyXG4gIHBhZ2luYXRpb246IHtcclxuICAgIGVsOiBcIi5zd2lwZXItcGFnaW5hdGlvblwiLFxyXG4gICAgdHlwZTogXCJidWxsZXRzXCIsXHJcbiAgICBjbGlja2FibGU6IHRydWUsXHJcbiAgfSxcclxuXHJcbiAgYXV0b3BsYXk6IHtcclxuICAgIGRlbGF5OiA0MDAwLFxyXG4gIH0sXHJcblxyXG59KTtcclxuXHJcbmNvbnN0IHN3aXBlclNwZWNpYWwgPSBuZXcgU3dpcGVyKCcuc3BlY2lhbF9fc3dpcGVyJywge1xyXG4gIHNsaWRlc1BlclZpZXc6IDMsXHJcbiAgc2xpZGVzUGVyR3JvdXA6IDMsXHJcbiAgc3BhY2VCZXR3ZWVuOiAzMCxcclxuICBzbGlkZXNQZXJWaWV3OiAnYXV0bycsXHJcbiAgbmF2aWdhdGlvbjoge1xyXG4gICAgbmV4dEVsOiAnLmpzLXNwZWNpYWwtbmV4dCcsXHJcbiAgICBwcmV2RWw6ICcuanMtc3BlY2lhbC1wcmV2JyxcclxuICB9LFxyXG4gIGJyZWFrcG9pbnRzOiB7XHJcbiAgICAzMjA6IHtcclxuICAgICAgc2xpZGVzUGVyVmlldzogMSxcclxuICAgICAgc2xpZGVzUGVyR3JvdXA6IDEsXHJcbiAgICB9LFxyXG5cclxuICAgIDc2ODoge1xyXG4gICAgICBzbGlkZXNQZXJWaWV3OiAyLFxyXG4gICAgICBzbGlkZXNQZXJHcm91cDogMixcclxuICAgIH0sXHJcblxyXG4gICAgMTAyNDoge1xyXG4gICAgICBzbGlkZXNQZXJWaWV3OiAzLFxyXG4gICAgICBzbGlkZXNQZXJWaWV3OiAnYXV0bycsXHJcbiAgICB9LFxyXG5cclxuICB9XHJcblxyXG59KTtcclxuXHJcblxyXG5jb25zdCBzd2lwZXJVc2VmdWwgPSBuZXcgU3dpcGVyKCcudXNlZnVsX19zd2lwZXInLCB7XHJcbiAgc2xpZGVzUGVyVmlldzogMixcclxuICBzbGlkZXNQZXJHcm91cDogMSxcclxuICBzcGFjZUJldHdlZW46IDMyLFxyXG4gIHNsaWRlc1BlclZpZXc6ICdhdXRvJyxcclxuICBuYXZpZ2F0aW9uOiB7XHJcbiAgICBuZXh0RWw6ICcuanMtdXNlZnVsLW5leHQnLFxyXG4gICAgcHJldkVsOiAnLmpzLXVzZWZ1bC1wcmV2JyxcclxuICB9LFxyXG4gIGJyZWFrcG9pbnRzOiB7XHJcbiAgICAxOiB7XHJcbiAgICAgIHNsaWRlc1BlclZpZXc6IDEsXHJcbiAgICAgIC8vIHNsaWRlc1Blckdyb3VwOiAxLFxyXG4gICAgICAvLyBzcGFjZUJldHdlZW46IDMyLFxyXG4gICAgfSxcclxuXHJcbiAgICA1MzI6IHtcclxuICAgICAgc2xpZGVzUGVyVmlldzogMixcclxuICAgICAgLy8gc2xpZGVzUGVyR3JvdXA6IDIsXHJcbiAgICAgIHNwYWNlQmV0d2VlbjogMTYsXHJcbiAgICB9LFxyXG5cclxuICAgIDc2ODoge1xyXG4gICAgICBzbGlkZXNQZXJWaWV3OiAyLFxyXG4gICAgICAvLyBzbGlkZXNQZXJHcm91cDogMixcclxuICAgICAgc3BhY2VCZXR3ZWVuOiAzMixcclxuICAgIH0sXHJcbiAgICBcclxuICAgIDg5MDoge1xyXG4gICAgICBzbGlkZXNQZXJWaWV3OiAzLFxyXG4gICAgICBzcGFjZUJldHdlZW46IDE2LFxyXG4gICAgfSxcclxuICAgIFxyXG4gICAgMTAyMzoge1xyXG4gICAgICBzbGlkZXNQZXJWaWV3OiAzLFxyXG4gICAgICBzcGFjZUJldHdlZW46IDMyLFxyXG4gICAgfSxcclxuXHJcbiAgICAxMzAxOiB7XHJcbiAgICAgIHNsaWRlc1BlclZpZXc6IDIsXHJcbiAgICAgIHNwYWNlQmV0d2VlbjogMzIsXHJcbiAgICB9LFxyXG5cclxuICB9XHJcblxyXG59KTtcclxuXHJcblxyXG4vLyDRjdC70LXQvNC10L3RgtGLINC00LvRjyDQvtGC0YDQuNGB0L7QstC60Lgg0L3QsCDQvNC10LTQuNCwINC30LDQv9GA0L7RgdCw0YVcclxuXHJcblxyXG5mdW5jdGlvbiBtZWRpYTEzMDAoKSB7XHJcbiAgaWYgKHdpbmRvdy5tYXRjaE1lZGlhKCcobWF4LXdpZHRoOiAxMzAwcHgpJykubWF0Y2hlcykge1xyXG4gICAgaGVhZGVyLnByZXBlbmQoaGVhZGVyTGVmdCk7XHJcbiAgICBoZWFkZXJDb250YWluZXIxMzAwLmNsYXNzTGlzdC5hZGQoJ2NvbnRhaW5lcicpXHJcbiAgICBoZWFkZXJDb250YWluZXJUb3AuYXBwZW5kKGhlYWRlckJvdHRvbVJpZ2h0KVxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJhdGluZ19fY2FyZCcpLmZvckVhY2goZSA9PiB7XHJcbiAgICAgIGUuY2xhc3NMaXN0LnJlbW92ZSgncmF0aW5nX19jYXJkLS1hY3RpdmUnKVxyXG4gICAgfSlcclxuICAgIGxldCBpID0gMFxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJhdGluZ19fY2FyZCcpLmZvckVhY2goZSA9PiB7XHJcbiAgICAgIGlmIChpIDwgNikge1xyXG4gICAgICAgIGUuY2xhc3NMaXN0LmFkZCgncmF0aW5nX19jYXJkLS1hY3RpdmUnKVxyXG4gICAgICAgIGkrK1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGUuY2xhc3NMaXN0LnJlbW92ZSgncmF0aW5nX19jYXJkLS1hY3RpdmUnKVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gICAgaWYgKHJhdGluZ1Nob3dNb3JlKSB7XHJcbiAgICAgIHJhdGluZ1Nob3dNb3JlLmNsYXNzTGlzdC5yZW1vdmUoJ3JhdGluZ19fbW9yZS0tbm9tb3JlJylcclxuICAgIH1cclxuICB9IGVsc2Uge1xyXG4gICAgaGVhZGVyQ29udGFpbmVyMTMwMC5jbGFzc0xpc3QucmVtb3ZlKCdjb250YWluZXInKVxyXG4gICAgaGVhZGVyQ29udGFpbmVyVG9wLnByZXBlbmQoaGVhZGVyTGVmdCk7XHJcbiAgICBoZWFkZXJDb250YWluZXJCb3R0b20uYXBwZW5kKGhlYWRlckJvdHRvbVJpZ2h0KVxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJhdGluZ19fY2FyZCcpLmZvckVhY2goZSA9PiB7XHJcbiAgICAgIGUuY2xhc3NMaXN0LnJlbW92ZSgncmF0aW5nX19jYXJkLS1hY3RpdmUnKVxyXG4gICAgfSlcclxuICAgIGxldCBpID0gMFxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJhdGluZ19fY2FyZCcpLmZvckVhY2goZSA9PiB7XHJcbiAgICAgIGlmIChpIDwgOCkge1xyXG4gICAgICAgIGUuY2xhc3NMaXN0LmFkZCgncmF0aW5nX19jYXJkLS1hY3RpdmUnKVxyXG4gICAgICAgIGkrK1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGUuY2xhc3NMaXN0LnJlbW92ZSgncmF0aW5nX19jYXJkLS1hY3RpdmUnKVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gICAgaWYgKHJhdGluZ1Nob3dNb3JlKSB7XHJcbiAgICAgIHJhdGluZ1Nob3dNb3JlLmNsYXNzTGlzdC5yZW1vdmUoJ3JhdGluZ19fbW9yZS0tbm9tb3JlJylcclxuXHJcbiAgICB9XHJcblxyXG4gIH07XHJcbn07XHJcblxyXG5cclxuZnVuY3Rpb24gbWVkaWExMDIzKCkge1xyXG4gIGlmICh3aW5kb3cubWF0Y2hNZWRpYSgnKG1heC13aWR0aDogMTAyM3B4KScpLm1hdGNoZXMpIHtcclxuICAgIGhlYWRlckNvbnRhaW5lckNlbnRlci5hcHBlbmQoaGVhZGVyQm90dG9tUmlnaHQpXHJcbiAgfSBlbHNlIGlmICh3aW5kb3cubWF0Y2hNZWRpYSgnKG1heC13aWR0aDogMTMwMHB4KScpLm1hdGNoZXMpIHtcclxuICAgIGhlYWRlckNvbnRhaW5lclRvcC5hcHBlbmQoaGVhZGVyQm90dG9tUmlnaHQpXHJcbiAgfTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIG1lZGlhNzY3KCkge1xyXG4gIGlmICh3aW5kb3cubWF0Y2hNZWRpYSgnKG1heC13aWR0aDogNzY3cHgpJykubWF0Y2hlcykge1xyXG4gICAgaGVhZGVyQ2VudGVyUmlnaHQuYXBwZW5kKGhlYWRlclRvcFJpZ2h0KVxyXG4gICAgaGVhZGVyQ29udGFpbmVyVG9wLmFwcGVuZChoZWFkZGVyQ2VudGVyTGVmdClcclxuICAgIGhlYWRlci5wcmVwZW5kKGhlYWRlckxlZnQpXHJcbiAgICBoZWFkZXIucHJlcGVuZChoZWFkZXJUb3ApXHJcblxyXG4gICAgc3BlY2lhbENvbnRhaW5lci5hcHBlbmQoc3BlY2lhbEJ0bnMpXHJcbiAgICB1c2VmdWxDb250YWluZXIuYXBwZW5kKHVzZWZ1bEJ0bnMpXHJcbiAgfSBlbHNlIGlmICh3aW5kb3cubWF0Y2hNZWRpYSgnKG1heC13aWR0aDogMTAyM3B4KScpLm1hdGNoZXMpIHtcclxuICAgIGhlYWRlckNvbnRhaW5lclRvcC5hcHBlbmQoaGVhZGVyVG9wUmlnaHQpXHJcbiAgICBoZWFkZXJDb250YWluZXJDZW50ZXIuYXBwZW5kKGhlYWRkZXJDZW50ZXJMZWZ0LCBoZWFkZXJDZW50ZXJSaWdodCwgaGVhZGVyQm90dG9tUmlnaHQpXHJcbiAgICBoZWFkZXIucHJlcGVuZChoZWFkZXJMZWZ0KVxyXG5cclxuICAgIHNwZWNpYWxUb3AuYXBwZW5kKHNwZWNpYWxCdG5zKVxyXG4gICAgdXNlZnVsVG9wLmFwcGVuZCh1c2VmdWxCdG5zKVxyXG5cclxuICB9O1xyXG59O1xyXG5cclxuLy8g0L7RgtGA0LjRgdC+0LLQutCwINC90LAg0LzQtdC00LjQsCDQt9Cw0L/RgNC+0YHQsNGFXHJcbm1lZGlhMTMwMCgpO1xyXG5tZWRpYTEwMjMoKTtcclxubWVkaWE3NjcoKTtcclxuXHJcbndpbmRvdy5tYXRjaE1lZGlhKCcobWF4LXdpZHRoOiA3NjdweCknKS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBtZWRpYTc2Nyk7XHJcbndpbmRvdy5tYXRjaE1lZGlhKCcobWF4LXdpZHRoOiAxMDIzcHgpJykuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgbWVkaWExMDIzKTtcclxud2luZG93Lm1hdGNoTWVkaWEoJyhtYXgtd2lkdGg6IDEzMDBweCknKS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBtZWRpYTEzMDApO1xyXG5cclxuXHJcbi8vINC+0YLQutGA0LLRgtC40LUg0LHRg9GA0LPQtdGAINC80LXQvdGOXHJcblxyXG5idXJnZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgYnVyZ2VyLmNsYXNzTGlzdC50b2dnbGUoJ2J1cmdlci0tYWN0aXZlJyk7XHJcbiAgYm9keS5jbGFzc0xpc3QudG9nZ2xlKCdsb2NrJyk7XHJcbn0pO1xyXG5cclxuaGVhZGVyQ2VudGVyTGluay5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBidXJnZXIuY2xhc3NMaXN0LnJlbW92ZSgnYnVyZ2VyLS1hY3RpdmUnKTtcclxuICAgIGJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnbG9jaycpO1xyXG4gIH0pO1xyXG59KTtcclxuXHJcbmhlYWRlclRvcExpbmsuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgYnVyZ2VyLmNsYXNzTGlzdC5yZW1vdmUoJ2J1cmdlci0tYWN0aXZlJyk7XHJcbiAgICBib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ2xvY2snKTtcclxuICB9KTtcclxufSk7XHJcblxyXG5pZiAocGhvbmVJbnB1dCkge1xyXG4gIGNvbnN0IGltID0gbmV3IElucHV0bWFzayhcIis3ICg5OTkpLTk5OS05OS05OVwiKTtcclxuICBpbS5tYXNrKHBob25lSW5wdXQpO1xyXG59XHJcblxyXG5waG9uZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKCkgPT4ge1xyXG4gIGNvbnN0IHBob25lID0gcGhvbmVJbnB1dC5pbnB1dG1hc2sudW5tYXNrZWR2YWx1ZSgpO1xyXG4gIGlmIChOdW1iZXIocGhvbmUpICYmIHBob25lLmxlbmd0aCA9PT0gMTApIHtcclxuICAgIHBob25lSW5wdXQuY2xhc3NMaXN0LmFkZCgnanMtdmFsaWRhdGUtc3VjY2Vzcy1maWVsZCcpXHJcbiAgfSBlbHNlIHtcclxuICAgIHBob25lSW5wdXQuY2xhc3NMaXN0LnJlbW92ZSgnanMtdmFsaWRhdGUtc3VjY2Vzcy1maWVsZCcpXHJcbiAgfVxyXG59KVxyXG5cclxubmFtZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKCkgPT4ge1xyXG4gIGlmIChuYW1lSW5wdXQudmFsdWUubGVuZ3RoID4gMSAmJiBuYW1lSW5wdXQudmFsdWUubGVuZ3RoIDwgMjEpIHtcclxuICAgIG5hbWVJbnB1dC5jbGFzc0xpc3QuYWRkKCdqcy12YWxpZGF0ZS1zdWNjZXNzLWZpZWxkJylcclxuICB9IGVsc2Uge1xyXG4gICAgbmFtZUlucHV0LmNsYXNzTGlzdC5yZW1vdmUoJ2pzLXZhbGlkYXRlLXN1Y2Nlc3MtZmllbGQnKVxyXG4gIH1cclxufSlcclxuXHJcbm1haWxJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsICgpID0+IHtcclxuICBpZiAobWFpbElucHV0LnZhbHVlLmluY2x1ZGVzKCdAJykgJiYgbWFpbElucHV0LnZhbHVlLmluY2x1ZGVzKCcuJykpIHtcclxuICAgIG1haWxJbnB1dC5jbGFzc0xpc3QuYWRkKCdqcy12YWxpZGF0ZS1zdWNjZXNzLWZpZWxkJylcclxuICB9IGVsc2Uge1xyXG4gICAgbWFpbElucHV0LmNsYXNzTGlzdC5yZW1vdmUoJ2pzLXZhbGlkYXRlLXN1Y2Nlc3MtZmllbGQnKVxyXG4gIH1cclxufSlcclxuXHJcblxyXG5jb25zdCB2YWxpZGF0ZUZlZWRiYWNrID0gbmV3IEp1c3RWYWxpZGF0ZShcIi5mZWVkYmFja19fZm9ybVwiLCB7XHJcbiAgcnVsZXM6IHtcclxuICAgIG5hbWU6IHtcclxuICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgIG1pbkxlbmd0aDogMixcclxuICAgICAgbWF4TGVuZ3RoOiAyMCxcclxuICAgIH0sXHJcbiAgICB0ZWw6IHtcclxuICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgIGZ1bmN0aW9uOiAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcGhvbmUgPSBwaG9uZUlucHV0LmlucHV0bWFzay51bm1hc2tlZHZhbHVlKCk7XHJcbiAgICAgICAgcmV0dXJuIE51bWJlcihwaG9uZSkgJiYgcGhvbmUubGVuZ3RoID09PSAxMDtcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBtYWlsOiB7XHJcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICBlbWFpbDogdHJ1ZSxcclxuICAgIH0sXHJcbiAgICBjaGVja2JveDoge1xyXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgIH0sXHJcbiAgfSxcclxuICBmb2N1c1dyb25nRmllbGQ6IHRydWUsXHJcbiAgbWVzc2FnZXM6IHtcclxuICAgIG5hbWU6IHtcclxuICAgICAgcmVxdWlyZWQ6ICdcItCY0LzRj1wiINC+0LHRj9C30LDRgtC10LvRjNC90L4g0LTQu9GPINC30LDQv9C+0LvQvdC10L3QuNGPJyxcclxuICAgICAgbWluTGVuZ3RoOiAnXCLQmNC80Y9cIiDQstCy0LXQtNC10L3QviDQvdC10LrQvtGA0YDQtdC60YLQvdC+LCDQvNC40L3QuNC80YPQvCAyINC30L3QsNC60LAnLFxyXG4gICAgICBtYXhMZW5ndGg6ICdcItCY0LzRj1wiINCy0LLQtdC00LXQvdC+INC90LXQutC+0YDRgNC10LrRgtC90L4sINC80LDQutGB0LjQvNGD0LwgMjAg0LfQvdCw0LrQvtCyJyxcclxuICAgIH0sXHJcbiAgICB0ZWw6IHtcclxuICAgICAgcmVxdWlyZWQ6ICdcItCi0LXQu9C10YTQvtC9XCIg0L7QsdGP0LfQsNGC0LXQu9GM0L3QviDQtNC70Y8g0LfQsNC/0L7Qu9C90LXQvdC40Y8nLFxyXG4gICAgICBmdW5jdGlvbjogJ9CX0LDQv9C+0LvQvdC40YLQtSBcItCi0LXQu9C10YTQvtC9XCInLFxyXG4gICAgfSxcclxuICAgIG1haWw6IHtcclxuICAgICAgcmVxdWlyZWQ6ICdcIkVtYWlsXCIg0L7QsdGP0LfQsNGC0LXQu9GM0L3QviDQtNC70Y8g0LfQsNC/0L7Qu9C90LXQvdC40Y8nLFxyXG4gICAgICBlbWFpbDogJ9Cd0LXQtNC+0L/Rg9GB0YLQuNC80YvQuSDRhNC+0YDQvNCw0YIgXCJFbWFpbFwiJyxcclxuICAgIH0sXHJcbiAgICBjaGVja2JveDoge1xyXG4gICAgICByZXF1aXJlZDogJ9Cd0LXQvtCx0YXQvtC00LjQvNC+INC/0YDQuNC90Y/RgtGMIFwi0J/QvtC70YzQt9C+0LLQsNGC0LXQu9GM0YHQutC+0LUg0YHQvtCz0LvQsNGI0LXQvdC40LVcIicsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgY29sb3JXcm9uZzogJyNGRjY5NzInLFxyXG5cclxufSlcclxuY29uc3QgZmVlZGJhY2tGb3JtYnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZlZWRiYWNrLWZvcm0tc3VibWl0JylcclxuXHJcbmZ1bmN0aW9uIHN1Ym1pdERhdGEoZXZlbnQpIHtcclxuICBpZiAocGhvbmVJbnB1dC5jbGFzc0xpc3QuY29udGFpbnMoJ2pzLXZhbGlkYXRlLXN1Y2Nlc3MtZmllbGQnKSAmJlxyXG4gICAgbWFpbElucHV0LmNsYXNzTGlzdC5jb250YWlucygnanMtdmFsaWRhdGUtc3VjY2Vzcy1maWVsZCcpICYmXHJcbiAgICBuYW1lSW5wdXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdqcy12YWxpZGF0ZS1zdWNjZXNzLWZpZWxkJykpIHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcclxuICAgIG1vZGFsQW5zd2VyLmNsYXNzTGlzdC5hZGQoJ21vZGFsLWFuc3dlci0tYWN0aXZlJylcclxuICAgIG5hbWVJbnB1dC52YWx1ZSA9ICcnXHJcbiAgICBtYWlsSW5wdXQudmFsdWUgPSAnJ1xyXG4gICAgcGhvbmVJbnB1dC52YWx1ZSA9ICcnXHJcbiAgICBwaG9uZUlucHV0LmNsYXNzTGlzdC5yZW1vdmUoJ2pzLXZhbGlkYXRlLXN1Y2Nlc3MtZmllbGQnKVxyXG4gICAgbWFpbElucHV0LmNsYXNzTGlzdC5yZW1vdmUoJ2pzLXZhbGlkYXRlLXN1Y2Nlc3MtZmllbGQnKVxyXG4gICAgbmFtZUlucHV0LmNsYXNzTGlzdC5yZW1vdmUoJ2pzLXZhbGlkYXRlLXN1Y2Nlc3MtZmllbGQnKVxyXG4gICAgY29uc29sZS5sb2codmFsaWRhdGVGZWVkYmFjay5pc1ZhbGlkYXRpb25TdWNjZXNzKTtcclxuICB9XHJcbiAgcmV0dXJuIGZlZWRiYWNrRm9ybWJ0bi5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHN1Ym1pdERhdGEpXHJcbn1cclxuXHJcbmZlZWRiYWNrRm9ybWJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xyXG4gIHN1Ym1pdERhdGEoZXZlbnQpXHJcbn0pXHJcblxyXG5tb2RhbEFuc3dlckNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICBtb2RhbEFuc3dlci5jbGFzc0xpc3QucmVtb3ZlKCdtb2RhbC1hbnN3ZXItLWFjdGl2ZScpXHJcbn0pXHJcblxyXG5tb2RhbEFuc3dlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgaWYgKChlLnRhcmdldCA9PSBtb2RhbEFuc3dlcikpIHtcclxuICAgIG1vZGFsQW5zd2VyLmNsYXNzTGlzdC5yZW1vdmUoJ21vZGFsLWFuc3dlci0tYWN0aXZlJylcclxuXHJcbiAgfVxyXG59KVxyXG5cclxuXHJcbnJhdGluZ1Nob3dNb3JlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5yYXRpbmdfX2NhcmQnKS5mb3JFYWNoKGUgPT4ge1xyXG4gICAgZS5jbGFzc0xpc3QuYWRkKCdyYXRpbmdfX2NhcmQtLWFjdGl2ZScpXHJcbiAgfSlcclxuICByYXRpbmdTaG93TW9yZS5jbGFzc0xpc3QuYWRkKCdyYXRpbmdfX21vcmUtLW5vbW9yZScpXHJcbn0pXHJcblxyXG4vLyBlbmQgbWFpbi5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUVBO0FBQ0EsSUFBTUEsY0FBYyxHQUFHQyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxrQkFBa0IsQ0FBQztBQUNsRSxJQUFNQyxXQUFXLEdBQUdGLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLGNBQWMsQ0FBQztBQUMzRCxJQUFNRSxnQkFBZ0IsR0FBR0gsUUFBUSxDQUFDQyxjQUFjLENBQUMsb0JBQW9CLENBQUM7QUFDdEUsSUFBTUcsVUFBVSxHQUFHSixRQUFRLENBQUNDLGNBQWMsQ0FBQyxjQUFjLENBQUM7QUFDMUQsSUFBTUksU0FBUyxHQUFHTCxRQUFRLENBQUNDLGNBQWMsQ0FBQyxlQUFlLENBQUM7QUFDMUQsSUFBTUssU0FBUyxHQUFHTixRQUFRLENBQUNDLGNBQWMsQ0FBQyxlQUFlLENBQUM7QUFDMUQsSUFBTU0sTUFBTSxHQUFHUCxRQUFRLENBQUNDLGNBQWMsQ0FBQyxRQUFRLENBQUM7QUFDaEQsSUFBTU8sSUFBSSxHQUFHUixRQUFRLENBQUNTLGFBQWEsQ0FBQyxNQUFNLENBQUM7QUFDM0MsSUFBTUMsZ0JBQWdCLEdBQUdWLFFBQVEsQ0FB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
