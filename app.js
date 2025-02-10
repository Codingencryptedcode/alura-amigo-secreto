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

    document.querySelector('#amigo').value = '';
}
