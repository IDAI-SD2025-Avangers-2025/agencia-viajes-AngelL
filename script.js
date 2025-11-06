var formulario = document.getElementById("individual");

function calcular(){
    var vuelo = formulario.vuelo.value;
    var hospedaje = formulario.hospedaje.value;
    var adultos = formulario.adultos.value
    var menores = formulario.menores.value
    var diasIndividual = formulario.dias-individual.value

    //alert("si funciono")

    var total = 0

    if(vuelo == "sin-avion") {
    total = 999;}

    else if(vuelo == "ida") {
    total = 2499}

    else if(vuelo == "ida-vuelta") {
    total = 5999}

    else{
    alert("Por favor selecciona un tipo de vuelo");
    return; }  



    if(hospedaje == "sin-hotel") {
    total = 499;}

    else if(hospedaje == "sencilla") {
    total = 799}

    else if(hospedaje == "doble") {
    total = 999}

    else{
    alert("Por favor selecciona un tipo de hospedaje");
    return; }


    
    formulario.total.value = total;    


}