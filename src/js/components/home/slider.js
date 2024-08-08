import Swiper from 'swiper';
import { Navigation, Scrollbar } from 'swiper/modules';
import 'swiper/css';





// export const usePartnersSlider = () => {
//     new Swiper('.partners__slider', {
//         slidesPerView: 'auto',
//         spaceBetween: 32,
//         loop: true,
//         autoplay: {
//             delay: 3000, // Интервал между перелистыванием слайдов (в миллисекундах)
//             disableOnInteraction: false, // Автовоспроизведение продолжается даже после взаимодействия пользователя
//         },
//         breakpoints: {
//             380: {
//                 slidesPerView: 'auto',
//             },
//             993: {
//                 centeredSlides: false,
//                 autoplay: false, // Отключить автопрокрутку для больших экранов, если нужно
//             },
//         },
//     });
// };

// // Вызов функции при загрузке страницы
// document.addEventListener("DOMContentLoaded", usePartnersSlider);




export const useInsightSlider = () => {
  new Swiper('.insight__slider', {
    slidesPerView: 'auto',
    spaceBetween: 32,
    loop: true,
    centeredSlides: true,
    breakpoints: {
      993: {
        centeredSlides: false,
      },
      pagination: {
        el: '.swiper-pagination',
      },
    },
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
    },
  });
};

export const useTestimonialsSlider = () => {
  new Swiper('.testimonials__slider', {
    modules: [Navigation],
    slidesPerView: 'auto',
    slidesPerView: 1,
    spaceBetween: 22,
    loop: true,
    effect: 'fade',
      fadeEffect:{
          crossFade:true
        },
    navigation: {
      prevEl: '.testimonials__btn--prev',
      nextEl: '.testimonials__btn--next',
    },
    
  });
};
