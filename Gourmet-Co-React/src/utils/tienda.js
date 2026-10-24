export const DOMINIOS = ['@duoc.cl', '@profesor.duoc.cl', '@gmail.com'];
export const formatoPrecio = precio => Number(precio) === 0 ? 'FREE' : '$' + Number(precio).toLocaleString('es-CL');
export const correoPermitido = correo => DOMINIOS.some(d => correo.trim().toLowerCase().endsWith(d));
export function validarContacto({ nombre, correo, comentario }) {
  const errores = {};
  if (!nombre.trim()) errores.nombre = 'El nombre es obligatorio.';
  if (correo.trim() && !correoPermitido(correo)) errores.correo = 'El correo debe usar un dominio permitido.';
  if (!comentario.trim()) errores.comentario = 'El comentario es obligatorio.';
  return errores;
}
export function validarProducto(p, productos = [], codigoOriginal = '') {
  if (p.codigo.trim().length < 3) return 'El código debe tener al menos 3 caracteres.';
  if (!p.nombre.trim() || !p.categoria) return 'Complete los campos obligatorios.';
  if (p.precio === '' || p.stock === '' || !Number.isFinite(Number(p.precio)) || Number(p.precio) < 0 || !Number.isInteger(Number(p.stock)) || Number(p.stock) < 0) return 'Revise el precio y el stock.';
  if (productos.some(item => item.codigo === p.codigo.trim() && item.codigo !== codigoOriginal)) return 'El código ya está registrado.';
  return '';
}
export function validarUsuario(u, usuarios = [], runOriginal = '') {
  const run = u.run.trim().toUpperCase();
  if (run.length < 7 || run.length > 9 || /[.\-]/.test(run)) return 'El RUN debe tener entre 7 y 9 caracteres, sin puntos ni guion.';
  if (!correoPermitido(u.correo)) return 'El correo debe usar un dominio permitido.';
  if (!u.nombre.trim() || !u.rol) return 'Complete los campos obligatorios.';
  if (usuarios.some(item => item.run === run && item.run !== runOriginal)) return 'El RUN ya existe.';
  return '';
}
export function agregarItem(carrito, producto) {
  const existe = carrito.some(item => item.id === producto.id);
  return existe ? carrito.map(item => item.id === producto.id ? {...item, cantidad: item.cantidad + 1} : item) : [...carrito, {...producto, cantidad: 1}];
}
export function cambiarCantidad(carrito, id, cambio) {
  return carrito.map(item => item.id === id ? {...item, cantidad: item.cantidad + cambio} : item).filter(item => item.cantidad > 0);
}
export const totalCarrito = carrito => carrito.reduce((total, item) => total + item.precio * item.cantidad, 0);
export const cantidadCarrito = carrito => carrito.reduce((total, item) => total + item.cantidad, 0);
export function stockEditable(hora = new Date().getHours()) { return hora >= 6; }
