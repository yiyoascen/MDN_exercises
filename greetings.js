const list = document.querySelector('.output ul');
list.innerHTML = '';
let greetings = ['Happy Birthday!',
    'Merry Christmas my love',
    'A happy Christmas to all the family',
    'You\'re all I want for Christmas',
    'Get well soon'
];
for (let i = 0; i < greetings.length; i++) {
    let input = greetings[i];

    if (greetings[i].indexOf('Christmas') !== -1) {
        let result = input;
        let listItem = document.createElement('li');
        listItem.textContent = input;
        list.appendChild(listItem);
    }
}
