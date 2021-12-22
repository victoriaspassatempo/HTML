var nomes = [];
function adicionar(){
   var nome = document.getElementById("nome");
   lista.innerHTML = lista.innerHTML + "<li>" + nome.value + "</li>";
   nomes = nomes + nome.value + " ";
}
function ordenar(){
   document.getElementById("lista").innerHTML = "";
   var iv = nomes.split(" ");
   iv.sort();
   for (var i = 0 ; i < iv.length ; i++) 
   {   
     lista.innerHTML = lista.innerHTML + "<li>" + iv[i] + "</li>";
   }
}
function reset() {
     document.getElementById("limpar").reset;
}