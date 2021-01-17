//fix burger btn while scrolling && arrowFix
const scrollHandler = ()=>{
    const topMenu = document.querySelector('.top-menu'),
    arrow = document.querySelector('#totop'),
    headSlider= document.querySelector('.head-slider');
    let scroll;
    arrow.style.display = 'none';

    const burgerArrowFix = () =>{
        scroll = window.pageYOffset;
            scroll > headSlider.offsetTop ? (topMenu.style.position = 'fixed') &&  (arrow.style.display = 'inline-block') : (topMenu.style.position = '') && (arrow.style.display = 'none');
    }
    window.addEventListener("scroll", burgerArrowFix);
};

export default scrollHandler;