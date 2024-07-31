import '../assets/scss/audience.scss';

import { useTheme } from './components/theme';
import { useBurger } from './components/burger';
import { useAudienceSlider, 
    useArticlesSlider
 } from './components/audience/slider';

useTheme();
useBurger();
useAudienceSlider();
useArticlesSlider();
