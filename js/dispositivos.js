//-------------------"Main"--------------------------//

const greenColor = "rgb(43, 255, 0)"
const allowedButtonColor = "rgb(43, 255, 0)";
const notAllowedButtonColor = "red";

const time     = document.querySelector("#input-horario");
const days     = document.getElementsByClassName("dia-da-semana");
const checkbox = document.querySelector("#todos-os-dias input");
const button   = document.querySelector("#concluir");

button.style.backgroundColor = notAllowedButtonColor;
addEventListeners();

//-------------------Methods------------------------//

function addEventListeners(){
    // Listener for the input "Horário"
    time.addEventListener("change", inpuTimeChanged);

    // Listener for each individual day in "Repetir"
    for(const day of days)
        day.addEventListener("click", function(){ switchColor(day) });

    // Listener for the checkBox "Todos os dias"
    checkbox.addEventListener("change", switchAllColors);
}

function checkIfCanAllowButton(){
    if(atLeastOneDaySelected() && inpuTimeNotEmpty())
        allowButton();
    else 
        notAllowButton();
}

function switchColor(item){   
    let currentColor = window.getComputedStyle(item).backgroundColor;
    
    if(currentColor == "rgb(255, 255, 255)")//white color
        item.style.backgroundColor = greenColor;
    else 
        item.style.backgroundColor = "white";

    checkIfCanAllowButton();
}

function switchAllColors(){
    let newColor;
    let isChecked = checkbox.checked;

    newColor = isChecked ? greenColor : "white";

    for(const day of days)
        day.style.backgroundColor = newColor;

    checkIfCanAllowButton();
}

function inpuTimeChanged(){
    if(time.value != "")
        checkIfCanAllowButton();
}

function atLeastOneDaySelected(){
    let daysSelected = 0;

    for(const day of days){
        let currentColor = window.getComputedStyle(day).backgroundColor;

        if(currentColor == greenColor)
            daysSelected++;
    }

    if(daysSelected == 7)
        checkbox.checked = true;
    else 
        checkbox.checked = false;

    return daysSelected > 0;
}

function allowButton(){
    button.addEventListener("click", changePage);
    button.classList.add("botao");
    button.style.backgroundColor = allowedButtonColor;
}

function notAllowButton(){
    button.removeEventListener("click", changePage);
    button.classList.remove("botao");
    button.style.backgroundColor = notAllowedButtonColor;
}

function inpuTimeNotEmpty(){
    return time.value != "";
}

function changePage(){
    const pageName = window.location.pathname.split("/").pop();
    let pageToGo;

    switch (pageName) {
        case "cafe.html"     : pageToGo = "pos-cafe.html"     ; break;
        case "aspirador.html": pageToGo = "pos-aspirador.html"; break;
        case "ac.html"       : pageToGo = "pos-ac.html"       ; break;
        default: break;
    }

    document.location.href = pageToGo;
}
