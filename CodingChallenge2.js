var johnTeam = (89+120+123)/3;
var mikeTeam = (97+134+112)/3;
var marryTeam = (97+134+112)/3;

console.log('John AVG point  '+johnTeam);
console.log('Mike AVG point  '+mikeTeam);
console.log('Marry AVG point  '+marryTeam);


if(johnTeam > mikeTeam && johnTeam > marryTeam  ){
    console.log('John Won');
}else if(mikeTeam > johnTeam && mikeTeam > marryTeam){
    console.log('Mike Won  '+mikeTeam);
}else if(marryTeam > johnTeam && marryTeam >mikeTeam ){
    console.log('Marry Won  '+marryTeam);
}else {
    console.log('Equal');
}    