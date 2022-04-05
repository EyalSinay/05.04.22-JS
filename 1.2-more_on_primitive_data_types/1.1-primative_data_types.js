/*
--Delete the wrong answers--

1. Which of the following is/are strings?

a) 4
b) 4.0
c) '4'

c


2. Which of the following is/are numbers?

a) 4
b) 4.0
c) '4'
d) -4

a,b,d


3. Which of the following is/are booleans?

a) true
b) false
c) "true"

a,b


4. What is the result of 80 + 71.2?

a) 151.2
b) 151
c) 8071.2

a


5. What is the result of "80" + 71.2?

a) 151.2
b) 151
c) "8071.2"

c


6. Does 100 + 30 produce a number or a string?

a) number
b)string

a


7. Does "100" + 30 produce a number or a string?

a)number
b)string

b


*/

//------Submit your answers under the question------//

//create three different ways to declare variables

var a = 1;
let b = 2;
const c = 3;


//declare a variable and reassign a value to it

let koko = 4;
koko = 5;


//create a variable and after that assign a string with its value being: He's got it!

let str;
str = `He's got it`;


/*
1. create a variable and assign a value on how much a restaurant bill is.
2. create a variable and assign a value on how much tax they should pay.
3. create a variable that will calculate the bill * tax and its output would be: Your total bill is <total bill> $.
 */

let bill = 10;
let tax = 2;
let toPay = bill * tax;
console.log(`Your total bill is ${toPay} $.`);


// Round the number 50.6 to its nearest integer

let roundNum = Math.round(50.6);
console.log(roundNum);


//Create a variable that is undefined
let ud;
console.log(ud);