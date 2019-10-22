
// if / else staements

var fistName = 'John';
var civilStatus = 'single'; //single

if (civilStatus === 'married'){
console.log(fistName + 'is married !');
}else {
    console.log(fistName + ' will hopefully marry soon:')
}


var isMarried = true;

if (isMarried){
console.log(fistName + ' is married !');
}else {
    console.log(fistName + ' will hopefully marry soon:')
}

var markMass = 78; //78 kg
var markHeight = 1.69; //1.69 m.

var johnMass = 92;
var johnHeight = 1.95;


markBMI = markMass / (markHeight * markHeight );
johnBMI = johnMass / (johnHeight * johnHeight); 

console.log('MARK\s\' '+markBMI, 'JOHN\s\' ' + johnBMI);

if(markBMI > johnBMI ){
console.log('Mark\' BMI is higher then John\'s.');
}else {
console.log('John\' BMI is higher then Mark\'s.');
}


// Boonlean logic
/*
    and && , or || NOT 
*/


var fistName ='John';
var age = 20;

if (age < 13){
    console.log(fistName + 'is a boy');
} else if (age >= 13 && age <20){  
    console.log(fistName + 'is a teenage');
} else if (age >= 20 && age < 30){  
    console.log(fistName + 'is a yong man');
}else {
    console.log(fistName + 'is a man');
}


// The Ternary Operation  

var fistName = 'John';
var age = 22;

age >= 18 ? console.log(fistName + ' drinks beer.'): console.log(fistName + ' drink juice.');

var drink = age >= 18 ? 'beer':'juice';    // Use for simple Statement
console.log(drink);

//Switch Statement (create for solve complicate if cause)

var job ='cop';
switch (job){
    case 'techer':
    console.log(fistName + ' teaches kids how to code');
    break;
    case 'driver':
    console.log(fistName + ' drive a uber in Lisbon');
    break;
    case 'designer':
    console.log(fistName + ' desing a beuatiful web');
    break;
    default:
    console.log(fistName + ' dose sometingelse');
}


age1 = 10;
switch(true) {
    case age1 < 13:
    console.log(fistName + ' Is a boy');
    break;
    case (age1 >= 20 && age < 30):
    console.log(fistName + ' Is a teenager');
    break;
    case (age1 >= 20 && age < 30):
    console.log(fistName + ' Is a young man');
    break;
    default:
    console.age1(fistName + 'is a man');
}

// Truthy and Falsy value and equality operators
/*
    Falsy values: underfined, null, 0, '', NaN
    Truthy values: NOT Falsy values

*/

var height;
'Check Falsy '

height = 0;
if(height || height === 0){
    console.log('Variable is defined');
}else {
    console.log('Variable has not been defined');
}

//Equlity operators
var height1 = 23
if(height1 == '23'){
    console.log('The == operatior does type coercion');
}else{
    console.log('The 23 number and 23 text');
}