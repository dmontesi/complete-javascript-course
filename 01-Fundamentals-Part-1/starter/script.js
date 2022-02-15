// Values and Variables
let country = 'United States';
let continent = 'America';
let population = 332403000;

console.log(
	'Country:' + ' ' + country + ' of ' + continent,
	'Population: ' + population
);

// Using type of
console.log(typeof country);
console.log(typeof 33);

// Undefined
let year;
console.log(year);
console.log(typeof year);

console.log(typeof null); // this will result in a javascript bug that prints "object" to the console

// Math Operators
const currentYear = 2033;
const ageDan = currentYear - 1982;
const ageOlivia = currentYear - 2018;
console.log(ageDan, ageOlivia);
console.log(2 ** 3); // 2 to the power of 3 = 2 * 2 * 2

// Assignment Operators
let x = 10; // = is an assignment operator
x += 15; // += means x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++;
x--;
console.log(x);

// Comparison Operators
console.log(ageDan > ageOlivia);
console.log(ageOlivia >= 18);
const isFullAge = ageOlivia >= 18;

// Example of how multiple variables can be set at once
let y, z;
y = 2;
z = y * 2;
console.log(y, z);

// Operator Predecesance
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

// example of precedance done wrong. Division occurs before addition. See link above
// const averageAge = ageDan + ageOlivia / 2;

// instead
const averageAge = (ageDan + ageOlivia) / 2;
console.log(ageDan, ageOlivia, averageAge);

/* JavaScript Fundamentals – Part 1

Coding Challenge #1

Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).

Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.

Test data:
  Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
  Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall.
*/

// const BMI = mass / (height * height); Formula

const markMass = 78;
const markHeight = 1.69;
const johnMass = 92;
const johnHeight = 1.95;

const markBMI = markMass / markHeight ** 2;
const johnBMI = johnMass / (johnHeight * johnHeight); // same, different formula

const markHigherBMI = markBMI > johnBMI;
console.log(markBMI, johnBMI, markHigherBMI);

// Got it right 🤘🏼

// Taking Decisions (If / Else)

const age = 15;
const isOldEnough = age >= 18;

if (isOldEnough) {
	console.log(`Sarah can start driving 🚗`);
} else {
	const yearsLeft = 18 - age;
	console.log(
		`Sarah is still too young. Wait another ${yearsLeft} years to start driving 🙂`
	);
}

// Example using let variables inside if statement

const birthYr = 2018;
let century;

if (birthYr < 2000) {
	century = 20;
} else {
	century = 21;
}

console.log(`Olivia was born in the ${century} century.`);

/* Coding Challenge #2

Use the BMI example from Challenge #1, and the code you already wrote, and
improve it.
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"
Hint: Use an if/else statement 

*/

if (markHigherBMI) {
	console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})!`);
} else {
	console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})!`);
}

// Got it right 🤘🏼

// Type Conversion
const inputYear = '1982';
console.log(Number(inputYear), inputYear); // number and string
console.log(Number(inputYear) + 18);

// Type Coercion
console.log('I am ' + 20 + ' years old'); // js converts to strings
console.log('23' - '10' - 3); // js converts to numbers cause the - sign only works with numbers
console.log('23' + '10' + 3); // with plus sing it keeps it as strings
console.log(('23' * '10') / 3); // js also only converts to numbers
console.log('10' - '4' - '3' - 2 + '5'); // fun. Converts to string

// Truthy and Falsy Values
// 5 Falsy Values: 0, '', null, undefined, NaN

const money = 0; // falsy value
if (money) {
	console.log('you got some money in your bank');
} else {
	console.log('go get a job!');
}

let height;
height = 175;

if (height) {
	console.log('Yay! Height is defined');
} else {
	console.log('Height is undefined');
}

// Equality Operators: == vs. ===

// === strict equality operator. For exact values. It does NOT perform type coercion, so it only returns true when both values are exactly the same

const legalAge = '18';
if (legalAge === 18)
	console.log(`You’re an adult now.Get your things together (strict ===)`);

if (legalAge == 18)
	console.log(`You’re an adult now. Get your things together (loose ==)`);

// Another example with a prompt and the strict operator
// const favNumber = Number(prompt("What's your favorite number?"));

// console.log(favNumber);

// if (favNumber === 27) {
// 	console.log("Oh wow, that's not the best number you can get. Remember Kurt?");
// } else if (favNumber === 7) {
// 	console.log(`Remember when you were ${favNumber}?. `);
// } else if (favNumber === NaN) {
// 	// doesn't work
// 	console.log(`That isn't a number. Try again.`);
// } else {
// 	console.log(`Groovy. ${favNumber} is a cool number`);
// }

// Boolean Logic
const hasDriversLicense = true;
const hasGoodVision = true;
const isTired = false;

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
	console.log('Sarah is able to drive');
} else {
	console.log('Someone else should drive');
}

/* Coding Challenge #3
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy!
Your tasks:
1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score)
3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. Hint: Use a logical operator to test for minimum score, as well as multiple else-if blocks
4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy

Test data:
  Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
  Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
  Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
 */

const dolphinsRoundOneAvg = (96 + 108 + 89) / 3;
const koalasRoundOneAvg = (88 + 91 + 110) / 3;
const dolphinsRoundTwoAvg = (97 + 112 + 101) / 3;
const koalasRoundTwoAvg = (109 + 95 + 123) / 3;
const dolphinsRoundThreeAvg = (97 + 112 + 101) / 3;
const koalasRoundThreeAvg = (109 + 95 + 106) / 3;

console.log(dolphinsRoundOneAvg, koalasRoundOneAvg);
console.log(dolphinsRoundTwoAvg, koalasRoundTwoAvg);
console.log(dolphinsRoundThreeAvg, koalasRoundThreeAvg);

if (dolphinsRoundOneAvg > koalasRoundOneAvg) {
	console.log('Dolphines win round one 🏆');
} else if (dolphinsRoundOneAvg < koalasRoundOneAvg) {
	console.log('Koalas win round one 🏆');
} else {
	console.log('Both win the trophy 🏆🏆');
}

// Bonus 1
if (dolphinsRoundTwoAvg > koalasRoundTwoAvg && dolphinsRoundTwoAvg >= 100) {
	console.log('Dolphins win round two 🏆');
} else if (
	dolphinsRoundTwoAvg < koalasRoundTwoAvg &&
	koalasRoundTwoAvg >= 100
) {
	console.log('Koalas win round two 🏆');
} else {
	console.log('No one wins');
}

// Bonus 2
if (
	dolphinsRoundThreeAvg > koalasRoundThreeAvg &&
	dolphinsRoundThreeAvg >= 100
) {
	console.log('Dolphins win round three 🏆');
} else if (
	dolphinsRoundThreeAvg < koalasRoundThreeAvg &&
	koalasRoundThreeAvg >= 100
) {
	console.log('Koalas win round three 🏆');
} else if (
	dolphinsRoundThreeAvg === koalasRoundThreeAvg &&
	dolphinsRoundThreeAvg > 100 &&
	koalasRoundThreeAvg > 100
) {
	console.log('Both teams win the trophy 🏆🏆');
} else {
	console.log('No one wins');
}

// Switch Statement

const day = 'saturday'; // this will be most likely an input the user enters
switch (day) {
	case 'monday': // day === monday // uses an strict operator
		console.log('Plan course structure');
		break;
	case 'tuesday':
		console.log('Prepare theory videos');
		break;
	case 'wednesday':
	case 'thursday':
		console.log('Write code examples');
		break;
	case 'friday':
		console.log('record videos');
		break;
	case 'saturday':
	case 'sunday':
		console.log('Enjoy the weekend 😎 (Switch Statement)');
		break;
	default:
		console.log('Not a valid day');
}

// Same as doing

if (day === 'monday') {
	console.log('Plan course structure');
} else if (day === 'tuesday') {
	console.log('Prepare theory videos');
} else if (day === 'wednesday' || day === 'thursday') {
	console.log('Prepare theory videos');
} else if (day === 'saturday' || day === 'sunday') {
	console.log('Enjoy the weekend 😎 (If/Else Statement)');
} else {
	console.log('Not a valid day');
}

// The Terniaty Operator
const minAge = 22;

const drink = minAge >= 18 ? 'wine 🍷' : 'water 🚰'; // better to store the terniary operator in a variable
console.log(`I like to drink ${drink}`);

// comparing to if/else
let drink2;
if (minAge >= 18) {
	drink2 = 'wine 🍷';
} else {
	drink2 = 'water 🚰';
}

console.log(drink2);

/* 

Coding Challenge #4
Steven wants to build a very simple tip calculator for whenever he goes eating in a
restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and
300. If the value is different, the tip is 20%.

Your tasks:
1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for
this. It's not allowed to use an if/else statement
2. Print a string to the console containing the bill value, the tip, and the final value
(bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value
316.25”

Test data:
- Data 1: Test for bill values 275, 40 and 430

*/

const billTotal = 275;
const tip =
	billTotal >= 50 && billTotal <= 300 ? billTotal * 0.15 : billTotal * 0.2;
console.log(`The bill was $${billTotal}, the tip was $${tip}, and the total value
$${billTotal + tip}`);
