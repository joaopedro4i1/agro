// Função para simular a obtenção dos dados de qualidade do ar
function obterDadosQualidadeAr() {
    // Simulação de valores de qualidade do ar
    const valoresQualidadeAr = ["Boa", "Moderada", "Ruim", "Muito Ruim"];
    // Gerar um índice aleatório para os valores
    const indice = Math.floor(Math.random() * valoresQualidadeAr.length);
    // Retornar o valor correspondente ao índice gerado
    return valoresQualidadeAr[indice];
}

// Função para exibir a mensagem com base na qualidade do ar
function exibirMensagemQualidadeAr() {
    // Obter os dados de qualidade do ar
    const qualidadeAr = obterDadosQualidadeAr();
    // Mensagem padrão
    let mensagem = "A qualidade do ar está ";
    // Determinar a mensagem com base na qualidade do ar
    switch (qualidadeAr) {
        case "Boa":
            mensagem += "boa.";
            break;
        case "Moderada":
            mensagem += "moderada.";
            break;
        case "Ruim":
            mensagem += "ruim.";
            break;
        case "Muito Ruim":
            mensagem += "muito ruim.";
            break;
        default:
            mensagem += "desconhecida.";
    }
    // Exibir a mensagem no console ou em algum elemento HTML
    console.log(mensagem);
}

// Chamar a função para exibir a mensagem de qualidade do ar
exibirMensagemQualidadeAr();


