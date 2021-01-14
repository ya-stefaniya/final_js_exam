import fadeIn from './fadeIn';
const handleBurger = ()=>{
    const popupMenu = document.querySelector('.popup-menu'),
        burgetBtn = document.querySelector('.menu-button img');
        //show on click
        burgetBtn.addEventListener('click', () =>{
            popupMenu.style.display = "flex";
            let opacity = 0, intervalID;
            fadeIn(popupMenu, opacity, intervalID);
        })
        
        popupMenu.addEventListener('click', (e)=>{
            let target = e.target;
            //hide on click to cross of links
            if(target.closest('.close-menu-btn') || target.closest('ul li a')){
            popupMenu.style.display = "none";
            }
        })

//fix burger btn while scrolling && arrowFix
    window.addEventListener("scroll", ()=>{
        const topMenu = document.querySelector('.top-menu'),
            arrow = document.querySelector('#totop'),
            clubs = document.querySelector('#clubs')
            let scroll = window.pageYOffset;
            scroll > (clubs.offsetTop-50) ? arrow.style.display = 'inline-block' : 
            arrow.style.display = 'none';
            scroll > topMenu.offsetTop ? topMenu.style.position = 'fixed' : topMenu.style.position = 'relative';
    });
}
export default handleBurger;