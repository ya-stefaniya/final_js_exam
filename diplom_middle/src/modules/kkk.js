///AJAX
const sendForm = () => {
    // Получаем все элменты которые нужны на данный момент
    const errorMessage = 'Что-то пошло не так....';
    const loadMessage = 'Загрузка....';
    const thanksPopup = document.getElementById('thanks');

    const form1 = document.getElementById('form1');
    const form2 = document.getElementById('form2');
    const bannerForm = document.getElementById('banner-form');
    const cardOrder = document.getElementById('card_order');
    const footerForm = document.getElementById('footer_form');

    // Саздем блок в который будет помещено сообщение о загрузке
    const statusMsg = document.createElement('div');
    statusMsg.style.cssText = 'font-size:1.5rem; color: grey; margin:10px auto 0';

    // Вешаем событие submit на весь документ и делегированием будем передавать нужную форму
    document.addEventListener('submit', (e) => {
        
        // отмена стандартного поведения браузера
        e.preventDefault();
        let target = e.target;

        // Функция которая займется отправкой формы и вовыда нужного сообщение на экран
        const sendForm = (form) => {

            // При нажатии на сабмит показываем сообщение загрузки
            statusMsg.textContent = loadMessage;
            form.appendChild(statusMsg);

            // Доп функции с показом модального окна если отправка удачная или с выводом ошибки
            const sendMsg = (form, error) => {

                // Если ошибка то сразу показываем модалку с ошибкой
                if(error){
                    const header = thanksPopup.querySelector('h4');
                    const p = thanksPopup.querySelector('p');
                    thanksPopup.style.display = 'block';
                    header.textContent = 'Ошибка!';
                    p.textContent = error;
                }
                
                // Функция закрытия всех модалок 
                const closeModals = () => {
                    thanksPopup.style.display = 'none';
                    
                    const popup = document.querySelectorAll('.popup');
                    popup.forEach(item => {
                        if(item.style.display === "block"){
                            item.style.display = 'none';
                        }
                    })
                    
                }
                // Удаляем сообщение о загрузке
                form.removeChild(statusMsg);

                // Показываем сообщение об удачной отправке
                thanksPopup.style.display = 'block';

                // Делегированием закрываем все модалки / если нажали на кнопку ОК или на крестик или мимо окна
                thanksPopup.addEventListener('click', (e) =>{
                    let target = e.target;
                    if(target.closest('.close-btn') || target.closest('.close-form')){
                        closeModals();
                    }else{
                        target = target.closest('.form-wrapper');
                        if(!target){
                            closeModals();
                        }
                    }
                })
            };

            // Создаем новый экземпляр формДата
            const formData = new FormData(form);
            const body = {};

            // Перебор ФормДата и пушим все объект для большего понимания что пришло с формы
            formData.forEach((val, key) => {
                body[key] = val;
            });

            // Функция обращения на сервер
            postData(body)
                .then(response => {
                    if(response.status !== 200){
                        throw new Error('Заявка не отправлена')
                    }
                    sendMsg(form);
                }).catch((error) => {
                    console.log(error);
                    sendMsg(form, errorMessage);
                });
        
            form.reset();
        }

        // Вызываем  функцию отправки формы 
        const submitForm = (form) => {

            // Изначально удаляем блок с показом что нужно отметить чекбокс
            const errorBlock = form.querySelector('.error-block');
            if(errorBlock){
                errorBlock.remove();
            }

            // проверяем есть у формы чекбокс
            const checkbox = form.querySelector('input[type="checkbox"]');
            if(checkbox){

                //проверяем был ли нажат чекбокс
                if(checkbox.checked){
                    // Все ок, можем отправлять форму
                    sendForm(form);
                }else if(!checkbox.checked){  
                    // Если чекбокс у формы есть а он не нажат то покажем уведомление что нужно нажать чекбокс
                    const div = document.createElement('div');  
                    div.className = 'error-block';
                    div.style.cssText = 'font-size: 1.2rem; color:red; margin:5px auto';
                    div.innerHTML = 'Для отправки заявки нужно согласиться на обработку данных!';
                    form.insertAdjacentElement('beforeend', div);
                }
            }else if(!checkbox){

                // Специльно для формы футера у которой нету чекбокса на соглашение с обраткой данных

                // получаем чекбоксы клубов и проверяем был ли какой то выбран§
                const inputCheck = form.querySelectorAll('input[name="club-name"]');
                for(let i = 0; i < inputCheck.length; i++){
                    let input = inputCheck[i];
                    if(input.checked){
                        // если клуб выбран то удалю класс с красной отметкой чекбоксов с клубами
                        inputCheck[0].parentNode.classList.remove('red-inp');
                        inputCheck[1].parentNode.classList.remove('red-inp');

                        //ну и отправим форму
                        sendForm(form);
                    }else if(!input.checked){
                        // а если чекбос ни один не выбран то добавим красную отметку
                        input.parentNode.classList.add('red-inp');
                    }
                }
            }
        };

        // Делегированием определим какая форма выбрана (на основе этого и будем проверять есть ли чекбосы или нету)
        if(target.contains(form1)){
            submitForm(form1);
        }else if(target.contains(form2)){
            submitForm(form2);
        }else if(target.contains(bannerForm)){
            submitForm(bannerForm);
        }else if(target.contains(cardOrder)){
            submitForm(cardOrder);
        }else if(target.contains(footerForm)){
            submitForm(footerForm);
        }
    
    });

        //Отправка на сервер
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
        
        for(let i = 0; i<allNames.length; i++){
            allNames[i].value =  allNames[i].value.replace(/[^А-Яа-яЁё ]/g, '');
            if(allNames[i].value.length < 2){
                allNames[i].setCustomValidity('Имя должно состоять минимум из 2 букв');
            }else{
                allNames[i].setCustomValidity('');
            }
        };
    });
};

export default sendForm;