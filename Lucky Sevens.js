function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

function luckySevens() {
	var startBet = Number(document.forms["betStart"]["amount"].value);
	if (startBet <= 0) {
		alert("Starting bet must be greater than 0!");
		return false;
	}
	else {
		var curMon = startBet; 
		var maxMon = startBet;
		var numRolls = 0;
		var maxMonRolls = 0;
		while (curMon > 0) {
			var firstDie = rollDice();
			var secDie = rollDice();
			var dieSum = firstDie + secDie;
			numRolls++;
			if (dieSum == 7) {
				curMon += 4;
				if (maxMon < curMon) {
					maxMon = curMon;
					maxMonRolls = numRolls;
				}
			}
			else {
				curMon--;
			}
		}	
	}
	document.getElementById("hide").style.display = "initial";
	document.getElementById("results").style.display = "block";
	document.getElementById("submitButton").innerText = "Play Again";
	document.getElementById("totalRolls").innerText = numRolls;
	document.getElementById("highWinning").innerText = maxMon;
	document.getElementById("rollCount").innerText = maxMonRolls;
	
	return false;
}