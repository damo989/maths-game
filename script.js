let min = 1
let max = 10
p1 = ''
p2 = ''
p1.textContent = ''
p2.textContent = ''

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  }

function renderTick(){
    const tick = document.querySelector('#tick')
    const answerBox = document.querySelector('#answer')
    tick.style.display = 'block'
    answerBox.style.display = 'none' 
}

function renderInput(){
    const tick = document.querySelector('#tick')
    const answerBox = document.querySelector('#answer')
    tick.style.display = 'none'
    answerBox.style.display = 'block'
}

let renderProblem = function(){
    p1.textContent = ''
    p2.textContent = ''
    p1 = document.createElement('p')
    p2 = document.createElement('p')
    p1.textContent = getRandomInt(min, max)
    p2.textContent = getRandomInt(min, max)
    document.querySelector('#num-1').appendChild(p1)
    document.querySelector('#num-2').appendChild(p2)
    
    
    
}

const focusTextBox = function() {           
    document.getElementById("answer-input").focus();
  }

renderProblem()



document.querySelector('#answer').addEventListener('submit', function(e){
    e.preventDefault()
    number1 = Number(p1.textContent)
    number2 = Number(p2.textContent)
    console.log('hello' + number1 + number2)
    if (number1 + number2 == e.target.elements.checkAnswer.value){
        renderTick()
        setTimeout(renderProblem, 2000)
        setTimeout(renderInput, 2000)
        setTimeout(focusTextBox, 2000)
    }else{
        console.log('Wrong');
    }
    e.target.elements.checkAnswer.value = ''
})