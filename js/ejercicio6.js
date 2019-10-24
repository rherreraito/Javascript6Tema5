/*
    Autor: Rafael Herrera García
    Archivo: ejercicio2.js
    Descripción: JQuery para acceder a una función.
*/


$(function(){
    $("#tabla tr").mouseover(function(){$(this).addClass("boton")});
    $("#tabla tr").mouseout(function(){$(this).removeClass("boton");});
});