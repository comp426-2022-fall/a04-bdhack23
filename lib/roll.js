function roll(sides, dice, rolls) {
  var results = [];
  var num = 0;
  while(num <= rolls) {
    results[num] = 1 + Math.floor(Math.random() * sides);
    num++;
  }
  const theRoll = {
		sides: sides,
		dice: dice,
		rolls: rolls,
		results: results
	} 
	
	return theRoll;
}
