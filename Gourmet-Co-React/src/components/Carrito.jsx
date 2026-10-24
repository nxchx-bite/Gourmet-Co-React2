
import './Carrito.css';
import {
  cantidadCarrito,
  totalCarrito,
  formatoPrecio
} from '../utils/tienda';

export default function Carrito({
  visible,
  carrito,
  onCerrar,
  onCambiar,
  onEliminar,
  onVaciar
}) {
  if (!visible) return null;

  return (
    <>
      {/* Fondo oscuro: queda detrás del carrito */}
      <div
        className="modal-backdrop fade show"
        onClick={onCerrar}
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 1040
        }}
      />

      {/* Panel del carrito */}
      <aside
        className="offcanvas offcanvas-end show"
        role="dialog"
        aria-modal="true"
        aria-label="Mi carrito"
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          bottom: 0,
          zIndex: 1050,
          visibility: 'visible',
          transform: 'none',
          pointerEvents: 'auto',
          overflowY: 'auto',
          backgroundColor: '#fff',
          width: 'min(400px, 100%)'
        }}
      >
        <div className="offcanvas-header">
          <h5>
            Mi carrito ({cantidadCarrito(carrito)})
          </h5>

          <button
            type="button"
            aria-label="Cerrar carrito"
            className="btn-close"
            onClick={onCerrar}
          />
        </div>

        <div className="offcanvas-body">
          {carrito.length === 0 ? (
            <p className="text-muted">
              El carrito está vacío.
            </p>
          ) : (
            carrito.map((p) => (
              <div className="carrito-item mb-3" key={p.id}>
                <div className="d-flex justify-content-between align-items-center">
                  <strong>{p.nombre}</strong>

                  <button
                    type="button"
                    className="btn btn-sm btn-outline-danger"
                    aria-label={`Eliminar ${p.nombre}`}
                    onClick={() => onEliminar(p.id)}
                  >
                    X
                  </button>
                </div>

                <div className="d-flex justify-content-between align-items-center mt-2">
                  <span>{formatoPrecio(p.precio)}</span>

                  <div className="d-flex align-items-center">
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-secondary"
                      aria-label={`Disminuir ${p.nombre}`}
                      onClick={() => onCambiar(p.id, -1)}
                    >
                      −
                    </button>

                    <span className="mx-2">
                      {p.cantidad}
                    </span>

                    <button
                      type="button"
                      className="btn btn-sm btn-outline-secondary"
                      aria-label={`Aumentar ${p.nombre}`}
                      onClick={() => onCambiar(p.id, 1)}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}

          <hr />

          <div className="d-flex justify-content-between fw-bold fs-5">
            <span>Total:</span>
            <span>{formatoPrecio(totalCarrito(carrito))}</span>
          </div>

          <button
            type="button"
            className="btn btn-outline-danger w-100 mt-3"
            onClick={onVaciar}
            disabled={carrito.length === 0}
          >
            Vaciar carrito
          </button>
        </div>
      </aside>
    </>
  );
}
