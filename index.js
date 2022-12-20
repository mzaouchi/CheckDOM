var btnPlus = document.querySelectorAll('.btnPlus')
var btnMoins = document.querySelectorAll('.btnMoins')
var btnTrash = document.querySelectorAll('.fa-trash')
// var btnTrash = document.getElementsByClassName('fa-trash')
var btnHeart = document.querySelectorAll('.fa-heart')

console.log(btnTrash)
for (let i = 0; i < btnPlus.length; i++) {
    btnPlus[i].addEventListener('click',function(){
        btnPlus[i].previousElementSibling.innerHTML++
        SommeTotal()
    })    
}

for (let i = 0; i < btnMoins.length; i++) {
    btnMoins[i].addEventListener('click',function(){
        if (btnMoins[i].nextElementSibling.innerHTML>0) {
            btnMoins[i].nextElementSibling.innerHTML--
            SommeTotal()
        }
    })    
}

for (let i = 0; i < btnTrash.length; i++) {
    btnTrash[i].addEventListener('click',function(){
        btnTrash[i].parentElement.remove()
        SommeTotal()
    })    
}

for (let i = 0; i < btnHeart.length; i++) {
    btnHeart[i].addEventListener('click',function(){
        btnHeart[i].classList.toggle('mamino')
    })    
}


function SommeTotal(){
    var priceTab = document.querySelectorAll('.price')
    var qteTab = document.querySelectorAll('.qte')
    var Somme = document.querySelector('#aziz')
    var sum = 0

    for (let i = 0; i < priceTab.length; i++) {
        sum = sum + priceTab[i].innerHTML * qteTab[i].innerHTML        
    }
    Somme.innerHTML = sum
}