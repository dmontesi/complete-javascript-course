'use strict';

let hasDriversLicense = false;
const passedTest = true;

if (passedTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('Yay!! I can drive 🚗');

// const interface = 'Audio'; // reserved word
// const private = true; // reserved word

// 33. FUNCTIONS

function logger() {
	console.log('My name is Dan');
}

// Calling, Invoking or Running a Function
logger();
logger();
logger();

function fruitProcesser(apples, oranges, beets) {
	// console.log(apples, oranges);
	const juice = `This is a juice with ${apples} apples, ${oranges} oranges and ${beets} beets.`;
	return juice;
}

const appleJuice = fruitProcesser(5, 0, 0); // invoking and storing in a variable
console.log(appleJuice);
// OR you can invoke the function without storing directly
// console.log(fruitProcesser(5, 0));

const appleOrangesJuice = fruitProcesser(2, 4, 0);
console.log(appleOrangesJuice);

const appleOrangesBeetsJuice = fruitProcesser(2, 1, 3);
console.log(appleOrangesBeetsJuice);

// Functions practice

function bowieTopAlbums(album1, album2, album3, album4, album5) {
	const albums = `favorite Bowie albums are: ${album1}, ${album2}, ${album3}, ${album4} & ${album5}.`;
	return albums;
}

const dansFavs = bowieTopAlbums(
	'Heathen',
	'Reality',
	'Black Star',
	'Lodger',
	'The Rise and Fall of Ziggy Stardust and The Spiders from Mars'
);

const mikesFavs = bowieTopAlbums(
	"Let's Dance",
	'Heroes',
	'Pinups',
	'Never Let Me Down',
	'Station to Station'
);

console.log(`Dan's`, dansFavs);
console.log(`Mike's`, mikesFavs);

function moviesCategories(comedy, drama, adventure, suspense, thriller) {
	const categories = `There are ${comedy} comedies, ${drama} dramas, ${adventure} adventure, ${suspense} suspense & ${thriller} thrillers in this year's movie awards.`;
	return categories;
}

const popularCategories = moviesCategories(16, 13, 3, 7, 2);
console.log(popularCategories);

// 34. Function Declarations vs Expressions
// Function Declaration Example

const age1 = calcAge1(1991); // What’s inside the parenthesis here is an argument

function calcAge1(birthYear) {
	// What’s inside the parenthesis is a parameter, which is like a variable
	return 2037 - birthYear;
}

// Function Expression Example
const calcAge2 = function (birthYear) {
	return 2037 - birthYear;
};

const age2 = calcAge2(1984);
// console.log(age1, age2);

// 35. Arrow Functions
const calcAge3 = (birthYear) => 2037 - birthYear;
const age3 = calcAge3(2018);
console.log(age1, age2, age3);

const yearsUntilRetirement = (birthYear, firstName) => {
	const age = 2032 - birthYear;
	const retirement = 65 - age;
	return `${firstName} retires in ${retirement} years.`;
};

console.log(yearsUntilRetirement(1982, 'Dan'));
console.log(yearsUntilRetirement(1984, 'Jess'));

const yearsUntilDriving = (birthYear, firstName) => {
	const age = 2022 - birthYear;
	const yearsLeft = 16 - age;
	return `${firstName} has ${yearsLeft} years to get her license.. 🚙`;
};

console.log(yearsUntilDriving(2018, 'Olivia'));
console.log(yearsUntilDriving(2021, 'Julian'));

// 36. Functions inside functions

function fruitSlices(fruit) {
	return fruit * 8;
}

function fruitProcessor(apples, oranges) {
	const appleSlices = fruitSlices(apples);
	const orangeSlices = fruitSlices(oranges);
	// console.log(apples, oranges);
	const juice = `This is a juice with ${appleSlices} pieces of apples, and ${orangeSlices} pieces of oranges.`;
	return juice;
}

console.log(fruitProcessor(2, 8));

// 37. Reviewing Functions

function calcAge4(birthYear) {
	return 2022 - birthYear;
}

const yearsUntilRetirement2 = (birthYear, firstName) => {
	const age = calcAge4(birthYear); // using function inside of function
	const retirement = 65 - age;

	if (retirement > 0) {
		console.log(`${firstName} has ${retirement} years until retirement.`);
	} else {
		console.log(`${firstName} already retired 🏖.`);
		return -1;
	}
};

console.log(yearsUntilRetirement2(1982, 'Dan'));
console.log(yearsUntilRetirement2(1940, 'Hector'));

// 38. Coding Challenge #1

/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so
one average score per team).
A team only wins if it has at least double the average score of the other team.
Otherwise, no team wins!

Your tasks:
1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team
as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
to the console, together with the victory points, according to the rule above.
Example: "Koalas win (30 vs. 13)"
4. Use the 'checkWinner' function to determine the winner for both Data 1 and
Data 2
5. Ignore draws this time

Test data:
  Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
  Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
Hints:
  To calculate average of 3 values, add them all together and divide by 3
  To check if number A is at least double number B, check for A >= 2 * B.
Apply this to the team's average scores
*/

const calcAvg = (score1, score2, score3) => (score1 + score2 + score3) / 3;
// console.log(calcAvg(2, 4, 8));

// Data 1
let teamDolphins = calcAvg(44, 23, 71);
let teamKoalas = calcAvg(65, 54, 49);

console.log(teamDolphins, teamKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
	if (avgDolphins >= 2 * avgKoalas) {
		return `Team Dolphin wins! 🏆 (${avgDolphins} vs ${avgKoalas}) `;
	} else if (avgKoalas >= 2 * avgDolphins) {
		return `Team Koala wins! 🏆(${avgKoalas} vs ${avgDolphins}) `;
	} else {
		return `No teams win! 😪`;
	}
};

console.log(checkWinner(teamDolphins, teamKoalas));
console.log(checkWinner(56, 143));

// Data 2
teamDolphins = calcAvg(85, 54, 41);
teamKoalas = calcAvg(23, 34, 27);
console.log(checkWinner(teamDolphins, teamKoalas));

// Got it! 😎

// 39. Introduction to Arrays

// Literal syntax
const friends = ['Alex', 'Joselias', 'Cosmo', 'Pluto'];
console.log(friends);

// New keyword
const years = new Array(1982, 1984, 2018, 2021);
console.log(years);

console.log(friends[1]); // to get the value out of the array
console.log(friends.length); // to get number of elements in the array
console.log(friends[friends.length - 1]); // to get the last element out of the array.
friends[1] = 'Jose'; // this is how you can mutate an array
console.log(friends); // to get the last element out of the array
// friends = ['Bob', 'Alice'] // we cannot replace an entire array

// Mix and match different types in an array
const firstName = 'Dan';
const lastName = 'M';
const dan = [firstName, lastName, 2022 - 1982, 'Engineer', friends];
console.log(dan);
console.log(dan.length);

// Functions and Arrays
const calcAge5 = (birthYear) => {
	return 2022 - birthYear;
};

const years2 = [1982, 1984, 2018, 2021];

const ages = [
	calcAge5(years2[0]),
	calcAge5(years2[1]),
	calcAge5(years2[years.length - 1]),
];

console.log(ages);

// 40. Basic Array Operations (Methods)

const solaris = ['Alex', 'Allie', 'Chandler'];

// Add elements
// Push
// solaris.push('Gregg');
console.log(solaris);

const solarisLengh = solaris.push('Gregg'); // Store length and push it
console.log(solarisLengh);

// Unshift
solaris.unshift('Mike');
console.log(solaris);

// Remove elements
// Pop
solaris.pop(); // pop removes last element in array
const popped = solaris.pop();
console.log(popped);
console.log(solaris);

solaris.shift(); // shift removes first element in array
console.log(solaris);

// Elements in array
// IndexOf
console.log(solaris.indexOf('Allie')); // returns value of element

// Includes
console.log(solaris.includes('Allie')); // returns boolean. It uses strict equality operator

if (solaris.includes('Pedro')) {
	console.log('Oh, is Pedro working today?');
} else {
	console.log('No one named Pedro in your team right now');
}

// Coding Challenge #2

/*
Steven is still building his tip calculator, using the same rules as before: Tip 15% of
the bill2 if the bill value is between 50 and 300, and if the value is different, the tip is
20%.
Your tasks:
1. Write a function 'calcTip' that takes any bill value as an input and returns
the corresponding tip, calculated based on the rules above (you can check out
the code from first tip calculator challenge if you need to). Use the function
type you like the most. Test the function using a bill value of 100
2. And now let's use arrays! So create an array 'bills' containing the test data
below
3. Create an array 'tips' containing the tip value for each bill, calculated from
the function you created before
4. Bonus: Create an array 'total' containing the total values, so the bill + tip

Test data: 125, 555 and 44
*/

const calcTip = (bill) => {
	if (bill >= 50 && bill <= 300) {
		return bill * 0.15;
	} else {
		return bill * 0.2;
	}
};

// if done with terniary operator
// const calcTip = (bill) => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(total);

// Got it! 😎

// 42. Introduction to Objects

const musician = {
	firstName: 'Ringo',
	lastName: 'Starr',
	age: 2022 - 1941,
	job: 'drummer',
	bandmates: ['John', 'Paul', 'George'],
};

console.log(musician);

// 43. Dot vs. Bracket Notation

// Dot notation
console.log(musician.firstName);

// Bracket notation
console.log(musician['lastName']);

// Concatenation with brackets notation
const nameKey = 'Name';
console.log(musician['first' + nameKey]);
console.log(musician['last' + nameKey]);

// another example of an expression with brackets notation
// const interestedIn = prompt('What would you like to know about Ringo?');

// if (musician[interestedIn]) {
// 	console.log(musician[interestedIn]);
// } else {
// 	console.log(
// 		'Wrong answer! Choose between firstName, lastName, age, job or bandmates'
// 	);
// }

musician.location = 'UK';
musician.website = 'ringo.com';
console.log(musician);

// Challange
// "Ringo has 3 bandmates, and his favorite bandmate was George"

const favBandmate = `${musician.firstName} has ${musician.bandmates.length} friends, and his favorite bandmate was ${musician.bandmates[2]}`;
console.log(favBandmate);

// 44. Object Methods

const teacher = {
	firstName: 'Jonas',
	lastName: 'Schmedtmann',
	birthYear: 1991,
	job: 'teacher',
	hasDriversLicense: true,
	// This doesn't follow the DRY principle because of birthYear was already declared
	// calcAge: function (birthYear) {
	// 	return 2037 - birthYear;
	// },

	// Second way to do this:
	// calcAge: function () {
	// 	console.log(this); // this can access the teacher object
	// 	return 2037 - this.birthYear;
	// },

	// Correct way to do this
	calcAge: function () {
		this.age = 2037 - this.birthYear; // adds new key to object
		return this.age;
	},
	getSummary: function () {
		return `${this.firstName} is a ${this.calcAge()} years old ${
			this.job
		} and he has ${
			this.hasDriversLicense == true ? 'a' : 'no'
		} driver's license`;
	},
};

// This doesn't follow the DRY principle because of birthYear was already declared
// console.log(teacher.calcAge(1991), teacher.firstName);
// You can do the same with the brackets notation
// console.log(teacher['calcAge'](1991));

console.log(teacher.calcAge());

// when need to call it multiple times, you can call it like this:
console.log(teacher.age);
console.log(teacher.age);
console.log(teacher.age);

// Challange
// "Jonas is a 46-years old teacher, and he has a/no driver's license"
console.log(teacher.getSummary());

/*
Coding Challenge #3

Let's go back to Mark and John comparing their BMIs! This time, let's use objects to
implement the calculations! Remember: BMI = mass / height ** 2 = mass
/ (height * height) (mass in kg and height in meter)
Your tasks:
1. For each of them, create an object with properties for their full name, mass, and
height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same
method on both objects). Store the BMI value to a property, and also return it
from the method
3. Log to the console who has the higher BMI, together with the full name and the
respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"

Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m
tall.
 */

const john = {
	fullName: 'John Smith',
	mass: 92,
	height: 1.95,
	calcBMI: function () {
		const BMI = this.mass / this.height ** 2;
		return BMI;
	},
};

const mark = {
	fullName: 'Mark Miller',
	mass: 78,
	height: 1.69,
	calcBMI: function () {
		this.BMI = this.mass / this.height ** 2; // <== proper way to store variable inside the object
		return this.BMI;
	},
};

mark.calcBMI();

console.log(mark.BMI, john.calcBMI()); // this can't access John's BMI in object. We'd have to call the function instead

const higherBMI = function () {
	if (john.calcBMI() > mark.calcBMI()) {
		return `${john.fullName}'s BMI ${john.calcBMI()} is higher than ${
			mark.fullName
		}'s ${mark.calcBMI()}`;
	} else if (mark.calcBMI() > john.calcBMI()) {
		return `${mark.fullName}'s BMI ${mark.calcBMI()} is higher than ${
			john.fullName
		}'s ${john.calcBMI()}`;
	}
};

console.log(higherBMI());

// 46. Iteration: The for Loop
// for loop keeps running while condition is true

for (let rep = 1; rep <= 10; rep++) {
	console.log(`Lifting weights repetition number ${rep} 🏋🏻‍♂️`);
}

// 47. Looping Arrays, Breaking and Continuing

const jonas = [
	'Jonas',
	'Schmedtmann',
	2037 - 1991,
	'teacher',
	['Michael', 'Peter'],
	true,
];

const types = []; // this is just to know what type

// This below will work, but it's not recommended to hard code the middle i < 5 formula because we might need to add more to the array
// for (let i = 0; i < 5; i++) {
// 	console.log(jonas[i]);
// }

// instead we do it like this:
for (let i = 0; i < jonas.length; i++) {
	// Reading jonas array
	console.log(jonas[i], typeof jonas[i]);

	// Filling types array
	// types[i] = typeof jonas[i];
	types.push(typeof jonas[i]);
}

console.log(types);

const years3 = [2012, 2016, 2018, 2021];
const age6 = [];

for (let i = 0; i < years3.length; i++) {
	age6.push(2022 - years3[i]);
}

console.log(age6);

// continue and break
console.log('-- ONLY STRINGS --');
for (let i = 0; i < jonas.length; i++) {
	if (typeof jonas[i] !== 'string') continue;
	console.log(jonas[i]);
}

console.log('-- BREAK WITH NUMBER --');
for (let i = 0; i < jonas.length; i++) {
	if (typeof jonas[i] === 'number') break;

	console.log(jonas[i]);
}

// Practice
const releasedAlbums = [2009, 2012, 2014, 2017];
const releasedSince = [];

for (let i = 0; i < releasedAlbums.length; i++) {
	releasedSince.push(2022 - releasedAlbums[i]);
}

console.log(releasedSince);

// 48. Looping Backwards and Loops in Loops
// Backwards
for (let i = jonas.length - 1; i >= 0; i--) {
	console.log(i, jonas[i]);
}

// Loops in Loops
for (let week = 1; week < 4; week++) {
	console.log(`Week ${week} Exercise`);

	for (let rep = 1; rep < 6; rep++) {
		console.log(`Week ${week}: Lifting weight repetition ${rep} 🏋🏻‍♂️`);
	}
}

// Loops Practice

const dmAlbums = ['Invierno', 'Without Remorse', 'Post-War', 'Hades'];
const songsList = {
	Invierno: [
		'Intro',
		'Nunavut',
		'Vostok',
		'Mu',
		'Snegúrochka',
		'Pulsar Nebula',
	],
	Without_Remorse: [
		'Our Gods Are Made On Earth',
		'Without Remorse',
		'The Withered Are Serene',
		'The Sun Never Sets',
		'Hibakusha',
	],
	Post_War: [
		'Quiet Like A Knife',
		'This Tired Wasteland',
		"Pyre (Where There's Nothing Else Left)",
		'While I Lay',
		'Huida Hacia El Sol',
		'Three Fatal Sparks Have Set The Hearts Of All On Fire',
		'All Is Good',
		'For Those Who Have Faith',
	],
	Hades: [
		'Descent Of Peritheos',
		'The Ruler Was The Ocean',
		'Clinostat',
		'State of Grace',
		'Further Below Than Heaven Above',
	],
};

for (let album = 0; album < dmAlbums.length; album++) {
	console.log(`Album #${album + 1}: ${dmAlbums[album]}`);

	if (dmAlbums[album] === 'Invierno') {
		console.log(`${songsList.Invierno}`);
	} else if (dmAlbums[album] === 'Without Remorse') {
		console.log(`${songsList.Without_Remorse}`);
	} else if (dmAlbums[album] === 'Post-War') {
		console.log(`${songsList.Post_War}`);
	} else if (dmAlbums[album] === 'Hades') {
		console.log(`${songsList.Hades}`);
	}
}

// 49. The while Loop

// Example 1: similarities with the for loop
let rep = 1;

while (rep <= 10) {
	console.log(`WHILE LOOP: Lifting weights repetition number ${rep} 🏋🏻‍♂️`);
	rep++;
}

// Example 2: rolling the dice.
let dice = Math.trunc(Math.random() * 6 + 1);

while (dice !== 6) {
	console.log(`You rolled a ${dice}`);
	dice = Math.trunc(Math.random() * 6 + 1); // without reassigning it becomes an infinate loop

	if (dice === 6) console.log(`You rolled a ${dice}. Loop ends.`);
}

/*
Coding Challenge #4
Let's improve Steven's tip calculator even more, this time using loops!
Your tasks:
1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate
tips and total values (bill + tip) for every bill value in the bills array. Use a for
loop to perform the 10 calculations!
Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52
Hints: Call ‘calcTip ‘in the loop and use the push method to add values to the
tips and totals arrays 😉

Bonus:
4. Bonus: Write a function 'calcAverage' which takes an array called 'arr' as
an argument. This function calculates the average of all numbers in the given
array. This is a difficult challenge (we haven't done this before)! Here is how to
solve it:
4.1. First, you will need to add up all values in the array. To do the addition,
start by creating a variable 'sum' that starts at 0. Then loop over the
array using a for loop. In each iteration, add the current value to the
'sum' variable. This way, by the end of the loop, you have all values
added together
4.2. To calculate the average, divide the sum you calculated before by the
length of the array (because that's the number of elements)
4.3. Call the function with the 'totals' array
*/

const calcTip2 = function (bill) {
	if (bill >= 50 && bill <= 300) {
		return bill * 0.15;
	} else {
		return bill * 0.2;
	}
};

const bills2 = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips2 = [];
const totals2 = [];

for (let i = 0; i < bills2.length; i++) {
	const tip = calcTip2(bills2[i]);
	tips2.push(tip);
	totals2.push(tip + bills2[i]);
}

console.log(bills2, tips2, totals2);

// Bonus
const calcAverage = function (arr) {
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		// sum = sum + arr[i];
		sum += arr[i];
	}

	// console.log(sum);
	return sum / arr.length;
};

// console.log(calcAverage([2, 2, 4, 1, 1]));
console.log(calcAverage(bills2));
