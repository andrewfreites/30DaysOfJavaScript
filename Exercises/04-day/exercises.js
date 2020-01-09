// 💻 Exercise  : Conditionals
//01
console.log(`Get user input using prompt(“Enter your age:”). If user is 18 or older ,\n
give feedback:You are old enough to drive but if not 18 give feedback to wait for the years he supposed to wait for.`)
let age = prompt('Enter your age')
if (age>18){
    console.log(`You are ${age}. You are old enough to drive`)
}else{
    console.log(`You are ${age}. You will be allowed to drive after ${18-age} years.`)
}
//02
console.log(`Compare the values of myAge and yourAge using if … else. Based on the comparison log to console who is older (me or you).\n
Use prompt(“Enter your age:”) to get the age as input.`)
let myAge=30;
let yourAge=prompt('Enter your age')
if (yourAge>myAge){
  console.log(`You are older than me by ${yourAge-myAge} years`)
}else if(yourAge<myAge){
  console.log(`I'm older than you by ${myAge-yourAge} years`)
} else{
  console.log('we have the same age')
}
//03
console.log(`If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement in two ways`)
let a = 4
let b = 3
console.log('using if else')
if (a>b){
  console.log('a is greater than b')
}else{
  console.log('a is less than b')
}
console.log('ternary operator.')
a>b
? console.log('a is greater than b')
: console.log('a is less than b')
//04
console.log(`Write a code which give grade students according to theirs scores:`)
let grade=prompt('Enter your grade')
if (grade>=80 && grade<=100){
  console.log('A')
} else if (grade>=70 && grade<=79){
  console.log('B')
} else if (grade>=60 && grade<=69){
  console.log('C')
} else if (grade>=50 && grade<=59){
  console.log('D')
} else if (grade>0 && grade<=49){
  console.log('F')
} else{
  console.log('Invalid grade')
}
// 05
console.log(`Check if the season is Autumn, Winter, Spring or Summer.`)
let monthPrompt= prompt('Enter month')
let month= monthPrompt.toLowerCase()
if (month=='september' || month=='october' || month=='november'){
  console.log('is Autumn, Winter is coming')
} else if (month=='december' || month=='january' || month=='february'){
  console.log('is Winter')
} else if (month=='march' || month=='april' || month=='may'){
  console.log('is Spring')
}else if (month=='june' || month=='july' || month=='august'){
  console.log('is Summer')
} else {
  console.log('invalid month')
}
// 06
console.log('Even numbers are divisible by 2 and the remainder is zero. How do you check if a number is even or not using JavaScript?')
let number=prompt('Enter a number')
number%2==0
? console.log('Is an even number')
: console.log('Is not an even number')
//07
console.log(`Check if a day is weekend day or a working day. Your script will take day as an input.`)
let dayPrompt= prompt('Enter the day','example: Monday')
let day= dayPrompt.toLowerCase()
if (day=='monday' || day=='tuesday' || day=='wednesday' || day=='thursday' || day=='friday'){
  console.log(`${day} is a work day`)
} else if(day=='saturday' || day=='sunday'){
  console.log(`${day} is a weekend day`)
} else {
  console.log('Invalid day')
}
//08
console.log(`Write a program which tells the number days in a month.`)
let monthPrompted= prompt('Enter the month')
let monthDays= monthPrompted.toLowerCase()
switch(monthDays){
  case 'january':
    console.log(`${monthDays} has 31 days`)
    break;
  case 'february':
    console.log(`${monthDays} has 28 days`)
    break;
  case 'march':
    console.log(`${monthDays} has 31 days`)
    break;
  case 'may':
    console.log(`${monthDays} has 30 days`)
    break;
  case 'june':
    console.log(`${monthDays} has 30 days`)
    break;
  case 'july':
    console.log(`${monthDays} has 31 days `)
    break;
  case 'august':
    console.log(`${monthDays} has 31 days`)
    break;
  case 'september':
    console.log(`${monthDays} has 30 days`)
    break;
  case 'october':
    console.log(`${monthDays} has 31 days`)
    break;
  case 'november':
    console.log(`${monthDays} has 30 days`)
    break;
  case 'december':
    console.log(`${monthDays} has 31 days`)
    break;
  default:
    console.log('Invalid month')
}