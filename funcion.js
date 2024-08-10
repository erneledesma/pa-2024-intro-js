// function declaration

function saludar(nombre) {
    console.log('Bienvenido ' + nombre);
}

saludar('Juan');

//function expression

const cliente = function(nombreCliente) {
    console.log('Mostrando datos del cliente: ' + nombreCliente);
}

cliente('Juan');

function actividad( nombre, actividad) {
    console.log(`La persona ${nombre}, esta realizando la actividad ${actividad}`);
}

actividad('Juan', 'Aprendiendo JavaScript');