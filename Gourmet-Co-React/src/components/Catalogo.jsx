import './Catalogo.css';
import { useState, useEffect } from 'react';
import Producto from './Producto';

export default function Catalogo({ productos, onAgregar }) {
  const [categoria, setCategoria] = useState('Todas');
  const [busqueda, setBusqueda] = useState('');
  const [pagina, setPagina] = useState(1);

  const productosPorPagina = 6;

  const categorias = [
    'Todas',
    ...new Set(productos.map(p => p.categoria))
  ];

  const visibles = productos.filter(
    p =>
      (categoria === 'Todas' || p.categoria === categoria) &&
      p.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  const totalPaginas = Math.ceil(
    visibles.length / productosPorPagina
  );

  const inicio = (pagina - 1) * productosPorPagina;

  const productosPagina = visibles.slice(
    inicio,
    inicio + productosPorPagina
  );

  // Volver a la primera página al cambiar los filtros.
  useEffect(() => {
    setPagina(1);
  }, [categoria, busqueda]);

  // Evitar páginas inválidas si se eliminan productos.
  useEffect(() => {
    if (pagina > Math.max(1, totalPaginas)) {
      setPagina(Math.max(1, totalPaginas));
    }
  }, [pagina, totalPaginas]);

  return (
    <section id="productos" className="py-5">
      <div className="container">
        <div className="text-center mb-4">
          <h2>Nuestros productos</h2>
          <p className="text-muted">
            Una selección de café, chocolates, quesos y vinos.
          </p>
        </div>

        <div className="row g-3 mb-4">
          <div className="col-md-6">
            <label htmlFor="filtroCategoria" className="form-label">
              Categoría
            </label>

            <select
              id="filtroCategoria"
              className="form-select"
              value={categoria}
              onChange={e => setCategoria(e.target.value)}
            >
              {categorias.map(c => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>

          <div className="col-md-6">
            <label htmlFor="buscarProducto" className="form-label">
              Buscar producto
            </label>

            <input
              id="buscarProducto"
              className="form-control"
              placeholder="Buscar por nombre"
              value={busqueda}
              onChange={e => setBusqueda(e.target.value)}
            />
          </div>
        </div>

        {visibles.length > 0 ? (
          <>
            <div className="row g-4">
              {productosPagina.map(p => (
                <Producto
                  key={p.id}
                  producto={p}
                  onAgregar={onAgregar}
                />
              ))}
            </div>

            <div className="d-flex flex-column flex-sm-row justify-content-between align-items-center gap-3 mt-4">
              <p className="mb-0 text-muted">
                Mostrando {inicio + 1}–{Math.min(inicio + productosPorPagina, visibles.length)} de {visibles.length} productos
              </p>

              <div className="d-flex align-items-center gap-2">
                <button
                  type="button"
                  className="btn btn-outline-dark"
                  disabled={pagina === 1}
                  onClick={() => setPagina(p => p - 1)}
                >
                  Anterior
                </button>

                <span className="px-2">
                  Página {pagina} de {totalPaginas}
                </span>

                <button
                  type="button"
                  className="btn btn-outline-dark"
                  disabled={pagina === totalPaginas}
                  onClick={() => setPagina(p => p + 1)}
                >
                  Siguiente
                </button>
              </div>
            </div>
          </>
        ) : (
          <p className="text-center mt-4">
            No se encontraron productos.
          </p>
        )}
      </div>
    </section>
  );
}