//** FUNCTION OPEN HAMBURGUER */
const hamburguer = document.getElementById("menuHamburguer");
const close = document.getElementById("ctnCloseMenuHamburguer");

function OpenHamburguer() {
    hamburguer.style.display = "flex";
 } 

    close.addEventListener("click", ()=> {
        hamburguer.style.display = "none";
    }
)