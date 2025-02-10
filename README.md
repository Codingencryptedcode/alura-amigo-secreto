<h1> Alura Challenge Amigo Secreto </h1> 

Este proyecto es una implementación de conceptos base de JavaScript y HTML en el juego del "Amigo Secreto" en donde los usuarios agregar nombres de amigos a una lista y luego sortear aleatoriamente un "amigo secreto" de entre los nombres ingresados.

<h2> Estado del proyecto: Concluido. </h2> 

## Funcionalidades a Implementadas:

- **Agregar Amigos**: Los usuarios pueden ingresar nombres de amigos en un campo de texto y agregarlos a un array.
- **Crear Lista de Amigos**: Cada vez que se agregue un amigo este ser adjuntado en una lista en la parte inferior.
- **Sortear Amigo Secreto**: Una vez que se han agregado los nombres, los usuarios pueden sortear aleatoriamente un amigo secreto.
- **Reiniciar Juego**: Si ya hay un amigo secreto sorteado y se intenta agregar un nuevo nombre, el juego se reinicia automáticamente.

## Estructura del Código:

El código principal del proyecto se encuentra en el archivo `app.js` y se organiza de la siguiente manera:

- **Variables Globales**: `arrayAmigos` para almacenar los nombres de los amigos y `amigoGanador` para almacenar el nombre del amigo secreto sorteado.
- **Funciones**:
  - `agregarAmigo()`: Agrega un nuevo nombre a la lista de amigos y reinicia el juego si ya hay un amigo secreto sorteado.
  - `crearListaAmigos(NombreAmigo)`: Actualiza la lista de amigos en el DOM.
  - `detectarEnter()`: Permite agregar un amigo presionando la tecla "Enter".
  - `sortearAmigo()`: Sortea aleatoriamente un amigo secreto de la lista de amigos.
  - `reiniciarJuego()`: Reinicia el estado del juego, limpiando la lista de amigos y el resultado del sorteo.

## Cómo Ejecutar el Proyecto:

1. Clona el repositorio en tu máquina local.
2. Abre el archivo `index.html` en tu navegador web.
3. Ingresa nombres de amigos en el campo de texto y presiona "Enter" o haz clic en el botón para agregar amigos.
4. Haz clic en el botón de sorteo para seleccionar un amigo secreto.