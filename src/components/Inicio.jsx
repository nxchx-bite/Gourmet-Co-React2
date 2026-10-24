import './Inicio.css';
import Catalogo from './Catalogo'; import Blog from './Blog'; import Contacto from './Contacto';
export default function Inicio({ productos, onAgregar }) {
  return <><header id="inicio" className="hero d-flex align-items-center"><div className="container text-center text-white"><h1 className="display-3 fw-bold">Gourmet & Co.</h1><p className="lead">Sabores que cuentan historias</p><p>Productos artesanales seleccionados para disfrutar y regalar</p><a href="#productos" className="btn btn-light btn-lg mt-2">Ver productos</a></div></header><main>
    <Catalogo productos={productos} onAgregar={onAgregar}/><section className="promo py-5 text-center"><div className="container"><h2>Canastas Gourmet</h2><p className="mb-0">Una alternativa especial para regalos y ocasiones importantes.</p></div></section>
    <section id="nosotros" className="py-5"><div className="container"><div className="row align-items-center g-4"><div className="col-md-6"><h2>Pasión por lo artesanal</h2><p>Gourmet & Co. reúne productos de pequeños productores, seleccionados por su calidad, sabor y dedicación.</p><p>Nuestra propuesta busca acercar experiencias gourmet a quienes disfrutan descubrir nuevos sabores o encontrar un regalo especial.</p></div><div className="col-md-6"><div className="placeholder-box px-4 text-center">Productos artesanales seleccionados para ti</div></div></div></div></section><Blog/><Contacto/>
  </main></>;
}
