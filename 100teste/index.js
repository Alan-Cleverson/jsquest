
function finalizar (){
var nome = document.getElementById("nome").value;
var idade = document.getElementById("idade").value;
var cor = document.getElementsByClassName("cores").value;
iferIdade = idade - 18;

    document.getElementById("relatorio").innerHTML = "Olá! "+  nome+ "<br> Sua idade é " + idade;

        if (idade >= 18 ){
            document.getElementById("relatorio1").innerHTML = nome +", você é maior de idade e já pode tirar Habilitação"
        } else if (idade < 18){
            document.getElementById("relatorio1").innerHTML = "Percebi que você é menor de idade e ainda faltam " + diferIdade +" ano(os) para completar 18 anos."
                       
        }
}

