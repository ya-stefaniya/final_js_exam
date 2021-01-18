'use strict';
class SliderCarousel{
    constructor({
        wrap, 
        next, 
        prev, 
        position = 0, 
        slidesToShow = 4,
        infinity = false,
        responsive = []
    }){
        if(!wrap){
            console.warn('slider-carousel: Необходимо передать селектор, "wrap"!');
        }
        this.wrap = document.querySelector(wrap);
        this.main = this.wrap.parentNode;
        this.slides = document.querySelector(wrap).children;
        this.next = document.querySelector(next);
        this.prev = document.querySelector(prev);
        this.slidesToShow = slidesToShow;
        this.options = {
            position,
            widthSlide: Math.floor(100/this.slidesToShow),
            infinity,
            maxPosition: this.slides.length - this.slidesToShow,
        }
        this.responsive = responsive;
        
    }
    init(){
        
        this.addClass();
        this.addStyle();
        if(this.prev && this.next){
            this.controlSlider();
        }else{
            this.addArrow();
            this.controlSlider();
        }
        if(this.responsive){
            this.responsiveInit();
        }
    };
    addClass(){
        this.main.classList.add('sliderCarousel');
        this.wrap.classList.add('sliderCarousel__wrap');
        for (let slide of this.slides){
            slide.classList.add('sliderCarousel__slide');
        }
    };
    addStyle(){
        let style = document.getElementById('sliderCarousel-style');
        if(!style){
            style = document.createElement('style');
            style.id = 'sliderCarousel-style';
        }
        
        style.textContent  = `
            .sliderCarousel{
                overflow:hidden !important;
                position:relative;
            }
            .sliderCarousel__wrap{
                display:flex !important;
                transition: transform .3s !important;
                will-change: tranform !important;
                padding: 0 c!important;
                margin: 0 29px !important;
            }
            .sliderCarousel__slide{
                width: ${this.options.widthSlide}% !important;
                flex: 0 0 ${this.options.widthSlide}% !important;
                margin:0 auto  !important;
                box-sizing:border-box !important;
            }
            .sliderCarousel_prev,
            .sliderCarousel_next{
                position: absolute;
                top: 28%;
                margin-top: -18px;
                z-index: 100;
                cursor: pointer;
                display: block;
                width: 36px;
                height: 37px;
                border-radius: 50%;
                text-align: center;
                border:none;
            }
            .sliderCarousel_next{
                right: 0;
                background: #f4c71b no-repeat center;
            }
            .sliderCarousel_prev{
                left: 0;
                background: #f4c71b  no-repeat center;
            }
            .sliderCarousel_prev:hover,
            .sliderCarousel_next:hover,
            .sliderCarousel_prev:focus,
            .sliderCarousel_next:focus{
                outline:none;
            }
        `;
        document.head.append(style);
    }
    controlSlider(){
        this.prev.addEventListener('click', this.prevSlider.bind(this));
        this.next.addEventListener('click', this.nextSlider.bind(this));
    }
    prevSlider(){
        if(this.options.infinity || this.options.position > 0){
            --this.options.position;
            if(this.options.position < 0){
                this.options.position = this.options.maxPosition
            }
            this.wrap.style.transform = `translateX(-${this.options.position * this.options.widthSlide}%)`;
        }
        
    }
    nextSlider(){
        if(this.options.infinity || this.options.position < this.options.maxPosition){
            ++this.options.position;
            if(this.options.position > this.options.maxPosition){
                this.options.position = 0;
            }
            this.wrap.style.transform = `translateX(-${this.options.position * this.options.widthSlide}%)`
        }
    }
    addArrow(){
        
        
        this.prev = document.createElement('button');
        this.prev.textContent = '<';
        this.next = document.createElement('button');
        this.next.textContent = '>';
        this.prev.className = 'sliderCarousel_prev';
        this.next.className = 'sliderCarousel_next';
        this.wrap.parentNode.prepend(this.prev);
        this.wrap.parentNode.prepend(this.next);
    }
    responsiveInit(){
        const slidesToShowDefault = this.slidesToShow;
        const allResponsive = this.responsive.map(item => item.breakpoint)
        const maxResponsive = Math.max(...allResponsive);
        const checkResponsive = () => {
            const widthWindow = document.documentElement.clientWidth;
            if(widthWindow < maxResponsive){
                for (let i = 0; i<allResponsive.length; i++){
                    if(widthWindow < allResponsive[i]){
                        this.slidesToShow = this.responsive[i].slidesToShow;
                        this.options.widthSlide = Math.floor(100/this.slidesToShow);
                        this.addStyle();
                    }
                }
            }else{
                this.slidesToShow = slidesToShowDefault;
                this.options.widthSlide = Math.floor(100/this.slidesToShow);
                this.addStyle();
            }
        };
        checkResponsive();
        window.addEventListener('resize', checkResponsive);
    }

}
export default SliderCarousel;