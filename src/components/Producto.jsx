import './Producto.css';
import { formatoPrecio } from '../utils/tienda';
export default function Producto({ producto, onAgregar }) {
  return <div className="col-sm-6 col-lg-4"><article className="card producto-card h-100 shadow-sm">
    <img className="card-img-top producto-img" src={producto.imagen} alt={producto.nombre}/>
    <div className="card-body d-flex flex-column"><span className="text-muted small">{producto.categoria}</span><h3 className="h5 mt-1">{producto.nombre}</h3>
      <p className={producto.precio === 0 ? 'precio-free' : 'fw-bold'}>{formatoPrecio(producto.precio)}</p>
      <button type="button" className="btn btn-dark mt-auto" disabled={producto.stock <= 0} onClick={() => onAgregar(producto)}>{producto.stock <= 0 ? 'Sin stock' : 'Agregar al carrito'}</button>
    </div></article></div>;
}
