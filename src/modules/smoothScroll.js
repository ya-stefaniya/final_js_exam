
const smoothScroll = () => {

    const menu = document.querySelector('.top-menu'),
        popupMenu = document.querySelector('.popup-menu'),
        popupMenuLinks = popupMenu.querySelectorAll("ul>li>a"),
        links = menu.querySelectorAll("ul>li>a");
        
    const clickHandler = (e) =>{
        e.preventDefault();
        let target = e.target;
        target = target.closest('a').getAttribute("href");
        if(target === 'index.html#clubs') window.location.pathname = '/';
        const offsetTop = document.querySelector(target).offsetTop;
        scroll({
            top: offsetTop,
            behavior: "smooth"
        });
    }

    for (const link of links) {
        link.addEventListener("click", clickHandler);
    }
    for (const link of popupMenuLinks) {
        link.addEventListener("click", clickHandler);
    }

}
export default smoothScroll;