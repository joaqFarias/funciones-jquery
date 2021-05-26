// scrip ocupando Jquery

// toggle de tabla de contenidos
$("#boton-tabla").click(function () {
    console.log("Han Hecho click");
    $("#tabla").toggle();
})

// se esconden las imagenes
$("#imagen-1").hide();
$("#imagen-2").hide();
$("#imagen-3").hide();

//slide toggle en imagenes
$("#mostrar-imagen-1").click(function(){
    $("#imagen-1").fadeIn();
})
$("#mostrar-imagen-2").click(function(){
    $("#imagen-2").fadeIn();
})
$("#mostrar-imagen-3").click(function(){
    $("#imagen-3").fadeIn();
})

//slide toggel formulario
$("#boton-formulario").click(function(){
    $(".formulario").slideToggle();
})