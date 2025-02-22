let listaDeAmigos = [];

function adicionarAmigo() {
    const inputAmigo = document.getElementById("amigo");
    const nomeAmigo = capitalizeFirstLetter(inputAmigo.value.trim());

    const regex = /^[A-Za-zÀ]/;
    if (!regex.test(nomeAmigo)) {
        inputAmigo.value = "";
        alert("Por favor, insira um nome válido.");
        return;
    }

    if (nomeAmigo === "") {
        alert("Por favor, insira um nome.");
        return;
    }

    if (listaDeAmigos.includes(nomeAmigo)) {
        alert(`O nome '${nomeAmigo}' já está na lista.`);
        inputAmigo.value = "";
        return;
    }

    listaDeAmigos.push(nomeAmigo);
    atualizarListaDeAmigos();
    inputAmigo.value = "";
}

function atualizarListaDeAmigos() {
    const listaDeAmigosElement = document.getElementById("listaAmigos");
    listaDeAmigosElement.innerHTML = "";

    listaDeAmigos.forEach((amigo) => { // Removi o "index" porque não está sendo usado.
        const li = document.createElement("li");
        li.textContent = amigo;
        listaDeAmigosElement.appendChild(li);
    });
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function sortearAmigo() {
    if (listaDeAmigos.length === 0) {
        alert("A lista de amigos está vazia.");
        return;
    }

    const indiceSorteado = Math.floor(Math.random() * listaDeAmigos.length);
    const amigoSorteado = listaDeAmigos[indiceSorteado];
    const resultadoElement = document.getElementById("resultado");
    resultadoElement.innerHTML = `<li>O amigo secreto sorteado é: ${amigoSorteado}</li>`;
}
