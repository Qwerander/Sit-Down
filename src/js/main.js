

// main.js
const ratingShowMore = document.getElementById('rating-show-more')
const modalAnswer = document.getElementById('modal-answer')
const modalAnswerClose = document.getElementById('modal-answer-close')
const phoneInput = document.getElementById('feedback-tel');
const nameInput = document.getElementById('feedback-name');
const mailInput = document.getElementById('feedback-mail');
const burger = document.getElementById('burger');
const body = document.querySelector('body');
const headerCenterLink = document.querySelectorAll('.header-center__link');
const headerTopLink = document.querySelectorAll('.header-top__link');
const header = document.getElementById('header')
const headerLeft = document.getElementById('header-left')
const headerBottomRight = document.getElementById('header-bottom-right')
const headerContainerTop = document.getElementById('header-container-top')
const headerContainerBottom = document.getElementById('header-container-bottom')
const headerContainer1300 = document.getElementById('container-1300')

const headerContainerCenter = document.getElementById('header-container-center')

const headerCenterRight = document.getElementById('header-center-right')
const headerTopRight = document.getElementById('header-top-right')
const headderCenterLeft = document.getElementById('header-center-left')
const headerTop = document.getElementById('header-top')

const specialContainer = document.getElementById('special-container')
const specialTop = document.getElementById('special-top')
const specialBtns = document.getElementById('special-btns')

const usefulContainer = document.getElementById('useful-container')
const usefulTop = document.getElementById('useful-top')
const usefulBtns = document.getElementById('useful-btns')

function openHeaderTopSelect() {
  const headerSelectTop = document.getElementById('header-select-top')
  const headerTopList = document.getElementById('header-top-list')

  headerSelectTop.addEventListener('click', () => {
    headerSelectTop.classList.toggle('select-top--active')
    headerTopList.classList.toggle('select-top--active')

    headerTopList.addEventListener('mouseleave', () => {
      headerSelectTop.classList.remove('select-top--active')
      headerTopList.classList.remove('select-top--active')
    })

    document.querySelectorAll('.select-top__item').forEach(e => {
      e.addEventListener('click', () => {
        headerSelectTop.textContent = e.textContent
        headerSelectTop.classList.remove('select-top--active')
        headerTopList.classList.remove('select-top--active')
        document.querySelectorAll('.select-top__item').forEach(e => {
          e.classList.remove('select-top__none')
        })
        if (e.textContent === headerSelectTop.textContent) {
          e.classList.add('select-top__none')
        }
      })
    })
  })
}

function openHeaderBottomSelect() {
  const headerSelectBottom = document.getElementById('header-select-bottom')
  const headerBottomList = document.getElementById('header-bottom-list')

  headerSelectBottom.addEventListener('click', () => {
    headerSelectBottom.classList.toggle('select-bottom--active')
    headerBottomList.classList.toggle('select-bottom--active')

    headerBottomList.addEventListener('mouseleave', () => {
      headerSelectBottom.classList.remove('select-bottom--active')
      headerBottomList.classList.remove('select-bottom--active')
    })

    document.querySelectorAll('.select-bottom__item').forEach(e => {
      e.addEventListener('click', () => {
        headerSelectBottom.textContent = e.textContent
        headerSelectBottom.classList.remove('select-bottom--active')
        headerBottomList.classList.remove('select-bottom--active')
        document.querySelectorAll('.select-bottom__item').forEach(e => {
          e.classList.remove('select-bottom__none')
        })
        if (e.textContent === headerSelectBottom.textContent) {
          e.classList.add('select-bottom__none')
        }
      })
    })
  })
}

openHeaderTopSelect()
openHeaderBottomSelect()

// Слайдер
new Swiper('.hero__swiper', {
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 0,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },

  autoplay: {
    delay: 4000,
  },

});

const swiperSpecial = new Swiper('.special__swiper', {
  slidesPerView: 3,
  slidesPerGroup: 3,
  spaceBetween: 30,
  slidesPerView: 'auto',
  navigation: {
    nextEl: '.js-special-next',
    prevEl: '.js-special-prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },

    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },

    1024: {
      slidesPerView: 3,
      slidesPerView: 'auto',
    },

  }

});


const swiperUseful = new Swiper('.useful__swiper', {
  slidesPerView: 2,
  slidesPerGroup: 1,
  spaceBetween: 32,
  slidesPerView: 'auto',
  navigation: {
    nextEl: '.js-useful-next',
    prevEl: '.js-useful-prev',
  },
  breakpoints: {
    1: {
      slidesPerView: 1,
      // slidesPerGroup: 1,
      // spaceBetween: 32,
    },

    532: {
      slidesPerView: 2,
      // slidesPerGroup: 2,
      spaceBetween: 16,
    },

    768: {
      slidesPerView: 2,
      // slidesPerGroup: 2,
      spaceBetween: 32,
    },
    
    890: {
      slidesPerView: 3,
      spaceBetween: 16,
    },
    
    1023: {
      slidesPerView: 3,
      spaceBetween: 32,
    },

    1301: {
      slidesPerView: 2,
      spaceBetween: 32,
    },

  }

});


// элементы для отрисовки на медиа запросах


function media1300() {
  if (window.matchMedia('(max-width: 1300px)').matches) {
    header.prepend(headerLeft);
    headerContainer1300.classList.add('container')
    headerContainerTop.append(headerBottomRight)
    document.querySelectorAll('.rating__card').forEach(e => {
      e.classList.remove('rating__card--active')
    })
    let i = 0
    document.querySelectorAll('.rating__card').forEach(e => {
      if (i < 6) {
        e.classList.add('rating__card--active')
        i++
      } else {
        e.classList.remove('rating__card--active')
      }
    })
    if (ratingShowMore) {
      ratingShowMore.classList.remove('rating__more--nomore')
    }
  } else {
    headerContainer1300.classList.remove('container')
    headerContainerTop.prepend(headerLeft);
    headerContainerBottom.append(headerBottomRight)
    document.querySelectorAll('.rating__card').forEach(e => {
      e.classList.remove('rating__card--active')
    })
    let i = 0
    document.querySelectorAll('.rating__card').forEach(e => {
      if (i < 8) {
        e.classList.add('rating__card--active')
        i++
      } else {
        e.classList.remove('rating__card--active')
      }
    })
    if (ratingShowMore) {
      ratingShowMore.classList.remove('rating__more--nomore')

    }

  };
};


function media1023() {
  if (window.matchMedia('(max-width: 1023px)').matches) {
    headerContainerCenter.append(headerBottomRight)
  } else if (window.matchMedia('(max-width: 1300px)').matches) {
    headerContainerTop.append(headerBottomRight)
  };
};

function media767() {
  if (window.matchMedia('(max-width: 767px)').matches) {
    headerCenterRight.append(headerTopRight)
    headerContainerTop.append(headderCenterLeft)
    header.prepend(headerLeft)
    header.prepend(headerTop)

    specialContainer.append(specialBtns)
    usefulContainer.append(usefulBtns)
  } else if (window.matchMedia('(max-width: 1023px)').matches) {
    headerContainerTop.append(headerTopRight)
    headerContainerCenter.append(headderCenterLeft, headerCenterRight, headerBottomRight)
    header.prepend(headerLeft)

    specialTop.append(specialBtns)
    usefulTop.append(usefulBtns)

  };
};

// отрисовка на медиа запросах
media1300();
media1023();
media767();

window.matchMedia('(max-width: 767px)').addEventListener('change', media767);
window.matchMedia('(max-width: 1023px)').addEventListener('change', media1023);
window.matchMedia('(max-width: 1300px)').addEventListener('change', media1300);


// открвтие бургер меню

burger.addEventListener('click', () => {
  burger.classList.toggle('burger--active');
  body.classList.toggle('lock');
});

headerCenterLink.forEach(element => {
  element.addEventListener('click', () => {
    burger.classList.remove('burger--active');
    body.classList.remove('lock');
  });
});

headerTopLink.forEach(element => {
  element.addEventListener('click', () => {
    burger.classList.remove('burger--active');
    body.classList.remove('lock');
  });
});

if (phoneInput) {
  const im = new Inputmask("+7 (999)-999-99-99");
  im.mask(phoneInput);
}

phoneInput.addEventListener('keyup', () => {
  const phone = phoneInput.inputmask.unmaskedvalue();
  if (Number(phone) && phone.length === 10) {
    phoneInput.classList.add('js-validate-success-field')
  } else {
    phoneInput.classList.remove('js-validate-success-field')
  }
})

nameInput.addEventListener('keyup', () => {
  if (nameInput.value.length > 1 && nameInput.value.length < 21) {
    nameInput.classList.add('js-validate-success-field')
  } else {
    nameInput.classList.remove('js-validate-success-field')
  }
})

mailInput.addEventListener('keyup', () => {
  if (mailInput.value.includes('@') && mailInput.value.includes('.')) {
    mailInput.classList.add('js-validate-success-field')
  } else {
    mailInput.classList.remove('js-validate-success-field')
  }
})


const validateFeedback = new JustValidate(".feedback__form", {
  rules: {
    name: {
      required: true,
      minLength: 2,
      maxLength: 20,
    },
    tel: {
      required: true,
      function: () => {
        const phone = phoneInput.inputmask.unmaskedvalue();
        return Number(phone) && phone.length === 10;
      },
    },
    mail: {
      required: true,
      email: true,
    },
    checkbox: {
      required: true,
    },
  },
  focusWrongField: true,
  messages: {
    name: {
      required: '"Имя" обязательно для заполнения',
      minLength: '"Имя" введено некорректно, минимум 2 знака',
      maxLength: '"Имя" введено некорректно, максимум 20 знаков',
    },
    tel: {
      required: '"Телефон" обязательно для заполнения',
      function: 'Заполните "Телефон"',
    },
    mail: {
      required: '"Email" обязательно для заполнения',
      email: 'Недопустимый формат "Email"',
    },
    checkbox: {
      required: 'Необходимо принять "Пользовательское соглашение"',
    },
  },
  colorWrong: '#FF6972',

})
const feedbackFormbtn = document.getElementById('feedback-form-submit')

function submitData(event) {
  if (phoneInput.classList.contains('js-validate-success-field') &&
    mailInput.classList.contains('js-validate-success-field') &&
    nameInput.classList.contains('js-validate-success-field')) {
    event.preventDefault()
    modalAnswer.classList.add('modal-answer--active')
    nameInput.value = ''
    mailInput.value = ''
    phoneInput.value = ''
    phoneInput.classList.remove('js-validate-success-field')
    mailInput.classList.remove('js-validate-success-field')
    nameInput.classList.remove('js-validate-success-field')
    console.log(validateFeedback.isValidationSuccess);
  }
  return feedbackFormbtn.removeEventListener('click', submitData)
}

feedbackFormbtn.addEventListener('click', (event) => {
  submitData(event)
})

modalAnswerClose.addEventListener('click', (e) => {
  modalAnswer.classList.remove('modal-answer--active')
})

modalAnswer.addEventListener('click', (e) => {
  if ((e.target == modalAnswer)) {
    modalAnswer.classList.remove('modal-answer--active')

  }
})


ratingShowMore.addEventListener('click', () => {
  document.querySelectorAll('.rating__card').forEach(e => {
    e.classList.add('rating__card--active')
  })
  ratingShowMore.classList.add('rating__more--nomore')
})

// end main.js