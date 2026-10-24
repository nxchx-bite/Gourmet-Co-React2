
import './App.css';
import { useEffect, useState } from 'react';

import iniciales from './data/productos.json';
import usuariosIniciales from './data/usuarios.json';

import Header from './components/Header';
import Inicio from './components/Inicio';
import Carrito from './components/Carrito';
import Acceso from './components/Acceso';
import Admin from './admin/Admin';
import Footer from './components/Footer';

import {
  agregarItem,
  cambiarCantidad,
  cantidadCarrito
} from './utils/tienda';

const ADMIN_CORREO = 'admin@gourmet.cl';
const ADMIN_PASSWORD = 'Admin123!';

function cargar(clave, defecto) {
  try {
    const dato = JSON.parse(localStorage.getItem(clave));
    return Array.isArray(dato) ? dato : defecto;
  } catch {
    return defecto;
  }
}

export default function App() {
  const [pagina, setPagina] = useState('tienda');

  const [productos, setProductos] = useState(() =>
    cargar('gourmetProductosReact', iniciales)
  );

  const [usuarios, setUsuarios] = useState(() =>
    cargar('gourmetUsuariosReact', usuariosIniciales)
  );

  const [carrito, setCarrito] = useState(() =>
    cargar('carritoGourmet', [])
  );

  const [mostrarCarrito, setMostrarCarrito] = useState(false);
  const [mensajeStock, setMensajeStock] = useState('');
  const [sesionAdmin, setSesionAdmin] = useState(false);

  // Guardar productos, usuarios y carrito.
  useEffect(() => {
    localStorage.setItem(
      'gourmetProductosReact',
      JSON.stringify(productos)
    );
  }, [productos]);

  useEffect(() => {
    localStorage.setItem(
      'gourmetUsuariosReact',
      JSON.stringify(usuarios)
    );
  }, [usuarios]);

  useEffect(() => {
    localStorage.setItem(
      'carritoGourmet',
      JSON.stringify(carrito)
    );
  }, [carrito]);

  // Iniciar sesión como administrador.
  function ingresarAdmin(correo, password) {
    if (
      correo.trim().toLowerCase() === ADMIN_CORREO &&
      password === ADMIN_PASSWORD
    ) {
      setSesionAdmin(true);
      setPagina('admin');
      window.scrollTo(0, 0);
      return true;
    }

    return false;
  }

  // Cerrar sesión del administrador.
  function cerrarSesion() {
    setSesionAdmin(false);
    setPagina('tienda');
    window.scrollTo(0, 0);
  }

  // Agregar un producto al carrito validando el stock.
  function manejarAgregar(producto) {
    const productoActual = productos.find(
      (p) => p.id === producto.id
    );

    if (!productoActual) {
      setMensajeStock('No se encontró el producto seleccionado.');
      return;
    }

    const itemCarrito = carrito.find(
      (item) => item.id === productoActual.id
    );

    const cantidadActual = itemCarrito
      ? itemCarrito.cantidad
      : 0;

    if (cantidadActual >= productoActual.stock) {
      setMensajeStock(
        'No hay stock suficiente para agregar más unidades.'
      );
      return;
    }

    setCarrito((actual) =>
      agregarItem(actual, productoActual)
    );

    setMensajeStock('');
  }

  // Cambiar la cantidad de un producto en el carrito.
  function manejarCambioCantidad(id, cambio) {
    const producto = productos.find((p) => p.id === id);

    if (!producto) {
      setMensajeStock('No se encontró el producto seleccionado.');
      return;
    }

    const item = carrito.find((p) => p.id === id);
    const cantidadActual = item ? item.cantidad : 0;
    const nuevaCantidad = cantidadActual + cambio;

    if (nuevaCantidad > producto.stock) {
      setMensajeStock(
        'No puedes agregar más unidades de las disponibles.'
      );
      return;
    }

    setCarrito((actual) =>
      cambiarCantidad(actual, id, cambio)
    );

    setMensajeStock('');
  }

  // Volver a la tienda.
  function volverATienda() {
    setPagina('tienda');
    window.scrollTo(0, 0);
  }

  return (
    <>
      <Header
        cantidad={cantidadCarrito(carrito)}
        pagina={pagina}
        onPagina={setPagina}
        onCarrito={() => setMostrarCarrito(true)}
        sesionAdmin={sesionAdmin}
        onCerrarSesion={cerrarSesion}
      />

      {/* Mensajes de stock */}
      {mensajeStock && (
        <div className="container mt-3">
          <div
            className="alert alert-warning alert-dismissible"
            role="alert"
          >
            {mensajeStock}

            <button
              type="button"
              className="btn-close float-end"
              aria-label="Cerrar aviso"
              onClick={() => setMensajeStock('')}
            />
          </div>
        </div>
      )}

      {/* Contenido principal */}
      {pagina === 'acceso' ? (
        <Acceso
          onIngresar={ingresarAdmin}
          onVolver={volverATienda}
        />
      ) : pagina === 'admin' && sesionAdmin ? (
        <Admin
          productos={productos}
          onProductos={setProductos}
          usuarios={usuarios}
          onUsuarios={setUsuarios}
        />
      ) : (
        <Inicio
          productos={productos}
          onAgregar={manejarAgregar}
        />
      )}

      {/* Pie de página */}
      <Footer
        onAdmin={() => {
          setPagina(sesionAdmin ? 'admin' : 'acceso');
          window.scrollTo(0, 0);
        }}
      />

      {/* Carrito lateral */}
      <Carrito
        visible={mostrarCarrito}
        carrito={carrito}
        onCerrar={() => setMostrarCarrito(false)}
        onCambiar={manejarCambioCantidad}
        onEliminar={(id) => {
          setCarrito((actual) =>
            actual.filter((producto) => producto.id !== id)
          );
          setMensajeStock('');
        }}
        onVaciar={() => {
          setCarrito([]);
          setMensajeStock('');
        }}
      />
    </>
  );
}
