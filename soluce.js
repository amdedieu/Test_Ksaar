
function abs(num){
	return num < 0 ? -num : num;
}
function closestToZero(tab){
	if (!tab || tab.length == 0)
		return 0;
	let num = tab[0]; // init the return value
	for (let i = 0; i < tab.length; i++){
		if(abs(num) > abs(tab[i])) // compare with absolute value 
			num = tab[i];
		else if (abs(num) === abs(tab[i]) && num < tab[i]){ // compare if the absolute value are equal and if the original number is inferior to tab[i] 
				num = tab[i] // assign the non absolute value who is the positive closest number to 0
		}
	}
	return num;
}
