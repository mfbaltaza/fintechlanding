const btnHamburguer = document.querySelector("#btnHamburguer");
const body = document.querySelector('body'); 
const header = document.querySelector(".header");
const overlay = document.querySelector(".overlay");
const fadeElems = document.querySelectorAll(".has-fade");

btnHamburguer.addEventListener("click", function () {
  //console.log("Open Hamburguer");

  if (header.classList.contains("open")) {
    // Close Hamburguer
    body.classList.remove('lockScroll')
    header.classList.remove("open");
    fadeElems.forEach(function (element) {
      element.classList.remove("fade-in");
      element.classList.add("fade-out");
    });
  } else {
    // Open Hamburguer
    body.classList.add('lockScroll')
    header.classList.add("open");
    fadeElems.forEach(function (element) {
      element.classList.remove("fade-out");
      element.classList.add("fade-in");
    });
  }
});
