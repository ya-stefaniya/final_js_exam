const sliderGallery = () => {

    const slider = document.querySelector('.gallery-slider');
    let slide = slider.querySelectorAll('.slide');
    let interval;
    let currentSlide = 0; 
    //slide[1].classList.add('active');
    
    slide.forEach(slide => {
        slide.style.position = 'absolute';
        if(!slide.classList.contains('active')){
            slide.style.opacity = '0';
        }
    });

    const addDot = () => {
        let ul = document.createElement('ul');
        ul.classList.add('slider-dots');
        slider.append(ul);
        for (let i = 0; i < slide.length; i++){
            let li = document.createElement('li');
            li.classList.add('dot');
            ul.append(li);
        }
        const allLi = ul.querySelectorAll('li');
        allLi[0].classList.add('dot-active');
    };
    addDot();
    const dots = document.querySelectorAll('.dot');


    const prevSlide = (elem, index, strClass) => { 
        if(elem.length == currentSlide){
            index = 0;
            currentSlide = 0
        }
        elem[index].classList.remove(strClass);
    };

    const nextSlide = (elem, index, strClass) =>{
        //без этого костыля не листает вперед после последнего слайда
        if(elem.length == currentSlide){
            index = 0;
            currentSlide = 0
        }
        elem[index].classList.add(strClass);
    };
    const autoPlaySlide = () =>{
        prevSlide(slide, currentSlide, 'active');
        prevSlide(dots, currentSlide, 'dot-active');
        currentSlide++;
        //дошли до конца => на первый слайд
        if(currentSlide >= slide.length){
            currentSlide=0;
        }
        nextSlide(slide, currentSlide, 'active');
        nextSlide(dots, currentSlide, 'dot-active');

    }
    const startSlide = (time = 4000) =>{
        interval = setInterval(autoPlaySlide, time);
    };
    startSlide();

    slider.addEventListener('click' , (e) =>{
        e.preventDefault();
        let target = e.target;

        prevSlide(slide, currentSlide, 'active');
        prevSlide(dots, currentSlide, 'dot-active');

        if(target.closest('.next')){
            currentSlide++
        } else if (target.closest('.prev')){
            currentSlide--
        }
        if(currentSlide>=slide.length){
            currentSlide === 0;
        } else if (currentSlide<0){
            currentSlide = slide.length-1;
        } else if (target.closest('.dot')){
            dots.forEach((elem, i) => {
                if(elem === target){
                    currentSlide = i;
                }
            })
        }
        nextSlide(slide, currentSlide, 'active');
        nextSlide(dots, currentSlide, 'dot-active');
    });
    const stopSlide = () =>{
        clearInterval(interval);
    };

    slider.addEventListener('mouseover', (e) =>{
        if(e.target.closest('.prev, .next, .dot')){
            stopSlide();
        }
    })
    slider.addEventListener('mouseout', (e) =>{
        if(e.target.closest('.prev, .next, .dot')){
            startSlide();
        }
    })

};

export default sliderGallery;