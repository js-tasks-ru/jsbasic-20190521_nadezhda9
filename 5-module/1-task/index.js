'use strict';

/**
 * Метод устанавливает необходимые по условию атрибуты таблице
 * @param {Element} table
 */

// Напишите функцию highlight, которая для каждой строки tr таблицы:

// Проставит класс available/unavailable, в зависимости от значения атрибута data-available у ячейки Status
// Проставит аттрибут hidden, если такого атрибута нет вообще
// Проставит класс male/female, в зависимости от содержимого ячекйки Gender
// Установит inline-стиль style=«text-decoration: line-through», если значение ячейки Age меньше 18

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
    let tbody = document.querySelector('tbody');
	
	for (let row of tbody.rows) {
		let age = row.cells[1];
		let gender = row.cells[2];
		let status = row.cells[3];
	
		row.classList.add((status.dataset.available === 'true') ? 'available' : 'unavailable');

		if (status.dataset.available === undefined) {
			row.getAttribute('hidden');
		}

		row.classList.add((gender.innerHTML === 'm') ? 'male' : 'female');

		if (age.innerHTML < 18) {
			row.style.textDecorationLine = 'line-through'; 
		}
	}
}

// function highlight(table) {
//     let tbody = table.querySelector('tbody');
//     for (let row of tbody.rows) {
//         let ageCell = row.cells[1];
//         let genderCell = row.cells[2];
//         let statusCell = row.cells[3];

//         if (statusCell.dataset.available === undefined) {
//             row.hidden = true;
//         }

//         row.classList.add(statusCell.dataset.available === 'true' ? 'available' : 'unavailable');

//         row.classList.add(genderCell.innerHTML === 'm' ? 'male' : 'female');
        
//         if (parseInt(ageCell.innerHTML) < 18) {
//             row.style.textDecoration = 'line-through';
//         }
//     }
// }