class Desserts {
	constructor (type, calories){
		this.type = type;
		this.calories = calories;
	}
}

class IceCream extends Desserts {
	constructor(type, calories, flavor, scoops){
		super(size, calories);
		this.flavor = flavor;
		this.scoops = scoops;
	}

	includeSpoon() {
		if(this.scoops === 3) {
			console.log('Here is your spoon!');
		}
	}
}