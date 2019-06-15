'use strict';

/**
 * Генерация HTML списка друзей
 * @param {Friend[]} friends
 * @return {HTMLUListElement}
 */

function makeFriendsList(friends) {  
	let ul = document.createElement('ul');
	document.body.appendChild(ul);
	
	for (let i = 0; i < 3; i++) {
		let li = document.createElement('li');
		li.innerHTML = `${friends[i].firstName} ${friends[i].lastName}`;
		ul.appendChild(li);
	}
}
makeFriendsList(friends);
