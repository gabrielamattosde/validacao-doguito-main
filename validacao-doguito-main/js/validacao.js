const dataNascimento = document.querySelector('#nascimento');


//O evento blur é acionado quando um elemento perde foco
dataNascimento.addEventListener('blur', (evento) => {
// Target uma referência ao objeto que enviou o evento
    validaDataNascimento(evento.target);

});

export function valida(input) {
    const tipoDeInput = input.dataset.tipo

    if(validadores[tipoDeInput]) {
        validadores[tipoDeInput](input)
    }
}

const validadores = {
    dataNascimento:input => validaDataNascimento(input)
}
function validaDataNascimento(input) {
    const dataRecebida = new Date(input.value);
    let mensagem = ''


    if (!maiorQue18(dataRecebida)) {
    mensagem = 'Você deve ser maior que 18 anos para se cadastrar.';
    }

    input.setCustomValidity(mensagem)
}

function maiorQue18(data) {
    const dataAtual = new Date();
    const dataMais18 = new Date(data.getUTCfullYear + 18, data.getUTCMonth(), data.getUTCDate());

    return dataMais18 <= dataAtual;


}