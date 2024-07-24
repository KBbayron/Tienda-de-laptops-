//crear un instancia a hicia una clase carrito de carrrito.js
const carro = new Carrito();
const carrito = document.getElementById('carrito');
const productos = document.getElementById('lista-productos');
const listaProductos = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.getElementById('vaciar-carrito');
const procesarpedidoBtn = document.getElementById('procesar-pedido')
cargarEventos();
//funcion de autoejecucion
//guarda la info de quien hace el evento
//e - diminutivo de event
function cargarEventos() {
    //ejecuta ese metodo que esta en otro archivo
    productos.addEventListener('click', (e) => { carro.comprarProducto(e) });
    carrito.addEventListener('click', (e) => { carro.eliminarProducto(e) });
    vaciarCarritoBtn.addEventListener('click', (e) => { carro.vaciarCarrito(e) });
    document.addEventListener('DOMContentLoaded', carro.leerlocalStorage());
    procesarpedidoBtn.addEventListener('click', (e) => { carro.procesarPedido(e) });
}


