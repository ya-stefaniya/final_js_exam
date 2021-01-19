import closeModal from './closeModal';

const presentHandler = () => {
    try{
        const gift = document.querySelector('.fixed-gift'),
            giftModal = document.querySelector('#gift');

            gift.addEventListener('click',()=>{
                giftModal.style.display = 'block';
                gift.style.display = 'none';
            })

            giftModal.addEventListener('click', (e)=>{
                closeModal(e.target, giftModal);            
            })

    }catch(error){}
}

export default presentHandler;
