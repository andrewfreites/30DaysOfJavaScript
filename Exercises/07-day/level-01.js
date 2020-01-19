// Exercises: Level 1
//01
console.log(`1. Declare a function fullName and it print out your full name.`)
function fullName(){
    console.log(`Andrés Freites`)
}
fullName()
//02
console.log(`2. Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.`)
let firstName= prompt('Introduce your first name')
let lastName= prompt('Introduce your last name')
function fullName2(){
    full=firstName+' '+lastName
    return full
}
fullName2(firstName,lastName)
//03
console.log(`3. Declare a function addNumbers and it takes two two parameters and it returns sum.`)
function addNumbers(){
    let sum=a+b;
    return sum
}
let a= parseInt(prompt('a number')) 
let b= parseInt(prompt('b number'))
addNumbers(a,b)
//04
console.log(`4. An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.`)
function areaOfRectangle(length,width) {
    area = length*width
    return area
}
console.log(areaOfRectangle(15,7))
//05
console.log(`5. A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width).\n
Write a function which calculates perimeterOfRectangle.`)
function perimeterOfRectangle(length,width) {
    perimeter=2*(length+width)
    return perimeter
    
}
console.log(perimeterOfRectangle(8,10))
//06
console.log(`6. A volume of a rectangular prism is calculated as follows: volume = length x width x height.\n
Write a function which calculates volumeOfRectPrism.`)
function volumeOfRectPrism(length,width,height) {
    volume=length*width*height
    return volume
}
console.log(volumeOfRectPrism(8,12,15))
//07
console.log(`7. Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle`)
function areaOfCircle(r) {
    let area = Math.PI * r * r
    return area
}
console.log(areaOfCircle(6))
//08
console.log(`8. Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle`)
function circumOfCircle(r) {
    circumference=2*Math.PI*r
    return circumference
}
console.log(circumOfCircle(10))
//09
console.log(`9. Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.`)
function density(mass,volume) {
    density= mass/volume;
    return density
}
console.log(density(100,10))
//10
console.log(`10. Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken.\n
Write a function which calculates a speed of a moving object, speed.`)
function speed(distance,time){
    speed=distance/time
    return speed
}
console.log(speed(100,8))
/*
//11
console.log(`11. Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.`)
//12
console.log(`12. Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32.\n
Write a function which convert oC to oF convertCelciusToFahrenheit.`)
//13
console.log(`13. Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2.\n
Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.\n
Check if a person is underweight, normal, overweight or obese based the information given below.`)
/*The same groups apply to both men and women.
Underweight: BMI is less than 18.5
Normal weight: BMI is 18.5 to 24.9
Overweight: BMI is 25 to 29.9
Obese: BMI is 30 or more*/
/*
//14
console.log(`14. Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.`)
//15
console.log(`15. Math.max returns its largest argument. 
Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.`)
//16
console.log(`16. console.log(findMax(0, 10, 5))`)
//17
console.log(`17. console.log(findMax(0, -10, -2))`)
*/
