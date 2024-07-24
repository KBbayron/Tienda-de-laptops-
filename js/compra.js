const compra = new Carrito();
//etiqueta con id # que adentro tenga un tbody
const listaCompra = document.querySelector('#lista-compra tbody');
const carrito = document.getElementById('carrito');

cargarEventos();
function cargarEventos() {
    document.addEventListener('DOMContentLoaded', compra.leerLocalStorageCompra());
    carrito.addEventListener('click', (e) => { compra.eliminarProducto(e) });
    compra.calcularTotal();
};