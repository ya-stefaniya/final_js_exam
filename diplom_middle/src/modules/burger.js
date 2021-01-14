const burgerCreate = ()=>{
    const popupMenu = document.querySelector('.popup-menu'),
        burgetBtn = document.querySelector('.menu-button img');
        
        burgetBtn.addEventListener('click', () =>{
            popupMenu.style.display = "flex";
        })

        popupMenu.addEventListener('click', (e)=>{
            let target = e.target;
            if(target.closest('.close-menu-btn') || target.closest('ul li a')){
                popupMenu.style.display = "none";
            }
        })

//fix burger btn while scrolling
    window.addEventListener("scroll", ()=>{
        const topMenu = document.querySelector('.top-menu');
            let scroll = window.pageYOffset;
            if (scroll > topMenu.offsetTop) {
                topMenu.style.position = 'fixed';
            } else {
                topMenu.style.position = 'relative';
            }
    });
}
export default burgerCreate;