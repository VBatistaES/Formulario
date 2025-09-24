function SalvarNome() {
    let nome = document.getElementById('nome').value;
    if (nome === '') {
        window.alert('Digite um nome')
    }
    else if (/^[0-9]+$/.test(nome)) {
        alert(`O nome ${nome} Não e um nome! Por favor digitar um nome.`)
    }
    else {
        window.alert(`O nome salvo foi: ${nome}`);
        window.alert('Seja bem vindo a tela de cadastro, Continue o preenchimento.')
    }
}

function SalvarCPF() {
    let cpf = document.getElementById('cpf').value;
    let cpfSeparado = cpf.length;
    console.log(cpf)
    console.log(cpfSeparado)
    if (cpfSeparado != 11) {
        window.alert(`O CPF ${cpf} esta incorreto!`)
        window.alert('O número valido para CPF só pode conter 11 Dígitos.')
    }
    else if (/^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/.test(cpf)) {
        window.alert('O CPF não pode conter letras')
    }
    else {
        window.alert(`O CPF de número ${cpf} foi salvo com sucesso!`)
    }
}

function SalvarTelefone() {
    let telefone = document.getElementById('telefone').value;
    window.alert(`O seu telefone de número: ${telefone} foi salvo!`);
}

function SalvarAniversario() {
    let aniversario = document.getElementById('aniversario').value;
    window.alert(`O seu aniversario da data: ${aniversario} foi salvo!`);
}

function SalvarEmail() {
    let nome = document.getElementById('nome').value;
    let cpf = document.getElementById('cpf').value;
    let telefone = document.getElementById('telefone').value;
    let aniversario = document.getElementById('aniversario').value;
    let email = document.getElementById('email').value;

    let TextoFinal = document.getElementById('TextoFinal');

    if (email) {
        window.alert(`O seu email : ${email} foi salvo com sucesso!`);
        TextoFinal.innerHTML = `Olá ${nome}! Seu CPF é: ${cpf}, seu telefone é: ${telefone}, sua data de aniversário é: ${aniversario} e seu email é: ${email}`;
    } else {
        window.alert('O campo de e-mail está vazio!');
    }
}