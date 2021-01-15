import closeModal from './closeModal';

const popup = ()=>{
    const head = document.querySelector('.head');

//открытие и закрытие модального окна на основе его id
    const openModal = (id) =>{
        const popups = document.querySelectorAll('.popup');
        [...popups].forEach(popup=>{
            popup.id === id ? popup.style.display = 'block' : '';  
            
            popup.addEventListener('click', (e)=>{
                closeModal(e.target, popup);
            })
        })
    }

        head.addEventListener('click', (e)=>{
            let target = e.target;
            if(target.dataset.popup)
            openModal(target.dataset.popup.slice(1));
        })

}
export default popup;