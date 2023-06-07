class Building {
	#hasWalls;
	#numOfWalls;
	#roofShape;

	constructor(hasWalls, numOfWalls, roofShape) {
		this.#hasWalls = hasWalls;
		this.#numOfWalls = numOfWalls;
		this.#roofShape = roofShape;
	}

	openDoor() {
		console.log("Opening building door...");
	}

	closeDoor() {
		console.log("Closing building door...");
	}

	// Getter methods
	get hasWalls() {
		return this.#hasWalls;
	}

	get numOfWalls() {
		return this.#numOfWalls;
	}

	get roofShape() {
		return this.#roofShape;
	}
}

class Gym extends Building {
	#gymName;
	#hasPool;

	constructor(hasWalls, numOfWalls, roofShape, gymName, hasPool) {
		super(hasWalls, numOfWalls, roofShape);
		this.#gymName = gymName;
		this.#hasPool = hasPool;
	}

	closeGym() {
		console.log("Closing gym...");
	}

	openGym() {
		console.log("Opening gym...");
	}

	// Getter methods
	get gymName() {
		return this.#gymName;
	}

	get hasPool() {
		return this.#hasPool;
	}
}

class Bank extends Building {
	#numOfVault;
	#numOfStaff;
	#name;

	constructor(hasWalls, numOfWalls, roofShape, numOfVault, numOfStaff, name) {
		super(hasWalls, numOfWalls, roofShape);
		this.#numOfVault = numOfVault;
		this.#numOfStaff = numOfStaff;
		this.#name = name;
	}

	closeBank() {
		console.log("Closing bank...");
	}

	openBank() {
		console.log("Opening bank...");
	}

	// Getter methods
	get numOfVault() {
		return this.#numOfVault;
	}

	get numOfStaff() {
		return this.#numOfStaff;
	}

	get name() {
		return this.#name;
	}
}

const building = new Building(true, 4, "flat");
console.log(building.numOfWalls);
building.openDoor();

const gym = new Gym(true, 4, "flat", "Fitness Center", true);
console.log(gym.gymName);
gym.closeGym();

const bank = new Bank(true, 4, "flat", 2, 10, "ABC Bank");
console.log(bank.numOfVault);
bank.openBank();

const gym = new Gym(true, 4, "flat", "Fitness Center", true);
gym.openDoor();
console.log(gym.numOfWalls);
console.log(gym.gymName);

const bank = new Bank(true, 4, "flat", 2, 10, "ABC Bank");
bank.closeDoor();
console.log(bank.roofShape);
console.log(bank.numOfVault);
console.log(bank.numOfStaff);
console.log(bank.name);
