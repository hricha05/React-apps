/*******************************************
 *            Function constructor         *
 *******************************************/
/*
var harun = {
    name: 'Harun',
    yearOfBirth: 1989,
    job: 'Developer'
};

var Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person.prototype.calculateAge = function() {
    console.log(2018 - this.yearOfBirth);
}

Person.prototype.lastName = 'Richards'

var harun = new Person('Harun', 1989, 'Developer');

var towelah = new Person('Towelah', 1991, 'teacher');
var amira = new Person('Amira', 2009, 'student');

harun.calculateAge();
towelah.calculateAge();
amira.calculateAge();

console.log(harun.lastName);
console.log(towelah.lastName);
console.log(amira.lastName);
*/

/*******************************************
 *            Primitives vs Objects        *
 *******************************************/
/*
let a = 23;
let b = a;
a = 46

console.log(a);
console.log(b);

// Objects
let obj1 = {
    name: 'Harun',
    age: 29
}

let obj2 = obj1;
obj1.age = 30;
console.log(obj1.age);
console.log(obj2.age);

// Functions
let age = 26
let obj = {
    name: 'Towelah',
    city: 'London'
}

function change(a,b) {
    a = 30;
    b.city = 'San Francisco';
}

change(age, obj);

console.log(age);
console.log(obj.city);
*/

/*******************************************
 *      Passing functions as arguments     *
 *******************************************/
/*
let year = [1990, 1937, 1978, 2014, 2001]

function arrayCalc(arr, fn) {
    let arrRes = []
    for(let i = 0; i < arr.length; i ++ ) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(el) {
    return 2018 - el;
}

function isFullAge(el) {
    return el >= 18;
}

function maxHeartRate(el) {
    if (el >= 18 && el <= 81) {
        return Math.round(206.9 - (0.67 * el));
    }   else {
    return -1;
    }
}

let ages = arrayCalc(year, calculateAge);
let fullAges = arrayCalc(ages, isFullAge);
let rates = arrayCalc(ages, maxHeartRate);

console.log(ages);
console.log(fullAges);
console.log(rates);
*/

/******************************************
 *      Functions returning Functions     *
 ******************************************/
/*
function interviewQuestion(job) {
    if (job === 'developer') {
        return function(name) {
            console.log(name + ', can you please explain what this function does?');
        }
    } else if ( job === 'designer') {
        return function(name) {
            console.log(name + ', can you please explain what the term UX means?');
        }
    } else if (job === 'teacher') {
        return function(name) {
            console.log(name + ', what subject do you teach?');
        }
    } else {
        return function(name) {
            console.log('Hello ' + name + ', what do you do?');
        } 
    }
}

let teacherQuestion = interviewQuestion('teacher');
let developerQuestion = interviewQuestion('developer');
let designerQuestion = interviewQuestion('designer');

teacherQuestion('Harun');
teacherQuestion('Alika');
developerQuestion('Harun');
designerQuestion('Towelah');

interviewQuestion('gymnastics')('Amira');
*/
/*****************************************************
 *   IIFE - immediately invoked function expression	 *
 *****************************************************/
/* 
function game() {
    let score = Math.random() * 10;
    console.log(score >= 5);
}
game();


(function () {
    let score = Math.random() * 10;
    console.log(score >= 5);
})();

// console.log(score);

(function (goodLuck) {
    let score = Math.random() * 10;
    console.log(score >= 5 - goodLuck);
})(5);
*/

/**************************************
 *            Closures
 **************************************/
/*
function retirement(retirementAge) {
    var a = ' years left until retirement.';
    return function(yearOfBirth) {
        var age = 2018 - yearOfBirth;
        console.log((retirementAge - age) + a);
    }
}

var retirementUS = retirement(66);
retirementUS(1989);

retirement(66)(1989);
*/
//////////////////////////////////////////////
//  An inner function always has access to  //
//  variables and parameters of its outer   //
// function, even after the outer function  //
//          has returned	                //
//////////////////////////////////////////////

/*
--- Let's build a fun quiz game in the console! ---

1. Build a function constructor called Question to describe a question. A question should include:
a) question itself
b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
c) correct answer (I would use a number for this)

2. Create a couple of questions using the constructor

3. Store them all inside an array

4. Select one random question and log it on the console, together with the possible answers (each question should have a number) (Hint: write a method for the Question objects for this task).

5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it on Task 4.

6. Check if the answer is correct and print to the console whether the answer is correct ot nor (Hint: write another method for this).

7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and doesn't interfere with the other programmers code (Hint: we learned a special technique to do exactly that).
*/

function Question(question, answers, correctAnswer){
    this.question = question;
    this.answers = answers;
    this.correctAnswer = correctAnswer;

    this.printQuestion = function(){
        return this.question + '\n' + this.answers[0] + '\n' + this.answers[1] ;
    }
}

var questions =  [
    new Question('Do you love coding in javascript ?', [0, 1], 0),
    new Question('Do you know who you are ?', [0, 1], 0),
    new Question('Do you know where you are going ?', [0, 1], 0),
    new Question('Do you know where you came from ?', [0, 1], 0)
];

var select = Math.floor((Math.random() * 3) + 1);

console.log(questions[select].printQuestion());

function play() {
    var text;
    let question = prompt('Please select the correct answer?', "0");
    switch(question) {
        case '0': text = 'Correct!'
        break;
        case '1': text = 'Please try again'
    }

    document.getElementById('demo').innerHTML = text;
}

play();



