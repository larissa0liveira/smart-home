let input    = $("#input-texto");
let procurar = $(".procurar-utilizador");
let lari     = $("#lari");
let aviso1   = $("#aviso1");
let aviso2   = $("#aviso2");
let concluir = $(".concluir");
let checkbox = $("#lari input");

procurar.addClass("procurar-utilizador-indisp");

input.on("input", function(){
    if(input.val() != ""){
        procurar.removeClass("procurar-utilizador-indisp");
        procurar.addClass("procurar-utilizador-disp");
    } else {
        procurar.removeClass("procurar-utilizador-disp");
        procurar.addClass("procurar-utilizador-indisp");
    }
});

procurar.on("click", function(){
    if(input.val() != ""){
        procurar.removeClass("procurar-utilizador-disp");
        lari.css("display", "flex");
    } else {
        aviso1.css("display", "inline-block");
    }
});

checkbox.on("input", function(){
    if(checkbox.is(":checked")){
        concluir.addClass("concluir-disp");
    } else {
        concluir.removeClass("concluir-disp");
    }
});

concluir.on("click", function(){
    if(!checkbox.is(":checked")){
        aviso2.css("display", "inline-block");
    } else {
        localStorage.setItem("membro-adicionado", true);
        window.location.replace("membro-adicionado.html");
    }
});

function closeWarning(){
    $(".aviso").css("display", "none");
}

$("#voltar").on("click", function(){
    if(!localStorage.getItem("membro-adicionado"))
        window.location.replace("membros.html");
    else
        window.location.replace("membro-adicionado.html");
});
