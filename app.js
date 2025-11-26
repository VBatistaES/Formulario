function pegar(id) {
    return document.getElementById(id);
}

function SalvarTudo() {
    const nome = pegar('nome').value.trim();
    const cpf = pegar('cpf').value.trim();
    const telefone = pegar('telefone').value.trim();
    const aniversario = pegar('aniversario').value.trim();
    const email = pegar('email').value.trim();
    const TextoFinal = pegar('TextoFinal');

    // ======= VALIDAÇÕES =======

    if (!nome) {
        return alert('Digite um nome.');
    }

    if (/^[0-9]+$/.test(nome)) {
        return alert(`"${nome}" não é um nome válido. Digite apenas letras.`);
    }

    if (cpf.length !== 11) {
        return alert('O CPF deve conter exatamente 11 dígitos numéricos.');
    }

    if (!/^[0-9]+$/.test(cpf)) {
        return alert('O CPF não pode conter letras ou símbolos.');
    }

    if (!telefone) {
        return alert('O campo "Telefone" está vazio.');
    }

    if (!aniversario) {
        return alert('O campo "Aniversário" está vazio.');
    }

    if (!email) {
        return alert('O campo "Email" está vazio.');
    }

    // ======= RESULTADO FINAL =======
    TextoFinal.innerHTML =
        `Olá <strong>${nome}</strong>!<br>
        Seu CPF: <strong>${cpf}</strong><br>
        Telefone: <strong>${telefone}</strong><br>
        Aniversário: <strong>${aniversario}</strong><br>
        Email: <strong>${email}</strong>`;
}

function Limpar() {
    const campos = ['nome', 'cpf', 'telefone', 'aniversario', 'email'];
    campos.forEach(id => pegar(id).value = "");

    pegar('TextoFinal').innerHTML = "";
}
