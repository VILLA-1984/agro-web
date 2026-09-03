const btnEnviar = document.getElementById('btnEnviar');
const inputNome = document.getElementById('inputNome');
const inputSB = document.getElementById('inputSobrenome');

function exibirAlerta(){
    if(inputNome.value.length < 2){
        alert('O nome deve ter ao menos 2 caracteres!');
    }else{
        alert('Nome: ' + inputNome.value +' '+ inputSB.value);
    }
}

btnEnviar.addEventListener('click', exibirAlerta);