'use strict';

/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */

function getMinMax(string) {
	let arr = string.replace(/[^-0-9./\s/]/g, ',').
					   split(',').
			           map( function(item) {
					  		return item * 1; 
					   });
	
	let num = [];
	for (let i = 0; i < arr.length; i++) {
		if(typeof (arr[i]) === 'number') {
			num.push(arr[i]);
		}
	}

	let min = Math.min(...num),
		max = Math.max(...num);
		
	let res = {};
		res.min = min;
		res.max = max; 
}


