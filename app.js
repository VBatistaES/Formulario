function SalvarTudo() {//salva todos os dados fornecidos e faz a conferencia.
    let nome = document.getElementById('nome').value;
    let cpf = document.getElementById('cpf').value;
    let cpfSeparado = cpf.length;//separa o cpf dígito por dígito.
    let telefone = document.getElementById('telefone').value;
    let aniversario = document.getElementById('aniversario').value;
    let email = document.getElementById('email').value;
    let TextoFinal = document.getElementById('TextoFinal');
    if (nome === '') {
        window.alert('Digite um nome');
    }
    else if (/^[0-9]+$/.test(nome)) { //verifica se no nome não há números.
        window.alert(`O nome ${nome} Não e um nome! Por favor digitar um nome.`)
    }
    else if (cpfSeparado != 11) { //verifica se o cpf separado e diferente de 11 dígitos
        window.alert(`O CPF ${cpf} esta incorreto!`)
        window.alert('O número valido para CPF deve conter 11 Dígitos.')
    }
    else if (/^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/.test(cpf)) {//verifca se no cpf não há nenhuma letra.
        window.alert('O CPF não pode conter letras!')
    }
    else if (telefone === '') {
        window.alert('O Campo "Telefone" esta vazio.')
    }
    else if (aniversario === '') {
        window.alert('O campo "Aniversário" esta vazio.')
    }
    else if (email === '') {
        window.alert('O campo de e-mail está vazio!');
    }
    else {
        TextoFinal.innerHTML = `Olá ${nome}! Seu CPF é: ${cpf}, seu telefone é: ${telefone}, sua data de aniversário é: ${aniversario} e seu email é: ${email}`;
    }
}

function Limpar() {//limpa os dados digitados.
    let nome = document.getElementById('nome');
    let cpf = document.getElementById('cpf');
    let telefone = document.getElementById('telefone');
    let aniversario = document.getElementById('aniversario');
    let email = document.getElementById('email');
    let TextoFinal = document.getElementById('TextoFinal');

    nome.value = "";//atualiza os valores que estão preenchidos com vazio.
    cpf.value = "";
    telefone.value = "";
    aniversario.value = "";
    email.value = "";
    TextoFinal.innerText = "";
}