'use strict';

/**
 * Эту функцию трогать не нужно
 */
function print (text) {
    alert(text);
}

/**
 * Эту функцию нужно поменять так,
 * чтобы функция sayHello работала корректно
 */

function sayHello () {
	let userName = prompt('Введите ваше имя', '');

	function isValid (name) {
		if (name === null || name === '' || name.length < 4 || (/\s/.test(name))) {
	        return false;
		} 
		return true;
	}

    if (isValid(userName)) {
        print('Welcome back, ' + userName + '!');
    } else {
        print('Некорректное имя');
    }
}
sayHello();
