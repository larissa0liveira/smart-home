const toggleStatus = "toggleStatus";
const sliderValue = "sliderValue";
let toggle = document.querySelector("#toggle-checkbox");
let slider = document.querySelector("#slider-range");

window.addEventListener("beforeunload", function(){
    localStorage.setItem(toggleStatus, JSON.stringify(toggle.checked));
    localStorage.setItem(sliderValue,  JSON.stringify(slider.value));
});

if(localStorage.getItem(toggleStatus))
    toggle.checked = JSON.parse(localStorage.getItem(toggleStatus));
if(localStorage.getItem(sliderValue))
    slider.value = JSON.parse(localStorage.getItem(sliderValue));
