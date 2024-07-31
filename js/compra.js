const compra = new Carrito();
//etiqueta con id # que adentro tenga un tbody
const listaCompra = document.querySelector('#lista-compra tbody');
const carrito = document.getElementById('carrito');
const procesarCompraBtn = document.getElementById('procesar-compra')
const cliente = document.getElementById('cliente');
const correo = document.getElementById('correo');

cargarEventos();
function cargarEventos() {
    document.addEventListener('DOMContentLoaded', compra.leerLocalStorageCompra());
    carrito.addEventListener('click', (e) => { compra.eliminarProducto(e) });
    compra.calcularTotal();
    carrito.addEventListener('change', (e) => { compra.obtenerEvento(e) });
    procesarCompraBtn.addEventListener('click', (e) => { procesarCompra })

};
function procesarCompraBtn(e) {
    e.preventDefault();
    if (compra.obtenerProductosLocalStorage().lenght === 0) {
        Swal.fire({
            icon: 'error',
            type: 'info',
            title: 'Oops...',
            text: 'No hay productos, seleccione uno en la tienda',
            timer: 2000,
            showConfirmButton: false
        }).then(function () {
            window.location = 'index.html';
        })
    } else if (cliente.value === '' || correo.value === '') {
        Swal.fire({
            icon: 'error',
            type: 'info',
            title: 'Oops...',
            text: 'No hay productos, seleccione uno en la tienda',
            timer: 2000,
            showConfirmButton: false
        })
    }
}