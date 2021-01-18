'use strict';

import handleBurger from './modules/burger';
import calculator from './modules/calculator';
import menuClubs from './modules/menuClubs';
import scrollHandler from './modules/scrollHandler';
import presentHandler from './modules/presentHandler';
import popup from './modules/popup';
import formHandler from './modules/formHandler';
import slider from './modules/slider';
import SliderCarousel from './modules/sliderCarousel.js';


try{
    menuClubs();
    scrollHandler();
    popup();
    handleBurger();
    formHandler();
    presentHandler();
    slider();
   // sliderGallery();
   const options = { 
    wrap: '.services-slider',
    slidesToShow: 5,
    infinity: true,
}
const carousel = new SliderCarousel(options);
carousel.init();
}catch(e){}