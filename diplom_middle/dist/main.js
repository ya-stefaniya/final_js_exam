(()=>{"use strict";const e=(t,o,s)=>{for(s=requestAnimationFrame(e);o<1;)o+=.05,t.style.opacity=o;cancelAnimationFrame(s)},t=e,o=(e,t)=>{!e.className.match(/close[-btn_icon]/)&&e.closest(".form-wrapper")||(t.style.display="none")};try{(()=>{const e=document.querySelector(".top-menu"),t=document.querySelector(".popup-menu").querySelectorAll("ul>li>a"),o=e.querySelectorAll("ul>li>a"),s=(document.getElementById("totop"),e=>{e.preventDefault();let t=e.target;t=t.closest("a"),t=t.getAttribute("href");const o=document.querySelector(t).offsetTop;scroll({top:o,behavior:"smooth"})});for(const e of o)e.addEventListener("click",s);for(const e of t)e.addEventListener("click",s)})(),(()=>{const e=document.querySelector(".clubs-list"),t=e.querySelector("ul");e.addEventListener("click",(()=>{"block"===t.style.display?t.style.display="":t.style.display="block"}))})(),(()=>{const e=document.querySelector(".top-menu"),t=document.querySelector("#totop"),o=document.querySelector(".head-slider");let s;t.style.display="none",window.addEventListener("scroll",(()=>{s=window.pageYOffset,s>o.offsetTop?(e.style.position="fixed")&&(t.style.display="inline-block"):(e.style.position="")&&(t.style.display="none")}))})(),(()=>{const e=document.querySelector(".head");document.addEventListener("click",(e=>{let t=e.target.closest(".popup");t&&o(e.target,t)})),e.addEventListener("click",(e=>{var t;e.target.dataset.popup&&(t=e.target.dataset.popup.slice(1),[...document.querySelectorAll(".popup")].forEach((e=>{e.id===t&&(e.style.display="block"),e.addEventListener("click",(t=>{o(t.target,e)}))})))}))})(),(()=>{const e=document.querySelector(".popup-menu");document.querySelector(".menu-button img").addEventListener("click",(()=>{e.style.display="flex",t(e,0,void 0)})),e.addEventListener("click",(t=>{let o=t.target;(o.closest(".close-menu-btn")||o.closest("ul li a"))&&(e.style.display="none")}))})(),(()=>{[...document.querySelectorAll("form")].forEach((t=>{t.addEventListener("submit",(o=>{o.preventDefault();const s=document.createElement("div"),n=document.getElementById("thanks"),i=n.querySelector("h4"),l=n.querySelector("p"),r=t.querySelectorAll("input"),a=document.querySelector("#price-total"),d=document.createElement("p");let c=!1;const p=()=>{s.classList.add("sk-three-bounce");const e=document.createElement("div");e.classList.add("sk-bounce-dot"),s.appendChild(e);let o=e.cloneNode(!0),n=e.cloneNode(!0);s.appendChild(o),s.appendChild(n),t.appendChild(s)},u=()=>{document.querySelectorAll(".popup").forEach((e=>{e.style.display=e.style.display="none",n.style.display="block",setTimeout((()=>{n.style.display="none"}),3500)})),t.reset(),s.remove()},h=(e,t)=>{d.classList.add("message"),d.style.fontSize="16px",d.style.color="red",d.innerHTML="checkbox"===t?"Нужно поставить галочку!":"Нужно выбрать клуб!";const o=e.querySelector(".personal-data");o?o.appendChild(d):e.appendChild(d)},m=()=>{if("footer_form"===t.id){if(r[0].checked||r[1].checked)return d.remove(),c=!0,void p();document.querySelector(".message")||h(t,"radio"),c=!1}r.forEach((e=>{"checkbox"===e.type&&(e.addEventListener("input",(()=>{e.checked&&d.remove(),c=!0})),e.checked?(c=!0,d.remove(),p()):(document.querySelector(".message")||h(t,e.type),c=!1))}))};m();const y=new FormData(t),v={};y.forEach(((e,t)=>{v[t]=e})),c&&e(v).then((e=>{if(200!==e.status)throw new Error("Заявка не отправлена");setTimeout((()=>{m(),u(),a.textContent="1999",t.reset()}),1500)})).catch((e=>{console.error(e),setTimeout((()=>{s.remove(),n.style.display="block",i.textContent=":(",l.textContent=" Что-то пошло не так...",u(),t.reset();try{a.textContent="1999"}catch(e){}}),1500)}))}))}));const e=e=>fetch("./server.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});document.addEventListener("input",(()=>{[...document.querySelectorAll('input[name="name"]')].forEach((e=>{"Промокод"===e.getAttribute("placeholder")?e.value=e.value.replace(/[^а-яё\d ]/gi,""):(e.value=e.value.replace(/[^а-яё ]/gi,""),e.value.length<2?e.setCustomValidity("Имя должно состоять минимум из 2 букв"):e.setCustomValidity(""))})),[...document.querySelectorAll('input[name="phone"]')].forEach((e=>{e.value.length<11?e.setCustomValidity("Телефон должно состоять минимум из 11 цифр"):e.setCustomValidity("")}))}))})(),(()=>{try{const e=document.querySelector(".fixed-gift"),t=document.querySelector("#gift");e.addEventListener("click",(()=>{t.style.display="block",e.style.display="none"})),t.addEventListener("click",(e=>{o(e.target,t)}))}catch(e){}})(),(()=>{try{const e=document.querySelector(".main-slider").querySelectorAll(".slide");let t=0;const o=(e,t)=>{e[t].style.display="none"},s=(e,t)=>{e[t].style.display="flex"};setInterval((()=>{o(e,t),t++,t>=e.length&&(t=0),s(e,t)}),4e3)}catch(e){}})(),(()=>{const e=document.querySelector(".gallery-slider");let t,o=e.querySelectorAll(".slide"),s=0;o.forEach((e=>{e.style.position="absolute",e.classList.contains("active")||(e.style.opacity="0")})),(()=>{let t=document.createElement("ul");t.classList.add("slider-dots"),e.append(t);for(let e=0;e<o.length;e++){let e=document.createElement("li");e.classList.add("dot"),t.append(e)}t.querySelectorAll("li")[0].classList.add("dot-active")})();const n=document.querySelectorAll(".dot"),i=(e,t,o)=>{e.length==s&&(t=0,s=0),e[t].classList.remove(o)},l=(e,t,o)=>{e.length==s&&(t=0,s=0),e[t].classList.add(o)},r=()=>{i(o,s,"active"),i(n,s,"dot-active"),s++,s>=o.length&&(s=0),l(o,s,"active"),l(n,s,"dot-active")},a=(e=4e3)=>{t=setInterval(r,e)};a(),e.addEventListener("click",(e=>{e.preventDefault();let t=e.target;i(o,s,"active"),i(n,s,"dot-active"),t.closest(".next")?s++:t.closest(".prev")&&s--,s>=o.length||(s<0?s=o.length-1:t.closest(".dot")&&n.forEach(((e,o)=>{e===t&&(s=o)}))),l(o,s,"active"),l(n,s,"dot-active")})),e.addEventListener("mouseover",(e=>{e.target.closest(".prev, .next, .dot")&&clearInterval(t)})),e.addEventListener("mouseout",(e=>{e.target.closest(".prev, .next, .dot")&&a()}))})(),(()=>{try{const e=(e="mozaika")=>{const t=new XMLHttpRequest;t.open("GET",`./${e}.html`),t.addEventListener("readystatechange",(()=>{if(4==t.readyState&&200==t.status){const e=(new DOMParser).parseFromString(t.responseText,"text/html").querySelector(".cards-types");a(e)}})),t.send(null)};e();const t=document.querySelector("#card_order"),o=t.querySelector("#card_leto_mozaika"),s=t.querySelector("#card_leto_schelkovo"),n=t.querySelector(".time"),i=document.querySelector("#price-total"),l=document.querySelector('input[placeholder="Промокод"]');let r;const a=e=>{try{const t=n.querySelectorAll('input[name="card-type"]'),o=e.querySelectorAll('input[name="card-type"]');for(let s=0;s<t.length;s++){let n=t[s];n.checked&&o.forEach((t=>{let o=t.value.replace(/s/,"");if(n.value===o){const o=e.querySelector(`label[for="${t.id}"]`);r=o.querySelector(".cost").innerText.replace(/i/,""),i.innerText=r}}));const a=()=>{if(l.value)if("ТЕЛО2020"===l.value.toUpperCase()){const e=Math.floor(+r/100*30);i.innerText=+r-e}else i.innerText=r};a(),l.addEventListener("keyup",a)}}catch(e){}};t.addEventListener("change",(t=>{let n=t.target;"card-type"===n.name?o.checked?e(o.value):s.checked&&e(s.value):n.matches("#card_leto_mozaika")?e("mozaika"):n.matches("#card_leto_schelkovo")&&e("schelkovo")}))}catch(e){}})(),new class{constructor({wrap:e,next:t,prev:o,position:s=0,slidesToShow:n=4,infinity:i=!1,responsive:l=[]}){e||console.warn('slider-carousel: Необходимо передать селектор, "wrap"!'),this.wrap=document.querySelector(e),this.main=this.wrap.parentNode,this.slides=document.querySelector(e).children,this.next=document.querySelector(t),this.prev=document.querySelector(o),this.slidesToShow=n,this.options={position:s,widthSlide:Math.floor(100/this.slidesToShow),infinity:i,maxPosition:this.slides.length-this.slidesToShow},this.responsive=l}init(){this.addClass(),this.addStyle(),this.prev&&this.next||this.addArrow(),this.controlSlider(),this.responsive&&this.responsiveInit()}addClass(){this.main.classList.add("sliderCarousel"),this.wrap.classList.add("sliderCarousel__wrap");for(let e of this.slides)e.classList.add("sliderCarousel__slide")}addStyle(){let e=document.getElementById("sliderCarousel-style");e||(e=document.createElement("style"),e.id="sliderCarousel-style"),e.textContent=`\n            .sliderCarousel{\n                overflow:hidden !important;\n                position:relative;\n            }\n            .sliderCarousel__wrap{\n                display:flex !important;\n                transition: transform .3s !important;\n                will-change: tranform !important;\n                padding: 0 !important;\n                margin: 0 25px !important;\n            }\n            .sliderCarousel__slide{\n                width: ${this.options.widthSlide}% !important;\n                flex: 0 0 ${this.options.widthSlide}% !important;\n                margin:0 auto  !important;\n                box-sizing:border-box !important;\n            }\n            .sliderCarousel_prev,\n            .sliderCarousel_next{\n                position: absolute;\n                top: 28%;\n                margin-top: -18px;\n                z-index: 100;\n                cursor: pointer;\n                display: block;\n                width: 36px;\n                height: 37px;\n                border-radius: 50%;\n                text-align: center;\n                border:none;\n            }\n            .sliderCarousel_next{\n                right: 0;\n                background: #f4c71b no-repeat center;\n            }\n            .sliderCarousel_prev{\n                left: 0;\n                background: #f4c71b  no-repeat center;\n            }\n            .sliderCarousel_prev:hover,\n            .sliderCarousel_next:hover,\n            .sliderCarousel_prev:focus,\n            .sliderCarousel_next:focus{\n                outline:none;\n            }\n        `,document.head.append(e)}controlSlider(){this.prev.addEventListener("click",this.prevSlider.bind(this)),this.next.addEventListener("click",this.nextSlider.bind(this))}prevSlider(){(this.options.infinity||this.options.position>0)&&(--this.options.position,this.options.position<0&&(this.options.position=this.options.maxPosition),this.wrap.style.transform=`translateX(-${this.options.position*this.options.widthSlide}%)`)}nextSlider(){(this.options.infinity||this.options.position<this.options.maxPosition)&&(++this.options.position,this.options.position>this.options.maxPosition&&(this.options.position=0),this.wrap.style.transform=`translateX(-${this.options.position*this.options.widthSlide}%)`)}addArrow(){this.prev=document.createElement("button"),this.prev.textContent="<",this.next=document.createElement("button"),this.next.textContent=">",this.prev.className="sliderCarousel_prev",this.next.className="sliderCarousel_next",this.wrap.parentNode.prepend(this.prev),this.wrap.parentNode.prepend(this.next)}responsiveInit(){const e=this.slidesToShow,t=this.responsive.map((e=>e.breakpoint)),o=Math.max(...t),s=()=>{const s=document.documentElement.clientWidth;if(s<o)for(let e=0;e<t.length;e++)s<t[e]&&(this.slidesToShow=this.responsive[e].slidesToShow,this.options.widthSlide=Math.floor(100/this.slidesToShow),this.addStyle());else this.slidesToShow=e,this.options.widthSlide=Math.floor(100/this.slidesToShow),this.addStyle()};s(),window.addEventListener("resize",s)}}({wrap:".services-slider",slidesToShow:4,infinity:!0,responsive:[{breakpoint:1024,slidesToShow:3},{breakpoint:768,slidesToShow:2},{breakpoint:576,slidesToShow:1}]}).init()}catch(e){}})();