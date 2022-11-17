export function roll(sides, dice, rolls) {
  var result = [];
	for(let i = 0; i < rolls; i++){
		let sum = 0;
		for(let j = 0; j < dice; j++){
			let current = Math.floor(Math.random() * sides) + 1;
			sum += current;
		}
	}
	//result.push(sum);
	return {
		"sides": sides,
		"dice": dice,
		"rolls": rolls,
		"results": result
	}
}
