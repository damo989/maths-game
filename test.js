let min = 1
let max = 10

let numbers= []
let opp = '+'

function addNumbers(){
    numbers.push(getRandomInt(min, max))
    numbers.push(getRandomInt(min, max))
    
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  }

//answer = eval(num1 + opp + num2)
//console.log(answer)

addNumbers()
numbers.sort((a, b) => b - a);

//console.log(numbers)


console.log(numbers)
