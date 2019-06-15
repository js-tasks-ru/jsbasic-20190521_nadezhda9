'use strict';

/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */

function getMinMax(string) {
	let num = string.replace(/[^-0-9./\s/]/g, ',').split(',');
		
	let res = {};
		res['min'] = Math.min(...num);
		res['max'] = Math.max(...num); 
	return res;
}


