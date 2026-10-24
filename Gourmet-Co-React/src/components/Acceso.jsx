
import { useState } from 'react';

export default function Acceso({ onIngresar, onVolver }) {
  const [correo, setCorreo] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  function manejarEnvio(e) {
    e.preventDefault();
    setError('');

    if (!correo.trim() || !password) {
      setError('Debes ingresar el correo y la contraseña.');
      return;
    }

    const accesoCorrecto = onIngresar(correo, password);

    if (!accesoCorrecto) {
      setError('Correo electrónico o contraseña incorrectos.');
      setPassword('');
    }
  }

  return (
    <main className="container py-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-7 col-lg-5">
          <div className="card shadow">
            <div className="card-body p-4">
              <h2 className="text-center mb-2">
                Acceso administrador
              </h2>

              <p className="text-muted text-center mb-4">
                Ingresa tus credenciales para continuar.
              </p>

              <form onSubmit={manejarEnvio}>
                <div className="mb-3">
                  <label
                    htmlFor="correoAdmin"
                    className="form-label"
                  >
                    Correo electrónico
                  </label>

                  <input
                    id="correoAdmin"
                    type="email"
                    className="form-control"
                    placeholder="Ingresa tu correo"
                    value={correo}
                    onChange={(e) => {
                      setCorreo(e.target.value);
                      setError('');
                    }}
                    autoComplete="username"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label
                    htmlFor="passwordAdmin"
                    className="form-label"
                  >
                    Contraseña
                  </label>

                  <input
                    id="passwordAdmin"
                    type="password"
                    className="form-control"
                    placeholder="Ingresa tu contraseña"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      setError('');
                    }}
                    autoComplete="current-password"
                    required
                  />
                </div>

                {error && (
                  <div
                    className="alert alert-danger"
                    role="alert"
                    aria-live="polite"
                  >
                    <strong>Error:</strong> {error}
                  </div>
                )}

                <button
                  type="submit"
                  className="btn btn-dark w-100"
                >
                  Iniciar sesión
                </button>

                <button
                  type="button"
                  className="btn btn-outline-secondary w-100 mt-2"
                  onClick={onVolver}
                >
                  Volver a la tienda
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
