// var firstName = 'Harun';
// var age = 29;
// console.log(firstName + ' ' + age);

/***************************************
 * Variable mutation and type coercion
 ***************************************
var job, isMarried;
job = 'Software Support Engineer';
isMarried = false;
// Type coercion
console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried );

// Variable mutation
age = 'twenty nine';
job = 'Developer';

alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried );

var lastName = prompt('What is his last name?');
console.log(firstName + ' ' + lastName);

/****************************************
 * Basic operators
 ****************************************
 var now, yearHarun, yearAmira;
 now = 2018;
 ageHarun = 29;
 ageAmira = 9;

// Math operators
yearHarun = now - ageHarun;
yearAmira = now - ageAmira;

 console.log(yearHarun);
 console.log(yearAmira);

 console.log(now + 2);
 console.log(now * 2);
 console.log(now / 10);

 // Logical operators
var harunOlder = ageHarun < ageAmira;
console.log(harunOlder);

// typeof operator
console.log(typeof harunOlder);
console.log(typeof ageHarun);
console.log(typeof 'Harun is older than Amira');
console.log(typeof x);
*/

/***********************************************
 * Operator Precedence
 ***********************************************
 var now = 2018;
 var yearHarun = 1989;
 var fullAge = 29;

 var isfullAge = now - yearHarun >= fullAge;
 console.log(isfullAge);

 var ageHarun = now - yearHarun;
 var ageAmira = 9;
 var average = ageHarun + ageAmira / 2;

/**************************************************
* CODING CHALLENGE 1
***************************************************
// BMI = mass / height^2 = mass / (height * height)
// mass in kg and height in meter

var markMass, markHeight, johnMass, johnHeight;
markMass = 92;
markHeight = 1.72;

// console.log("Mark weights " + markMass + "kg");
// console.log("Mark is " + markHeight + "m tall");

johnMass = 110;
johnHeight = 1.90;

// console.log("John's weight is " + johnMass + "kg");
// console.log("John's height is " + johnHeight + "m");

var markBmi = markMass / (markHeight * markHeight);
var johnBmi = johnMass / (johnHeight * johnHeight);

// console.log("Mark's BMI is " + markBmi);
// console.log("John's BMI is " + johnBmi);

// var compareBMI = markBmi > johnBmi;
if (markBmi < johnBmi) {
    console.log("Mark's BMI is higher than John's");
} else {
    console.log("John's BMI is higher than Mark's");
}
// console.log("Is Mark's BMI higher than John's BMI ? " + compareBMI);

/*************************************************
 * If / else statement
 *************************************************
var firstName = 'Harun';
var civilStatus = 'single';

if (civilStatus === 'is Married') {
    console.log(firstName + ' is Married');
} else {
    console.log(firstName + ' has not found a partner he would like to marry');
}

var isMarried = true;
if (isMarried) {
    console.log(firstName + ' is Married');
} else {
    console.log(firstName + 'is not sure if he want to get married');
}

/**
 * CODING CHALLENGE 1
 

var markMass, markHeight, johnMass, johnHeight;
markMass = 92;
markHeight = 1.72;

johnMass = 110;
johnHeight = 1.90;

var markBmi = markMass / (markHeight * markHeight);
var johnBmi = johnMass / (johnHeight * johnHeight);

if (markBmi < johnBmi) {
    console.log("Mark's BMI is higher than John's");
} else {
    console.log("John's BMI is higher than Mark's");
}
*/

/************************************************
 * Boolean Logic
 * **********************************************
var firstName = 'Harun';
var age = 31;

if (age < 13) {
    console.log(firstName + ' is a boy.');
} else if (age >= 13 && age < 20) { // Between 13 and 20 === age >= 13
    console.log(firstName + ' is a teenager.');
} else if (age >= 20 && age < 30) { // Between 20 and 30 === age >= 20
    console.log(firstName + ' is a young man')
} else {
    console.log(firstName + ' is a man.');
}
*/
/************************************************
 * The Ternary Operator and Switch Statement
var firstName = 'Harun';
var age = 29;

age >= 28 ? console.log(firstName + ' drinks rum.') :
    console.log(firstName + ' drinks juice.');

var drink = age >= 18 ? 'rum' : 'juice';

console.log(drink);

// Switch statement
var job = 'driver';
switch (job) {
    case 'teacher':
        console.log(firstName + ' teaches kids how to code.');
        break;
    case 'software engineer':
        console.log(firstName + ' writes and designs software for tech companies');
        break;
    case 'designer':
        console.log(firstName + ' designs beautiful websites');
        break;
    default:
        console.log(firstName + ' drives an uber in cuba');
}

age = 23;
switch (true) {
    case age < 13:
        console.log(firstName + ' is a boy');
        break;
    case age >= 13 && age < 20:
        console.log(firstName + ' is a teenager.');
        break;
    case age >= 20 && age < 30:
        console.log(firstName + ' is a young man');
        break;
    default:
        console.log(firstName + ' is a man.');
}

/**************************************************
 * Truthy and Falsy values and equality operators

// falsy values: undefined, null, 0, '', NaN
// truthy values: Not falsy values

var height;

height = 23;

if (height || height === 0) {
    console.log('Variable is defined');
} else {
    console.log('Variable has not been defined');
}

//Equality operators
if (height == '23') {
    console.log('The  == operator does type coercion')
}
*/

/************************************************
 * CODING CHALLENGE 2
 *

var ScoreTeamA = Math.round((89 + 120 + 103) / 3);
var ScoreTeamB = Math.round((116 + 94 + 123) / 3);

// var winningScore = averageScoreTeamA < averageScoreTeamB ? console.log('Team A is the winner with an average score of ' + averageScoreTeamA) : console.log('Team B is the winner with an average ' + averageScoreTeamB);

// EXTRA
var ScoreTeamC = Math.round((97 + 114 + 105) / 3);

if (ScoreTeamA > ScoreTeamB && ScoreTeamA > ScoreTeamC) {
    console.log('The winner is Team A with ' + ScoreTeamA);
} else if (ScoreTeamB > ScoreTeamA && ScoreTeamC < ScoreTeamB) {
    console.log('Team winner is Team B with ' + ScoreTeamB);
} else if (ScoreTeamC > ScoreTeamA && ScoreTeamB < ScoreTeamC) {
    console.log('The winner is Team C with ' + ScoreTeamC);
} else {
    console.log('There is a draw');
}
*/

/*********************************************
 * Functions
 *

function calculateAge(birthYear) {
    return 2018 - birthYear;
}

var ageHarun = calculateAge(1989);
console.log('Harun is ' + ageHarun + ' years old');

function yearsUntilRetirement(birthYear, firstName) {
    var age = calculateAge(birthYear);
    var retirement = 67 - age;

    if (retirement > 0) {
        console.log(firstName + ' will retire in ' + retirement + ' years.');
    } else {
        console.log(firstName + ' has already retired.')
    }, 
}

yearsUntilRetirement(1989, 'Harun');

/********************************************
 * Function Statements and Expressions
 
// function declaration
// function whatDoYouDo(job, firstName){}

// function expression
var whatDoYouDo = (job, firstName) => {
    switch (job) {
        case 'teacher':
            return firstName + ' teachers kids how to code';
        case 'driver':
            return firstName + ' drives an uber in cuba';
        case 'designer':
            return firstName + ' designs amazing websites';
        default:
            return firstName + ' does something else';
    }
}

console.log(whatDoYouDo('teacher', 'Harun'));
console.log(whatDoYouDo('driver', 'Harun'));
console.log(whatDoYouDo('retired', 'Harun'));
*/

/*****************************************
 * Arrays
// Initialize new array
var names = ['Harun', 'Amira', 'Alika', 'Towelah'];
var years = new Array(1989, 2009, 2012, 1991);

console.log(names);
console.log(names.length);

// Mutate array data
names[1] = 'Pepsi';
names[names.length] = 'Marsha';
console.log(names);

//Different data types
var Harun = ['Harun', 'Richards', 1989, 'software support engineer', false];

console.log(Harun.indexOf(23));

var isEngineer = Harun.indexOf('software support engineer') === -1 ? 'Harun is NOT a software support engineer' : 'Harun is a software support engineer';
console.log(isEngineer);
*/
/*****************************************
 * CODING CHALLENGE 3 - tip calculator

var tipCalculator = (bill) => {
    var percentage;
    if (bill < 50) {
        percentage = .2;
    } else if (bill >= 50 && bill < 200) {
        percentage = .15;
    } else {
        percentage = .1;
    }
    return percentage * bill;
}

// console.log(tipCalculator(10))

var bills = [124, 48, 268];
var tips = [tipCalculator(bills[0]),
    tipCalculator(bills[1]),
    tipCalculator(bills[2])
];

finalPaidAmount = [bills[0] + tips[0],
    bills[1] + bills[1],
    bills[2] + bills[2]
];

console.log(tips);
console.log(finalPaidAmount);
*/
/**
 * Objects and properties
 

// Object literal
var harun = {
    firstName: 'Harun',
    lastName: 'Richards',
    birthYear: 1989,
    family: ['Debbie', 'Tim', 'Marsha', 'Dionne'],
    job: 'Software Engineer',
    isMarried: false
};

console.log(harun);

// new Object syntax
var towelah = new Object();
towelah.firstName = 'Towelah';
towelah.birthYear = 1991;
towelah['lastName'] = 'Phiri';

console.log(towelah);
*/

/********************************
 * Object and methods
 

var harun = {
    firstName: 'Harun',
    lastName: 'Richards',
    birthYear: 1989,
    family: ['Debbie', 'Tim', 'Marsha', 'Dionne'],
    job: 'Software Engineer',
    isMarried: false,
    calcAge: function () {
        this.age = 2018 - this.birthYear;
    }
};

// console.log(harun.calcAge());

harun.calcAge();
console.log(harun);
*/

/*****************************************
 * CODING CHALLENGE 4

var john = {
    fullName: 'John Doe',
    mass: 72,
    height: 1.94,
    calcBMI: function () {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
};

console.log(john);

var mark = {
    fullName: 'Mark Smith',
    mass: 96,
    height: 1.94,
    calcBMI: function () {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
};

console.log(mark);

if (john.calcBMI() > mark.calcBMI()) {
    console.log(john.fullName + ' has a higher BMI of ' + john.calcBMI());
} else if (mark.calcBMI() > john.calcBMI()) {
    console.log(mark.fullName + ' has a higher BMI of ' + mark.calcBMI());
} else {
    console.log('Its a draw!');
}
*/

/**********************************
 * Loops and Iteration
 

for (var i = 0; i < 10; i++) {
    console.log(i);
}

var harun = ['Harun', 'Richards', 1989, 'software support engineer', false];
for (var i = 0; i < harun.length; i++) {
    console.log(harun[i]);
}


var i = 0;
while (i < harun.length) {
    console.log(harun);
}

// continue and brak statements
var harun = ['Harun', 'Richards', 1989, 'software', false, 'green'];
for (var i = 0; i < harun.length; i++) {
    if (typeof harun[i] !== 'string') continue;
    console.log(harun[i]);
}

for (var i = 0; i < harun.length; i++) {
    if (typeof harun[i] !== 'string') break;
    console.log(harun[i]);
}

// Looping backwards

for (var i = harun.length - 1; i >= 0; i--) {
    console.log(harun[i]);
}
*/

/**
 * CODING CHALLENGE 5 - tip calculator v2
 * 
 * Remember the tip calculator challenge? Let's create a more advanced version using everything we learned!
This time, John and his family went to 5 different restaurants. The bills were $124, $48, $268, $180 and $42.

John likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

Implement a tip calculator using objects and loops:

1. Create an object with an array for the bill values

2. Add a method to calculate the tip

3. This method should include a loop to iterate over all the paid bills and do the tip calculations

4. As an output, create 1) a new array containing all tips, and 2) an array containing final paid amounts (bill + tip). HINT: Start with two empty arrays [] as properties and then fill them up in the loop.
 */

var harun = {
    Name: {
        firstName: 'Harun',
        lastName: 'Richards'
    },
    bills: [124, 48, 268, 180, 42],
    tipCalculations: function () {
        this.tips = [];
        this.finalValues = [];

        for (let i = 0; i < this.bills.length; i++) {
            // Determine percentage based on tipping rules
            let percentage;
            let bill = this.bills[i];

            if (bill < 50) {
                percentage = .2;
            } else if (bill >= 50 && bill <= 200) {
                percentage = .15;
            } else {
                percentage = .1;
            }

            // Add result to the corresponding arrays
            this.tips[i] = bill * percentage;
            this.finalValues[i] = bill + (bill * percentage);
        }
    }
}

harun.tipCalculations();
console.log(harun)
// console.log(harun.tips)

/**
 * EXTRA AFTER FINISHING: Mark 's family also went on a holiday, going to 4 different restaurants. The bills were $77, $375, $110, and $45.
 * 
    Mark likes to tip 20 % of the bill when the bill is less than $100, 10 % when the bill is between $100 and $300, and 25 % if the bill is more than $300(different than John).

5. Implement the same functionality as before, this time using Mark 's tipping rules
*/

var towelah = {
    Name: {
        firstName: 'Towelah',
        lastName: 'Phiri'
    },
    bills: [77, 375, 110, 45],
    calcTips: function () {
        this.tips = [];
        this.finalValues = [];

        for (let i = 0; i < this.bills.length; i++) {
            //Determine tip percentage based on tip rules
            let percentage;
            let bill = this.bills[i];

            if (bill < 100) {
                percentage = .2;
            } else if (bill >= 100 && bill <= 300) {
                percentage = .15;
            } else {
                percentage = .1
            }

            //Add values to corresponding array
            this.tips[i] = bill * percentage;
            this.finalValues[i] = bill + (bill * percentage);
        }
    }
}

towelah.calcTips();
console.log(towelah);

/**
 * 6. Create a function (not a method) to calculate the average of a given array of tips.HINT: Loop over the array, and in each iteration store the current sum in a variable(starting from 0).After you have the sum of the array, divide it by the number of elements in it(that 's how you calculate the average)
 * 
 * 7. Calculate the average tip for each family
 * 
 * 8. Log to the console which family paid the highest tips on average
 * 
 * GOOD LUCK ðŸ˜€
 */

function calcAverage(tips) {
    //Loop over the array and store the sum in a variable
    // let tips = [1, 2, 3, 4];
    let sum = 0;
    let total;

    for (let i = 0; i < tips.length; i++) {
        sum += tips[i];
    }
    //log totals to the console
    // console.log('Sum total = ' + sum);
    // console.log('Number of elements in array = ' + tips.length);
    //Divide the sum of the array by the number of elements in it
    return sum / tips.length
}

harun.averageTips = calcAverage(harun.tips)
// console.log(harun.averageTips)
towelah.averageTips = calcAverage(towelah.tips)
// console.log(towelah.averageTips)
if (harun.averageTips < towelah.averageTips) {
    console.log(towelah.Name.firstName + ' paid the higest tips with an average of £' + towelah.averageTips + ' per tip.')
} else {
    console.log(harun.Name.firstName + ' paid the higest tips with an average of £' + harun.averageTip + ' per tip.')
}