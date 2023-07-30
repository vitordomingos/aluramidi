//Toca o som através do parametro recebido
function tocaSom (idElementoAudio) {

    document.querySelector(idElementoAudio).play();
}

//Captura todas as tecla do HTML e guarda em uma lista
const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;

while (contador < listaDeTeclas.length){

    //Armazena cada tecla em uma constante
    const tecla = listaDeTeclas[contador];

    //Armazena cada classe para referenciar o instrumento correto em uma constante
    const instrumento = tecla.classList[1];

    //Cria um template string para cada instrumento
    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function () {

        tocaSom(idAudio);
    };

    contador++;
}