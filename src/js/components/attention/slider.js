import Swiper from 'swiper';
// import { Navigation } from 'swiper/modules';
import 'swiper/css';

export const useHeroSlider = () => {
  new Swiper('.hero__slider', {
    slidesPerView: 'auto',
    spaceBetween: 22,
    loop: true,
    centeredSlides: true,
    breakpoints: {
      993: {
        centeredSlides: false,
      },
    },
  });
};

export const useCustomersSlider = () => {
    new Swiper('.customers__slider', {
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