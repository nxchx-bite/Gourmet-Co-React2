import { useState } from 'react';
import { validarContacto } from '../utils/tienda';
const vacio = {nombre:'',correo:'',comentario:''};
export default function Contacto() {
  const [datos,setDatos] = useState(vacio); const [errores,setErrores] = useState({}); const [enviado,setEnviado] = useState(false);
  const enviar = event => { event.preventDefault(); const resultado = validarContacto(datos); setErrores(resultado); setEnviado(Object.keys(resultado).length === 0); if (Object.keys(resultado).length === 0) setDatos(vacio); };
  return <section id="contacto" className="py-5"><div className="container"><div className="row justify-content-center"><div className="col-lg-7"><h2 className="text-center mb-4">Contacto</h2><form noValidate onSubmit={enviar}>
    {['nombre','correo','comentario'].map(k => <div key={k} className="mb-3"><label className="form-label text-capitalize" htmlFor={k}>{k}</label>{k === 'comentario' ? <textarea id={k} rows="5" maxLength="500" className="form-control" value={datos[k]} onChange={e=>setDatos({...datos,[k]:e.target.value})}/> : <input id={k} type={k === 'correo' ? 'email' : 'text'} maxLength="100" className="form-control" value={datos[k]} onChange={e=>setDatos({...datos,[k]:e.target.value})}/>}<div className="text-danger small" role="alert">{errores[k]}</div></div>)}
    {enviado && <p className="alert alert-success" role="status">Mensaje enviado correctamente (demostración local; no se envió a un servidor).</p>}<button className="btn btn-dark w-100" type="submit">Enviar mensaje</button>
    </form></div></div></div></section>;
}
