
export default function Header({
  cantidad,
  pagina,
  onPagina,
  onCarrito,
  sesionAdmin,
  onCerrarSesion
}) {
  const enlaces = ['inicio', 'productos', 'nosotros', 'blog', 'contacto'];

  function manejarAdmin() {
    if (sesionAdmin) {
      onPagina('admin');
    } else {
      onPagina('acceso');
    }

    window.scrollTo(0, 0);
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      <div className="container">
        <a
          className="navbar-brand fw-bold"
          href="#inicio"
          onClick={(e) => {
            e.preventDefault();
            onPagina('tienda');
            window.scrollTo(0, 0);
          }}
        >
          Gourmet & Co.
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#menu"
          aria-controls="menu"
          aria-expanded="false"
          aria-label="Abrir menú"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div id="menu" className="collapse navbar-collapse">
          <div className="navbar-nav ms-auto align-items-lg-center gap-lg-2">
            {enlaces.map((e) => (
              <a
                key={e}
                className="nav-link text-capitalize"
                href={'#' + e}
                onClick={() => {
                  onPagina('tienda');
                  window.scrollTo(0, 0);
                }}
              >
                {e}
              </a>
            ))}

            <button
              className="btn btn-outline-light"
              onClick={onCarrito}
              type="button"
            >
              Carrito ({cantidad})
            </button>

            <button
              className={
                'btn ' +
                (pagina === 'admin' || pagina === 'acceso'
                  ? 'btn-light'
                  : 'btn-outline-light')
              }
              onClick={manejarAdmin}
              type="button"
            >
              {sesionAdmin ? 'Panel administrador' : 'Admin'}
            </button>

            {sesionAdmin && (
              <button
                className="btn btn-outline-warning"
                onClick={onCerrarSesion}
                type="button"
              >
                Cerrar sesión
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
