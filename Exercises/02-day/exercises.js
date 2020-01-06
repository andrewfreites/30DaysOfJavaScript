//# 💻 Day 2: Exercises

console.log(`1. Declare a variable name challenge and assign it to an initial value **'30 Days Of JavaScript'**.`) 
console.log(`let challenge="30 Days Of JavaScript"`)
let challenge="30 Days Of JavaScript";
console.log(`2. Print the string on the browser console using __console.log()__`)
console.log(challenge);
console.log(`3. Print the __length__ of the string on the browser console using _console.log()_`)
console.log(challenge.length)
console.log(`4. Change all the string to capital letters using __toUpperCase()__ method`)
console.log(challenge.toUpperCase)
console.log(`5. Change all the string to lowercase letters using __toLowerCase()__ method`)
console.log(challenge.toLowerCase)
console.log(`6. Cut(slice) out the first word of the string using __substr()__ or __substring()__ method`)
console.log(challenge.substr(3))
console.log(`7. Slice out the phrase *Days Of JavaScript* from *30 Days Of JavaScript*.`)
console.log(challenge.substr(0,2))
console.log(`8. Use __substr__ to slice out the phase __because because because__ in the following sentence:\n
__'You cannot end a sentence with because because because is a conjunction'__`)
let phrase="You cannot end a sentence with because because because is a conjunction"
console.log(phrase.substr(30,24))
console.log(`9. Check if the string contains a word __Script__ using __includes()__ method`)
console.log(challenge.includes('Script'))
console.log(`10. Split the __string__ into __array__ using __split()__ method`)
console.log(challenge.split(''))
console.log(`11. Split the string 30 Days Of JavaScript at the space using __split()__ method`)
console.log(challenge.split(' '))
console.log(`12. 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' __split__ the string at the comma and change it to an array.`)
let enterprises='Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
console.log(enterprises.split(', '))
console.log(`13. Change 30 Days Of JavaScript to 30 Days Of Python using __replace()__ method.`)
console.log(challenge.replace('JavaScript','Python'))
console.log(`14. What is character at index 15 in '30 Days Of JavaScript' string use __charAt()__ method.`)
console.log(challenge.charAt(15))
console.log(`15. What is the character code of J in '30 Days Of JavaScript' string using __charCodeAt()__`)
console.log(challenge.charCodeAt('J'))
console.log(`16. Use __indexOf__ to determine the position of the first occurrence of a in 30 Days Of JavaScript`)
console.log(challenge.indexOf('a'))
console.log(`17. Use __lastIndexOf__ to determine the position of the last occurrence of a in 30 Days Of JavaScript.`)
console.log(challenge.lastIndexOf('a'))
console.log(`18. Use __indexOf__ to find the position of the first occurrence of the word __because__ in the following sentence:\n
__'You cannot end a sentence with because because because is a conjunction'__`)
console.log(phrase.indexOf('because'))
console.log(`19. Use __lastIndexOf__ to find the position of the last occurrence of the word __because__ in the following sentence:\n
__'You cannot end a sentence with because because because is a conjunction'__`)
console.log(phrase.lastIndexOf('because'))
console.log(`20. Use __search__ to find the position of the first occurrence of the word __because__ in the following sentence:\n
__'You cannot end a sentence with because because because is a conjunction'__`)
console.log(phrase.search('because'))
console.log(`21. Use __trim()__ to remove if there is trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.`)
let spaceChallenge=" 30 Days Of JavaScript "
console.log(spaceChallenge.trim())
console.log(`22. Use __startsWith()__ method with the string *30 Days Of JavaScript* make the result true`)
console.log(challenge.startsWith('30'))
console.log(`23. Use __endsWith()__ method with the string *30 Days Of JavaScript* make the result true`)
console.log(challenge.endsWith('Script'))
console.log(`24. Use __match()__ method to find all the a’s in 30 Days Of JavaScript`)
console.log(challenge.match(/a/g))
console.log(`25. Use __match()__ to count the number all because's in the following sentence:\n
__'You cannot end a sentence with because because because is a conjunction'__`)
console.log(phrase.match(/because/g))
console.log(`26. Use __concat()__ and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'`)
let days="30 days of"
let language="JavaScript"
console.log(days.concat(' ',language))
console.log(`27. Use __repeat()__ method to print 30 Days Of JavaScript 2 times`)
console.log(challenge.repeat(2))
console.log(`28. ** 'Love is the best thing in this world. Some found their love and some are still looking for their love.'\n
Count the number of word love in this sentence.`)
let love='Love is the best thing in this world. Some found their love and some are still looking for their love.'
console.log(love.match(/love/gi))
console.log(`29. ** Calculate the total annual income of the person by extract the numbers from the following text.\n
'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'`)
let income='He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
let salary=income.match(/\d+/g)
let month=parseInt(salary[0])*12
let bonus=parseInt(salary[1])
let courses=parseInt(salary[2])*12
console.log('his total incomes is',(month+bonus+courses))
console.log(`30. ** Clean the following text and find the most frequent word(hint, use replace and regular express).`)
const sentence= '%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is also $the $result of &love& of tea&ching'
console.log(sentence.replace(/\$|%|@|#|$|&|;|!/gi,''))
let clean=sentence.replace(/\$|%|@|#|$|&|;|!/gi,'')
var array=clean.split(' ')
var aux=1
var count=0
var word
for (var i=0; i<array.length; i++){
    for (var j=i; j<array.length; j++){
        if(array[i] == array[j]){
            count++;
        }
        if (aux<count)
            {
                aux=count;
                word=array[i];
            }
    }
    count=0
}
console.log(`"${word}" is the most frequent word, is ${aux} times in the sentence`);
console.log(`31. Using console.log() print out the following statement.\n
The quote 'There is no exercise better for the heart than reaching down and lifting people up.'\n
by John Holmes teaches us to help to one another.`)
console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help to one another.")
console.log(`32. Using console.log() print out the following quote by Mother Teresa.\n
"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- \n
with charity you give love, so don't just give money but reach out your hand instead."
`)
console.log("Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.")
console.log(`33. Check if 'on' is found in both python and jargon`)
const python='python'
const jargon='jargon'
console.log(python.includes('on'))
console.log(jargon.includes('on'))
console.log(`34. _I hope this course is not full of jargon_. Check if _jargon_ is in the sentence.`)
let phraseJargon="I hope this course is not full of jargon"
console.log(phraseJargon.includes("jargon"))
console.log(`35. Generate a random number between 0 and 100 inclusive.`)
console.log(Math.floor(Math.random()*101))
console.log(`36. Generate a random number between 50 and 100 inclusive.`)
console.log(Math.floor(Math.random()*51+50))
console.log(`37. Generate a random number between 0 and 255 inclusive.`)
console.log(Math.floor(Math.random()*256))
console.log(`38. Access the 'JavaScript' string characters using a random number.`)
let javaScript="JavaScript"
console.log(javaScript[Math.floor(Math.random()*10)])
console.log(`39. Use console.log() and escape characters to print the following pattern.\n
1\t1\t1\t1\t1\n
2\t1\t2\t4\t8\n
3\t1\t3\t9\t27\n
4\t1\t4\t16\t64\n
5\t1\t5\t25\t125\n
`)
let a=1, b=2, c=3, d=4, e=5
console.log(`${a}\t${a}\t${Math.pow(a,1)}\t${Math.pow(a,2)}\t${Math.pow(a,3)}`)
console.log(`${b}\t${a}\t${Math.pow(b,1)}\t${Math.pow(b,2)}\t${Math.pow(b,3)}`)
console.log(`${c}\t${a}\t${Math.pow(c,1)}\t${Math.pow(c,2)}\t${Math.pow(c,3)}`)
console.log(`${d}\t${a}\t${Math.pow(d,1)}\t${Math.pow(d,2)}\t${Math.pow(d,3)}`)
console.log(`${e}\t${a}\t${Math.pow(e,1)}\t${Math.pow(e,2)}\t${Math.pow(e,3)}`)
console.log(`40. Check if typeof '10' is exactly equal to 10. If not make it exactly equal.`)
var ten= '10';
if (typeof(ten)!==10){
    console.log(`typeof '10' is not exactly equal to 10, will be converted`)
    var ten=parseInt(ten)
    console.log(`typeof '10' was converted to ${ten}, exactly equal as 10`)
} else {
    console.log(`${ten} is exactly equal to 10`)
}
console.log(`41. Check if parseInt('9.8') is equal to 10 if not make it exactly equal with 10.`)
var gravity=parseInt('9.8')
if (typeof(gravity)!==10){
    console.log(`parseInt('9.8') is ${gravity}, is not equal to 10, will be converted`)
    gravity++;
    console.log(`parseInt('9.8') was converted to ${gravity}, so now is exactly equal as 10`)
} else {
    console.log(`${gravity} is exactly equal to 10`)
}