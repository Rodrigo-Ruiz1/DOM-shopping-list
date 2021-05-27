'use strict';

const generateListButton = document.querySelector('#generateList');
const myList = document.getElementById('myList');


generateListButton.addEventListener('click', function() {
    const allInputs = document.querySelectorAll('input');
    const list = document.createElement('ul');

    allInputs.forEach(function program(item) {
        const li = document.createElement('li');
        li.innerText = item.value;
        list.append(li);
        
    });
    myList.append(list);

});