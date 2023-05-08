/*
let js = 'amazing';
      //if (js === 'amazing') alert('javascript is FUN!');

      //40 + 8 + 23 - 10;
      console.log(40 + 8 + 23 - 10);

console.log('jonas');
console.log(23);

let firstName = "matilda";

console.log(firstName);
console.log(firstName);
console.log(firstName);

let myFirstJob = 'prorammer';
let myCurrentJob = 'teacher';

let job1 = 'programmer';
let job2 = 'teacher';

console.log(myFirstJob);
*/

// ----Data types
//true;
//console.log(true);
/*
let javascriptIsFun = true;
console.log(javascriptIsFun );

//console.log(typeof true);
console.log(typeof javascriptIsFun);
//console.log(typeof 23);
//console.log(typeof 'jonas');

javascriptIsFun = 'YES';
console.log(typeof javascriptIsFun);

// --- UNDEFINED
let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);

let age = 30;
age = 31;

const birthYear = 1991;
//birthYear = 1998;
//const job;

var job = 'programmer';
job = 'teacher';

lastName = 'gtdgdgd';
console.log(lastName);
*/
/*
//---- Math Operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means to the power of 3 = 2 * 2 * 2

const firstName = 'jonas';
const lastName = 'schem';
console.log(firstName + ' ' + lastName);

// Assignment operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 =100
x++; // x = x + 1
x--;
x--;
console.log(x);

// Comparison operators
console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah>= 18;

console.log(now - 1991 > now - 2018);
*/
/*
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

console.log(25-10-5);

let x, y;
x = y = 25-10-5; // x = y = 10, x = 10
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2
console.log(ageJonas, ageSarah, averageAge);
*/

////////////////////////////
// Coding Challenge #1

//const massMark = 78;
//const heightMark = 1.69;
//const massJohn = 92;
//const heightJohn = 1.95;

/*const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
const markHigherBMI = BMIMark > BMIJohn;

console.log(BMIMark, BMIJohn, markHigherBMI);*/
/*
const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonasNew);

console.log(`just a regular string...`);

console.log('string with \n\
multiple \n\
lines');

console.log(`string
multiple
lines`);*/

/*const age = 15;
//const isOldEnough = age >= 18;

 if(age >= 18) {
    console.log('Sarah can start driving liense');
} else {
    const yearLeft = 18 - age;
    console.log(`Sarah is too young. wait another ${yearLeft} years :)`);
}

const birthYear = 2012;

let century;
if(birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);
*/

// Coding Challenge #2
/*
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

//const massMark = 95;
//const heightMark = 1.88;
//const massJohn = 85;
//const heightJohn = 1.76;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);

console.log(BMIMark, BMIJohn);
/*if (BMIMark > BMIJohn) {
    console.log("Mark's BMI is higher than john's!");
} else {
    console.log("John's BMI is higher than Mark's!");   
}
if (BMIMark > BMIJohn) {
    console.log(`Mark's BMI (${BMIMark}) is higher than john's BMI (${BMIJohn})!`);
} else {
    console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`);   
}
*/

/*const MarksBMI = 28.3;
const johnsBMI = 23.9;

if (MarksBMI > johnsBMI) {
    console.log("Mark's BMI is higher than john's!");
} else {
    console.log("john's BMI is higher than Mark's!");
}*/


// TYPE CONVERSION AND COERCION
/*const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Jonas'));
console.log(typeof NaN);

console.log(String(23), 23);

// TYPE COERCION
console.log('I am ' + 23 + ' years old');
console.log('23' - '10' - 3);
console.log('23' / '2');
console.log('23' > '18');

let n = '1' + 1; // '11'
n = n - 1;
console.log(n);
*/

// 5 falsy values: 0, '', undefined, null, NaN
/*
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 0;
if (money) {
    console.log("Don't spend it all ;)");
} else {
    console.log('You should get a job!');
}

let height = 0;
if (height) {
    console.log('YAY1! Height is defined');
} else {
    console.log('Height is UNDEFINED');
}
*/
/*
const age = '18';
if (age === 18) console.log('You just become an adult:D (strict)');

if (age == 18) console.log('You just become an adult:D (loose)');

const favourite = Number(prompt("what is your favourite number"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
    console.log('cool! 23 is an amazing number');
}   else if (favourite === 7) {
    console.log('7 is also a cool number');
}    else if (favourite === 9) {
    console.log('9 is also a cool number');
}   else {
    console.log('Number is not 23 or 7 or 9');
}

if (favourite !==23) console.log('why not 23');
*/
/*
const hasDriverLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriverLicense && hasGoodVision);
console.log(hasDriverLicense || hasGoodVision);
console.log(!hasDriverLicense);

// if (hasDriverLicense && hasGoodVision) {
//     console.log('Sarah is able to drive');
// }   else {
//     console.log('Someone else should drive...');
// }

const isTired = false //C
console.log(hasDriverLicense && hasGoodVision && isTired);

if (hasDriverLicense && hasGoodVision && !isTired) {
    console.log('Sarah is able to drive');
}   else {
    console.log('Someone else should drive...');
}
*/
/*
// CHALLENGE

// const scoreDolphines = (96 + 108 + 89) / 3;
// const scoreKoalas = (88 + 91 + 110) / 3;
// console.log(scoreDolphines, scoreKoalas);

// if (scoreDolphines > scoreKoalas) {
//     console.log('Dolphins win the trophy 🏆');
// } else if (scoreKoalas > scoreDolphines) {
//     console.log('Koalas win the trophy 🏆 ');
// } else if (scoreDolphines === scoreKoalas) {
//     console.log('Both win the trophy! 🏆 ');
// }


// BONUS 1
const scoreDolphines = (97 + 112 + 101) / 3;
const scoreKoalas = (109 + 95 + 106) / 3;
console.log(scoreDolphines, scoreKoalas);

if (scoreDolphines > scoreKoalas && scoreDolphines >=100) {
    console.log('Dolphins win the trophy 🏆');
} else if (scoreKoalas > scoreDolphines && scoreKoalas >=100) {
    console.log('Koalas win the trophy 🏆 ');
} else if (scoreDolphines === scoreKoalas && scoreDolphines >= 100 && scoreKoalas >= 100) {
    console.log('Both win the trophy! 🏆 ');
} else{
    console.log('No one wins the trophy');
}
*/
/*
// --------SWITCH STATEMENT------------
const day = 'monday';

switch (day) {
    case 'monday': // day == 'monday'
        console.log('Plan course structure');
        console.log('Go to coding meetup');
        break;
    case 'tuesday':
        console.log('Prepare theory video');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('write code examples');
        break;
    case 'friday':
        console.log('Record video');
        break;
    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekend :D');
        break;
    default:
        console.log('Not a valid day');
}

if (day === 'monday') {
    console.log('Plan course structure');
    console.log('Go to coding meetup');
} else if (day === 'tuesday') {
    console.log('Prepare theory video');   
} else if (day === 'wednesday' || day === 'thursday') {
    console.log('write code examples');
} else if (day === 'friday') {
    console.log('Record video');
} else if (day === 'saturday' || day === 'sunday') {
    console.log('Enjoy the weekend :D');
} else {
    console.log('Not a valid day');   
}
*/
/*
3 + 4
1991
true && false && !false 

if (23 > 10) {
    const str = '23 is bigger';
}

const me = 'jonas';
console.log(`I'm ${2037 - 1991} years old ${me}`);
*/
/*
// -------CONDITIONAL TERNARY OPERATOR
const age = 23;
//age >= 18 ? console.log('I like to drink wine 🍷') : console.log('I like to drink water 💧');

const drink = age >= 18 ? 'wine 🍷' : 'water 💧';
console.log(drink);

let drink2;
if (age >= 18) {
    drink2 = 'wine 🍷';
} else {
    drink2 = 'water 💧';
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? 'wine 🍷' : 'water 💧'}`);
*/

// CODING CHALLENGE
const bill = 430;
const tip = bill <=300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);






