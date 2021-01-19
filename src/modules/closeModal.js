const closeModal = (target, form) => {
    if(target.className.match(/close[-btn_icon]/) || !target.closest('.form-wrapper')){
        form.style.display = 'none';
    };
}
export default closeModal;