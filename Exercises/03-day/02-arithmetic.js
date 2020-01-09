//2. Exercises: Arithmetic Operators Part
//01
console.log(`Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h)`)
let base = prompt('Enter base of a triangle', 'number goes here')
let height = prompt('Enter height of a triangle', 'number goes here')
let area= 0.5*base*height;
console.log(`The area of the triangle is ${area}`)
//02
console.log(`Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)`)
let a = prompt('Enter side -a- of a triangle', 'number goes here')
let b = prompt('Enter side -b- of a triangle', 'number goes here')
let c = prompt('Enter side -c- of a triangle', 'number goes here')
let perimeter= a+b+c;
console.log(`The perimeter of the triangle is ${perimeter}`)
//03
console.log(`Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle\n
(perimeter = 2 x (length + width))`)
let length = prompt('Enter length of a rectangle', 'number goes here')
let width = prompt('Enter width of a rectangle', 'number goes here')
let areaRect= lenght*width, perimeterRect= 2*(lenght+width);
console.log(`the area of the rectangle is ${areaRect} and the perimeter is ${perimeterRect}`)
//04
console.log(`Get radius using prompt and calculate the area of a circle (area = pi x r x r)\n
and circumference of a circle(c = 2 x pi x r) where pi = 3.14.`)
const pi=3.14;
let radius= prompt('Enter radius of a circle','number goes here');
let areaCircle=pi*Math.pow(radius,2), circumference=2*pi*radius;
console.log(`the area of the circle is ${areaCircle} and the circumference ${circumference}`)
//05
/*console.log(`Calculate the slope, x-intercept and y-intercept of y = 2x -2`)
//06 
Slope is (m = y2-y1/x2-x1). Find the slope between point (2, 2) and point(6,10)
//07
Compare the slope of above two questions.
//08
Calculate the value of y (y = x^2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.*/
//09
console.log(`Write a script that prompt a user to enters hours and rate per hour. Calculate pay of the person?`)
let hours = prompt('Enter hours per week', 'number goes here')
let rate = prompt('Enter rate per hour', 'number goes here')
let earning = hours*rate;  
console.log(`Your weekly earning is ${earning}`)
//10
console.log(`Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live.\n
Assume some one lives just hundred years`)
let years = prompt('Enter number of years you live', 'number goes here')
let seconds= years*31536000;
console.log(`You lived ${seconds} seconds`)