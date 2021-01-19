const menuClubs = ()=>{
    const clubsList = document.querySelector('.clubs-list'),
        ul = clubsList.querySelector('ul');
        
    const toggleMenu = () => {
        ul.style.display === 'block' ? ul.style.display = '' : ul.style.display = 'block';
    }
    clubsList.addEventListener('click', toggleMenu);
}
export default menuClubs;