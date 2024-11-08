function hacerclic(){
    var lista=document.getElementById('principal').querySelectorAll("p");
    lista[0].occlick=mostraralerta    
} 
function mostraralerta(){
    alert('hizo clic!')
}

window.onload=hacerclic;