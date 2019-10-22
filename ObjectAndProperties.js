/****
 *  Object and Properties
 * 
 */

 var john ={
    firstName:  'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane','Mark','Bob','Emily'],
    job: 'teacher',
    isMarried: false
 };

 console.log(john.firstName);
 console.log(john['lastName']);
 var x ='birthYear';
 console.log(john[x]);

 john.job = 'designer';
 john['isMarried'] = true;
 console.log(john);


 // New object syntax
var jane = new Object();
jane.firstName = 'Jane';
jane.birthYear = 1969;
jane['lastName'] = 'Smith';
console.log(jane);


/****
 *  Object and Method
 * 
 */

var john ={
    firstName:  'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane','Mark','Bob','Emily'],
    job: 'teacher',
    isMarried: false,
    calAge: function(birthYear){
        this.age = 2018 - this.birthYear;
    }
 };

 console.log(john.calAge());
 john.calAge();
 console.log(john);


var john1 = {
    fullName: 'John Smith',
    mass: 92,
    heigh: 1.95,
    calBMI: function(){
        this.bmi = this.mass / (this.heigh * this.heigh);
        return this.bmi;
    }
}

var mark1 = {
    fullName: 'Mark Miller',
    mass: 78,
    heigh: 1.69,
    calBMI: function(){
        this.bmi = this.mass / (this.heigh * this.heigh);
        return this.bmi;
    }
}



if(john1.calBMI() > mark1.calBMI()){
    console.log(john1.fullName + ' has a higher BMI of ' + john1.bmi);

} else if(mark1.calBMI() > john1.calBMI()){
    console.log(mark1.fullName + ' has a higher BMI of ' + mark1.bmi);

} else {
    console.log('They have the same BMI');
}