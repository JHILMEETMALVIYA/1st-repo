console.log('Hello');
console.error('their is some problem');
console.warn('it can be harmfull');

//let, const

let old = 13;

console.log(old);

let score = 10;

console.log(score);

// strings,  numbers,  boolean,  null, undefined

let name = 'jhilmeet';
let age = 13;
let hobby = 'cricket';
let iscool = true;
let x = null;
let y = undefined;
let z;

console.log(typeof hobby);

//strings

name = 'jhilmeet';
age = 13;

//concatenation
console.log('My name is ' + name + ' and i am ' + age);

//template string

name = 'jhilmeet';
age = 13;

console.log(`My name is ${name} and i am ${age}`);

// Arrays - vairables that hold multiple values

console.log(new Array('grapps', 'blue barry', 'watermelon', 'orange', 'lichi'));

// the work to do

const todos = [
  {
    id: 1,
    text: 'today homwork',
    iscompleted: false,
  },

  {
    id: 1,
    text: 'practing js',
    iscompleted: true,
  },

  {
    id: 1,
    text: 'playing',
    iscompleted: true,
  },
];

console.log(todos);

// For loop

for (let i = 0; i <= 10; i++) {
  console.log(`For Loop Number: ${i}`);
}

//While loop

let i = 0;
while (i < 10) console.log(`While Loop Number: ${i}`);
