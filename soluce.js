
function closerOfZero(tab){
	if (!tab || tab.length == 0)
		return 0;
	let num = tab[0]; // will stock the closest number of zero
	for (let i; i < tab.length; i++){
		if(Maths.abs(num) > Maths.abs(tab[i])) // compare with absolute value to avoid negative number
			tmp = tab[i];
		if (Maths.abs(num) === Maths.abs(tab[i])){ // compare if the absolute value are equal
			if (num < tab[i]) // then if the original num < tab[i] means there is a negative value in num && we want to return the positive one 
				num = tab[i] // so we assign the value of the original tab who is the positive closest number of 0
		}
	}
	return num;
}
