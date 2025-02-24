let titulo = document.querySelector('h1');
titulo.innerHTML = "Juego de Amigo Secreto";

let mecanica = document.querySelector('h2');
mecanica.innerHTML = "Ingresa los nombres de tus amigos";

let ListadoDeAmigos = [];
let soloLetras = /^[A-Za-zÁÉÍÓÚáéíóúÑñ]+$/;

// funcion donde debe agregar nombres de amigos, mejorando que no pueda ingresar numeros,espacios o caracteres. ya que los tomara como invalidos
function agregarAmigo() {
    let nombreDeAmigo = document.getElementById('amigo').value;
    console.log(nombreDeAmigo);

    if (!soloLetras.test(nombreDeAmigo)) {
        alert('Favor de ingresar un nombre. El nombre no debe tener números o espacios.');
        document.getElementById('amigo').focus();
    } else {
        ListadoDeAmigos.push(nombreDeAmigo);
        document.getElementById('amigo').value = "";
        document.getElementById('amigo').focus();

        let li = document.createElement('li');
        li.textContent = nombreDeAmigo;
        document.getElementById('listaAmigos').appendChild(li);
    }
}

 // funcion para sorteo de amigos(nombres) y advertir que al menos sea una persona la que debe estar en lista.
function sortearAmigo() {
    if (ListadoDeAmigos.length === 0) {
        alert('Ingrese por lo menos un nombre para el sorteo');
        return;
    }

    const aleatorio = Math.floor(Math.random() * ListadoDeAmigos.length);
    let ganador = document.getElementById('resultado');
    ganador.innerHTML = `El amigo secreto es ${ListadoDeAmigos[aleatorio]}`;

    // Llamar a la animación del sorteo.
    ejecutarCelebracion();

    setTimeout(limpiarCaja, 9000);
}

// Función para limpiar caja
function limpiarCaja() {
    document.getElementById('resultado').innerHTML = "";
    ListadoDeAmigos = [];
    document.getElementById('listaAmigos').innerHTML = "";
    document.getElementById('amigo').value = "";
    document.getElementById('amigo').focus();
}


// Función de celebración (animación de confeti, copos y burbujas)
function ejecutarCelebracion() {
    const tipos = ['confeti', 'copos', 'burbujas'];
    for (let i = 200; i > 0; i--) {
        const tipoAleatorio = tipos[Math.floor(Math.random() * tipos.length)];
        crearElementoAnimado(tipoAleatorio);
    }
}


// Funcion Aleatoria para poder mostrar en pantalla animaciones al ganador

function ejecutarCelebracion() {
    const tipos = ['confeti', 'copos', 'burbujas', 'fuegosArtificiales'];

    for (let i = 150; i > 0; i--) {  
        tipos.forEach(tipo => {
            crearElementoAnimado(tipo);
        });
    }
}

function ejecutarCelebracion() {
    const tipos = ['confeti', 'copos', 'burbujas'];

    for (let i = 150; i > 0; i--) {  
        tipos.forEach(tipo => {
            crearElementoAnimado(tipo);
        });
    }
}

function crearElementoAnimado(tipo) {
    const elemento = document.createElement('div');
    elemento.className = tipo;
    elemento.style.left = Math.random() * 100 + 'vw';
    elemento.style.width = Math.random() * 10 + 5 + 'px'; 
    elemento.style.height = elemento.style.width;
    
    if (tipo === 'confeti') {
        elemento.style.backgroundColor = obtenerColorAleatorio();
        elemento.style.animationDuration = (Math.random() * 2 + 3) + 's';
    } else if (tipo === 'copos') {
        elemento.style.backgroundColor = '#fff';
        elemento.style.opacity = Math.random();
        elemento.style.animationDuration = (Math.random() * 3 + 4) + 's';
    } else if (tipo === 'burbujas') {
        elemento.style.backgroundColor = 'rgba(173, 216, 230, 0.6)';
        elemento.style.borderRadius = '50%';
        elemento.style.animationDuration = (Math.random() * 3 + 4) + 's';
    }
    
    elemento.style.animationDelay = Math.random() + 's';
    document.body.appendChild(elemento);
    
    setTimeout(() => {
        elemento.remove();
    }, 7000);
}

function obtenerColorAleatorio() {
    const colores = ['#ff69b4', '#ff4500', '#1e90ff', '#32cd32', '#ffff00', '#ff0000', '#ffcc00'];
    return colores[Math.floor(Math.random() * colores.length)];
}