//7 Date time Object

console.log(`1. What is the year today?`)
const now = new Date()
console.log(now.getFullYear())
console.log(`2. What is the month today as a number?`)
console.log((now.getMonth())+1)
console.log(`3. What is the date today?`)
const year = now.getFullYear()
const month = now.getMonth() + 1
const date = now.getDate()
const hours = now.getHours()
const minutes = now.getMinutes()
console.log(`${date}/${month}/${year} ${hours}:${minutes}`)
console.log(`4. What is the day today as a number?`)
console.log(`5. What is the hours now?`)
console.log(`6. What is the minutes now?`)
console.log(`7. Find out the numbers of seconds elapsed from January 1, 1970 to now.`)
console.log(`8. Create a human readable time format\n
1. YYY-MM-DD HH:mm:ss\n
2. DD-MM-YYYY HH:mm:ss\n
3. DD/MM/YYY HH:mm:ss`)