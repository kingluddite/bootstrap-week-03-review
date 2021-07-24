console.log('js is working');

const myBtnEl = document.querySelector('.my-button');
const myTxtEl = document.querySelector('.my-text');

function swapSomeText() {
   // replace text
   myTxtEl.textContent = myBtnEl.getAttribute('data-whatever');
   
}

// TODO add event to capture click
myBtnEl.addEventListener('click', swapSomeText);