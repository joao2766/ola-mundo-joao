let nomeUsuario="";
ley Elemento = document.querySelector( "#nome-Usuario");

while (nomeUsuario == ""){
     nomeUsuario= prompt("Qual e seu nome?")

}

if(nomeUsuario== null){
    elemento.textContent = "seja bem vindo";
}elese{
    elemento.textContent = nomeUsuario
}