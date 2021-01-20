const menuClubs = ()=>{
    const clubsList = document.querySelector('.clubs-list'),
        head = clubsList.querySelector('p'),
        ul = clubsList.querySelector('ul');
        
    const toggleMenu = () => {
        ul.style.display === 'block' ? ul.style.display = '' : ul.style.display = 'block';
    }
    document.addEventListener('click', (e)=>{
        e.target.closest('.clubs-list') ? e.target.closest('p') ? toggleMenu() : '' : 
        ul.style.display === 'block' ?  ul.style.display = '' : '';
    })
    
}
export default menuClubs;