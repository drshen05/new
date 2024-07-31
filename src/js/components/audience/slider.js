import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';

export const useAudienceSlider = () => {
  new Swiper('.audience__slider', {
    slidesPerView: 'auto',
    spaceBetween: 32,
    loop: true,
    centeredSlides: true,
    breakpoints: {
      993: {
        centeredSlides: false,
      },
    },
  });
};
export const useArticlesSlider = () => {
    new Swiper('.articles__slider', {
      modules: [Navigation],
      slidesPerView: 'auto',
    //   slidesPerView: 1,
      spaceBetween: 32,
      loop: true,
    //   centeredSlides: true,
      navigation: {
        prevEl: '.articles__btn--prev',
        nextEl: '.articles__btn--next',
      },
    });
  };

