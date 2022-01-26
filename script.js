"use strict"

/* let index = 0;

function promjeniBoju() {
    const boje = ["Red", "Blue", "Green", "Yellow", "Orange", "Purple"];
    document.body.style.background = boje[index++];

    if(index > boje.length - 1) index = 0; */

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const buttonCloseModal = document.querySelector('.close-modal');
const buttonsOpenModal = document.querySelectorAll(".show-modal");

/* for (let i = 0; i < buttonsOpenModal.length; i++) {
    buttonsOpenModal[i].addEventListener("click", function() {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
});
} */
const openModal = function() {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
};

const closeModal = function (){
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
};

for (let i = 0; i < buttonsOpenModal.length; i++) {
    buttonsOpenModal[i].addEventListener("click", openModal);
}

buttonCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function(event){
    if (event.key === "Escape" && !modal.classList.contains("hidden")) {
        closeModal();
    }
});