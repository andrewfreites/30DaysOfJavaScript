//6 Ternary Operator
//01
console.log(`If the length of your name is greater than 7 say, your name is long else say your name is short.`)
let myName='Andres'
myName.length>7
? console.log('My name is long')
: console.log('My name is short')
//02
console.log('Compare your first name length and your family name length and you should get this output.')
let firstName = 'Andres'
let lastName = 'Freites'
firstName.length>lastName.length
? console.log(`My first name, ${firstName} is longer than my family name, ${lastName}`)
: console.log(`My first name, ${firstName} is shorter than my family name, ${lastName}`)
//03
console.log(`Declare two variables _myAge_ and _yourAge_ and assign them initial values and myAge and yourAge.`)
let myAge = 250
let yourAge = 25
console.log(`I'm ${myAge-yourAge} years older than you`)
//04
console.log(`Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.`)
let age = prompt('Enter your age')
age>18
? console.log(`You are ${age}. You are old enough to drive`)
: console.log(`You are ${age}. You will be allowed to drive after ${18-age} years.`)