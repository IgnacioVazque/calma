// function openNav() {
//     document.getElementById("mySidebar").style.width = "250px";
//     document.getElementById("main").style.marginLeft = "250px";
// }

// function closeNav() {
//     document.getElementById("mySidebar").style.width = "0";
//     document.getElementById("main").style.marginLeft = "0";
// }

function mostrar() {
    document.getElementById("mySidebar").style.width = "280px";
    document.getElementById("conte-principal").style.marginLeft = "280px";
    document.getElementById("abrir").style.display = "none";
    document.getElementById("cerrar").style.display = "inline";
    document.getElementById("cerrar").style.display = "hidden";
}

function ocultar() {
    document.getElementById("mySidebar").style.width = "0px";
    document.getElementById("conte-principal").style.marginLeft = "0px";
    document.getElementById("abrir").style.display = "inline";
    document.getElementById("cerrar").style.display = "none";
}
