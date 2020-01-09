// 5. Exercises: Logical Operators
//01
console.log(`Figure out the result of the following expressions first without using console.log().\n
After you decide the result confirm it by using console.log()`)
console.log(`\n
   1. 4 > 3 && 10 < 12 \t\t true\n
   2. 4 > 3 && 10 > 12\t\t false \n
   3. 4 > 3 || 10 < 12\t\t true \n
   4. 4 > 3 || 10 > 12\t\t true \n
   5. !(4 > 3)\t\t false \n
   6. !(4 < 3)\t\t true \n
   7. !(false) \t\t true\n
   8. !(4 > 3 && 10 < 12) \t\t false\n
   9. !(4 > 3 && 10 > 12)\t\t true \n
   10. !(4 === '4')\t\t true \n
`)
//02
console.log(`There is no 'on' in both dragon and python`)
let dragon='dragon'
let python='python'
console.log(!(dragon.includes('on')&&python.includes('on')))