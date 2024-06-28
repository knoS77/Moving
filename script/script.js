// burger menu
let burger = document.querySelector('.burger');
let nav = document.querySelector('.nav ul');
// Делегирование
let headContainer = document.querySelector('.header__container');

headContainer.addEventListener('click', burgerMenu);
function burgerMenu(event){
    if (event.target.closest('.burger')){
        burger.classList.toggle('active');
        nav.classList.toggle('open');
    };
    if (!event.target.closest('.active')){
        burger.classList.remove('active');
        nav.classList.remove('open');
    };
};






// Табы
let tabItem = document.querySelectorAll('.tab-item');
let tabContainer  = document.querySelector('.tabs__container');
tabItem.forEach(button => {
    button.addEventListener('click', () => {
      document.querySelector('.tab-item.tab-active').classList.remove('tab-active');
      button.classList.add('tab-active');
    });
});



// <section 4>
function clickActive1(){
    let dots = document.getElementById('dots');
    let more = document.getElementById('more');
    let read = document.getElementById('read');
    

    if (dots.style.display === 'none'){
        dots.style.display = 'inline';
        read.innerHTML = 'Читать Полностью';
        more.style.display = 'none';

    } else{
        dots.style.display = 'none';
        read.innerHTML = 'Читать Меньше';
        more.style.display = 'block';
    }
}
function clickActive2(){
    let dotsTwo = document.getElementById('dots2');
    let moreTwo = document.getElementById('more2');
    let readTwo = document.getElementById('read2');
    

    if (dotsTwo.style.display === 'none'){
        dotsTwo.style.display = 'inline';
        readTwo.innerHTML = 'Читать Полностью';
        moreTwo.style.display = 'none';

    } else{
        dotsTwo.style.display = 'none';
        readTwo.innerHTML = 'Читать Меньше';
        moreTwo.style.display = 'block';
    }
}
function clickActive3(){
    let dotsThree = document.getElementById('dots3');
    let moreThree = document.getElementById('more3');
    let readThree = document.getElementById('read3');
    

    if (dotsThree.style.display === 'none'){
        dotsThree.style.display = 'inline';
        readThree.innerHTML = 'Читать Полностью';
        moreThree.style.display = 'none';

    } else{
        dotsThree.style.display = 'none';
        readThree.innerHTML = 'Читать Меньше';
        moreThree.style.display = 'block';
    }
}
function clickActive4(){
    let dotsFour = document.getElementById('dots4');
    let moreFour = document.getElementById('more4');
    let readFour = document.getElementById('read4');
    if (dotsFour.style.display === 'none'){
        dotsFour.style.display = 'inline';
        readFour.innerHTML = 'Читать Полностью';
        moreFour.style.display = 'none';
    } else{
        dotsFour.style.display = 'none';
        readFour.innerHTML = 'Читать Меньше';
        moreFour.style.display = 'block';
    }
}
function clickActive5(){
    let dotsFour = document.getElementById('dots5');
    let moreFour = document.getElementById('more5');
    let readFour = document.getElementById('read5');

    if (dotsFour.style.display === 'none'){
        dotsFour.style.display = 'inline-block';
        readFour.innerHTML = 'Читать Полностью';
        moreFour.style.display = 'none';

     }else{
        dotsFour.style.display = 'none';
        readFour.innerHTML = 'Читать Меньше';
        moreFour.style.display = 'block';
 }
     
}

function clickActive6(){
    let dotsFour = document.getElementById('dots6');
    let moreFour = document.getElementById('more6');
    let readFour = document.getElementById('read6');

    if (dotsFour.style.display === 'none'){
        dotsFour.style.display = 'inline';
        readFour.innerHTML = 'Читать Полностью';
        moreFour.style.display = 'none';

    } else{
        dotsFour.style.display = 'none';
        readFour.innerHTML = 'Читать Меньше';
        moreFour.style.display = 'block';
    }
}


// Показать ещё
let btn = document.querySelector('.reviews__button');
btn.onclick = function(){
    let div = document.getElementById('newpost');
    let divTwo = document.getElementById('newpost2');
    let divThree = document.getElementById('newpost3');
    if (div.style.display !== 'none') {
        div.style.display = 'none';
        btn.innerHTML = 'Все отзывы'
        }
        else {
            div.style.display = 'block';
            btn.innerHTML = 'Скрыть';
    }

    if (divTwo.style.display !== 'none') {
        divTwo.style.display = 'none';
        btn.innerHTML = 'Все отзывы'
        }
        else {
            divTwo.style.display = 'block';
            btn.innerHTML = 'Скрыть';
    }

    if (divThree.style.display !== 'none') {
        divThree.style.display = 'none';
        btn.innerHTML = 'Все отзывы'
        }
        else {
            divThree.style.display = 'block';
            btn.innerHTML = 'Скрыть';
    }
    
};



