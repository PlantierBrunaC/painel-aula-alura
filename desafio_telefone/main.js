

function   atualizarInput(valor) {
   
    var telefoneInput = document.getElementById('telefoneInput');
    var mensagemElement = document.getElementById('message');

    if (telefoneInput.value.length < 11) {
        telefoneInput.value += valor;
        mensagemElement.innerText = '';
    } else {
        mensagemElement.innerHTML = 'Limite máximo de 11 caracteres atingido!';
    }

}


function clearInput(){
    var telefoneNumber = document.getElementById('telefoneInput');
     telefoneNumber.value = ''; 

 var mensagemElement = document.getElementById('message');
      mensagemElement.innerText = 'Telefone apagado!';
}

function sendMessage() {
    var telefoneInput = document.getElementById('telefoneInput');
    var mensagemElement = document.getElementById('message');
    var telefone = telefoneInput.value;

    if (telefone.length < 9) {
        mensagemElement.innerText = 'Informe o telefone completo.';
    } else if (telefone.length >= 9 && telefone.length <= 11) {
        mensagemElement.innerText = 'Obrigado por informar o telefone.';
    } else {
        mensagemElement.innerText = 'Limite máximo de 11 caracteres atingido!';
    }
}

