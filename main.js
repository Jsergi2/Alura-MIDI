//Colocar a função .play dentro de uma function declarada, se não aparecerá o erro de não execução por não haver interação do usuário
function tocaSom(seletorAudio){
    const elemento = document.querySelector(seletorAudio);
    if(elemento /*!= null (nesse caso n~eo é necessário comparar o elemento com Null, pois o js entende que somente elemento já é pra verificar se ele é existente, ou seja, diferente de null*/ && elemento.localName === 'audio'){ // localName é um atributo do elemento
        elemento.play();
        //console.log(elemento.localName);
    }
    //o else serve como condicional negativa ao if, sendo obrigatório ser aberto logo em seguida ao if que deseja negar.
    else {
        console.log('Elemento não encontrado ou seletor inválido');
    }
}
const listaDeTeclas = document.querySelectorAll('.tecla'); //Seleciona todos elementos de class .tecla

for (let contador = 0; contador < listaDeTeclas.length; contador++) {
    
    const teclas =  listaDeTeclas[contador]; //criado nova constante para armazenar os valores da lista de teclas.

    const instrumento = teclas.classList[1];//a constante instrumento pega a lista de classes da lista de teclas e seleciona a classe de indice [1], ou seja, a classe tecla_xxx e não somente tecla.
    
    //template string
    const idAudio = `#som_${instrumento}`;//constante idAudio armazena o trecho após #som_ como dinâmico, atenção a estrutura e o uso da crase como abertura e fechamento de seletor.


    teclas.onclick = function(){ //function anônima, ou seja criada diretamente como parametro para o onclick.
        tocaSom(idAudio);
    }

// Define o nome evento para onkeydown
    teclas.onkeydown = function(evento){
        if(evento.code === "Enter" || evento.code === "Space"){//evento.code verifica se a condição down é verdadeira para Enter e Space
            teclas.classList.add('ativa');
            console.log(evento)
        }
//no Dev Tools é possível pegar o code da tecla para fazer esse tipo de lógica.
// === é o operador ideal para este tipo de condição
    }
    teclas.onkeyup = function(){
        teclas.classList.remove('ativa');
    }


    //contador +=1;
    //console.log(contador)
    //console.log(instrumento);
}

































//document.querySelector('.tecla_pom').onclick = tocaSomPom; - nesse caso ao clicar no elemento html .tecla_pom, será executada a função anteriormente declada tocaSomPom. Não é colocado o () após a função pois o navegador vai apresentar o erro de não interação


