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
import sliderGallery from './modules/sliderGallery.js';



try{
    menuClubs();
    scrollHandler();
    popup();
    handleBurger();
    formHandler();
    presentHandler();
    slider();
    sliderGallery();
    const options = { 
    wrap: '.services-slider',
    slidesToShow: 4,
    infinity: true,
    responsive:[{
        breakpoint: 1024,
        slidesToShow:3,
    },
    {
        breakpoint: 768,
        slidesToShow:2,
    },
    {
        breakpoint: 576,
        slidesToShow:1,
    }]
}
const carousel = new SliderCarousel(options);
carousel.init();
}catch(e){}