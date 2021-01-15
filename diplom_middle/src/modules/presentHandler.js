const presentHandler = () => {
    try{
        const gift = document.querySelector('.fixed-gift'),
            giftModal = document.querySelector('#gift');

            gift.addEventListener('click',()=>{
                giftModal.style.display = 'block';
                gift.style.display = 'none';
            })

            giftModal.addEventListener('click', (e)=>{
                let target = e.target;
                if(target.className.match(/close[-btn_icon]/) || !target.closest('.form-wrapper')){
                    giftModal.style.display = 'none';
                }                    
            })

    }catch(error){}
}

export default presentHandler;
