// 💻 Exercises:Day 6 Loops Level 2
//01
console.log(`1. Develop a small script which generate any number of characters random id:`)
let i=0;
let id= Array()
let idRand= Array()
let rand=Math.floor(Math.random()*100)
do{
    id.push(((Math.floor(Math.random()*122+48))))
    if((id[i]>=48 && id[i]<=57)||(id[i]>=65 && id[i]<=90)||(id[i]>=97 && id[i]<=122)){
    idRand.push(String.fromCharCode(id[i]))
    }
    i++
} while (idRand.length<=rand)
console.log(idRand.join(''));
//02
console.log(`2. Write a script which generates a random hexadecimal number.`)
let j=0;
let hexa= Array()
let hexaRand= ['#']
do{
    hexa.push(((Math.floor(Math.random()*122+48))))
    if((hexa[j]>=48 && hexa[j]<=57)||(hexa[j]>=65 && hexa[j]<=71)){
    hexaRand.push(String.fromCharCode(hexa[j]))
    }
    j++
} while (hexaRand.length<=6)
console.log(hexaRand.join(''));
//03
console.log(`3. Write a script which generates a random rgb color number.`)
let rgb= Array()
for (i=0;i<3;i++){
    rgb.push(Math.floor(Math.random()*256))
}
console.log(`rgb(${rgb})`)
//04
console.log(`4. Using the above countries array, create the following new array.`)
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
const newCount= Array()
for (const counUpper of countries){
    newCount.push(counUpper.toUpperCase())
}
console.log(newCount)
//05
console.log(`5. Using the above countries array, create an array for countries length'.`)
let largo=newCount.map(largo => largo.length);
console.log(largo)
//06
console.log(`6. Use the countries array to create the following array of arrays:`)
/*
    ```sh
      [
      ['Albania', 'ALB', 7],
      ['Bolivia', 'BOL', 7],
      ['Canada', 'CAN', 6],
      ['Denmark', 'DEN', 7],
      ['Ethiopia', 'ETH', 8],
      ['Finland', 'FIN', 7],
      ['Germany', 'GER', 7],
      ['Hungary', 'HUN', 7],
      ['Ireland', 'IRE', 7],
      ['Japan', 'JAP', 5],
      ['Kenya', 'KEN', 5]
    ]
    ```
*/
const sliced= Array()
for (const toSlice of newCount){
    sliced.push(toSlice.slice(0,3))
}
let triple= Array()
for (i=0;i<newCount.length;i++){
    triple[i]=[countries[i],sliced[i],largo[i]]
}
console.log(triple)
//07
console.log(`7. In above countries array, check if there is a country or countries containing the word 'land'.\n
If there are countries containing 'land', print it as array. If there is no country containing the word 'land',\n
print 'All these are countries without land'.`)
/*    ```sh
    ['Finland', 'Iceland']
    ```
*/
lands= Array()
nonLand= Array()
for (i=0;i<countries.length;i++){
    if(countries[i].includes('land')){
        lands.push(countries[i])
    }else{
        nonLand.push(countries[i])
    }
}
console.log(`These are with 'land':\n ${lands.join(', ')}`)
console.log(`All these are countries without 'land':\n ${nonLand.join(', ')}`)
//08
console.log(`8. In above countries array, check if there is  a country or countries end with a substring 'ia'.\n
If there are countries end with 'ia', print it as array. If there is no country containing the word 'ia',\n
print 'These are countries ends without ia'.`)
/*
    ```sh
    ['Albania', 'Bolivia','Ethiopia']
    ```
    */
let arrayIa= Array()
let nonIa= Array()
for (i=0;i<countries.length;i++){
    let largo=countries[i].length
    if (countries[i].slice(largo-2,largo)=='ia'){
        arrayIa.push(countries[i])
    } else{
        nonIa.push(countries[i])
    }
}
console.log(`Countries with 'ia':\n ${arrayIa.join(', ')}`)
console.log(`These are countries ends without 'ia':\n ${nonIa.join(', ')}`)
//09
console.log(`09. Using the above countries array, find the country containing the biggest number of characters.`)
/*
      ```sh
      Ethiopia
      ```
*/
let bigger= Array()
for (i=0;i<countries.length;i++){
    bigger.push(countries[i].length)
}
let big=Math.max.apply(null,bigger)
let BigWord=countries[bigger.indexOf(big)]
console.log(`Longest word is ${BigWord}`)
//10
console.log(`10. Using the above countries array, find the country containing only 5 characters.`)
/*
    ```sh
    ['Japan', 'Kenya']
    ```
*/
for (i=0;i<countries.length;i++){
    if(countries[i].length==5){
        short=countries[i]
    }
    }
console.log(short)
/* 1. Find the longest word in the webTechs array
1. Use the webTechs are to create the following array of arrays:

    ```sh
    [["HTML", 4], ["CSS", 3],["JavaScript", 10],["React", 5],["Redux", 5],["Node", 4],["MongoDB", 7]]
    ```

1. An application created using MongoDB, Express, React and Node is called a MERN stack. Create the acronym MERN by using the array mernStack
1. Iterate through the array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] using a for loop or for of loop and print out the items.
1. This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the order using loop without using a reverse method.
1. Print all the elements of array as shown below.

    ```js
      const fullStack = [
        ['HTML', 'CSS', 'JS', 'React'],
        ['Node', 'Express', 'MongoDB']
      ]
    ````

    ```sh
      HTML
      CSS
      JS
      REACT
      NODE
      EXPRESS
      MONGODB
    ```
    */