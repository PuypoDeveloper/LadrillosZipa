const a = document.getElementById("ctnImageClick2");
const b = document.getElementById("iconClose2");
const c = document.getElementById("changeImageTwo");
const d = document.getElementById("titleImageModal");
const e = document.getElementById("TextOneModal");
const f = document.getElementById("TextTwoModal");
const g = document.getElementById("TextThreeModal");
const h = document.getElementById("ctnImageText2");

function  ChangeImageProduct (url, title, textOne, textTwo, textThree = "") { 
    a.style.display= "flex";
    c.src = url;
    d.innerHTML = title;
    e.innerHTML = textOne;
    f.innerHTML = textTwo;
    g.innerHTML = textThree;
} 

b.addEventListener("click", () => {
    a.style.display= "none";
});

a.addEventListener("click", () => {
    a.style.display= "none";
});

h.addEventListener("click", (e)=> {
    e.stopPropagation();
});

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