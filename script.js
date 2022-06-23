let js = 'amazing';
console.log(40-20);

let a='name';
a='programmer';
console.log(a);

const b='coding';
console.log(b);

// asignment

var length;
var width;
var size;
var perimeter;
var area;

length = 10;
width = 5;
size = 2;

parimeter = length + width;

console.log(parimeter);

// asignment

const firstname = 'naman';
const lastname = 'padaliya';
const age = 21;
const weight = 60;

console.log('my name is ' + firstname + lastname + '\nage :' + age + '\nweight :' + weight);

console.log(`skils
robotics
programmer`);

// asignment

var country;
var contient;
var population;

country = 'india';
contient = 'asia';
population = '138 crores';

console.log('country : '+country + '\ncontient : '+ contient + '\npopulation' + population);

// asignment

var language = 'english';
language = 'english and hindi'
console.log('languages : '+language);
const populations = '1380000000';

const lang = 'hindi';
console.log('lang : '+lang);

console.log(country + ' is in ' + contient + ' and its ' + populations + ' people speak ' + lang);

if(populations >= 33000000){
    console.log("india's poppulation is above avrage");
} 
else{
    console.log("india's poppulation is bellow avrage");
}

// type conversion

var c = 9;
var d = '1';

console.log(c + d);
console.log(c + Number(d));

// type coercion

console.log('9' - '5');
console.log('19' - '13' + '17');
console.log('19' - '13' + 17);
console.log('123' < 57);
console.log(5 + 6 + '4' + 9 - 4 - 2);

// -------------------- Coding Challenges --------------------

// Coding Challenge #1
var BMI;
var mass = 95;
var height = 1.88 ;

BMI = mass / height ** 2;

console.log(BMI);

// Coding Challenge #2

var markmass = 95;
var markheight = 1.88 ;
var markBMI;

var johnmass = 96;
var johnheight = 1.5 ;
var johnBMI;

markBMI = markmass / markheight ** 2;
johnBMI = johnmass / johnheight ** 2;

if(markmass < johnBMI){
    console.log("John's BMI is higher than Mark's!")
}else if(markmass > johnBMI){
    console.log("Mark's BMI is higher than John's!")
}else{
    console.log("same BMI")
}

// Coding Challenge #3
var Dolphins;
var Koalas;
var DolphinsData1;
var KoalasData1;
var DolphinsData2;
var KoalasData2;
var DolphinsData3;
var KoalasData3;

DolphinsData1 = (96+108+89)/3;
DolphinsData2 = (97+112+101)/3;
DolphinsData3 = (97+112+101)/3;

KoalasData1 = (88+91+110)/3;
KoalasData2 = (109+95+123)/3;
KoalasData3 = (109+95+126)/3;

Dolphins = (DolphinsData1+DolphinsData2+DolphinsData3)/3;
Koalas = (KoalasData1+KoalasData2+KoalasData3)/3;

if(Dolphins < Koalas){
    console.log("Koalas Wins")
}else if(Dolphins > Koalas){
    console.log("Dolphins Wins!")
}else{
    console.log("Draw...!")
}

// Coding Challenge #4

const bill = 275;

// ternary operator
const tip = ((bill >=50) && (bill <= 300)) ? (bill*.15) : (bill*.20);

console.log(`The bill was ${bill} and tip was ${tip}, so total bill is ${bill + tip}`);

// 5 falsy values : 0, ' ', undefined, null, NaN

// diff between == and ===
// diff between != and !==

// == is losely --> it not compare data-type
// === is strict --> it compare data-type

// basics of Gates --> AND, OR, NOT, NAND, NOR

// -------------------- switch case ----------------------

// var language = prompt("Which language...?");
// switch(language){
//     case('chinese'):
//     console.log('MOST number of native speakers!');
//     break;

//     case('mandarin'):
//     console.log('2nd place in number of native speakers');
//     break;

//     case('spanish'):
//     console.log('MOST number of native speakers!');
//     break;

//     case('english:'):
//     console.log('3rd place');
//     break;

//     case('hindi'):
//     console.log('Number 4');
//     break;

//     case('arabic'):
//     console.log('5th most spoken language');
//     break;

//     default:
//     console.log('Great language too :D');
//     break;
    
// }

// expression vs statement
// inshort, expression are part of statement
