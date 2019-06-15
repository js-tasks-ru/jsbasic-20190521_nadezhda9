'use strict';

/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */

let inputData = '1, -5.8 или 10, хотя 34 + -5.3 и 73';

function getMinMax(string) {
	string = inputData.replace(/[^-0-9./\s/]/g, '').replace(/\s{1,}/g, ',');
	let arr = string.split(',');
	
	let res = [];
		res.push(Math.min(...arr), Math.max(...arr));
}
console.log(getMinMax(inputData));

