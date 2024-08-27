import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../components/styles/style.css';
import { Link } from 'react-router-dom';
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';

UIkit.use(Icons);

function Register() {
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
      const response = await fetch('http://localhost:3000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Error en el registro');
      }

      const data = await response.json();
      if (data.message === 'Usuario registrado exitosamente') {
        navigate('/login'); // Redirige al usuario a la página de inicio de sesión
      } else {
        setError(data.message);
      }
    } catch (err) {
      console.error('Error al enviar la solicitud:', err);
      setError('Hubo un problema con el registro');
    }
  };

  return (
    <div>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Formulario de Registro</title>
      {/* Bootstrap CSS */}
      <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet" />
      <link rel="stylesheet" href="//fonts.googleapis.com/css?family=Roboto:400,500" />
      <link rel="stylesheet" href="styles/style.css" />
      <div className="uk-offcanvas-content">
        <header>
          <div className="uk-navbar-container tm-navbar-container" uk-sticky="cls-active: tm-navbar-container-fixed">
            <div className="uk-container" uk-navbar>
              <div className="uk-navbar-left">
                <button className="uk-navbar-toggle uk-hidden@m" uk-toggle="target: #nav-offcanvas" uk-navbar-toggle-icon />
                <a className="uk-navbar-item uk-logo" href="/"><img src="images/logo_elenemigos.png" width={290} height={32} alt="Logo" /></a>
              </div>
              <div className="uk-navbar-right">
                <a className="uk-navbar-toggle tm-navbar-button" href="#" uk-search-icon />
                <div className="uk-navbar-dropdown uk-padding-small uk-margin-remove" uk-drop="mode: click;cls-drop: uk-navbar-dropdown;boundary: .tm-navbar-container;boundary-align: true;pos: bottom-justify;flip: x">
                  <div className="uk-container">
                    <div className="uk-grid-small uk-flex-middle" uk-grid>
                      <div className="uk-width-expand">
                        <form className="uk-search uk-search-navbar uk-width-1-1">
                          <input className="uk-search-input" type="search" placeholder="Search¦" autoFocus />
                        </form>
                      </div>
                      <div className="uk-width-auto">
                        <a className="uk-navbar-dropdown-close" href="#" uk-close />
                      </div>
                    </div>
                  </div>
                </div>
                <a className="uk-navbar-item uk-link-muted tm-navbar-button" href="ordenes.html" uk-icon="user" />
                <div className="uk-padding-small uk-margin-remove" uk-dropdown="pos: bottom-right; offset: -10; delay-hide: 200;" style={{ minWidth: 150 }}>
                  <ul className="uk-nav uk-dropdown-nav">
                    <li><Link to="/login">Iniciar Sesión</Link></li>
                    <li className="uk-nav-divider" />
                    <li><a href="registro.html">Registrarse</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </header>
        <div className="d-flex justify-content-center align-items-center vh-100">
          <div className="bg-white p-4 rounded shadow-sm" style={{ maxWidth: 400, width: '100%' }}>
            <h2 className="text-center mb-4">Registro</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Nombre Completo</label>
                <input type="text" className="form-control" id="name" placeholder="Introduce tu nombre completo" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Correo Electrónico</label>
                <input type="email" className="form-control" id="email" placeholder="Introduce tu correo electrónico" required />
              </div>
              <div className="form-group">
                <label htmlFor="password">Contraseña</label>
                <input type="password" className="form-control" id="password" placeholder="Introduce tu contraseña" required />
              </div>
              <button type="submit" className="btn btn-primary btn-block">Registrar</button>
              {error && <div className="alert alert-danger mt-3">{error}</div>}
            </form>
          </div>
        </div>
        <footer>
          <section className="uk-section uk-section-secondary uk-section-small uk-light">
            <div className="uk-container">
              <div className="uk-grid uk-flex-middle" uk-grid>
                {/* Columna izquierda */}
                <div className="uk-width-1-2@m">
                  <a className="uk-logo" href="/">
                    <img src="images/logo_elenemigos.png" width={290} height={32} alt="Logo" />
                  </a>
                  <p className="uk-text-small">
                    Somos una página que vende licencias de videojuegos, nuestras licencias son totalmente originales y al mejor precio.
                  </p>
                </div>
                {/* Columna derecha */}
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
    </div>
  );
}

export default Register;
