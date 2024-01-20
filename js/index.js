const projects = document.getElementById('projects-grid-js');
const showAll = document.getElementById('show-all');
const showLess = document.getElementById('show-less');
const cardId = document.getElementById('card');

const buttonShow = () =>{
    showLess.style.display = 'none';
    showAll.addEventListener('click', ()=>{
        if(cardId.style.display === 'none' || cardId.style.display === ''){
            cardId.style.display = 'block';
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
    })
}
buttonShow();


