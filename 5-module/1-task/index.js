'use strict';

/**
 * Метод устанавливает необходимые по условию атрибуты таблице
 * @param {Element} table
 */

/*
// ТАБЛИЦА
    table = document.querySelector('tbody');

// ОПРЕДЕЛЕННАЯ ЯЧЕЙКА
    let row = table.rows; // СТРОКА
 	row[2].cells[0].style.background = 'yellow'; // 1 ячейка во 2 строке
	//ТО ЖЕ САМОЕ
 	table.rows[2].cells[0].style.background = 'red'; 


// СТОЛБЕЦ    
    for (let row of table.rows) {
		row.cells[2].style.background = 'green'; // все ячейки 2 столбца
	}
	//ТО ЖЕ САМОЕ
	for (let i = 0; i < table.rows.length; i++) {
		table.rows[i].cells[3].style.background = 'blue'; // все ячейки 3 столбца
	};
*/

function highlight(table) {
    let tbody = table.querySelector('tbody');
	
	for (let row of tbody.rows) {
		let age = row.cells[1],
		    gender = row.cells[2],
		    status = row.cells[3];
	
	//# 1
		row.classList.add((status.dataset.available === 'true') ? 'available' : 'unavailable');

		if (status.dataset.available === undefined) {
			row.hidden = true;
		}

	//# 2
		row.classList.add((gender.innerHTML === 'm') ? 'male' : 'female');

	//# 3
		if (age.innerHTML < 18) {
			row.style.textDecoration = 'line-through'; 
		}
	}
}


