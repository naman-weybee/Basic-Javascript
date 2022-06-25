// "use strict";
// use strict indicates that the code should be executed in "strict mode"
// strict mode reserves some words which we can't use them for variable or const

// const private = mode;
// console.log(private);

// const interface = user;
// console.log(interface);

let system = "windows";
console.log(system);

function juice(apples, oranges){
    const fruits = (`juice with ${apples} apples and ${oranges} oranges.`);
    return fruits;
}

const myjuice = juice(5,4);
// var apples = prompt("enter no. of apples");
// var oranges = prompt("enter no. of oranges");
// const myjuice = juice(apples, oranges);
console.log(myjuice);

// ----------------------------assignments-----------------------

// assignments ------- Functions -------
function describeCountry(country, poppulation, capitalcity){
    const info = console.log(`${country} has ${poppulation} people and itscapital city is ${capitalcity}`);
    return info;
}
const data = describeCountry('india', '132 crores', 'delhi');

// A function Declaration must have a function name and does not require variable to store the function.
// A function Expression is similar to a function declaration without the function name and it stored in variable.

// function Declaration
function calage1(birthyear){
    const data = 2022 - birthyear;
    return data;
}
const age1 = calage1(2001);
console.log(age1);

// function Expression
const calage2 = function(birthyear){
    const data = 2022 - birthyear;
    return data;
}
const age2 = calage2(2005);
console.log(age2);

// assignments ------- Function Declarations vs. Expressions -------

// // function Declaration

function percentageOfWorld1(poppulations){
    const country = (poppulations/7752800000)*100;
    return country;
}
const poe = percentageOfWorld1(1380000000);
console.log(`poppulation of india is ${poe}%`);

// function Expression

const percentageOfWorld2 = function(poppulations){
    const country1 = (poppulations/7752800000)*100;
    return country1;
}
const poe1 = percentageOfWorld2(329500000);
console.log(`poppulation of america is ${poe1}%`);
const poe2 = percentageOfWorld2(1216100000);
console.log(`poppulation of africa is ${poe2}%`);

// Aerrow Function
const calcage3 = birthyear1 => 2022 - birthyear1; 
const age3 = calcage3(2001);
console.log(age3);

const yearstoretirement = (birthyear2, firstname) => {
    const age4 = 2022 - birthyear2;
    const retirement = 65 - age4;
    return `${firstname} retires in ${retirement} years.`;
}
console.log(yearstoretirement(2001,'naman'));

// assignments ------- Arrow Functions -------
const percentageOfWorld3 = (poppulation1, country2) => {
    const pep = (poppulation1/7752800000)*100;
    return `${country2} has ${pep}% poppulation in world.`
}
const data1 = percentageOfWorld3(1380000000, 'india');
console.log(data1);

// assignments ------- Functions Calling Other Functions -------
function cutpieces(fruits2){
    return fruits2 * 4;
}

function juice1(apples1, oranges1){
    const fruitpieces1 = cutpieces(apples1);
    const fruitpieces2 = cutpieces(oranges1);
    const fruits1 = (`juice from ${fruitpieces1} pieces of apples and ${fruitpieces2} pieces of orange.`);
    return fruits1;
}

const myjuice1 = juice1(5,4);
// var apples1 = prompt("enter no. of apples");
// var oranges1 = prompt("enter no. of oranges");
// const myjuice1 = juice1(apples1, oranges1);
console.log(myjuice1);

// Assignment Functions Calling Other Functions
function percentageOfWorld1(poppulations1){
    return (poppulations1/7752800000)*100;
}
function describePopulation(country3){
    const pop1 = percentageOfWorld1(1380000000);
    const pop2 = percentageOfWorld1(380000000);
    return `${country3} has ${pop1} people, which is about ${pop2} of the world.'`
}
const data2 = describePopulation('india');
console.log(data2);
const data3 = describePopulation('usa');
console.log(data3);

// ------------------------ Coding Challenge #1 ------------------------

const calcAverage = (a, b, c) => (a+b+c)/3;

let Dolphins = calcAverage(44,23,71);
let Koalas = calcAverage(65,54,49);

// Test 1
function checkWinner(Dolphins, Koalas){
    if (Dolphins >= 2 * Koalas){
        console.log(`Dolphins win ${Dolphins} vs. ${Koalas}`);
    } else if (Koalas >= 2 * Dolphins) {
        console.log(`Koalas win ${Koalas} vs. ${Dolphins}`);
    } else{
        console.log('No Team Wins...!');
    }
}
checkWinner(Dolphins, Koalas);

// Test 2
Dolphins = calcAverage(85,54,41);
Koalas = calcAverage(23,34,27);
checkWinner(Dolphins, Koalas);

// assignments ------- Introduction to Arrays -------

const population2 = [130000000, 32000000, 2000000, 15000000];
console.log(population2);
const percentages = [population2[0]/7752800000,population2[1]/7752800000,population2[2]/7752800000,population2[3]/7752800000];
console.log(percentages);

// assignments ------- Basic Array Operations (Methods) -------

const neighbours = ['india','usa','uk'];
console.log(neighbours);
console.log(neighbours.push('utopai'));
console.log(neighbours.pop());
if(neighbours.includes('germany')){
    console.log('central European country');
}else{
    console.log('Probably not a central European country');
}
console.log(neighbours.indexOf('uk'));
neighbours[2] = 'republic of uk';
console.log(neighbours);

// ------------------------ Coding Challenge #2 ------------------------

function calcTip(bill){
    const tip = bill>=50 && bill<=300 ? bill*.15 : bill*.2;
    return tip;
}

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]),calcTip(bills[1]),calcTip(bills[2])];
const total =[bills[0]+tips[0],bills[1]+tips[1],bills[2]+tips[2]]
console.log(`bill : ${bills} \ntips : ${tips} \ntotal : ${total}`);

// assignments ------- Introduction to Objects and Object Methods -------

const mycountry = {
    country4 : 'india',
    capital : 'delhi',
    language : 'hindi',
    poppulation3 : '138 crores',
    neighbours1 : ['usa', 'uk', 'nz'],
    isIsland : false,

    describe: function(){
        console.log(this);
        return `${mycountry.country4} has ${mycountry.poppulation3} ${mycountry.language}-speaking people, ${length.neighbours1} neighbouring countries and capital called ${mycountry.capital}`;
    },

    checkIsland: function(){
        return `${this.country4} is ${this.isIsland ? 'a' : 'not an' } Island.`;
    }
};
console.log(mycountry.describe());
console.log(mycountry.checkIsland());


// const interested = prompt('what do you wants to know about india ? choose from these : capital, language, poppulation3, neighbours1');
// if(mycountry[interested]){
//     console.log(mycountry[interested]);
// }else{
//     console.log('Wrong Request...! choose from these : capital, language, poppulation3, neighbours1');
// }

// assignments ------- Dot vs. Bracket Notation -------

// console.log(`${mycountry.country4} has ${mycountry.poppulation3} ${mycountry.language}-speaking people, ${length.neighbours1} neighbouring countries and capital called ${mycountry.capital}`);
// mycountry.poppulation3 = '135 crores';
// console.log(mycountry);
// mycountry['poppulation3'] = '138 crores';
// console.log(mycountry);

// ------------------------ Coding Challenge #3 ------------------------

const mark = {
    fullname : 'Mark Miller',
    mass : 78,
    height : 1.6,

    calBMI: function(){
        console.log(this);
        this.BMI = this.mass / this.height ** 2;
        return this.BMI;
    }

};

const john = {
    fullname : 'John Smith',
    mass : 92,
    height : 1.95,

    calBMI: function(){
        console.log(this);
        this.BMI = this.mass / this.height ** 2;
        return this.BMI;
    }
};

console.log(mark.calBMI());
console.log(john.calBMI());

let anwser = (mark.calBMI() > john.calBMI()) ? 'higher' : 'lower';
console.log(`Mark's BMI ${mark.calBMI()} is ${anwser} than John's BMI ${john.calBMI()}.`);

// assignments ------- Iteration: The for Loop -------

let i;
for(i=1;i<=50;i++){
    console.log(`Voter number ${i} is currently voting`);
}

//----------------------------------------------------

const percentages2 = [1380000000, 32000000, 45000000, 1170000000];
for(i=0;i<4;i++){
    console.log(percentages2[i]/77528000);
}

// assignments ------- Looping Arrays, Breaking and Continuing -------

const jonas = ['John','Smith',92,1.95,'usa'];

let j;
for(j=0 ; j<jonas.length ; j++){
    if(typeof jonas[j] !== 'string') continue;
    console.log(jonas[j]);
}

// assignments ------- Looping Backwards and Loops in Loops -------

const jonas1 = ['John','Smith',92,1.95,'usa'];

let k,s,z;
for(k=jonas1.length-1;k>=0;k--){
    console.log(jonas1[k]);
}

const listOfNeighbours = [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden',
'Russia']];

for(s=0;s<listOfNeighbours.length;s++){
    for(z=0;z<listOfNeighbours[s].length;z++){
        console.log(`Neighbour : ${listOfNeighbours[s][z]}`);
    }
}

// assignments ------- The while Loop -------

let x=0,m=0;
const listOfNeighbours1 = [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden',
'Russia']];

while(x<listOfNeighbours1.length){
    while(m<listOfNeighbours1[x].length){
        console.log(`Neighbour : ${listOfNeighbours1[x][m]}`);
        m++;
    }
    x++;
}

// ------------------------ Coding Challenge #4 ------------------------
let d,p,sum = 0;
function calcTip1(bill1){
    const tip1 = bill1>=50 && bill1<=300 ? bill1*.15 : bill1*.2;
    return tip1;
}
const tips1 = [];
const totals = [];
const bills1 = [22,295,176,440,37,105,10,1100,86,52];
for(d=0;d<bills1.length;d++){
    const tips = calcTip1(bills1[d]);
    tips1.push(tips);
    totals.push(tips + bills1[d]);
}
console.log(bills1);
console.log(tips1);
console.log(totals);

function calcAverage1(arr1){

for(p=0;p<arr1.length;p++){
    sum += arr1[p];
}
return sum / arr1.length;
}
console.log(calcAverage1(bills1));
console.log(calcAverage1(tips1));
console.log(calcAverage1(totals));
