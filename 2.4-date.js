let currentDate = new Date();


// 1. Name of the current day e.g. Sunday
let currentDayInWeekName = currentDate.toLocaleString('en-us', {weekday: 'long'});
console.log(currentDayInWeekName);


// 2. Current day of the month e.g. 31
let currentDayInMonthNum = currentDate.getDate();
console.log(currentDayInMonthNum);


// 3. Current month e.g January
let currentDayInMonthName = currentDate.toLocaleString('en-us', {month: 'long'});
console.log(currentDayInMonthName);


// 5. Current Year e.g 2021
let currentYear = currentDate.getFullYear();
console.log(currentYear);


// Create a function that will return a string in the following 
// format:
// `Today is Sunday the 31 of January, 2021’
const strDate = function(){
    return `Today is ${currentDayInWeekName} the ${currentDayInMonthNum} of ${currentDayInMonthName}, ${currentYear}`;
}

console.log(strDate());