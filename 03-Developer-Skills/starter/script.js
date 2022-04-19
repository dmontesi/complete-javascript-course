// Remember, we're gonna use strict mode in all scripts now!
"use strict";

const x = "23";
if (x === 23) console.log(23);

const calcAge = birthYear => 2037 - birthYear;

console.log(calcAge(1950));

// 59. Using Google, StackOverflow and MDN

// Problem 1:
// Calculate temperature amplitude from an array, take into count that there might be sensor errors

const temperatures = [2, -3, -5, -9, "error", 8, 13, 17, 5, 10, 9];

/* 

1) Understanding the problem
What is temp aplitude? Answer: difference between highest and lowest temperature
- How to compute max and min temperatures?
- What's a sensor error? And what to do?

2) Breaking up into sub-problems
- How to ignore errors? Check for type and continue without printing the error
- Find max value in temp array
- Find min valie in temp array
- Substract min from max (amplitude) and return it
*/

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const currentTemp = temps[i];

    if (typeof currentTemp !== "number") continue;
    if (currentTemp > max) max = currentTemp;
    if (currentTemp < min) min = currentTemp;
  }

  console.log(max, min);
  return max - min;
};

const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);

/* Problem 2: Function should now receive two arrays 

1) Understanding the problem
- With 2 arrays, do we implement function twice? A: No! Just merge two arrays

2) Breaking into sub-problems
- Merge two arrays
*/

const temperatures1 = [2, -3, -5, -9, "error", 8, 13, 17, 5, 10, 9];
// const temperatures2 = [-1, -5, -3, -10, "error", 2, 4, 5, 7, 1, 12];
// const temperatures3 = temperatures1.concat(temperatures2);

const calcTempAmplitude2 = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const currentTemp = temps[i];

    if (typeof currentTemp !== "number") continue;
    if (currentTemp > max) max = currentTemp;
    if (currentTemp < min) min = currentTemp;
  }

  console.log(max, min);
  return max - min;
};

const amplitude2 = calcTempAmplitude2([3, 5, 1], [9, 0, 5]);
console.log(amplitude2);

// 61. Debugging with the console and breakpoints

const measureKelvin = function () {
    const measurement = {
        type: 'temp',
        unit: 'celsius',
        // value: prompt('Degrees celsius:') // outputs string, not number

        // value: Number(prompt('Degrees celsius:')) // toggle back when testing
        value: 10 // value set manually cause we don't want the prompt actively showing up
    }

    // B) Find the bug
    console.table(measurement);

    const kelvin = measurement.value + 273
    return kelvin
}

// A) Identify the bug
console.log(measureKelvin()); 

// Using a debugger | Introducing a bug
const calcTempAmplitudeBug = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);
  let max = 0; // changed to 0 to introduce bug
  let min = 0; // changed to 0 to introduce bug

  for (let i = 0; i < temps.length; i++) {
    const currentTemp = temps[i];

    if (typeof currentTemp !== "number") continue;

    // debugger;
    if (currentTemp > max) max = currentTemp;
    if (currentTemp < min) min = currentTemp;
  }

  console.log(max, min);
  return max - min;
};

const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);
console.log(amplitudeBug);

/*
Coding Challenge #1
Given an array of forecasted maximum temperatures, the thermometer displays a
string with the given temperatures. Example: [17, 21, 23] will print "... 17 C in 1
days ... 21 C in 2 days ... 23 C in 3 days ..."
Your tasks:
1. Create a function 'printForecast' which takes in an array 'arr' and logs a
string like the above to the console. Try it with both test datasets.
2. Use the problem-solving framework: Understand the problem and break it up
into sub-problems!
Test data:
  Data 1: [17, 21, 23]
  Data 2: [12, 5, -5, 0, 4]
*/ 

// 1) Understanding the problem
// - Array transformed to string, seperated by ...
// - What is the X days? A: Index of current comcast + 1

// 2) Breaking into sub-problems
// - Transform array into string
// - Transform each to string with Celcius
// - String needs to content day (index + 1)
// - We need the ... between elements at start and end

const dataOne = [17,21,23];
const dataTwo = [12, 5, -5, 0, 4];
const data = dataOne.concat(dataTwo)

const printForecast = function (arr) {
    let str = '';
    
    for(let i = 0; i < arr.length; i++) {
        let noDays = i + 1;
        str += `${arr[i]}°C in ${noDays} days ... `;
    }

    console.log('...', str)
}

printForecast(data)