const projects = document.getElementById('projects-grid-js');
const showAll = document.getElementById('show-all');
const showLess = document.getElementById('show-less');
const cardId = document.querySelectorAll('.card');

const buttonShow = () =>{
    showLess.style.display = 'none';
    showAll.addEventListener('click', ()=>{
            cardId.forEach(card => card.style.display = 'block');
            showAll.style.display = 'none';
            showLess.style.display = 'inline-block'
    }
    )
    showLess.addEventListener('click', ()=>{
        cardId.forEach(card => card.style.display = 'none');
            showLess.style.display = 'none';
            showAll.style.display = 'inline-block'
    })
}
buttonShow();


/** 
 * Seleccion por Id:
 * 
 * La necesidad de usar un condicional depende del contexto y de lo que se esta tratando de lograr.
 * En el caso de un elemento Id, los condicionales pueden ser mas eficientes porque sabes 
 * que solo hay un elemento y se puede verificar directamente su estado actual.
 * En un querySelector All es mas eficiente usar un forEch porque se necesita iterar sobre cada elemento individualmmente.
 * showAll.addEventListener('click', ()=>{
        if(cardId.style.display === 'none' || cardId.style.display === ''){
            cardId.forEach(card => card.style.display = 'block');
            showAll.style.display = 'none';
            showLess.style.display = 'inline-block'
        }
    }
    )
    showLess.addEventListener('click', ()=>{
        if(cardId.style.display !== 'block' || cardId.style.display !== ''){
            cardId.style.display = 'none';
            showLess.style.display = 'none';
            showAll.style.display = 'inline-block'
        }
    }) */