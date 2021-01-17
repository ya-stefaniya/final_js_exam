const slider = () => {
    try{
        const mainSlider = document.querySelector('.main-slider'),
            slides = mainSlider.querySelectorAll('.slide');
        let curSlide = 0;
        const prevSlide = (elem, i) => {
            elem[i].style.display = 'none';
        };
        const nextSlide = (elem, i) => {
            elem[i].style.display = 'flex';
        };
        const autoPlay = () => {
            prevSlide(slides, curSlide);
            curSlide++;
            if(curSlide >= slides.length){
                curSlide = 0;
            }
            nextSlide(slides, curSlide);
        };
        const startSlide  = (time) => {
            setInterval(autoPlay, time);
        };
        startSlide(4000);
    }catch(e){}
}

export default slider;