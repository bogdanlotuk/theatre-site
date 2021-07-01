document.getElementById('burger').onclick = function() {
    this.classList.toggle('burger--active');
    document.getElementById('navigation').classList.toggle('header__navigation--active');
}


let mySwiper1 = new Swiper (".swiper-container.swiper-header", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 0,
    effect: 'cube',
    navigation: {
        nextEl: '.swiper-buttons-next',
        prevEl: '.swiper-buttons-prev',
    },
    
});
let mySwiper2 = new Swiper (".swiper-container.swiper-our-staging", {
    loop: true,
    breakpoints: {
        320: {
            slidesPerView: 1.3,
            spaceBetween: 0
        },
        576: {
            slidesPerView: 1.6,
            spaceBetween: 0
        },
        768: {
            slidesPerView: 1.6,
            spaceBetween: 0
        },
        992: {
            slidesPerView: 1.6,
            spaceBetween: 0
        },
        1200: {
            slidesPerView: 3,
            spaceBetween: 0
        },
        1400: {
            slidesPerView: 4,
            spaceBetween: 0
        }
    },
});
let mySwiper3 = new Swiper (".swiper-container.swiper-partners-first", {
    loop: true,
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        576: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        768: {
            slidesPerView: 2.5,
            spaceBetween: 20
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 30
        },
        1400: {
            slidesPerView: 4,
            spaceBetween: 30
        }
    },
});

let mySwiper4 = new Swiper (".swiper-container.swiper-partners-second", {
    loop: true,
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        576: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        768: {
            slidesPerView: 2.5,
            spaceBetween: 20
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 30
        },
        1400: {
            slidesPerView: 4,
            spaceBetween: 30
        }
    },
});