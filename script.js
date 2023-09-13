var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");


function setGradient() {
	body.style.background = "linear-gradient(to right, " + color1.value + ", "
	+ color2.value + ")";

	css.textContent = body.style.background + ";";
}


color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);




const first = () => {
	const greet = 'Hi';
	const second = () => {
		alert(greet);
	}
	return second;
}

const newFunc = first();
newFunc();

const multiply = (a, b) => a * b;
const curriedMultiply = (a) => (b) => a * b;
const multiplyBy5 = curriedMultiply(5);

//Compose
const compose = (f, g) => (a) => f(g(a));

const sum = (num) => num + 1;

compose(sum, sum)(5);

// Advanced Arrays

const array = [1, 2, 10, 16];

const double = [];
const newArray = array.forEach((num) => {
	double.push(num * 2);
});

// map, filter, reduce


// map
const mapArray = array.map(num => num * 2);

// filter
const filterArray = array.filter(num => num > 5);

// reduce
const reduceArray = array.reduce((accumulator, num) => {
	return accumulator + num;
}, 0);


// context vs scope

// instantiation
class Player {
	constructor(name, type) {
		this.name = name;
		this.type = type;
	}

	introduce() {
		console.log(`Hi I am ${this.name}, I am ${this.type}`);
	}
}

class Wizard extends Player {
	constructor(name, type) {
		super(name, type);
	}

	play() {
		console.log(`WEEEEEEEE ${this.type}`);
	}
}

const wizard1 = new Wizard('Shelly', 'Healer');
const wizard2 = new Wizard('Shawn', 'Dark Magic');

//ES8 

/*
.padStart()
.padEnd()
*/

const fun = (a,b,c,d,) => {
	console.log(a);
}

fun(1, 2, 3, 4,);

Object.values
Object.entries
Object.keys

let obj = {
	u0 : 1,
	u1 : 2,
	u2 : 3,
}

//ES10

const array = [1, [2, 3], [4, [5]]];
array.flat(2);

flatMap()

const userEmail = '       eddy@gmail.com';
const userEmail2 = 'jonnydaner@gmail   ';
console.log(userEmail.trimStart());
console.log(userEmail2.trimEnd());

userProfiles = [['Tom', 23], ['derek', 40], ['hans', 18]];

Object.fromEntries(userProfiles);


try {
  bob + 'hi';
} catch {
  console.log("BEEEEP!");
}


// Advanced loop

const basket = ["apples", "oranges", "grapes"];
const detailedBasket = {
	apples: 5,
	oranges: 10,
	grapes: 1000
}

// for of
// Iterating - arrays, strings
for (item of basket) {
	console.log(item);
}

// for in - properties
// enumerating - objects
for (item in detailedBasket) {
	console.log(item);
}

let will_pokemon = {
	pikachu: {
		species: 'Mouse pokemon',
		height: 0.4,
		weight: 6
	}
}

let andrei_pokemon = {
	pikachu: {
		species: 'Mouse pokemon',
		height: 0.8,
		weight: 30,
		power: 0
	}
}

let weight3 = andrei_pokemon?.pikachu?.weight;
console.log(weight3);

let power = andrei_pokemon?.pikachu?.power ?? 'no power';

console.log(power);

// ES2023

const ztmMonsters = [
	{id: 1, monster: 'Mr. Mouse', level: 1},
	{id: 2, monster: 'Mac', level: 30},
	{id: 3, monster: 'Denodude', level: 17},
	{id: 4, monster: 'Pye', level: 5} ];

const lastMonster = ztmMonsters.findLast(item => item.level > 15);
const lastMonsterIndex = ztmMonsters.findLastIndex(item => item.level > 15);

const ztmMonstersList = ['Mr. Mouse', 'Mac', 'Denodude', 'Pye'];

ztmMonstersList.toReversed();

ztmMonstersList.with(1, "Ghost");


// Debugging

const flattened = [[0, 1], [2, 3], [4, 5]].reduce(
					(a,b) => a.concat(b), []);