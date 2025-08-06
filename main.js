function calculadoraImc() {
    let altura =  document.getElementById('altura').value;
    let peso =  document.getElementById('peso').value;

    if (altura==="") {
        alert("Por favor, preencha o campo Altura.");
        document.getElementById('name').style.border = "2px solid red";
        return false;
    }

    if (peso==="") {
        alert("Por favor, preencha o campo Peso.");
        document.getElementById('name').style.border = "2px solid red";
        return false;
    }

    console.log("altura: " + altura);
    console.log("peso: " + peso);

    try { 
        let imc = peso / (altura * altura)
        let resultado = ""


    if(imc < 18.5){
        resultado = "Abaixo do Peso"
    } else if(imc >= 18.5 && imc < 24.9){
        resultado = "Normal"
    } else if(imc >= 25 && imc <= 29.9){
        resultado = "Sobrepeso"
    } else if(imc >=30 && imc <=34.9){
        resultado = "Obesidade grau I"
    } else if(imc >=35 && imc <=39.9){
        resultado = "Obesidade grau II"
    } else{
        resultado = "Obesidade grau III"
    }

    return resultado


    /* */
    let tabela = document.querySelector('table')
    let novasLinhas = document.createElement('tr');



    
    }catch{
        alert('Erro ao calcular o IMC')

    }
}

function exibirResultado(){
    
}