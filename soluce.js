
function closerOfZero(tab){
	if (!tab || tab.length == 0)
		return 0;
	var num = tab[0]; // will stock the closest number of zero
	for (let i; i <= tab.length; i++){
		if(Maths.abs(num) > Maths.abs(tab[i])) // compare with absolute value to simplify the negative part
			num = tab[i];
		else if (Maths.abs(num) === Maths.abs(tab[i]) && num < tab[i]){ // compare if the absolute value are equal && if the original num is < tab[i]
				num = tab[i] // so we assign the value of the original tab who is the positive closest number of 0
		}
		return num;
	}
}


console.log(closerOfZero(0));
