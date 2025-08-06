async function calculadoraImc() {
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
        let imc = 

    }catch{

    }
}