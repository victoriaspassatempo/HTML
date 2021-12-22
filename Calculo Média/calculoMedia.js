function calculoMedia(){
  var media;
  var n1 = parseInt(document.getElementById("n1").value);
  var n2 = parseInt(document.getElementById("n2").value);
  media = (n1 + n2) / 2;
    if (media) {             
        let classificacao = "";
        if (media >=9.5){
            classificacao = "Excelente!";
        }else if (media >=8.5) {
            classificacao = "Ótimo!";
        }else if (media >=7.0 ){
            classificacao = "Bom!";
        }else if (media >=6.0){
            classificacao = "Regular!";
        }else {
            classificacao = "Insuficiente!";
        }
        alert("Sua média é: " +  media + ".  " + classificacao)
    }
}