const a = document.getElementById("ctnImageClick");
const b = document.getElementById("changeImage");
const c = document.getElementById("iconClose");

function ChangeImageFunction (url) { 
    a.style.display = "flex";
    b.src = url;
}

c.addEventListener("click", ()=> {
    a.style.display = "none";
})

a.addEventListener("click", ()=> {
    a.style.display = "none";
})


b.addEventListener("click", (e)=> {
    e.stopPropagation();
})

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