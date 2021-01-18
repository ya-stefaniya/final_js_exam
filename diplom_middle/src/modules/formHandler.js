const formHandler= () => {
    const forms = document.querySelectorAll('form');

    [...forms].forEach((item) => {

        item.addEventListener('submit', (e) => {
            e.preventDefault();
            const loader = document.createElement('div'),
                thanks = document.getElementById('thanks'),
                h4 = thanks.querySelector('h4'),
                p = thanks.querySelector('p'),
                pm = document.createElement('p');
            let checkbox = false;
            
            const goWrong = () =>{
                thanks.style.display = 'block';
                h4.textContent = ':('
                p.textContent = ' Что-то пошло не так...'
            }

            const sendForm = () =>{
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
            const popupClose = () =>{
                const popups = document.querySelectorAll('.popup');
                popups.forEach(popup=>{
                popup.style.display = 'block' ? popup.style.display = 'none' : popup.style.display ='';
                thanks.style.display = 'block';
                });
                item.reset();
                loader.remove();
            }
            const message = (item, type) =>{
                pm.classList.add('message');
                pm.style.fontSize = '16px';
                pm.style.color= 'red'; 
                type === 'checkbox' ? pm.innerHTML = 'Нужно поставить галочку!' :
                pm.innerHTML = 'Нужно выбрать зал!'
                item.appendChild(pm);
                if(item.childNodes.length > 14){
                    item.removeChild(pm);
                }
            }
            const checkBox = () => {
                const allInputs = item.querySelectorAll('input'); 
                allInputs.forEach(input => {
                    if(input.type === 'checkbox' || (input.type === 'radio')){
                        input.setAttribute('required', true)
                        input.addEventListener('input', ()=>{
                            if(input.checked)
                            pm.remove();
                        })        
                        if(input.checked){
                            checkbox = true;
                            pm.remove();
                            sendForm();
                        } else {
                            message(item, input.type)
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
                    }, 1500);  
                })
                .catch((error) => {
                    console.error(error);
                    setTimeout(()=>{
                        loader.remove();
                        goWrong();
                        popupClose();
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


        ///запрет на ввод англ букв и цифр
        document.addEventListener('input', () => {
        let allNames = document.querySelectorAll('input[name="name"]');
            [...allNames].forEach(name=>{
                name.value =  name.value.replace(/[^а-яё ]/gi, '');
            })
        })

}

export default formHandler;