const numFirst = Math.ceil(Math.random() * 10);
const numSecond = Math.ceil(Math.random() * 10);

const questionMulti = document.querySelector('#question');
const formElement = document.querySelector('#form');
const inputElement = document.querySelector('#input-data');
const scoreElement = document.querySelector('#score');
const btnSubmit = document.querySelector('#submit-button');

let score = JSON.parse(localStorage.getItem('score'));

if(!score) {
  score = 0;
}

scoreElement.innerText = `score: ${score}`;

questionMulti.innerText = `What is ${numFirst} multiply by ${numSecond} ?`;

function multiply(num1, num2) {
  return num1 * num2;
}

const mult = multiply(numFirst, numSecond);

formElement.addEventListener('submit', () => {
  btnSubmit.classList.add('active');
  const userData = +inputElement.value;
  if( mult === userData) {
    score++;
    updateLocalStorage();
  }else {
    score--;
    updateLocalStorage();
  }
})

function updateLocalStorage() {
  localStorage.setItem('score', JSON.stringify(score))
}