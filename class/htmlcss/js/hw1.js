function checkingforage(age) {
	if (age >= 65) {
		return "Special discount";
	} else {
		return "Not Allowed";
	}
}

console.log(checkingforage(95));
console.log(checkingforage(15));

function multiply(hai) {
	return hai.map(function (num) {
		return num * 100;
	});
}

var hai = [6, 12, 18, 24, 30];
var multipliedNumbers = multiplyBy100(hai);

console.log(multipliedNumbers);
console.log(hai);

function multiplyGreater5(numbers) {
	if (numbers.length > 5) {
		return numbers.map(function (number) {
			return number * 100;
		});
	} else {
		return numbers.slice();
	}
}

var numbers1 = [6, 7, 3, 6.4];
var multipliedNumbers1 = multiplyBy100IfLengthGreaterThan5(numbers1);
console.log(multipliedNumbers1);

var numbers2 = [5, 53, 53, 62, 67, 23, 62, 35];
var multipliedNumbers2 = multiplyBy100IfLengthGreaterThan5(numbers2);
console.log(multipliedNumbers2);

function multiplyEvenBy100(numbers) {
	return numbers.map(function (number) {
		if (number % 2 === 0) {
			return number * 100; // Multiply even numbers by 100
		} else {
			return number; // Return odd numbers unchanged
		}
	});
}

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var multipliedNumbers = multiplyEvenBy100(numbers);

console.log(multipliedNumbers);
console.log(numbers);

function counting(occurence, times) {
	var count = 0;

	occurence.forEach(function (number) {
		if (number === times) {
			count++;
		}
	});

	return count;
}

var occurence = [154, 657, 564, 561, 154, 678, 100, 154];
var times = 154;

var occurrenceCount = counting(occurence, times);

console.log(occurrenceCount);

function checking(input) {
	if (Array.isArray(input) || typeof input === "object") {
		return "object";
	} else {
		return "It's something else";
	}
}

console.log(checking([1, 2, 3]));
console.log(checking("Hello"));
