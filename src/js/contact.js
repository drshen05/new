import '../assets/scss/contact.scss'

import { useTheme } from './components/theme';
import { useBurger } from './components/burger';
import { usePhone } from './components/contact/phone';


useTheme();
useBurger();
usePhone();
// map




ymaps.ready(init); 
var myMap;

function init() {

    myMap = new ymaps.Map("map", {
        center: [55.12277356552416,73.37892449999987], 
        zoom: 10
    }); 

    myMap.controls.add(
        new ymaps.control.ZoomControl() 
    ); 

    myPlacemark = new ymaps.Placemark([43.238253,76.945465], { 
        balloonContent: "<div class='ya_map'>Заезжайте в гости!</div>" 
    }, {
        preset: "twirl#skatingIcon" 
    });
    
    myMap.geoObjects.add(myPlacemark); 
    myPlacemark.balloon.open(); 
    
};




