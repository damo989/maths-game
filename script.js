let min = 1
let max = 11
p1 = ''
p2 = ''
p1.textContent = ''
p2.textContent = ''
let symbol = ''
numberArray = []

function addNumbers(){
    numberArray = []
    numberArray.push(getRandomInt(min, max))
    numberArray.push(getRandomInt(min, max))
    numberArray.sort((a, b) => b - a);
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  }

function renderTick(){
    const tick = document.getElementById('result')
    const answerBox = document.querySelector('#answer')
    tick.classList.add('tick')
    answerBox.style.display = 'none' 
}

function renderCross(){
    const cross = document.querySelector('#result')
    const answerBox = document.querySelector('#answer')
    cross.classList.add('cross')
    answerBox.style.display = 'none' 
}

function renderInput(){
    const tickOrCross = document.querySelector('#result')
    const answerBox = document.querySelector('#answer')
    if (tickOrCross.classList.contains('tick')){
        tickOrCross.classList.remove('tick')
    }
    else{
        tickOrCross.classList.remove('cross')
    }
    //tickOrCross.classList.toggle('tick')
    //tickOrCross.classList.toggle('cross')

    answerBox.style.display = 'block'
}

let renderProblem = function(){
    symbolPicker()
    p1.textContent = '' // Resets random number otherwise they keep concatanating 
    p2.textContent = ''// Resets random number otherwise they keep concatanating 
    p1 = document.createElement('p')
    p2 = document.createElement('p')
    addNumbers()
    p1.textContent = numberArray[0]
    p2.textContent = numberArray[1]
    document.querySelector('#num-1').appendChild(p1)
    document.querySelector('#num-2').appendChild(p2)
    document.getElementById('symbol').textContent = symbol
    
}

const randomOnetoTwo = function(){
    minrn = Math.ceil(1);
    maxrn = Math.floor(4);
    num = Math.floor(Math.random() * (maxrn - minrn)) + minrn; //The maximum is exclusive and the minimum is inclusive
    return num
}

function symbolPicker(){
    num = randomOnetoTwo()
    if (num === 1){
        symbol = '+'
    }else if (num === 2){
        symbol = "-"
    }else if (num === 3){
        symbol = "*"
    }else if (num === 4){
        symbol = "/"
    }
}

const focusTextBox = function() {           
    document.getElementById("answer-input").focus();
  }

renderProblem()




document.querySelector('#answer').addEventListener('submit', function(e){
    e.preventDefault()
    number1 = Number(p1.textContent)
    number2 = Number(p2.textContent)
    correctAnswer = eval(number1 + symbol + number2)
    if (correctAnswer == e.target.elements.checkAnswer.value){
        renderTick()
        setTimeout(renderProblem, 2000)
        setTimeout(renderInput, 2000)
        setTimeout(focusTextBox, 2000)
    }else{
        renderCross()
        setTimeout(renderProblem, 2000)
        setTimeout(renderInput, 2000)
        setTimeout(focusTextBox, 2000)
    }
    e.target.elements.checkAnswer.value = ''
})