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
        document.addEventListener('click', e =>{
            let pop = e.target.closest('.popup');
                if(pop) closeModal(e.target, pop);
        })

        head.addEventListener('click', (e)=>{
            if(e.target.dataset.popup)
            openModal(e.target.dataset.popup.slice(1));
        })
        

}
export default popup;