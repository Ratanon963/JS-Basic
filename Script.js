
/*
var firstName = 'John';
console.log(firstName);

var lastName = 'Smith';
var age =28;

var fullAge = true;



console.log(fullAge);


var job;
console.log(job);

job = 'Techer'
console.log(job);

var _3year = 3;
var johnMark ='Jonh and Mark';
 */


/********************************

//Type coercion
var firstName = 'John';
var age = 28;

console.log(firstName + ' ' + age);

var job, isMarried;
job ='teacher';
isMarried = false;

console.log(firstName + 'is a ' + age + ' year old ' + job + ' Is he married ? ' + isMarried);

// Varialbe mutation --> Auto change
age = 'twenty eight'; 
job = 'driver';

alert(firstName + 'is a ' + age + ' year old ' + job + ' Is he married ? ' + isMarried);

var lastName = prompt('What is his last Name?');
console.log(firstName+' '+lastName);
*/


//-------------------------------------------------------
//1.
/********************************
Basic operators


var year,yearJohn,yearMark
now = 2018;
ageJohn =  28;
ageMark  = 33;

// Math operators 
yearJohn = now - ageJohn;
yearMark = now - ageMark;

console.log(yearJohn);

console.log(now + 2);
console.log(now * 2); 
console.log(now / 10);
*/

/********************************
Logic opertors


var johnOlder = ageJohn < ageMark;
console.log(johnOlder);


//tyep of operator
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof "Mark is older then John");
var x;

console.log(typeof x);
*/

//-------------------------------------------------------
//2. Operator precedence

var now = 2018;
var yearJohn = 1989;
var fullAge = 18;

//Multi operators
var isFullAge = now - yearJohn >= fullAge; // ture
console.log(isFullAge);

//Grouping 
var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) /2; 
console.log(average);

//Multiple assignment
var x,y;
x = y = (3 + 5) * 4 -6; // = 8 * 4 - 6 // 32 - 6 // =26
console.log(x,y); 

// More operators 
//x = x * 2;
x *= 2; // Better ver.
console.log(x);
x +=10;
console.log(x);

//x = x + 1;
//x += 1;
x ++
console.log(x);