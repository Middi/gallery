// MODAL

// Grab from DOM
var modal = document.querySelector(".modal");
var modalBg = document.querySelector(".modal-bg");
var closeButton = document.querySelector(".close-button");


var openImg = document.getElementsByClassName("open-img");



closeButton.addEventListener("click", function () {
  modal.classList.toggle("closed");
  modalBg.classList.toggle("closed");
});

// Iterate through and add event listeners
for (var i = 0; i < openImg.length; i++) {
  openImg[i].addEventListener('click', function () {
    modal.classList.toggle("closed");
    modalBg.classList.toggle("closed");
  });
}

// Get image from card

// set it to Modal image

