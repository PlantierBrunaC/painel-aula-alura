
function playSound (idElementAudio){
    
   const elemento = document.querySelector(idElementAudio);

 if(elemento === null){
    //  alert('Incorreto'); 
 }
 if(elemento != null && elemento.localName === 'audio') {
    elemento.play();

 } else{
    console.log('Elemento não encontrado ou seletor inválido');
 }
    
}

const buttonsList = document.querySelectorAll('.tecla');

//contador -  Ocultado na versão FOR pois esta dentro da estrutura do FOR 
// let contador = 0;

//ENQUANTO utilizando WHILE
/*while(contador < buttonsList.length ){
    const tecla = buttonsList[contador]; 
    const instrumento = tecla.classList[1];

    //template string - crase para concatenar string 
    const idAudio = `#som_${instrumento}`; 
    // console.log(instrumento);
              
    tecla.onclick = function (){
            playSound(idAudio); 
        }
        contador = contador + 1;

}
*/

for (let contador = 0; contador < buttonsList.length; contador++){
    
    const tecla = buttonsList[contador]; 
    const instrumento = tecla.classList[1];

    const idAudio = `#som_${instrumento}`; 

    tecla.onclick = function (){
            playSound(idAudio); 

        }

        tecla.onkeydown = function (evento){
            if(evento.code === 'Space' || evento.code === 'Enter'){
                tecla.classList.add('ativa');
            }
        }

        tecla.onkeyup = function (){
            tecla.classList.remove('ativa');
        }



}


