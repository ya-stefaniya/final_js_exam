const formHandler= () => {
    const forms = document.querySelectorAll('form');

    [...forms].forEach((item) => {

        item.addEventListener('submit', (e) => {

            e.preventDefault();

            const loader = document.createElement('div'),
                thanks = document.getElementById('thanks'),
                h4 = thanks.querySelector('h4'),
                p = thanks.querySelector('p'),
                allInputs = item.querySelectorAll('input'),
                priceTotal = document.querySelector('#price-total'),
                pm = document.createElement('p');
            let checkbox = false;
            
            const goWrong = () =>{
                //сообщение если error
                thanks.style.display = 'block';
                h4.textContent = ':('
                p.textContent = ' Что-то пошло не так...'
            }

            const sendForm = () =>{
                //добавить три точки загрузки
                loader.classList.add('sk-three-bounce');
                const dot = document.createElement('div');
                dot.classList.add('sk-bounce-dot');
                loader.appendChild(dot);
                let dot2 = dot.cloneNode(true);
                let dot3 = dot.cloneNode(true);
                loader.appendChild(dot2);
                loader.appendChild(dot3);
                item.appendChild(loader);
            }                
            //закрываем модальные и обнуляем формы
            const popupClose = () =>{
                const popups = document.querySelectorAll('.popup');
                popups.forEach(popup=>{
                    popup.style.display = 'block' ? popup.style.display = 'none' : popup.style.display ='';
                    thanks.style.display = 'block';
                    setTimeout(() => {
                        thanks.style.display = 'none';
                    }, 3500);
                });
                item.reset();
                loader.remove();
            }
            const message = (item, type) =>{
                pm.classList.add('message');
                pm.style.cssText = 'font-size:16px; color: red;'
                type === 'checkbox' ? pm.innerHTML = 'Нужно поставить галочку!' :
                pm.innerHTML = 'Нужно выбрать клуб!'
                const personalData =  item.querySelector('.personal-data');
                if(personalData) {
                    personalData.appendChild(pm);
                } else {
                    item.appendChild(pm);
                }
            } 
            const checkBox = () => {                
                //последняя форма 
                if(item.id === 'footer_form'){
                    if(allInputs[0].checked || allInputs[1].checked) {
                        pm.remove();
                        checkbox = true;
                        sendForm();
                        return;
                    } else {
                        const ch = document.querySelector('.message');
                        if(!ch) message(item, 'radio');
                        checkbox = false;
                    }
                }
                allInputs.forEach(input => {
                    if(input.type === 'checkbox'){
                        input.addEventListener('input', ()=>{
                            if(input.checked )
                            pm.remove();
                            checkbox = true;
                        })        
                        if(input.checked ){
                            checkbox = true;
                            pm.remove();
                            sendForm();
                        } else {
                            
                            const ch = document.querySelector('.message');
                            if(!ch) message(item, input.type);
                            checkbox = false;
                        }
                    }
                })
            }
            checkBox();
            const formdata = new FormData(item);
            
            const body = {};
            formdata.forEach((val, key) => {
                body[key] = val;
            });
            if(checkbox){
                postData(body)
                .then(response => {
                    if(response.status !== 200){
                        throw new Error('Заявка не отправлена')
                    }
                    setTimeout(()=>{
                        checkBox();
                        popupClose();
                        priceTotal.textContent = '1999';
                        item.reset();
                    }, 1500);  
                })
                .catch((error) => {
                    console.error(error);
                    setTimeout(()=>{
                        loader.remove();
                        goWrong();
                        popupClose();
                        item.reset();
                        try{
                        priceTotal.textContent = '1999';
                        } catch(e) {}
                    }, 1500);   
                })
            }
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
        document.addEventListener('input', () => {
            let allNames = document.querySelectorAll('input[name="name"]');
                [...allNames].forEach(name=>{
                    if(name.getAttribute("placeholder") === 'Промокод'){
                        name.value =  name.value.replace(/[^а-яё\d ]/gi, '');
                    } else {
                        name.value =  name.value.replace(/[^а-яё ]/gi, '');
                        name.value.length < 2 ? 
                        name.setCustomValidity('Имя должно состоять минимум из 2 букв'):
                        name.setCustomValidity('');
                    }
                })
                let allphones = document.querySelectorAll('input[name="phone"]');
                [...allphones].forEach(phone=>{
                    phone.value.length < 11 ? 
                    phone.setCustomValidity('Телефон должно состоять минимум из 11 цифр'):
                    phone.setCustomValidity('');
                })
    });
    
}


export default formHandler;