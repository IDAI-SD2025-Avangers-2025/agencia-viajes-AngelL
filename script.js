//primer formulario
var formulario = document.getElementById("individual");

function calcular(){
    var vuelo = formulario.vuelo.value;
    var hospedaje = formulario.hospedaje.value;
    var adultos = formulario.adultos.value
    var menores = formulario.menores.value

    var diasdiv = document.getElementById("diasdiv").value;

    //alert("si funciono")

    var total = 0

    if(vuelo == "sin-avion") {
    total = total + 999;}

    else if(vuelo == "ida") {
    total += 2499; }

    else if(vuelo == "ida-vuelta") {
    total += 5999; }

    else{
    alert("Por favor selecciona un tipo de vuelo");
    return; }  



    if(hospedaje == "sin-hotel") {
    total += 499;}

    else if(hospedaje == "sencilla") {
    total += 799;}

    else if(hospedaje == "doble") {
    total += 999;}

    else{
    alert("Por favor selecciona un tipo de hospedaje");
    return; }


        if(adultos == "1") {
    total = total + 865;     }  

        if(adultos == "2") {
    total = total + 865 * 2;     }      

        if(adultos == "3") {
    total = total + 865 * 3;     }   
    
        if(adultos == "4") {
    total = total + 865 * 4;     }   

        if(adultos == "5") {
    total = total + 865 * 5;     }    
    
    

        if(menores == "1") {
    total = total + 437;     }   

        if(menores == "2") {
    total = total + 437 * 2;     }  
    
        if(menores == "3") {
    total = total + 437 * 3;     }       

        if(menores == "4") {
    total = total + 437 * 4;     }   

            
    formulario.total.value = total + diasdiv * 769;    

}

//Segundo formulario

var formulario = document.getElementById("paquetes");

function calcular2(){
    var destino = formulario.destino.value;
    var extras = formulario.extras.value;
    var especial = formulario.especial.value

    var diaspaq = document.getElementById("diaspaq").value;

    //alert("si funciono")

    var total2 = 0

    if(destino == "suramerica") {
    total2 += 7999;}

    else if(destino == "europa") {
    total2 += 21999; }

    else if(destino == "africa") {
    total2 += 17999; }

    else if(destino == "asia") {
    total2 += 25999; }
    
    else if(destino == "norteamerica") {
    total2 += 12999; }    

    else{
    alert("Por favor selecciona un destino");
    return; }  

    


    formulario.total2.value = total2 + diaspaq * 769;    

}