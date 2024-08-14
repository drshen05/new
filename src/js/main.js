import '../../src/assets/scss/main.scss';


import { useTheme } from './components/theme';
import { useBurger } from './components/burger';
import {
  useInsightSlider,
  usePartnersSlider,
  useTestimonialsSlider,
} from './components/home/slider';




useTheme();
useBurger();
useInsightSlider();
useTestimonialsSlider();
usePartnersSlider();

// слайдер партнеры

//табы
    const tabControls = document.querySelector('.tab__controls')

    tabControls.addEventListener('click', toggleTab)

    function toggleTab(e) {

        const tabControl = e.target.closest('.tab__controls-link')

        if (!tabControl) return
        e.preventDefault()
        if (tabControl.classList.contains('tab__controls-link--active')) return

        const tabContentID = tabControl.getAttribute('href')
        const tabContent = document.querySelector(tabContentID)
        const activeControl = document.querySelector('.tab__controls-link--active')
        const activeContent = document.querySelector('.tab__content--show')

        if (activeControl) {
            activeControl.classList.remove('tab__controls-link--active')
        }
        if (activeContent) {
            activeContent.classList.remove('tab__content--show')
        }

        tabControl.classList.add('tab__controls-link--active')
        tabContent.classList.add('tab__content--show')

    }