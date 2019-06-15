'use strict';

/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */

function getMinMax(string) {
	string = inputData.replace(/[^-0-9./\s/]/g, ',');
	
	let arr = string.split(',');
		
	let min = Math.min(...arr),
		max = Math.max(...arr);
		
	let res = { min: min,
				max: max
	};
	return res;		
}
getMinMax(inputData);

