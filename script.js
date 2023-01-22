const letters = new Map();

const first_button = document.querySelector('#numberofletters');
const second_button = document.querySelector('#mostusedletter');

const letters_array = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

const number_letters = () => {
    var phrase = document.querySelector('#userphrase').value;
    var count = phrase.length - phrase.split(' ').length + 1;
    console.log(count);
}

const most_used = () => {
    console.log(letters_array);
}

first_button.addEventListener("click", number_letters);
second_button.addEventListener("click", most_used);