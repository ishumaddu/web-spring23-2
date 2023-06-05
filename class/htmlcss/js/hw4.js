function Animal(color, eyes, legs) {
	this.color = color;
	this.eyes = eyes;
	this.legs = legs;
}

Animal.prototype.eat = function () {
	console.log("The animal is eating.");
};

Animal.prototype.sleep = function () {
	console.log("The animal is sleeping.");
};

var dog = new Animal("golden", 2, 4);
var fish = new Animal("green", 2, 0);
var eagle = new Animal("black", 2, 2);

console.log(dog.color);
console.log(fish.legs);
console.log(eagle.legs);

dog.eat();
fish.sleep();
eagle.sleep();

function Bird(color, eyes, legs) {
	this.color = color;
	this.eyes = eyes;
	this.legs = legs;
	let name = ""; // private variable for name

	Object.defineProperty(this, "name", {
		get: function () {
			return name;
		},
		set: function (value) {
			if (typeof value === "string") {
				name = value;
			} else {
				console.log("Invalid name. Please provide a string value.");
			}
		},
		enumerable: true,
		configurable: true,
	});
}

Bird.prototype.eat = function () {
	console.log(this.name + " is eating.");
};

Bird.prototype.sleep = function () {
	console.log(this.name + " is sleeping.");
};

var parrot = new Bird("green", 2, 2);
parrot.name = "Polly";
console.log(parrot.name);
parrot.eat();
parrot.sleep();
