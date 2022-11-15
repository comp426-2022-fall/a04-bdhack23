export function roll(sides, dice, rolls) {
  let results = [];
  var num = 0;
  for(let x = 0; x < rolls; x++) {
	  let total = 0;
	  for(let y = 0; y < num; y++) {
		  total = 1 + Math.floor(Math.random() * sides);
	  }
	  results[x] = total;
  }
	return {
		"sides": sides,
		"dice": dice,
		"rolls": rolls,
		"results": results
	} 
}
