document.getElementById('burger').onclick = function() {
    this.classList.toggle('burger--active');
    document.getElementById('body').classList.toggle('body--active');
    document.getElementById('top-inner').classList.toggle('header__top-inner--active');
    document.getElementById('navigation').classList.toggle('header__navigation--active');
    document.getElementById('menu-list').classList.toggle('menu-list--active');
    document.getElementById('phone').classList.toggle('header__phone--active');
    document.getElementById('contacts').classList.toggle('contacts--active');
    let link = document.getElementsByClassName('menu-list__item-link');
    for (let elem of link) {
        elem.classList.toggle('menu-list__item-link--active');
    }
}

let main = document.getElementById('main-link');
let about = document.getElementById('about-theatre-link');
let staging = document.getElementById('our-staging-link');
let partners = document.getElementById('partners-link');
let contacts = document.getElementById('contacts-link');

let arrLink = [main, about, staging, partners, contacts];
for (i = 0; i < arrLink.length; i++){
arrLink[i].onclick = function (){
        document.getElementById('burger').classList.remove('burger--active');
        document.getElementById('body').classList.remove('body--active');
        document.getElementById('top-inner').classList.remove('header__top-inner--active');
        document.getElementById('navigation').classList.remove('header__navigation--active');
        document.getElementById('menu-list').classList.remove('menu-list--active');
        document.getElementById('phone').classList.remove('header__phone--active');
        document.getElementById('contacts').classList.remove('contacts--active');
        let link = document.getElementsByClassName('menu-list__item-link')
        for (let elem of link) {
        elem.classList.remove('menu-list__item-link--active');
        }
    }
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
        530: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        630: {
            slidesPerView: 2.5,
            spaceBetween: 20
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 20
        },
        992: {
            allowTouchMove: true,
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1200: {
            allowTouchMove: false,
            slidesPerView: 4,
            spaceBetween: 30
        },
        // 1400: {
        //     allowTouchMove: false,
        //     slidesPerView: 4,
        //     spaceBetween: 30
        // }
    },
});

// let mySwiper4 = new Swiper (".swiper-container.swiper-partners-second", {
//     loop: true,
//     breakpoints: {
//         320: {
//             slidesPerView: 1,
//             spaceBetween: 20
//         },
//         576: {
//             slidesPerView: 2,
//             spaceBetween: 20
//         },
//         768: {
//             slidesPerView: 2.5,
//             spaceBetween: 20
//         },
//         992: {
//             slidesPerView: 3,
//             spaceBetween: 30
//         },
//         1400: {
//             slidesPerView: 4,
//             spaceBetween: 30
//         }
//     },
// });