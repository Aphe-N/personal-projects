const header = document.querySelector("header");

window.addEventListener ("scroll",  function () {
    header.classList.List.toggle ("sticky", window.scrollY > 120);
})

