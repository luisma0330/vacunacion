const acordion = document.getElementsByClassName("accordion-box");
const iconDown = document.getElementsByClassName("fa-caret-down");
const iconUp = document.getElementsByClassName("fa-caret-up");

for(let i = 0; i < acordion.length; i++) {
    acordion[i].addEventListener("click", function() {
        this.classList.toggle("active");
    });
}