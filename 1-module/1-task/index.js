/**
 * Power
 * @param {number} m base
 * @param {number} n index
 * @returns {number}
 */
let m = +prompt('Введите число', ''),
	n = +prompt('Задайте степень числа', '');

function pow(m, n) {
	while(n < 1 && n == 0) {
		n = +prompt('Степень должна быть целым числом и больше 0', '');	
	}  	

	if (n > 1){
	    return m*pow(m, n-1);
	} else if (n == 1){
	    return m;
	}
}
alert(pow(m, n));