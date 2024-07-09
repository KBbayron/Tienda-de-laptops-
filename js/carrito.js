class Carrito {

    //se define el metodo sobre quien se da clik
    comprarProducto(e) {
        //evitar que la pagina se refesque
        e.preventDefault();
        //si ese evento tiene la clase agregrar-carrtio
        if (e.target.classList.contains('agregar-carrito')) {
            const producto = e.target.parentElement.parentElement;
            console.log(producto);
            this.leerDatosProducto(producto);
        }
    }

    //se extrae informacion
    leerDatosProducto(producto) {
        const infoProducto = {
            imagen: producto.querySelector('img').src,
            titulo: producto.querySelector('h4').textContent,
            precio: producto.querySelector('.precio span').textContent,
            id: producto.querySelector('a').getAttribute('data-id'),
            cantidad: 1
        }
        this.insertarCarrito(infoProducto);
    }

    //se envia informacion al carrito
    insertarCarrito(Producto) {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>
                <img src= "${Producto.imagen}" width="100">
            </td>
            <td>${Producto.titulo}</td>
            <td>${Producto.precio}</td>
            <td><a href="#" class= "borrar-producto fas fa-times-circle text-decoration-none" 
            data-id="${Producto.id}"></a></td>
        `;
        listaProductos.appendChild(row);
        this.guardarProductoLocalStorage(Producto);

    }

    eliminarProducto(e) {
        e.preventDefault();
        let producto, productoID;
        if (e.target.classList.contains('borrar-producto')) {
            e.target.parentElement.parentElement.remove();
            //borra de local storage tambien
            producto = e.target.parentElement.parentElement
            productoID = producto.querySelector('a').getAttribute('data-id');
            this.eliminarProductoLocalStorage(productoID);
        }
    }

    vaciarCarrito(e) {
        e.preventDefault();
        while (listaProductos.firstChild) {
            listaProductos.removeChild(listaProductos.firstChild);
        }
        //misma funcion en menos codigo
        //localStorage.clear();
        return false;
    }

    guardarProductoLocalStorage(producto) {
        let productos;
        productos = this.obtenerProductosLocalStorage();
        productos.push(producto);
        localStorage.setItem('productos', JSON.stringify(productos));
    };

    obtenerProductosLocalStorage() {
        let productosLS;
        if (localStorage.getItem('productos') === null) {
            productosLS = [];
        } else {
            productosLS = JSON.parse(localStorage.getItem('productos'));
        }
        return productosLS;
    }
    eliminarProductoLocalStorage(productoID) {
        let productosLS;
        productosLS = this.obtenerProductosLocalStorage();

        productosLS.forEach(function (producto, index) {
            if (producto.id === productoID) {
                //eliminar elementos dentro de un arreglo
                productosLS.splice(index, 1);
            }
        });
        localStorage.setItem('productos', JSON.stringify(productosLS));
    }
}