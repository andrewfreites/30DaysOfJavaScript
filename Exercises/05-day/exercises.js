// 💻 Exercises:Day 5
//01
console.log(`1. Declare an _empty_ array;`)
const empty=Array();
//02
console.log(`2. Declare an array with more than 5 number of elements`)
const fiveElements= ['Linux','Windows','Docker','Android','iOS','BBOS'];
//03
console.log(`3. Find the length of your array`);
console.log(fiveElements.length);
//04
console.log(`4. Get the first item, the middle item and the last item of the array`)
console.log(`The first item is ${fiveElements[0]}, the middle element is ${fiveElements[Math.floor((fiveElements.length-1)/2)]} and the last one is ${fiveElements[(fiveElements.length-1)]}`)
//05
console.log(`5. Declare an array called _mixedDataTypes_,put different data types in your array and  find length of the array. You should size be greater than 5`)
const mixedDataTypes=['Andres',30,'Windows','Visual Studio Code', 1.72, true];
console.log(mixedDataTypes.length);
//06
console.log(`6. Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon`)
const itCompanies= ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
//07
console.log(`7. Print the array using _console.log()_`)
console.log(itCompanies)
//08
console.log(`8. Print the number of companies in the array`)
console.log(`number of companies: ${itCompanies.length-1}`)
//09
console.log(`9. Print the first company, middle and last company`)
console.log(`The first company is ${itCompanies[0]}, the middle is ${itCompanies[Math.floor((itCompanies.length-1)/2)]} and the last one is ${itCompanies[(itCompanies.length-1)]}`)
//10
console.log(`10. Print out each company`)
console.log(`${itCompanies}`)
//11
console.log(`11. Change each company name  to uppercase one by one and print them out`)
for (i=0;i<(itCompanies.length);i++){
    itCompanies[i]=itCompanies[i].toUpperCase()
    console.log(itCompanies[i])
}
//12
console.log(`12. Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.`)
console.log(`${itCompanies[0]}, ${itCompanies[1]}, ${itCompanies[2]}, ${itCompanies[3]}, ${itCompanies[4]}, and ${itCompanies[5]} are big IT companies.`)
//13
console.log(`13. Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is _not found_`)
let company= prompt('Enter the company you are looking for', 'For example Apple')
for (i=0;i<(itCompanies.length);i++){
    itCompanies[i]=itCompanies[i].toLowerCase()
    console.log(itCompanies[i])
}
itCompanies.includes(company)
? console.log(`The company ${company} exist`)
: console.log(`The company ${company} don't exist`)
//14
console.log(`14. Filter out companies which have more than one 'o' without the filter method`)
for (i=0;i<(itCompanies.length);i++){
    let cont=0;
    let oCompanies=itCompanies[i].split('')
    for(j=0;j<(oCompanies.length);j++){
        if (oCompanies[j].includes('o')){
            cont++;
        }
    }
    if(cont>1){
        console.log(itCompanies[i])
    }
}
// 15
console.log(`15. Sort the array using _sort()_ method`)
itCompanies.sort()
console.log(itCompanies)
// 16
console.log(`16. Reverse the array using _reverse()_ method`)
itCompanies.reverse()
// 17
console.log(`17. Slice out the first 3 companies from the array`)
itCompanies.slice(0,3)
//18
console.log(`18. Slice out the last 3 companies from the array`)
itCompanies.slice(itCompanies.length-3,itCompanies.length)
//19
console.log(`19. Slice out the middle IT company or companies from the array`)
itCompanies.slice(itCompanies.length/2,(itCompanies.length/2)+1)
//20
console.log(`20. Remove the first IT company from the array`)
itCompanies.shift()
//21
console.log(`21. Remove the middle IT company or companies from the array`)
itCompanies.splice(itCompanies.length/2,(itCompanies.length/2)+1)
//22
console.log(`22. Remove the last IT company from the array`)
itCompanies.pop()
//23
console.log(`23.Remove all IT companies`)
itCompanies.splice()
//24
console.log(`24. Create a separate countries.js file and store the countries array in to this file,\n
create a separate file web_techs.js ans store the webTechs array in to this file. Access both file in main.js file`)
// import './countries' I don't know how to do it without modules
/*1. First remove all the functions and change the string to array and count the number of words in the array

    ```js
    let text =
    'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
    console.log(words)
    console.log(words.length)
    ```

    ```sh
    ["I", "love", "teaching", "and", "empowering", "people", "I", "teach", "HTML", "CSS", "JS", "React", "Python"]
    13
    ```

1. In the following shopping cart add, remove, edit items

    ```js
    const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
    ```

   - add 'Meat' in the beginning of your shopping cart if if it has not be already added
   - add sugar at the end of you shopping cart if it has not been already added
   - Remove 'Honey' if you are allergic to honey
   - modify tea to 'Green Tea'
1. In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
1. In the webTechs array check if Sass exists in the array  and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.
1. Concatenate the following two variables and store it in a fullStack variable.

    ```js
    const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
    const backEnd = ['Node','Express', 'MongoDB']
  
    console.log(fullStack)
    ```

    ```sh
    ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]
    ```

1. The following is an array of 10 students ages:

    ```js
    const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
    ```

    - Sort the array and find the min and max age
    - Find the min age and the max age
    - Find the median age(one middle item or two middle items divided by two)
    - Find the average age(all items divided by number of items)
    - Find the range of the ages(max minus min)
    - Compare the value of (min - average) and (max - average), use *abs()* method
1.Slice the first ten countries from the [countries array](https://github.com/Asabeneh/30DaysOfJavaScript/tree/master/data/countries.js)
1. Find the middle country(ies) in the [countries array](https://github.com/Asabeneh/30DaysOfJavaScript/tree/master/data/countries.js)
1. Find the middle country(ies) in the [countries array](https://github.com/Asabeneh/30DaysOfJavaScript/tree/master/data/countries.js)
1. Divide the countries array into two equal arrays if it is even.  If countries array is not even , one more country for the first half.*/