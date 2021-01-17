const formHandler= () => {
    const forms = document.querySelectorAll('form');
    [...forms].forEach((item) => {
        item.addEventListener('submit', (e) => {
            e.preventDefault();
            const inputs = item.querySelectorAll('input');
            //добавляем спиннер и текст ошибки на стр
            const loader = document.createElement('div');
            loader.classList.add('sk-three-bounce');
            const dot = document.createElement('div');
            dot.classList.add('sk-bounce-dot');
            loader.appendChild(dot);
            let dot2 = dot.cloneNode(true);
            let dot3 = dot.cloneNode(true);
            loader.appendChild(dot2);
            loader.appendChild(dot3);

            const thanks = document.getElementById('thanks'),
                h4 = thanks.querySelector('h4'),
                p = thanks.querySelector('p');

            const popupClose = () =>{
                const popups = document.querySelectorAll('.popup');
                popups.forEach(popup=>{
                popup.style.display = 'block' ? popup.style.display = 'none' : popup.style.display ='';
                thanks.style.display = 'block';
                });
                inputs.forEach(item=>item.value = '');
            }
            item.appendChild(loader);
            const formdata = new FormData(item);
            const body = {};
            formdata.forEach((val, key) => {
                body[key] = val;
            });
            postData(body)
                .then(response => {
                    if(response.status !== 200){
                        throw new Error('Заявка не отправлена')
                    }
                    setTimeout(()=>{
                        loader.remove();
                        popupClose();
                    }, 1500);  
                })
                .catch((error) => {
                    console.error(error);
                    setTimeout(()=>{
                        loader.remove();
                        thanks.style.display = 'block';
                        h4.textContent = ':('
                        p.textContent = ' Что-то пошло не так...'
                        popupClose();
                    }, 1500);   
                })
        })
    });
            const postData = (body) => {
            return fetch('./server.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
            });
        };


        //validation
        document.addEventListener('input', () => {
        let allNames = document.querySelectorAll('input[name="name"]');
            [...allNames].forEach(name=>{
                name.value =  name.value.replace(/[^а-яё ]/gi, '');
            })
        })

}

export default formHandler;