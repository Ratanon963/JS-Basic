/**
 * Loop and iteration 
 * 
 */

for (var i =1; i <= 20; i+=2){
    console.log(i);
}
// i = 0, 0 < 10 true,    log i to console, i++ 
// i = 0, 1 < 10 true,    log i to the console, i++
//....
// i = 9, 9 < 10 true,    log i to the console, i++
// i = 10, 10 < 10 false, exit the loop



var john = ['John','Smith', 1990, 'designer', false];

for (var i=0; i < john.length; i++){
console.log(john[i]);
}
console.log('----------------');
var i = 0;


while(i< john.length){
    console.log(john[i]);
    i++;
}



/**
 * Continue and break statement
 * 
 */

console.log('---------------- 2');

var john2 = ['John','Smith', 1990, 'designer', false,'blue'];

for (var i=0; i < john2.length ;i++)
{
    if(typeof john2[i] !== 'string') continue;
    
    console.log(john2[i]);
}
console.log('---------------- 3');


for (var i=0; i < john2.length ;i++)
{
    if(typeof john2[i] !== 'string') break;
    
    console.log(john2[i]);
}

/**
 * Looping backwards
 * 
 */
console.log('---------------- 4');
 for(var i=john2.length -1 ; i >= 0 ; i--)
 {
    console.log(john2[i]);

 }