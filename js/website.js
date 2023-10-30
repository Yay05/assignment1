let popup = document.getElementById('popup');

function openPopup1() {
    popup.classList.add("pop-about");
}

function closePopup1() {
    popup.classList.remove("pop-about");
}

let contact = document.getElementById('contact')
function openPopup2() {
    contact.classList.add("pop-contact");
}

function closePopup2() {
    contact.classList.remove("pop-contact");
}

let main = document.getElementById('container') 
function openPopup3() {
    main.classList.add("pop-container");
}

function closePopup3() {
    main.classList.remove("pop-container");
}
