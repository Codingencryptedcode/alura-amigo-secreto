let arrayAmigos = [];
let amigoGanador = null;

function agregarAmigo() {
    let NombreAmigo = document.getElementById('amigo').value;
    if (!NombreAmigo) {
        alert("Por favor ingrese un nombre válido");
        return;
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

detectarEnter();