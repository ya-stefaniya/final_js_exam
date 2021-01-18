'use strict';
class SliderCarousel{
    constructor({
        wrap,
        next,
        prev,
        container,
        infinity = false,
        position = 0,
        sliderToShow = 4
        }){
        //     if(!wrap){
        //         console.warn(`slider-carousel: нужно передать 'wrap'!`)
        // }
        //задаем свойства
        this.wrap = document.querySelector(wrap);
        this.main = this.wrap.parentNode;
        this.next = document.querySelector(next);
        this.prev = document.querySelector(prev);
        this.container = document.querySelector(container);

        this.sliderToShow = sliderToShow;
        //элементы слайдера
        this.slides = document.querySelector(wrap).children;
        this.options = {
            position,
            infinity,
            widthSlide: Math.floor(100/this.sliderToShow)
        };
    }
    init(){
        this.addGloClass();
        this.addStyle();

        if(this.prev && this.next){
            this.controlSlider();
        } else {
            this.addArrow();
            this.controlSlider();
        }
        
    }
    addGloClass(){
        this.main.classList.add('glo-slider');
        this.wrap.classList.add('glo-slider__wrap'); 
        for( let item of this.slides){
            item.classList.add('glo-slider__item')
        }
    }
    addStyle(){
        const style = document.createElement('style');
        style.id = 'sliderCarousel-style';
        style.textContent = `
            .glo-slider{
                overflow: hidden !important;
            }
            .glo-slider__wrap{
                display: flex !important;
                transition: transform 0.5s !important;
                will-change: transform !important;
            }
            .glo-slider__item{
                flex: 0 0 ${this.options.widthSlide + 0.5}% !important;
                margin: auto 0 !important;
            }
        `;
        document.head.appendChild(style);
    }
    controlSlider(){
        this.prev.addEventListener('click', this.prevSlider.bind(this));
        this.next.addEventListener('click', this.nextSlider.bind(this));
    }
    //манипулируем position
    prevSlider(){
        if(this.options.infinity || this.options.position >0){
            --this.options.position;
            if(this.options.position < 0){
                this.options.position = this.slides.length - this.sliderToShow;
            }
            this.wrap.style.transform = `translateX(-${this.options.position * this.options.widthSlide}%)`;
        }
    }

    nextSlider(){
        if(this.options.infinity || this.options.position < this.slides.length - this.sliderToShow){
            ++this.options.position;
            if(this.options.position > this.slides.length - this.sliderToShow){
                this.options.position = 0;
            }
            this.wrap.style.transform = `translateX(-${this.options.position * this.options.widthSlide}%)`
        }
        
    }
    addArrow(){
        this.container  = document.createElement('div');
        this.prev = document.createElement('button');
        this.next = document.createElement('button');

        this.prev.className = 'glo-slider_prev';
        this.next.className = 'glo-slider_next';
        this.container.className = 'button-container';


        this.main.appendChild(this.container);

        this.container.appendChild(this.prev);
        this.container.appendChild(this.next);
// margin: 0 10px;

        const style = document.createElement('style');
        style.textContent = `
        .glo-slider_prev,
        .glo-slider_next{
            border: 15px solid transparent;
            background: transparent;
            margin: 0 10px;
        }
        .glo-slider_next{
            border-left-color: #fad249;

        }
        .glo-slider_prev{
            border-right-color: #fad249;
        }
        .button-container{
            width: 8rem;
            margin: 1rem auto;
            display: flex;
        }
        .glo-slider_prev:hover,
        .glo-slider_prev:focus,
        .glo-slider_next:hover,
        .glo-slider_next:focus{
            background: transparent;
            outline: transparent;
        }
            
        `;
        document.head.appendChild(style);

    }
}
export default SliderCarousel;