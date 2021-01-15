//fix burger btn while scrolling && arrowFix
const scrollHandler = ()=>{
    window.addEventListener("scroll", ()=>{
    const topMenu = document.querySelector('.top-menu'),
        arrow = document.querySelector('#totop'),
        headSlider= document.querySelector('.head-slider');
        let scroll = window.pageYOffset;

        if(topMenu){
            scroll > headSlider.offsetTop ? (topMenu.style.position = 'fixed') &&  (arrow.style.display = 'inline-block') : (topMenu.style.position = 'relative') && (arrow.style.display = 'none');
        }
    });
};

export default scrollHandler;