export function roll(sides, dice, rolls) {
  var results = [];
  var index = 0;
	while(index < rolls) {
		results[index] = dice * (Math.floor(Math.random() * sides) + 1);
		index++;
	}
	//result.push(sum);
	return {
		"sides": sides,
		"dice": dice,
		"rolls": rolls,
		"results": results
	}
}
