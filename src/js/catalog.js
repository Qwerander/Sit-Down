//.......................................................catalog.js

const rangeSlider = document.getElementById('range-slider');
const rangeInputs = document.querySelectorAll('.catalog-price__input');

if (rangeSlider) {
  noUiSlider.create(rangeSlider, {
    start: [2000, 150000],
    connect: true,
    step: 1,
    keyboardSupport: true,
    range: {
      min: [0],
      max: [250000],
    },
  });

  rangeSlider.noUiSlider.on("update", (values, handle) => {
    rangeInputs[handle].value = Math.round(values[handle]);
  });

  const setRangeSlider = (index, value) => {
    let arr = [null, null];
    arr[index] = value;

    rangeSlider.noUiSlider.set(arr);
  };

  rangeInputs.forEach((item, i) => {
    item.addEventListener("change", (e) => {
      setRangeSlider(i, e.currentTarget.value);
    });
  });
}

const handles = document.querySelectorAll(".noUi-handle");
const noUiLine = document.querySelector(".noUi-connect");

handles.forEach((el) => {
  el.addEventListener("focus", () => {
    noUiLine.style.background = "#7033ac";
  });
});

handles.forEach((el) => {
  el.addEventListener("blur", () => {
    noUiLine.style.background = "#a65cf0";
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
        document.querySelectorAll('.js-catalog-card').forEach((el) => {
            el.classList.remove('catalog-content__card--display');
        })
        let i = 0;
        document.querySelectorAll('.js-catalog-card').forEach((el) => {
            if (i < 6) {
                el.classList.add('catalog-content__card--display');
                i++;
            } else {
                el.classList.remove('catalog-content__card--display');
            }    
        })
    } else if (window.matchMedia('(max-width: 1300px)').matches) {
        headerContainerTop.append(headerBottomRight)
        document.querySelectorAll('.js-catalog-card').forEach((el) => {
            el.classList.remove('catalog-content__card--display');
        })
        let i = 0;
        document.querySelectorAll('.js-catalog-card').forEach((el) => {
            if (i < 9) {
                el.classList.add('catalog-content__card--display');
                i++;    
            } else el.classList.remove('catalog-content__card--display');
        })
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



const bulet1 = document.getElementById('catalog-btn-1');
const bulet2 = document.getElementById('catalog-btn-2');
const buletMobile1 = document.getElementById('catalog-btn-mobile-1');
const buletMobile2 = document.getElementById('catalog-btn-mobile-2');
const buletMobile3 = document.getElementById('catalog-btn-mobile-3');

if (bulet1 && bulet2) {

    bulet1.addEventListener('click', () => {
        document.querySelectorAll('.catalog-content__bulet').forEach((bulet) => {
            bulet.classList.remove('catalog-content__bulet--active')
        })
        bulet1.classList.add('catalog-content__bulet--active')
        document.querySelectorAll('.js-catalog-card').forEach((el) => {
            el.classList.remove('catalog-content__card--display');
        })
        let i = 0;
        document.querySelectorAll('.js-catalog-card').forEach((el) => {
            if (i < 9) {
                el.classList.add('catalog-content__card--display');
                i++;    
            } else el.classList.remove('catalog-content__card--display');
        })
    })
    
    bulet2.addEventListener('click', () => {
        document.querySelectorAll('.catalog-content__bulet').forEach((bulet) => {
            bulet.classList.remove('catalog-content__bulet--active')
        })
        bulet2.classList.add('catalog-content__bulet--active')
    
        document.querySelectorAll('.js-catalog-card').forEach((el) => {
            el.classList.remove('catalog-content__card--display');
        })
        let i = 0;
        document.querySelectorAll('.js-catalog-card').forEach((el) => {
            if (i > 8) {
                el.classList.add('catalog-content__card--display');
            } else  {
                el.classList.remove('catalog-content__card--display');
                i++;
            }    
        })
    })
}

if (buletMobile1 && buletMobile2 && buletMobile3) {

buletMobile1.addEventListener('click', () => {
    document.querySelectorAll('.catalog-content__bulet').forEach((bulet) => {
        bulet.classList.remove('catalog-content__bulet--active')
    })
    buletMobile1.classList.add('catalog-content__bulet--active')

    document.querySelectorAll('.js-catalog-card').forEach((el) => {
        el.classList.remove('catalog-content__card--display');
    })
    let i = 0;
    document.querySelectorAll('.js-catalog-card').forEach((el) => {
        if (i < 6) {
            el.classList.add('catalog-content__card--display');
            i++;
        } else {
            el.classList.remove('catalog-content__card--display');
        }    
    })
})

buletMobile2.addEventListener('click', () => {
    document.querySelectorAll('.catalog-content__bulet').forEach((bulet) => {
        bulet.classList.remove('catalog-content__bulet--active')
    })
    buletMobile2.classList.add('catalog-content__bulet--active')

    document.querySelectorAll('.js-catalog-card').forEach((el) => {
        el.classList.remove('catalog-content__card--display');
    })
    let i = 0;
    document.querySelectorAll('.js-catalog-card').forEach((el) => {
        if (i < 6 ) {
            el.classList.remove('catalog-content__card--display');
            i++;
        } else if (i >= 6 && i < 12) {
            el.classList.add('catalog-content__card--display');
            i++;
        }    
    })
})

buletMobile3.addEventListener('click', () => {
    document.querySelectorAll('.catalog-content__bulet').forEach((bulet) => {
        bulet.classList.remove('catalog-content__bulet--active')
    })
    buletMobile3.classList.add('catalog-content__bulet--active')

    document.querySelectorAll('.js-catalog-card').forEach((el) => {
        el.classList.remove('catalog-content__card--display');
    })
    let i = 0;
    document.querySelectorAll('.js-catalog-card').forEach((el) => {
        if (i < 12 ) {
            el.classList.remove('catalog-content__card--display');
            i++;
        } else if (i > 11) {
            el.classList.add('catalog-content__card--display');
            i++;
        }    
    })
})
}
const catalogFilterCategory = document.getElementById('catalog-filter-category');
const catalogFilterPrice = document.getElementById('catalog-filter-price');
const catalogFilterDiscount = document.getElementById('catalog-filter-discount');
const catalogFilterColor = document.getElementById('catalog-filter-color');

if (catalogFilterCategory && catalogFilterPrice && 
    catalogFilterDiscount && catalogFilterColor) {

        catalogFilterCategory.addEventListener('click', () => {
            catalogFilterCategory.classList.toggle('catalog-filter__items--active')
        })
        
        catalogFilterPrice.addEventListener('click', () => {
            catalogFilterPrice.classList.toggle('catalog-filter__items--active')
        })
        
        catalogFilterDiscount.addEventListener('click', () => {
            catalogFilterDiscount.classList.toggle('catalog-filter__items--active')
        })
        
        catalogFilterColor.addEventListener('click', () => {
            catalogFilterColor.classList.toggle('catalog-filter__items--active')
        })
    }

// end catalog.js