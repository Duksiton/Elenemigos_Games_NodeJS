import React from 'react';

import '../components/styles/style.css';
import { Link } from 'react-router-dom';


import UIkit from 'uikit';

import Icons from 'uikit/dist/js/uikit-icons';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



UIkit.use(Icons);


function Activision() {

  const manejarClick = () => {
    toast('Primero inicia sesión o regístrate para comprar!', {
      type: 'warning', // Especifica el tipo de notificación
      autoClose: 2000, // Tiempo en milisegundos para cerrar automáticamente
      hideProgressBar: false, // Muestra o oculta la barra de progreso
      closeOnClick: true, // Permite cerrar la notificación al hacer clic
      pauseOnHover: true, // Pausa el temporizador cuando el cursor está sobre la notificación
    });
  };


  return (

<div>

  <meta charSet="UTF-8" />

  <meta httpEquiv="x-ua-compatible" content="ie=edge" />

  <meta name="viewport" content="width=device-width, initial-scale=1" />

  <title>Inicio</title>

  <link rel="stylesheet" href="//fonts.googleapis.com/css?family=Roboto:400,500" />

  <link rel="stylesheet" href="../components/styles/style.css" />

 



  <div className="uk-offcanvas-content">

    <header>

      <div className="uk-navbar-container tm-navbar-container" uk-sticky="cls-active: tm-navbar-container-fixed">

        <div className="uk-container" uk-navbar>

          <div className="uk-navbar-left"><button className="uk-navbar-toggle uk-hidden@m" uk-toggle="target: #nav-offcanvas" uk-navbar-toggle-icon /><a className="uk-navbar-item uk-logo" href="/"><img src="images/logo_elenemigos.png" width={290} height={32} alt="Logo" /></a>

          </div>

          <div className="uk-navbar-right">

            <div className="uk-navbar-dropdown uk-padding-small uk-margin-remove" uk-drop="mode: click;cls-drop: uk-navbar-dropdown;boundary: .tm-navbar-container;boundary-align: true;pos: bottom-justify;flip: x">

              <div className="uk-container">

                <div className="uk-grid-small uk-flex-middle" uk-grid>

                  <div className="uk-width-expand">

                    

                  </div>

                  <div className="uk-width-auto"><a className="uk-navbar-dropdown-close" href="#" uk-close /></div>

                </div>

              </div>

            </div><a className="uk-navbar-item uk-link-muted tm-navbar-button" href="ordenes.html" uk-icon="user" />

            <div className="uk-padding-small uk-margin-remove" uk-dropdown="pos: bottom-right; offset: -10; delay-hide: 200;" style={{minWidth: 150}}>

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

<main>
  <section className="uk-section uk-section-small">
    <div className="uk-container">
      <div className="uk-grid-medium uk-child-width-1-1" uk-grid>
        <div className="uk-text-center">
          <h1 className="uk-margin-small-top uk-margin-remove-bottom">
            Activision
          </h1>
          <div className="uk-text-meta uk-margin-xsmall-top" />
        </div>
        <div>
          <div className="uk-grid-medium" uk-grid>
            <aside className="uk-width-1-4 tm-aside-column tm-filters" id="filters" uk-offcanvas="overlay: true; container: false;">
              <div className="uk-offcanvas-bar uk-padding-remove">
                <div className="uk-card uk-card-default uk-card-small uk-flex uk-flex-column uk-height-1-1">
                  <header className="uk-card-header uk-flex uk-flex-middle">
                    <div className="uk-grid-small uk-flex-1" uk-grid>
                      <div className="uk-width-expand">
                        <h3>Filters</h3>
                      </div>
                      <button className="uk-offcanvas-close" type="button" uk-close />
                    </div>
                  </header>
                </div></div></aside>
            <div>
            <div className="uk-grid-cont uk-child-width-1-2 uk-child-width-1-3@s uk-child-width-1-6@m" uk-grid>
                <article className="tm-product-card">
                  <div className="tm-product-card-media">
                    <div className="tm-ratio tm-ratio-4-3">
                      <a className="tm-media-box" href>
                        <div className="tm-product-card-labels">
                          <span className="uk-label uk-label-success">Nuevo</span>
                        </div>
                        <figure className="tm-media-box-wrap">
                          <img src="images/juegos/call_of_duty_6.jpg" alt="Call of Duty: Black Ops 6" />
                        </figure>
                      </a>
                    </div>
                  </div>
                  <div className="tm-product-card-body">
                    <div className="tm-product-card-info">
                      <div className="uk-text-meta uk-margin-xsmall-bottom">Activision</div>
                      <h1 className="uk-text-meta uk-margin-xsmall-bottom">Licencias disponibles: 60</h1>
                      <h1 className="uk-text-meta uk-margin-xsmall-bottom">Licencias vendidas: (numero)</h1>
                      <h3 className="tm-product-card-title">
                        <a className="uk-link-heading" href>Call of Duty: Black Ops 6</a>
                        
                        <h3 className="tm-product-card-title"><a className="precio" href>Peso: 180GB</a></h3>
                      </h3>
                    </div>
                    <div className="tm-product-card-shop">
                      <div className="tm-product-card-prices">
                        <div className="tm-product-card-price">$269.999</div>
                      </div>
                      <div className="tm-product-card-add">
                      
                      <button className="uk-button uk-button-primary tm-product-card-add-button tm-shine js-add-to-cart" onClick={manejarClick}>
                          <span className="tm-product-card-add-button-icon" uk-icon="cart" />
                          <span className="tm-product-card-add-button-text">Agregar al carrito</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </article>
                <article className="tm-product-card">
                  <div className="tm-product-card-media">
                    <div className="tm-ratio tm-ratio-4-3">
                      <a className="tm-media-box" href>
                        <div className="tm-product-card-labels">
                          <span className="uk-label uk-label-warning">Más vendidos</span>
                        </div>
                        <figure className="tm-media-box-wrap">
                          <img src="images/juegos/cod_mw.jpeg" alt="Call of Duty: Modern Warfare" />
                        </figure>
                      </a>
                    </div>
                  </div>
                  <div className="tm-product-card-body">
                    <div className="tm-product-card-info">
                    <h1 className="uk-text-meta uk-margin-xsmall-bottom">Licencias disponibles: 60</h1>
                    <h1 className="uk-text-meta uk-margin-xsmall-bottom">Licencias vendidas: (numero)</h1>
                      <div className="uk-text-meta uk-margin-xsmall-bottom">Activision</div>
                      <h3 className="tm-product-card-title">
                        <a className="uk-link-heading" href>Call of Duty: Modern Warfare</a>
                        <br />
                        <h3 className="tm-product-card-title"><a className="precio" href>Peso: 234GB</a></h3>
                      </h3>
                    </div>
                    <div className="tm-product-card-shop">
                      <div className="tm-product-card-prices">
                        <del className="uk-text-meta">$160.000</del>
                        <div className="tm-product-card-price">$95.000</div>
                      </div>
                      <div className="tm-product-card-add">
                       
                      <button className="uk-button uk-button-primary tm-product-card-add-button tm-shine js-add-to-cart" onClick={manejarClick}>
                          <span className="tm-product-card-add-button-icon" uk-icon="cart" />
                          <span className="tm-product-card-add-button-text">Agregar al carrito</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </article>
                <article className="tm-product-card">
                  <div className="tm-product-card-media">
                    <div className="tm-ratio tm-ratio-4-3">
                      <a className="tm-media-box" href>
                        <div className="tm-product-card-labels">
                          <span className="uk-label uk-label-warning">Más vendidos</span>
                        </div>
                        <figure className="tm-media-box-wrap">
                          <img src="images/juegos/crash_ba.avif" alt="Crash Bandicoot N. Sane Trilogy" />
                        </figure>
                      </a>
                    </div>
                  </div>
                  <div className="tm-product-card-body">
                    <div className="tm-product-card-info">
                    <h1 className="uk-text-meta uk-margin-xsmall-bottom">Licencias disponibles: 60</h1>
                    <h1 className="uk-text-meta uk-margin-xsmall-bottom">Licencias vendidas: (numero)</h1>
                      <div className="uk-text-meta uk-margin-xsmall-bottom">Activision</div>
                      <h3 className="tm-product-card-title">
                        <a className="uk-link-heading" href>Crash Bandicoot N. Sane Trilogy</a>
                        <br />
                        <h3 className="tm-product-card-title"><a className="precio" href>Peso: 54GB</a></h3>
                      </h3>
                    </div>
                    <div className="tm-product-card-shop">
                      <div className="tm-product-card-prices">
                        <del className="uk-text-meta">$110.000</del>
                        <div className="tm-product-card-price">$70.600</div>
                      </div>
                      <div className="tm-product-card-add">
                      
                      <button className="uk-button uk-button-primary tm-product-card-add-button tm-shine js-add-to-cart" onClick={manejarClick}>
                          <span className="tm-product-card-add-button-icon" uk-icon="cart" />
                          <span className="tm-product-card-add-button-text">Agregar al carrito</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </article>
                <article className="tm-product-card">
                  <div className="tm-product-card-media">
                    <div className="tm-ratio tm-ratio-4-3">
                      <a className="tm-media-box" href>
                        <div className="tm-product-card-labels">
                          <span className="uk-label uk-label-warning">Más vendidos</span>
                        </div>
                        <figure className="tm-media-box-wrap">
                          <img src="images/juegos/spyro.avif" alt="Spyro Reignited Trilogy" />
                        </figure>
                      </a>
                    </div>
                  </div>
                  <div className="tm-product-card-body">
                    <div className="tm-product-card-info">
                    <h1 className="uk-text-meta uk-margin-xsmall-bottom">Licencias disponibles: 60</h1>
                    <h1 className="uk-text-meta uk-margin-xsmall-bottom">Licencias vendidas: (numero)</h1>
                      <div className="uk-text-meta uk-margin-xsmall-bottom">Activision</div>
                      <h3 className="tm-product-card-title">
                        <a className="uk-link-heading" href>Spyro Reignited Trilogy</a>
                        <br />
                        <h3 className="tm-product-card-title"><a className="precio" href>Peso: 44GB</a></h3>
                      </h3>
                    </div>
                    <div className="tm-product-card-shop">
                      <div className="tm-product-card-prices">
                        <del className="uk-text-meta">$45.000</del>
                        <div className="tm-product-card-price">$25.000</div>
                      </div>
                      <div className="tm-product-card-add">
                       
                      <button className="uk-button uk-button-primary tm-product-card-add-button tm-shine js-add-to-cart" onClick={manejarClick}>
                          <span className="tm-product-card-add-button-icon" uk-icon="cart" />
                          <span className="tm-product-card-add-button-text">Agregar al carrito</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </article>
                <article className="tm-product-card">
                  <div className="tm-product-card-media">
                    <div className="tm-ratio tm-ratio-4-3">
                      <a className="tm-media-box" href>
                        <div className="tm-product-card-labels">
                          <span className="uk-label uk-label-warning">Más vendidos</span>
                        </div>
                        <figure className="tm-media-box-wrap">
                          <img src="images/juegos/sekiro.jpg" alt="Sekiro: Shadows Die Twice" />
                        </figure>
                      </a>
                    </div>
                  </div>
                  <div className="tm-product-card-body">
                    <div className="tm-product-card-info">
                    <h1 className="uk-text-meta uk-margin-xsmall-bottom">Licencias disponibles: 60</h1>
                    <h1 className="uk-text-meta uk-margin-xsmall-bottom">Licencias vendidas: (numero)</h1>
                      <div className="uk-text-meta uk-margin-xsmall-bottom">Activision</div>
                      <h3 className="tm-product-card-title">
                        <a className="uk-link-heading" href>Sekiro: Shadows Die Twice</a>
                        <br />
                        <h3 className="tm-product-card-title"><a className="precio" href>Peso: 94GB</a></h3>
                      </h3>
                    </div>
                    <div className="tm-product-card-shop">
                      <div className="tm-product-card-prices">
                        <del className="uk-text-meta">$300.000</del>
                        <div className="tm-product-card-price">$215.000</div>
                      </div>
                      <div className="tm-product-card-add">
                     
                      <button className="uk-button uk-button-primary tm-product-card-add-button tm-shine js-add-to-cart" onClick={manejarClick}>
                          <span className="tm-product-card-add-button-icon" uk-icon="cart" />
                          <span className="tm-product-card-add-button-text">Agregar al carrito</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </article>
                <article className="tm-product-card">
                  <div className="tm-product-card-media">
                    <div className="tm-ratio tm-ratio-4-3">
                      <a className="tm-media-box" href>
                        <div className="tm-product-card-labels">
                          <span className="uk-label uk-label-warning">Más vendidos</span>
                        </div>
                        <figure className="tm-media-box-wrap">
                          <img src="images/juegos/overwatch.png" alt="Overwatch" />
                        </figure>
                      </a>
                    </div>
                  </div>
                  <div className="tm-product-card-body">
                    <div className="tm-product-card-info">
                    <h1 className="uk-text-meta uk-margin-xsmall-bottom">Licencias disponibles: 60</h1>
                    <h1 className="uk-text-meta uk-margin-xsmall-bottom">Licencias vendidas: (numero)</h1>
                      <div className="uk-text-meta uk-margin-xsmall-bottom">Activision</div>
                      <h3 className="tm-product-card-title">
                        <a className="uk-link-heading" href>Overwatch</a>
                        <br />
                        <h3 className="tm-product-card-title"><a className="precio" href>Peso: 50GB</a></h3>
                      </h3>
                    </div>
                    <div className="tm-product-card-shop">
                      <div className="tm-product-card-prices">
                        <del className="uk-text-meta">$40.000</del>
                        <div className="tm-product-card-price">$13.000</div>
                      </div>
                      <div className="tm-product-card-add">
                       
                      <button className="uk-button uk-button-primary tm-product-card-add-button tm-shine js-add-to-cart" onClick={manejarClick}>
                          <span className="tm-product-card-add-button-icon" uk-icon="cart" />
                          <span className="tm-product-card-add-button-text">Agregar al carrito</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </article>
                <article className="tm-product-card">
                  <div className="tm-product-card-media">
                    <div className="tm-ratio tm-ratio-4-3">
                      <a className="tm-media-box" href>
                        <div className="tm-product-card-labels">
                          <span className="uk-label uk-label-warning">Más vendidos</span>
                        </div>
                        <figure className="tm-media-box-wrap">
                          <img src="images/juegos/tony.avif" alt="Tony Hawk's Pro Skater 1+2" />
                        </figure>
                      </a>
                    </div>
                  </div>
                  <div className="tm-product-card-body">
                    <div className="tm-product-card-info">
                    <h1 className="uk-text-meta uk-margin-xsmall-bottom">Licencias disponibles: 60</h1>
                    <h1 className="uk-text-meta uk-margin-xsmall-bottom">Licencias vendidas: (numero)</h1>
                      <div className="uk-text-meta uk-margin-xsmall-bottom">Activision</div>
                      <h3 className="tm-product-card-title">
                        <a className="uk-link-heading" href>Tony Hawk's Pro Skater 1+2</a>
                        <br />
                        <h3 className="tm-product-card-title"><a className="precio" href>Peso: 25GB</a></h3>
                      </h3>
                    </div>
                    <div className="tm-product-card-shop">
                      <div className="tm-product-card-prices">
                        <del className="uk-text-meta">$350.000</del>
                        <div className="tm-product-card-price">$279.900</div>
                      </div>
                      <div className="tm-product-card-add">
                        
                      <button className="uk-button uk-button-primary tm-product-card-add-button tm-shine js-add-to-cart" onClick={manejarClick}>
                          <span className="tm-product-card-add-button-icon" uk-icon="cart" />
                          <span className="tm-product-card-add-button-text">Agregar al carrito</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </article>
                <article className="tm-product-card">
                  <div className="tm-product-card-media">
                    <div className="tm-ratio tm-ratio-4-3">
                      <a className="tm-media-box" href>
                        <div className="tm-product-card-labels">
                          <span className="uk-label uk-label-warning">Más vendidos</span>
                        </div>
                        <figure className="tm-media-box-wrap">
                          <img src="images/juegos/diablo2.jpg" alt="Diablo II: Resurrected" />
                        </figure>
                      </a>
                    </div>
                  </div>
                  <div className="tm-product-card-body">
                    <div className="tm-product-card-info">
                    <h1 className="uk-text-meta uk-margin-xsmall-bottom">Licencias disponibles: 60</h1>
                    <h1 className="uk-text-meta uk-margin-xsmall-bottom">Licencias vendidas: (numero)</h1>
                      <div className="uk-text-meta uk-margin-xsmall-bottom">Activision</div>
                      <h3 className="tm-product-card-title">
                        <a className="uk-link-heading" href>Diablo II: Resurrected</a>
                        <br />
                        <h3 className="tm-product-card-title"><a className="precio" href>Peso: 14GB</a></h3>
                      </h3>
                    </div>
                    <div className="tm-product-card-shop">
                      <div className="tm-product-card-prices">
                        <del className="uk-text-meta">$180.000</del>
                        <div className="tm-product-card-price">$42.000</div>
                      </div>
                      <div className="tm-product-card-add">
                      
                      <button className="uk-button uk-button-primary tm-product-card-add-button tm-shine js-add-to-cart" onClick={manejarClick}>
                          <span className="tm-product-card-add-button-icon" uk-icon="cart" />
                          <span className="tm-product-card-add-button-text">Agregar al carrito</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            </div>
            <div>
              <ul className="uk-pagination uk-flex-center">
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</main>





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

  <div id="root"></div>

  <script src="uikit/dist/js/uikit.min.js"></script>

  <script src="uikit/dist/js/uikit-icons.min.js"></script>

</div>
  );
}

export default Activision;
