document.addEventListener('DOMContentLoaded', function() { //Garante a execução do arquivo javascript após todo o carregamento da página
    const drumButtons = document.querySelectorAll('button[data-sound]'); //Armazena todos os botões do HTML que possuem o atr. data-sound dentro da const drumButtons

    // Função para tocar o som e adicionar a classe 'ativa' que garante a mudança de cor da tecla no onclick em qualquer browser
    function playSound(button) {
        const instrumentId = button.getAttribute('data-sound'); // armazena o valor do el. data-sound em instrumentId para que possamos, na próxima linha selecionar o áudio de id correspondente
        const audioItem = document.querySelector(`#${instrumentId}`);
        audioItem.currentTime = 0; // reinicia o áudio para que o usuário consiga o tocar várias vezes seguidas
        audioItem.play(); // toca o áudio quando a tecla é pressionada
        button.classList.add('ativa'); // adiciona a classe 'ativa' aos botões para que as definições de css de cor aconteçam quando a tecla é pressionada

        // As linhas abaixo garantem que a função ativa dure apenas o tempo de pressionamento do botão, sendo removida após 100ms
        setTimeout(() => {
            button.classList.remove('ativa');
        }, 100); 
    }

    drumButtons.forEach(button => { //Adiciona um evento a todos os botões armazenados em drumButtons
        button.addEventListener('click', function() { 
            playSound(this); //toca o som do botão corresponde a cada vez que o usuário clica.
        });
    });


    const keyMap = { // Mapeia as teclas do teclado numérico para os botões correspondentes
        '1': 'button1',
        '2': 'button2',
        '3': 'button3', 
        '4': 'button4', 
        '5': 'button5', 
        '6': 'button6',
        '7': 'button7',
        '8': 'button8',
        '9': 'button9',
    };

    document.addEventListener('keydown', function(event) { //Adiciona um evento a cada vez que a tecla é pressionada
        const buttonId = keyMap[event.key]; //Obtém o botão de instrumento a partir da tecla correspondente
        if (buttonId) { // verifica se existe um botão correspondente para a tecla pressionada
            const button = document.querySelector(`#${buttonId}`); //Seleciona o botão
            if (button) { // Se o botão existe, chama a função playSound(button) para tocar o som e adicionar a classe "ativa"
                playSound(button);
            }
        }
    });
});