
//BMI = mass / height^2 = mass / (height * height).


var markMass = prompt('What is Mark mass?'); //78 kg
var markHeight = prompt('What is Mark hight?'); //1.69 m.

console.log('Mark mass is ' +markMass+' and height '+markHeight);



var johnMass = prompt('What is john mass?'); //92
var johnHeight = prompt('What is john hight?'); //1.95

console.log('john mass is ' +johnMass+' and height '+johnHeight);

markBMI = markMass / (markHeight * markHeight );
johnBMI = johnMass / (johnHeight * johnHeight); 
console.log(markBMI , johnBMI);

console.log('Mark IBM is' +markBMI );
console.log('Jonh IBM is' +johnBMI );

var markHigherBMI =  markBMI > johnBMI;
console.log('Is Mark\'s  BMI higer then John\'s? ' + markHigherBMI);