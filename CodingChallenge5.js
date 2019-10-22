

var john = {
    fullName: 'John Smith',
    bills: [124,48,268,180,42],
    calcTips: function(){
        this.tips = [];
        this.finalValues = [];

        for (var i = 0; i < this.bills.length; i++)
        {
            var percentage;
            var bill = this.bills[i];

            if(bill< 50){
                percentage = .2;
            } else if (bill >= 50 && bill < 200){
                percentage = .15;
            } else {
                percentage = .1;
            }

            this.tips[i] = bill * percentage ;
            this.finalValues[i] = bill + bill * percentage;
            percentage;

        }
    }
}

function calcAverage(tips){
    var sum = 0;
    for (var i = 0 ; i < tips.length; i++){
        sum = sum + tips[i];
    }
    return sum / tips.length;
}

// [2.6.4] == > 0/2/8/12

var mark = {
    fullName: 'Mark Miller',
    bills: [77,475,110,45],
    calcTips: function(){
        this.tips = [];
        this.finalValues = [];

        for (var i = 0; i < this.bills.length; i++)
        {
            var percentage;
            var bill = this.bills[i];

            if(bill< 50){
                percentage = .2;
            } else if (bill >= 100 && bill < 300){
                percentage = .1;
            } else {
                percentage = .25;
            }

            this.tips[i] = bill * percentage ;
            this.finalValues[i] = bill + bill * percentage;
            percentage;

        }
    }
}

// Do the calculations

john.calcTips();
mark.calcTips();

console.log(john , mark);


john.
