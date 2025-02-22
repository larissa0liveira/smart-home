//-------------------"Main"--------------------------//

const allowedButtonColor = "rgb(43, 255, 0)";
const notAllowedButtonColor = "red";

const button = document.querySelector("#concluir");
const acoes = document.getElementsByClassName("checkbox-acao");

button.style.backgroundColor = notAllowedButtonColor;
addListenersToCheckBoxes();

checkCheckBoxes();

//-------------------Methods------------------------//

function addListenersToCheckBoxes(){
    for (const acao of acoes)
        acao.addEventListener("change", checkCheckBoxes);
}

function checkCheckBoxes() {  
    for(const acao of acoes){
        if(acao.checked){
            allowButton();
            return;
        }
    }
    notAllowButton();
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

function changePage(){
    const pageName = window.location.pathname.split("/").pop();
    let pageToGo;

    switch (pageName) {
        case "adicionar-acao.html" : pageToGo = "pos-acoes.html"       ; break;
        case "pos-acoes.html"      : pageToGo = "final-assistente.html"; break;
        default: break;
    }

    document.location.href = pageToGo;
}
