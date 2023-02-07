
//................................................product.js


// открвтие бургер меню
const burger = document.getElementById('burger');
const body = document.querySelector('body');
const headerCenterLink = document.querySelectorAll('.header-center__link');
const headerTopLink = document.querySelectorAll('.header-top__link');

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

function media1300() {
    if (window.matchMedia('(max-width: 1300px)').matches) {
        header.prepend(headerLeft);
        headerContainer1300.classList.add('container')
        headerContainerTop.append(headerBottomRight)
    } else {
        headerContainer1300.classList.remove('container')
        headerContainerTop.prepend(headerLeft);
        headerContainerBottom.append(headerBottomRight)
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

    } else if (window.matchMedia('(max-width: 1023px)').matches) {
        headerContainerTop.append(headerTopRight)
        headerContainerCenter.append(headderCenterLeft, headerCenterRight, headerBottomRight)
        header.prepend(headerLeft)

    };
};

// отрисовка на медиа запросах
media1300();
media1023();
media767();

window.matchMedia('(max-width: 767px)').addEventListener('change', media767);
window.matchMedia('(max-width: 1023px)').addEventListener('change', media1023);
window.matchMedia('(max-width: 1300px)').addEventListener('change', media1300);

const modalCard = document.getElementById('modal-card')
const productSwiperMain = document.getElementById('product-swiper-main')
const modalCardClose = document.getElementById('modal-card-close')

modalCard.addEventListener('click', (e) => {
  if ((e.target == modalCard)) {
    modalCard.classList.remove('modal-card--active')
   
     }
})

modalCardClose.addEventListener('click', (e) => {
    modalCard.classList.remove('modal-card--active')
})


productSwiperMain.addEventListener('click', (e) => {
  modalCard.classList.add('modal-card--active')
})


const modalForm = document.getElementById('modal-form')
const buyOneClick = document.getElementById('buy-one-click')
const modalFormSubmit = document.getElementById('modal-form-submit')
const modalFormClose = document.getElementById('modal-form-close')

const modalAnswer = document.getElementById('modal-answer')
const modalAnswerClose = document.getElementById('modal-answer-close')

modalForm.addEventListener('click', (e) => {
  if ((e.target == modalForm)) {
    modalForm.classList.remove('modal-form--active')
   
     }
})

modalFormClose.addEventListener('click', (e) => {
    modalForm.classList.remove('modal-form--active')
})


buyOneClick.addEventListener('click', (e) => {
  modalForm.classList.add('modal-form--active')
})

modalFormSubmit.addEventListener('click', (e) => {
  console.log(validateForm.isValidationSuccess);
  if (validateForm.isValidationSuccess) {
    e.preventDefault()
    modalAnswer.classList.add('modal-answer--active')
    modalForm.classList.remove('modal-form--active')
  }

})

modalAnswerClose.addEventListener('click', (e) => {
    modalAnswer.classList.remove('modal-answer--active')
})


modalAnswer.addEventListener('click', (e) => {
  if ((e.target == modalAnswer)) {
    modalAnswer.classList.remove('modal-answer--active')
   
     }
})




const productSliderNav = new Swiper(".product__swiper-nav", {
    resizeObserver: true,
    updateOnWindowResize: true,
    slideClass: "swiper-nav__item",
    direction: "horizontal",
    freeMode: true,
    breakpoints: {
      1024: {
        direction: "horizontal",
        slidesPerView: 'auto',
        spaceBetween: 38,
      },
      // 890: {
      //   direction: "vertical",
      //   spaceBetween: 20,
      //   slidesPerView: 4,
      // },
      767: {
        slidesPerView: 4,
        direction: "vertical",
        spaceBetween: 15,
      },
      320: {
        direction: "horizontal",
        slidesPerView: "auto",
        spaceBetween: 5,
      },
    },
  });
  
  const productSlider = new Swiper(".product__swiper-main", {
    resizeObserver: true,
    updateOnWindowResize: true,
    slideClass: "swiper-main__slide",
    slidesPerView: 1,
    initialSlide: 4,
    spaceBetween: 10,
    mousewheel: true,
    grabCursor: true,
    thumbs: {
      swiper: productSliderNav,
    },
  });









  const sliderThumbs = new Swiper('.modal-card__nav-swiper', {
    resizeObserver: true,
    updateOnWindowResize: true,
    slideClass: 'modal-card__item',
    spaceBetween: 10,
    direction: 'horizontal',
    freeMode: true,
    slidesPerView: 'auto',
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      695: {
        slidesPerView: 2,
      },
      769: {
        slidesPerView: 2,
      },
      1025: {
        slidesPerView: 3,
      },
    },
    navigation: {
      prevEl: ".js-modal-card-prev",
      nextEl: ".js-modal-card-next",
    },
  });
  
  const sliderImages = new Swiper('.modal-card__main-swiper', {
    resizeObserver: true,
    updateOnWindowResize: true,
    slideClass: 'modal-card__slide',
    slidesPerView: 1,
    initialSlide: 4,
    spaceBetween: 10,
    mousewheel: true,
    // navigation: {
    //   nextEl: '.modal-thumbs__btn-next',
    //   prevEl: '.modal-thumbs__btn-prev',
    // },
    grabCursor: true,
    thumbs: {
      swiper: sliderThumbs
    },
  });































  const modalPhoneInput = document.getElementById('modal-tel');

  if (modalPhoneInput) {
    const im = new Inputmask("+7 (999)-999-99-99");
    im.mask(modalPhoneInput);
  }
 
  const validateForm = new JustValidate(".modal-form__form", {
    rules: {
      name: {
        required: true,
        minLength: 2,
        maxLength: 20,
      },
      tel: {
        required: true,
        function: () => {
          const phone = modalPhoneInput.inputmask.unmaskedvalue();
          return Number(phone) && phone.length === 10;
        },
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
 
      checkbox: {
        required: 'Необходимо принять "Пользовательское соглашение"',
      },
    },
    colorWrong: '#FF6972',
})



const productSliderCatalog = new Swiper(".js-catalog-swiper", {
  resizeObserver: true,
  updateOnWindowResize: true,
  direction: "horizontal",
  
  breakpoints: {
    1301: {
      slidesPerGroup: 1,
      slidesPerColumn: 1,
      slidesPerView: 4,
      spaceBetween: 32,
    },
    1024: {
      slidesPerGroup: 1,
      slidesPerColumn: 1,
      slidesPerView: 3,
      spaceBetween: 32,
    },

    768: {
      slidesPerGroup: 1,
      slidesPerColumn: 1,
      slidesPerView: 2,
      spaceBetween: 32,
    },
    300: {
      slidesPerGroup: 1,
      slidesPerColumn: 1,
      slidesPerView: 2,
      spaceBetween: 16,
    },
  },

  navigation: {
    nextEl: ".js-catalog-next",
    prevEl: ".js-catalog-prev",
  },
});


  

// ..........................................end  product.js