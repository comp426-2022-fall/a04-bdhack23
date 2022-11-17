export function roll(sides, dice, rolls) {
  var results = [];
  var num = 0;
	for(let i = 0; i < rolls; i++){
		let sum = 0;
		for(let j = 0; j < dice; j++){
			num[i]=Math.floor(Math.random() * sides) + 1;
			sum += num[i]
		}
	}
	const theRoll = {
		"sides": sides,
		"dice": dice,
		"rolls": rolls,
		"results": results
	} 
	return theRoll;
}
