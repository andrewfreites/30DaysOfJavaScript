// 💻 Exercises:Day 6 Loops Level 3
//01
console.log(`1. Copy countries array(Avoid mutation)`)
const countries = [
    'Afghanistan',
    'Albania',
    'Algeria',
    'Andorra',
    'Angola',
    'Antigua and Barbuda',
    'Argentina',
    'Armenia',
    'Australia',
    'Austria',
    'Azerbaijan',
    'Bahamas',
    'Bahrain',
    'Bangladesh',
    'Barbados',
    'Belarus',
    'Belgium',
    'Belize',
    'Benin',
    'Bhutan',
    'Bolivia',
    'Bosnia and Herzegovina',
    'Botswana',
    'Brazil',
    'Brunei',
    'Bulgaria',
    'Burkina Faso',
    'Burundi',
    'Cambodia',
    'Cameroon',
    'Canada',
    'Cape Verde',
    'Central African Republic',
    'Chad',
    'Chile',
    'China',
    'Colombia',
    'Comoros',
    'Congo (Brazzaville)',
    'Congo',
    'Costa Rica',
    "Cote d'Ivoire",
    'Croatia',
    'Cuba',
    'Cyprus',
    'Czech Republic',
    'Denmark',
    'Djibouti',
    'Dominica',
    'Dominican Republic',
    'East Timor (Timor Timur)',
    'Ecuador',
    'Egypt',
    'El Salvador',
    'Equatorial Guinea',
    'Eritrea',
    'Estonia',
    'Ethiopia',
    'Fiji',
    'Finland',
    'France',
    'Gabon',
    'Gambia, The',
    'Georgia',
    'Germany',
    'Ghana',
    'Greece',
    'Grenada',
    'Guatemala',
    'Guinea',
    'Guinea-Bissau',
    'Guyana',
    'Haiti',
    'Honduras',
    'Hungary',
    'Iceland',
    'India',
    'Indonesia',
    'Iran',
    'Iraq',
    'Ireland',
    'Israel',
    'Italy',
    'Jamaica',
    'Japan',
    'Jordan',
    'Kazakhstan',
    'Kenya',
    'Kiribati',
    'Korea, North',
    'Korea, South',
    'Kuwait',
    'Kyrgyzstan',
    'Laos',
    'Latvia',
    'Lebanon',
    'Lesotho',
    'Liberia',
    'Libya',
    'Liechtenstein',
    'Lithuania',
    'Luxembourg',
    'Macedonia',
    'Madagascar',
    'Malawi',
    'Malaysia',
    'Maldives',
    'Mali',
    'Malta',
    'Marshall Islands',
    'Mauritania',
    'Mauritius',
    'Mexico',
    'Micronesia',
    'Moldova',
    'Monaco',
    'Mongolia',
    'Morocco',
    'Mozambique',
    'Myanmar',
    'Namibia',
    'Nauru',
    'Nepal',
    'Netherlands',
    'New Zealand',
    'Nicaragua',
    'Niger',
    'Nigeria',
    'Norway',
    'Oman',
    'Pakistan',
    'Palau',
    'Panama',
    'Papua New Guinea',
    'Paraguay',
    'Peru',
    'Philippines',
    'Poland',
    'Portugal',
    'Qatar',
    'Romania',
    'Russia',
    'Rwanda',
    'Saint Kitts and Nevis',
    'Saint Lucia',
    'Saint Vincent',
    'Samoa',
    'San Marino',
    'Sao Tome and Principe',
    'Saudi Arabia',
    'Senegal',
    'Serbia and Montenegro',
    'Seychelles',
    'Sierra Leone',
    'Singapore',
    'Slovakia',
    'Slovenia',
    'Solomon Islands',
    'Somalia',
    'South Africa',
    'Spain',
    'Sri Lanka',
    'Sudan',
    'Suriname',
    'Swaziland',
    'Sweden',
    'Switzerland',
    'Syria',
    'Taiwan',
    'Tajikistan',
    'Tanzania',
    'Thailand',
    'Togo',
    'Tonga',
    'Trinidad and Tobago',
    'Tunisia',
    'Turkey',
    'Turkmenistan',
    'Tuvalu',
    'Uganda',
    'Ukraine',
    'United Arab Emirates',
    'United Kingdom',
    'United States',
    'Uruguay',
    'Uzbekistan',
    'Vanuatu',
    'Vatican City',
    'Venezuela',
    'Vietnam',
    'Yemen',
    'Zambia',
    'Zimbabwe'
  ]
const nonMut=[...countries]
//02
console.log(`2. Arrays are mutable. Create a copy of array which does not modify the original.\n
Sort the copied array and store in a variable sortedCountries`)
const sortedCountries=nonMut.sort()
//03
console.log(`3. Sort the webTechs array and mernStack array`)
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
webTechs.sort()
mernStack.sort()
console.log(`Web Techs: ${webTechs}\n
MERN Stack:\n
${mernStack}`)
//04
console.log(`4. Extract all the countries contain the word 'land' from the [countries array]\n
(https://github.com/Asabeneh/30DaysOfJavaScript/tree/master/data/countries.js) and print it as array`)
let landCountries= Array()
for(i=0;i<countries.length;i++){
    if (countries[i].includes('land')){
        landCountries.push(countries[i])
    }
}
console.log(landCountries)

//05
console.log(`5. Find the country containing the hightest number of characters in the [countries array]\n
(https://github.com/Asabeneh/30DaysOfJavaScript/tree/master/data/countries.js)`)
let bigger= Array()
for (i=0;i<countries.length;i++){
    word=countries[i].replace(/\s/gi,'')
    bigger.push(word.length)
}
let big=Math.max.apply(null,bigger)
let BigWord=countries[bigger.indexOf(big)]
console.log(`Longest word is ${BigWord} with ${big} characters`)
//06
console.log(`6. Extract all the countries contain the word 'land' from the [countries array]\n
(https://github.com/Asabeneh/30DaysOfJavaScript/tree/master/data/countries.js) and print it as array`)
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
//07
console.log(`7. Extract all the countries containing only four characters from the [countries array]\n
(https://github.com/Asabeneh/30DaysOfJavaScript/tree/master/data/countries.js) and print it as array`)
let short
for (i=0;i<countries.length;i++){
    if(countries[i].length==4){
        short=countries[i]
    }
}
if (short){
    console.log(`the word is ${short}`)
} else{
    console.log('no such a 4 character word')
}
//08
console.log(`Extract all the countries containing two or more words from the [countries array]\n
(https://github.com/Asabeneh/30DaysOfJavaScript/tree/master/data/countries.js) and print it as array`)
let spaces= Array()
for (i=0;i<countries.length;i++){
    if(countries[i].includes(' ')){
        spaces.push(countries[i])
    }
}
console.log(spaces)
/*09 unnecessary = reverse/split/toUpperCase
console.log(`9. Reverse the [countries array](https://github.com/Asabeneh/30DaysOfJavaScript/tree/master/data/countries.js)\n
and capitalize each country and stored it as an array`)
*/