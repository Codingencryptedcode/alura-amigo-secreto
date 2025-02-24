let arrayAmigos = [];
let amigoGanador = null;

function agregarAmigo() {
    let NombreAmigo = document.getElementById('amigo').value;
    if (!NombreAmigo) {
        alert("Por favor ingrese un nombre válido");
        return;
    }

    if (amigoGanador) {
        reiniciarJuego();
    }

    arrayAmigos.push(NombreAmigo);
    console.log(arrayAmigos);

    crearListaAmigos(NombreAmigo);

    document.querySelector('#amigo').value = '';
}

function crearListaAmigos(NombreAmigo) {
    let listaAmigos = document.getElementById("listaAmigos");
    let nuevoElemento = document.createElement("li");
    nuevoElemento.innerHTML = NombreAmigo;
    listaAmigos.appendChild(nuevoElemento);
}

function detectarEnter() {
    document.getElementById('amigo').addEventListener('keydown', function(e) {
        if (e.key === 'Enter') {
            agregarAmigo();
        }
    });
}

function sortearAmigo() {
    document.querySelector('#listaAmigos').innerHTML = '';
    amigoGanador = arrayAmigos[Math.floor(Math.random() * arrayAmigos.length)];
    document.getElementById("resultado").innerHTML = "El amigo secreto sorteado es: " + amigoGanador;
}

function reiniciarJuego() {
    arrayAmigos = [];
    amigoGanador = null;
    document.getElementById("listaAmigos").innerHTML = '';
    document.getElementById("resultado").innerHTML = '';
}

detectarEnter();