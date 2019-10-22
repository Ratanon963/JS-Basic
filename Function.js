// Function


function calculateAge(birthYear){
    return 2018 - birthYear;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1948);
var ageJene = calculateAge(1969);

console.log(ageJohn, ageMike, ageJene);


function yearUntilRetirment(year, firstName)
{
    var age = calculateAge(year);
    var retirment = 65 - age;
    
if(retirment > 0){
    console.log(firstName + 'retires in ' + retirment + ' year');
}else{
    console.log(firstName + 'is already retire');
}

}
yearUntilRetirment(1990,'John');
yearUntilRetirment(1948,'Mike');
yearUntilRetirment(1969,'Jene');


/*******
 * Function statement and expresstions
 */
 //Function declaration function(job,firstName){ }


 //Function expression
 var whatDoYoDo = function(job,firstName){
    switch(job){

        case 'teacher' :
            return firstName + ' teach kids how to know code';
        case 'driver' :
            return firstName + ' drives a cab in Lisbon';
        case 'designer':
            return firstName + ' designs beautiful websilte';
        
        default:
            return firstName + 'does something else';
    }
 }

 console.log('----------------------------');
console.log(whatDoYoDo('teacher','Jonh'));
console.log(whatDoYoDo('driver','Jane'));
console.log(whatDoYoDo('designer','Mark'));

//Initalize new array
var name = ['John','Mark','Jane'];
var year = new Array(1990,1969,1948);

console.log(name);
console.log(name.length);

// Muate array data
name[1] = 'Ben';
name[3] = 'Mary';
console.log(name);
console.log(name.length);

//Different data type
var john = ['John', 'Smith', 1990, 'teacher',false,'isDesigner'];
john.push('blue');   //add last
john.unshift('Mr.'); //add First
console.log(john);

console.log("------- ");

john.pop(); //delete last
john.pop(); //delete last
john.shift(); // delete first
console.log(john);

console.log(john.indexOf(23));

var isDesigner = john.indexOf('designer') === -1 ? 'John is NOT a desinger' : 'John is a desiger';

console.log(isDesigner);

