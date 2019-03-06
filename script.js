let min = 1
let max = 10

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  }

function renderTick(){
    const tick = document.querySelector('#tick')
    tick.getElementsByClassName.display = 'block'
}

const p1 = document.createElement('p')
const p2 = document.createElement('p')
p1.textContent = getRandomInt(min, max)
p2.textContent = getRandomInt(min, max)
document.querySelector('#num-1').appendChild(p1)
document.querySelector('#num-2').appendChild(p2)


document.querySelector('#answer').addEventListener('submit', function(e){
    e.preventDefault()
    number1 = Number(p1.textContent)
    number2 = Number(p2.textContent)
    console.log(number1 + number2)
    if (number1 + number2 == e.target.elements.checkAnswer.value){
        renderTick()
    }else{
        console.log('Wrong');
    }
    e.target.elements.checkAnswer.value = ''
})