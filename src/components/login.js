import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../components/styles/style.css';
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';
import { Link } from 'react-router-dom';

UIkit.use(Icons);

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        navigate('/inicio'); // Redirigir al componente 'inicio' en caso de éxito
      } else {
        const errorData = await response.json();
        setError(errorData.message || 'Error en el inicio de sesión');
      }
    } catch (error) {
      setError('Error en el servidor');
    }
  };

  return (
    <div>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Iniciar Sesión</title>
      {/* Bootstrap CSS */}
      <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet" />
      <link rel="stylesheet" href="//fonts.googleapis.com/css?family=Roboto:400,500" />
      <link rel="stylesheet" href="styles/style.css" />
      <header>
        <div className="uk-navbar-container tm-navbar-container" uk-sticky="cls-active: tm-navbar-container-fixed">
          <div className="uk-container" uk-navbar>
            <div className="uk-navbar-left">
              <button className="uk-navbar-toggle uk-hidden@m" uk-toggle="target: #nav-offcanvas" uk-navbar-toggle-icon />
              <a className="uk-navbar-item uk-logo" href="/">
                <img src="images/logo_elenemigos.png" width={290} height={32} alt="Logo" />
              </a>
            </div>
            <div className="uk-navbar-right">
              <a className="uk-navbar-item uk-link-muted tm-navbar-button" uk-icon="user" />
              <div className="uk-padding-small uk-margin-remove" uk-dropdown="pos: bottom-right; offset: -10; delay-hide: 200;" style={{ minWidth: 150 }}>
                <ul className="uk-nav uk-dropdown-nav">
                  <li><Link to="/login">Iniciar Sesión</Link></li>
                  <li className="uk-nav-divider" />
                  <li><Link to="/register">Registrarse</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="bg-white p-4 rounded shadow-sm" style={{ maxWidth: 360, width: '100%' }}>
          <h2 className="text-center mb-4">Iniciar Sesión</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Correo Electrónico</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Introduce tu correo electrónico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Contraseña</label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Introduce tu contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {error && <p style={{ color: 'red' }}>{error}</p>} {/* Mostrar mensaje de error */}
            <button type="submit" className="btn btn-primary btn-block">Iniciar Sesión</button>
          </form>
        </div>
      </div>
      <footer>
        <section className="uk-section uk-section-secondary uk-section-small uk-light">
          <div className="uk-container">
            <div className="uk-grid uk-flex-middle" uk-grid>
              <div className="uk-width-1-2@m">
                <a className="uk-logo" href="/">
                  <img src="images/logo_elenemigos.png" width={290} height={32} alt="Logo" />
                </a>
                <p className="uk-text-small">
                  Somos una página que vende licencias de videojuegos, nuestras licencias son totalmente originales y al mejor precio.
                </p>
              </div>
              <div className="uk-width-1-2@m uk-text-right">
                <form className="uk-form-stacked">
                  <label>
                    <div className="uk-form-label uk-text-muted">Suscríbete para recibir actualizaciones</div>
                    <div className="uk-inline uk-width-1-1">
                      <a className="uk-form-icon uk-form-icon-flip" href="#" uk-icon="mail" />
                      <input className="uk-input" type="email" placeholder="Su correo" required />
                    </div>
                  </label>
                </form>
                <div className="uk-margin uk-text-small uk-text-muted">Elenemigos Games © {new Date().getFullYear()}</div>
              </div>
            </div>
          </div>
        </section>
      </footer>
    </div>
  );
}

export default Login;
