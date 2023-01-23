const first_button = document.querySelector('#numberofletters');
const second_button = document.querySelector('#mostusedletter');
const return_button = document.querySelector('#popupbutton');
const popup_text = document.querySelector('#popuptext');
const popup = document.querySelector('.popup');

const letters_array = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

const ret_button = () => {

    popup.style.display = 'none';
    
}

const result = (bool, value) => {

    if(bool) {
    
        popup_text.textContent = 'Total number of letters is ' + value;

    } else {

        popup_text.textContent = 'Most used letter is ' + value;

    }

    popup.style.display = 'flex';

}

const number_letters = () => {

    var phrase = document.querySelector('#userphrase').value;
    var count = phrase.length - phrase.split(' ').length + 1;
    
    result(true, count);

}

const most_used = () => {

    var phrase = document.querySelector('#userphrase').value;
    var quantity = new Array(26).fill(0);
    var index = 0;

    for (var i = 0; i<phrase.length; i++) {

        if (letters_array.includes(phrase[i])) {

            index = letters_array.indexOf(phrase[i]);
            quantity[index%26] += 1

        }

    }
    
    const mostUsed = letters_array[quantity.indexOf(Math.max(...quantity))]
    
    result(false, mostUsed);

}

first_button.addEventListener("click", number_letters);
second_button.addEventListener("click", most_used);
return_button.addEventListener("click", ret_button);