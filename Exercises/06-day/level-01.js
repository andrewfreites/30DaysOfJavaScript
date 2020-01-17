// 💻 Exercises:Day 6 Loops Level 1
 /* ```js
  const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]

  const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]

  const mernStack = ['MongoDB', 'Express', 'React', 'Node']
  ```
*/
//01
console.log(`1. Iterate 0 to 10 using for loop, do the same using while and do while loop`)
for (i=0;i<=10;i++){
    console.log(i)
}
let i=0;
while (i<=10){
    console.log(countries[i])
    i++;
}
let i = 0
do {
  console.log(i)
  i++
} while (i <= 10)
//02
console.log(`2. Iterate 10 to 0 using for loop, do the same using while and do while loop`)
for (i=10;i>=0;i--){
    console.log(i)
}
let i=10;
while (i>=0){
    console.log(countries[i])
    i--;
}
let i = 10
do {
  console.log(i)
  i--
} while (i >= 0)
//03
console.log(`3. Iterate 0 to n using for loop`)
let n=15
for (i=0;i<=n;i++){
    console.log(i)
}
//04
console.log(`4. Write a loop that makes the following pattern using console.log():`)
/*   ```js
       #
       ##
       ###
       ####
       #####
       ######
       #######
   ```
*/
sharp=Array();
for (i=0;i<=7;i++){
    sharp.push('#')
    console.log(sharp.join(''))
}
//05
console.log(`5. Use loop to print the following pattern:`)
/*```sh
   0 x 0 = 0
   1 x 1 = 1
   2 x 2 = 4
   3 x 3 = 9
   4 x 4 = 16
   5 x 5 = 25
   6 x 6 = 36
   7 x 7 = 49
   8 x 8 = 64
   9 x 9 = 81
   10 x 10 = 100
   ```*/
for (i=0;i<=10;i++){
    console.log(`${i} x ${i} = ${i*i}`)
}
//06
console.log(`6. Using loop print the following pattern`)
/*
   ```sh
    i    i^2   i^3
    0    0     0
    1    1     1
    2    4     8
    3    9     27
    4    16    64
    5    25    125
    6    36    216
    7    49    343
    8    64    512
    9    81    729
    10   100   1000
   ```*/
console.log(`i\ti^2\ti^3`)
for (i=0;i<=10;i++){
    console.log(`${i}\t${Math.pow(i,2)}\t${Math.pow(i,3)}`)
}
//07
console.log(`7. Use for loop to iterate from 0 to 100 and print only even numbers`)
for (i=0;i<=100;i++){
    if(i%2==0){
        console.log(i)
    }
}
//08
console.log(`8. Use for loop to iterate from 0 to 100 and print only odd numbers`)
for (i=0;i<=100;i++){
    if(i%2){
        console.log(i)
    }
}
//09
console.log(`9. Use for loop to iterate from 0 to 100 and print only prime numbers`)
for (i=1;i<=100;i++){
    let cont=0;
    for (j=1;j<=i;j++){
        if(i%j==0){
            cont++;
        }
    }
    if(cont<=2){
        console.log(i)
    }
}
//10
console.log(`10. Use for loop to iterate from 0 to 100 and print the sum of all numbers.`)
j=0;
for (i=0;i<=100;i++){
    j+=i
}
console.log(j)
/*
11. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.

    ```sh
    The sum of all evens is 2550. And the sum of all odds is 2500.
    ```

12. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array

    ```sh
      [2550, 2500]
    ```
is the same*/
//13
console.log(`13. Develop a small script which generate array of 5 random numbers`)
let fixed=Array(5).fill(Math.floor(Math.random()*100))
//14
console.log(`14. Develop a small script which generate array of 5 random numbers and the numbers must be unique`)
let ram= Array()
for (i=0;i<5;i++){
    ram.push(Math.floor(Math.random()*100))
}
//15
console.log(`15. Develop a small script which generate a six characters random id:`)
let i=0;
let id= Array()
let idRand= Array()
do{
    id.push(((Math.floor(Math.random()*122+48))))
    if((id[i]>=48 && id[i]<=57)||(id[i]>=65 && id[i]<=90)||(id[i]>=97 && id[i]<=122)){
    idRand.push(String.fromCharCode(id[i]))
    }
    i++
} while (idRand.length<=5)
console.log(idRand.join(''));