//Toca o som através do parametro recebido
function tocaSom (seletorAudio) {

    const elemento = document.querySelector(seletorAudio);
    
    if (elemento != null && elemento.localName === 'audio') {

        elemento.play();
    } else{

        console.log('Elemento não encontrado ou seletor inválido');
    }
}

//Captura todas as tecla do HTML e guarda em uma lista
const listaDeTeclas = document.querySelectorAll('.tecla');

for (let contador = 0; contador < listaDeTeclas.length; contador++){

    //Armazena cada tecla em uma constante
    const tecla = listaDeTeclas[contador];

    //Armazena cada classe para referenciar o instrumento correto em uma constante
    const instrumento = tecla.classList[1];

    //Cria um template string para cada instrumento
    const idAudio = `#som_${instrumento}`;

    //Função anonima
    tecla.onclick = function () {

        tocaSom(idAudio);
    }

    tecla.onkeydown = function (evento) {

        if (evento.code === 'Space' || evento.code === 'Enter') {

            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function () {

        tecla.classList.remove('ativa');
    }

}