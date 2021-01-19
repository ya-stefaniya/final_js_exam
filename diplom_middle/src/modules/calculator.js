const calculator = ()=>{
    try{
        const ajax = (link = 'mozaika') => {
            const request = new XMLHttpRequest();  
            request.open('GET', `./${link}.html`);
            request.addEventListener('readystatechange', () => {
                if (request.readyState == 4 && request.status == 200) {
                    const doc = new DOMParser().parseFromString(request.responseText, "text/html");  // преобразовать текст в HTML
                    const cardsTypes = doc.querySelector('.cards-types');
                    getCardType(cardsTypes);
                }
            });
            
            request.send(null);
        }
        ajax();
        const cardOrderForm = document.querySelector('#card_order'), // на странице клуба, где все данные
            mozaika = cardOrderForm.querySelector('#card_leto_mozaika'),
            schelkovo = cardOrderForm.querySelector('#card_leto_schelkovo'),
            time = cardOrderForm.querySelector('.time'), //в калькуляторе выбор времени
            priceTotal = document.querySelector('#price-total'), //в калькуляторе общая сумма
            inputPromo = document.querySelector('input[placeholder="Промокод"]');// поле для ввода промокода
            let cost;
    
    
        const getCardType = (cardsTypes) => {
        try{
            const inputsTime = time.querySelectorAll('input[name="card-type"]'); // все импуты с месяцами в калькуляторе
            const inputsCardTypes = cardsTypes.querySelectorAll('input[name="card-type"]');// все импуты с месяцами в клубе
    
            //для каждого импута с продолжительностью карты
            for(let i = 0; i < inputsTime.length; i++){
                let input = inputsTime[i];
                //если выбран
                if(input.checked){
                    inputsCardTypes.forEach(card => {
                        let newInput = card.value.replace(/s/, '');
                        if(input.value === newInput){
                            //сумма нах-ся в label
                            const label = cardsTypes.querySelector(`label[for="${card.id}"]`);
                            //убираем ковычки
                            cost = label.querySelector('.cost').innerText.replace(/i/, '');
                            priceTotal.innerText = cost;                            
                        }
                    })
                }
                const promo = () => {
                    if(inputPromo.value){
                        if(inputPromo.value.toUpperCase() === 'ТЕЛО2020'){
                            const result = Math.floor(+cost / 100 * 30);
                            priceTotal.innerText = +cost - result;
                        }else{
                            priceTotal.innerText = cost;
                        }
                    }
                }
                promo()
                inputPromo.addEventListener('keyup', promo);
                
                
            }
        }catch(e){}
    }
        
        cardOrderForm.addEventListener('change', e => {
            let target = e.target;
            if(target.name === 'card-type'){
                if(mozaika.checked){
                    ajax(mozaika.value)
                }else if(schelkovo.checked){
                    ajax(schelkovo.value);
                }
            }else if(target.matches('#card_leto_mozaika')){
                ajax('mozaika');
            }else if(target.matches('#card_leto_schelkovo')){
                ajax('schelkovo');
            }
        });
    }catch(e){}
}
export default calculator;