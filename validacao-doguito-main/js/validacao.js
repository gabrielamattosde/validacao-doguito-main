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

    if(input.validity.valid) {
        input.parentElement.classList.remove('input-container--invalido')
        input.parentElement.querySelector('.input-mensagem-erro').innerHTML = ''

    } else {
        input.parentElement.classList.add('input-container--invalido')
        input.parentElement.querySelector('.input-mensagem-erro').innerHTML = ''

    }
}

const mensagemErro = {
    nome: {
        valueMissing: 'O campo nome não pode estar vazio.'
    },

    email: {
        valueMissing: 'O campo e-mail não pode estar vazio.',
        typemissing: 'O e-mail digitado não é válido'
    },

    senha: {
    valueMissing: 'O campo senha não pode estar vazio.',
    patternMisMatch: 'A senha deve conter entre  e 12 caracteres, pelo menos uma letra maiúscula, pelo menos uma letra minuscúla, pelo menos um número'

    },

    dataNascimento: {
        valueMissing: 'O campo data nascimento não pode estar vazio',
        customError: 'Você deve ser maior que 18 anos para se cadastrar'
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