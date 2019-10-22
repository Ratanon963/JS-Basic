

function tipCalculator(bill){
    var percentage
        if (bill < 50){
            percentage = .2;
        }else if (bill>= 50 && bill < 200){
            percentage =.15;

        }else {
            percentage = .1;
        }
        return percentage * bill;
}

var bills = [124,48,268];
var tip = [tipCalculator(bills[0]), tipCalculator(bills[1]), tipCalculator(bills[2])];

var finalValue = [bills[0] + tip[0],
                    bills[1] + tip[1],
                    bills[2] + tip[2]];


console.log(tip,finalValue);