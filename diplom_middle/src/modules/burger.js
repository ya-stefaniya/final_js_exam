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

}
export default handleBurger;