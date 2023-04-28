//global variablet (tärkeät)
var cat = document.getElementById("mirri")
var name = prompt("kissan nimi")
var vanha = prompt("kuinka vanha")
var ruoka = prompt("lempi ruoka")

//kertoo miten rakentaa kissa hahmo
class Kissa {
    constructor() {
        this.name = name
        this.age = Number(vanha)
        this.food = ruoka
    }
    //printtaa jutun sivulle
    siistinimi() {
        cat.innerText = this.name + " on " + this.age + " vuotta vanha ja tykkää " + this.food + "sta"
        console.log(cat.innerText)
    }
}

//tekee kissan statsit
const mirri = new Kissa()
mirri.siistinimi()


//kissan kuva
document.getElementById("btn").addEventListener("click", kuva);

function kuva() {
    document.body.style.backgroundImage = "url('cat.gif')"
}