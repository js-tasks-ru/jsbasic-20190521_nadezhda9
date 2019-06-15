'use strict';

/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */

function getMinMax(string) {
	let string = inputData.replace(/[^-0-9./\s/]/g, ',').
					   split(',').
			           map( function(item) {
					  		return item * 1; 
					   });
	console.log(string);
	
	let num = [];
	for (let i = 0; i < string.length; i++) {
		if(typeof (string[i]) === 'number') {
			num.push(string[i]);
		}
		
	}
console.log(num);

	let min = Math.min(...num),
		max = Math.max(...num);
		
	let res = {};
		res.min = min;
		res.max = max; 
	console.log(res);
}
getMinMax();

