//-------------------"Main"--------------------------//

const allowedButtonColor = "rgb(43, 255, 0)";
const notAllowedButtonColor = "red";

let warning  = document.querySelector("#aviso");
const button = document.querySelector("#add");
const input  = document.querySelector("#input-texto");
let allowed;

button.addEventListener("click", warningOrChangePage);
input.addEventListener("input", checkTextField);

notAllowButton();

//-------------------Methods------------------------//

function checkTextField(){
    if(fieldIsEmpty())
        notAllowButton();
    else if(!fieldIsEmpty())
        allowButton();
}

function allowButton(){
    button.classList.add("botao");
    button.style.color = allowedButtonColor;
    allowed = true;
}

function notAllowButton(){
    button.classList.remove("botao");
    button.style.color = notAllowedButtonColor;
    allowed = false;
}

function fieldIsEmpty(){
    return input.value == "" || input.value == null; 
}

function warningOrChangePage(){
    if(!allowed)
        warning.style.display = "block";
    else 
        changePage();
}

function changePage(){
    const pageName = window.location.pathname.split("/").pop();
    let pageToGo;

    switch (pageName) {
        case "criar-rotina.html" : pageToGo = "dispositivos.html"  ; break;
        case "criar-comando.html": pageToGo = "adicionar-acao.html"; break;
        default: break;
    }

    document.location.href = pageToGo;
}

function closeWarning(){
    warning.style.display = "none";
}
