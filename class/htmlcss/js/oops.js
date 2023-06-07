function Company() {
	let numberOfEmployees = 0; // private variable

	this.setNumberOfEmployees = function (value) {
		numberOfEmployees = value;
	};

	this.getNumberOfEmployees = function () {
		return numberOfEmployees;
	};
}

const myCompany = new Company();
myCompany.setNumberOfEmployees(100);
console.log(myCompany.getNumberOfEmployees()); // Output: 100
console.log(myCompany.numberOfEmployees); // Output: undefined (private variable)
