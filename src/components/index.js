import React from 'react';

import '../components/styles/style.css';
import { Link } from 'react-router-dom';


import UIkit from 'uikit';

import Icons from 'uikit/dist/js/uikit-icons';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';


UIkit.use(Icons);


function Index() {
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

                </div><a className="uk-navbar-item uk-link-muted tm-navbar-button" uk-icon="user" />

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

        <main>



          <section className="uk-section uk-section-default uk-section-small">

            <div className="uk-container">

              <div className="uk-grid-small uk-child-width-1-2 uk-child-width-1-3@s uk-child-width-1-6@m" uk-grid>



                <div><a className="uk-link-muted uk-text-center uk-display-block uk-padding-small uk-box-shadow-hover-large" href="/invrock">

                  <div className="tm-ratio tm-ratio-4-3">

                    <div className="tm-media-box">

                      <figure className="tm-media-box-wrap"><img className="item-brand" src="images/rockstar_games.png" alt="Rockstar Games" /></figure>

                    </div>

                  </div>

                  <div className="uk-margin-small-top">

                    <div className="uk-text-truncate">Rockstar Games</div>
                    <div className="uk-text-truncate">Acción</div>

                    <div className="uk-text-meta uk-text-xsmall uk-text-truncate">desde COP $51.800</div>

                  </div>

                </a></div>

              
                <div><a className="uk-link-muted uk-text-center uk-display-block uk-padding-small uk-box-shadow-hover-large" href="/invubisoft">

                  <div className="tm-ratio tm-ratio-4-3">

                    <div className="tm-media-box">

                      <figure className="tm-media-box-wrap"><img className="item-brand" src="images/ubisoft.png" alt="Ubisoft" /></figure>

                    </div>

                  </div>

                  <div className="uk-margin-small-top">

                    <div className="uk-text-truncate">Ubisoft</div>
                    <div className="uk-text-truncate">Roleplay</div>

                    <div className="uk-text-meta uk-text-xsmall uk-text-truncate">desde COP $200.000</div>

                  </div>

                </a></div>

                <div><a className="uk-link-muted uk-text-center uk-display-block uk-padding-small uk-box-shadow-hover-large" href="/invvalve">

                  <div className="tm-ratio tm-ratio-4-3">

                    <div className="tm-media-box">

                      <figure className="tm-media-box-wrap"><img className="item-brand" src="images/valve.png" alt="Valve" /></figure>

                    </div>

                  </div>

                  <div className="uk-margin-small-top">

                    <div className="uk-text-truncate">Valve</div>
                    <div className="uk-text-truncate">Puzzlez</div>

                    <div className="uk-text-meta uk-text-xsmall uk-text-truncate">desde COP $26.000</div>

                  </div>

                </a></div>

                <div><a className="uk-link-muted uk-text-center uk-display-block uk-padding-small uk-box-shadow-hover-large" href="/invea">

                  <div className="tm-ratio tm-ratio-4-3">

                    <div className="tm-media-box">

                      <figure className="tm-media-box-wrap"><img className="item-brand" src="images/ea.png" alt="Electronic Arts" /></figure>

                    </div>

                  </div>

                  <div className="uk-margin-small-top">

                    <div className="uk-text-truncate">Electronic Arts</div>
                    <div className="uk-text-truncate">Deporte</div>

                    <div className="uk-text-meta uk-text-xsmall uk-text-truncate">desde COP $279.999</div>

                  </div>

                </a></div>

                
              </div>

            </div>

          </section>

          <section className="uk-section uk-section-small">

            <div className="uk-container">

              <h2 className="uk-text-center">Mejores juegos</h2>

              <div className="uk-card uk-card-default tm-ignore-container">



                <div className="uk-grid-cont uk-child-width-1-2 uk-child-width-1-3@s uk-child-width-1-6@m" uk-grid>

                  <article className="tm-product-card">



                    <div className="tm-product-card-media">

                      <div className="tm-ratio tm-ratio-4-3"><a className="tm-media-box" href>

                        <div className="tm-product-card-labels"><span className="uk-label uk-label-warning">Ms vendidos</span></div>

                        <figure className="tm-media-box-wrap"><img src="images/juegos/GTA_V.jpeg" alt="GTA V" />

                        </figure>

                      </a></div>

                    </div>

                    <div className="tm-product-card-body">

                      <div className="tm-product-card-info">

                        <div className="uk-text-meta uk-margin-xsmall-bottom">Rockstar Games</div>

                        <h3 className="tm-product-card-title"><a className="uk-link-heading" href>Grand Theft Auto V</a></h3>
                        <h1 className="uk-text-meta uk-margin-xsmall-bottom">Licencias disponibles: 60</h1>
                        <h1 className="uk-text-meta uk-margin-xsmall-bottom">Licencias vendidas: (numero)</h1>
                        <h3 className="tm-product-card-title"><a className="uk-link-heading" href>Peso: 90GB</a></h3>

                      </div>

                      <div className="tm-product-card-shop">

                        <div className="tm-product-card-prices"><del className="uk-text-meta">$277.300</del>

                          <div className="tm-product-card-price">$51.888</div>

                        </div>

                        <div className="tm-product-card-add">

                         <button
                            className="uk-button uk-button-primary tm-product-card-add-button tm-shine"
                            onClick={manejarClick}
                          >
                            <span className="tm-product-card-add-button-icon" uk-icon="cart" />
                            <span className="tm-product-card-add-button-text">Agregar al carrito</span>
                          </button>

                          {/* Contenedor para notificaciones */}
                          <ToastContainer />

                        </div>

                      </div>

                    </div>

                  </article>

                  <article className="tm-product-card">

                    <div className="tm-product-card-media">

                      <div className="tm-ratio tm-ratio-4-3"><a className="tm-media-box" href>

                        <div className="tm-product-card-labels"><span className="uk-label uk-label-success">Nuevo</span></div>

                        <figure className="tm-media-box-wrap"><img src="/images/juegos/fc24.jpg" alt="elden_ring" /></figure>

                      </a></div>

                    </div>

                    <div className="tm-product-card-body">

                      <div className="tm-product-card-info">

                        <div className="uk-text-meta uk-margin-xsmall-bottom">Electronic Arts</div>

    
                        <h3 className="tm-product-card-title"><a className="uk-link-heading" href>FIFA 24</a></h3>
                        <h1 className="uk-text-meta uk-margin-xsmall-bottom">Licencias disponibles: 60</h1>
                        <h1 className="uk-text-meta uk-margin-xsmall-bottom">Licencias vendidas: (numero)</h1>
                        <h3 className="tm-product-card-title"><a className="uk-link-heading" href>Peso: 55GB</a></h3>

                      </div>

                      <div className="tm-product-card-shop">

                        <div className="tm-product-card-prices">

                          <div className="tm-product-card-price">$289.999</div>

                        </div>

                        <div className="tm-product-card-add">

                        <button
                            className="uk-button uk-button-primary tm-product-card-add-button tm-shine"
                            onClick={manejarClick}
                          >
                            <span className="tm-product-card-add-button-icon" uk-icon="cart" />
                            <span className="tm-product-card-add-button-text">Agregar al carrito</span>
                          </button>

                          {/* Contenedor para notificaciones */}
                          <ToastContainer />

                        </div>

                      </div>

                    </div>

                  </article>

                  <article className="tm-product-card">

                    <div className="tm-product-card-media">

                      <div className="tm-ratio tm-ratio-4-3"><a className="tm-media-box" href>

                        <div className="tm-product-card-labels"><span className="uk-label uk-label-success">Nuevo</span></div>

                        <figure className="tm-media-box-wrap"><img src="images/juegos/farcry6.jpg" /></figure>

                      </a></div>

                    </div>

                    <div className="tm-product-card-body">

                      <div className="tm-product-card-info">

                        <div className="uk-text-meta uk-margin-xsmall-bottom">Ubisoft</div>

                        <h3 className="tm-product-card-title"><a className="uk-link-heading" href>Far Cry 6</a></h3>
                        <h1 className="uk-text-meta uk-margin-xsmall-bottom">Licencias disponibles: 60</h1>
                        <h1 className="uk-text-meta uk-margin-xsmall-bottom">Licencias vendidas: (numero)</h1>
                        <h3 className="tm-product-card-title"><a className="uk-link-heading" href>Peso: 74GB</a></h3>

                      </div>

                      <div className="tm-product-card-shop">

                        <div className="tm-product-card-prices">

                          <div className="tm-product-card-price">$180.000</div>

                        </div>

                        <div className="tm-product-card-add">

                         <button
                            className="uk-button uk-button-primary tm-product-card-add-button tm-shine"
                            onClick={manejarClick}
                          >
                            <span className="tm-product-card-add-button-icon" uk-icon="cart" />
                            <span className="tm-product-card-add-button-text">Agregar al carrito</span>
                          </button>

                          {/* Contenedor para notificaciones */}
                          <ToastContainer />

                        </div>

                      </div>

                    </div>

                  </article>

                  <article className="tm-product-card">

                    <div className="tm-product-card-media">

                      <div className="tm-ratio tm-ratio-4-3"><a className="tm-media-box" href>

                        <div className="tm-product-card-labels"><span className="uk-label uk-label-warning">Más vendidos</span></div>

                        <figure className="tm-media-box-wrap"><img src="images/juegos/left_4_dead_2.jpg" alt="L4D2" /></figure>

                      </a></div>

                    </div>

                    <div className="tm-product-card-body">

                      <div className="tm-product-card-info">

                        <div className="uk-text-meta uk-margin-xsmall-bottom">Valve</div>

                        <h3 className="tm-product-card-title"><a className="uk-link-heading" href>Left 4 Dead 2</a></h3>
                        <h1 className="uk-text-meta uk-margin-xsmall-bottom">Licencias disponibles: 60</h1>
                        <h1 className="uk-text-meta uk-margin-xsmall-bottom">Licencias vendidas: (numero)</h1>
                        <h3 className="tm-product-card-title"><a className="uk-link-heading" href>Peso: 13GB</a></h3>

                      </div>

                      <div className="tm-product-card-shop">

                        <div className="tm-product-card-prices">

                          <div className="tm-product-card-price">$26.000</div>

                        </div>

                        <div className="tm-product-card-add">

                          <button
                            className="uk-button uk-button-primary tm-product-card-add-button tm-shine"
                            onClick={manejarClick}
                          >
                            <span className="tm-product-card-add-button-icon" uk-icon="cart" />
                            <span className="tm-product-card-add-button-text">Agregar al carrito</span>
                          </button>

                          {/* Contenedor para notificaciones */}
                          <ToastContainer />

                        </div>

                      </div>

                    </div>

                  </article>

                  <article className="tm-product-card">

                    <div className="tm-product-card-media">

                      <div className="tm-ratio tm-ratio-4-3"><a className="tm-media-box" href>

                        <div className="tm-product-card-labels"><span className="uk-label uk-label-success">Nuevo</span></div>

                        <figure className="tm-media-box-wrap"><img src="images/juegos/f1_24.jpg" alt="F1 24" /></figure>

                      </a></div>

                    </div>

                    <div className="tm-product-card-body">

                      <div className="tm-product-card-info">

                        <div className="uk-text-meta uk-margin-xsmall-bottom">Electronic Arts</div>

                        <h3 className="tm-product-card-title"><a className="uk-link-heading" href>F1 24</a></h3>
                        <h1 className="uk-text-meta uk-margin-xsmall-bottom">Licencias disponibles: 60</h1>
                        <h1 className="uk-text-meta uk-margin-xsmall-bottom">Licencias vendidas: (numero)</h1>
                        <h3 className="tm-product-card-title"><a className="uk-link-heading" href>Peso: 100GB</a></h3>

                      </div>

                      <div className="tm-product-card-shop">

                        <div className="tm-product-card-prices"><del className="uk-text-meta">$359.999</del>

                          <div className="tm-product-card-price">$279.999</div>

                        </div>

                        <div className="tm-product-card-add">

                         <button
                            className="uk-button uk-button-primary tm-product-card-add-button tm-shine"
                            onClick={manejarClick}
                          >
                            <span className="tm-product-card-add-button-icon" uk-icon="cart" />
                            <span className="tm-product-card-add-button-text">Agregar al carrito</span>
                          </button>

                          {/* Contenedor para notificaciones */}
                          <ToastContainer />


                        </div>

                      </div>

                    </div>

                  </article>

                  <article className="tm-product-card">

                    <div className="tm-product-card-media">

                      <div className="tm-ratio tm-ratio-4-3"><a className="tm-media-box" href>

                        <div className="tm-product-card-labels"><span className="uk-label uk-label-success">Nuevo</span></div>

                        <figure className="tm-media-box-wrap"><img src="images/juegos/as_val.jpg" alt="Assassin's Credd Valhalla" />
                        

                        </figure>

                      </a></div>

                    </div>

                    <div className="tm-product-card-body">

                      <div className="tm-product-card-info">

                        <div className="uk-text-meta uk-margin-xsmall-bottom">Ubisoft</div>

                        <h3 className="tm-product-card-title"><a className="uk-link-heading" href>Assassin's Creed Valhalla</a></h3>
                        <h1 className="uk-text-meta uk-margin-xsmall-bottom">Licencias disponibles: 60</h1>
                        <h1 className="uk-text-meta uk-margin-xsmall-bottom">Licencias vendidas: (numero)</h1>
                        <h3 className="tm-product-card-title"><a className="uk-link-heading" href>Peso: 50GB</a></h3>

                      </div>

                      <div className="tm-product-card-shop">

                        <div className="tm-product-card-prices">

                          <div className="tm-product-card-price">$199.000</div>

                        </div>

                        <div className="tm-product-card-add">

                          <button
                            className="uk-button uk-button-primary tm-product-card-add-button tm-shine"
                            onClick={manejarClick}
                          >
                            <span className="tm-product-card-add-button-icon" uk-icon="cart" />
                            <span className="tm-product-card-add-button-text">Agregar al carrito</span>
                          </button>

                          {/* Contenedor para notificaciones */}
                          <ToastContainer />

                        </div>

                      </div>

                    </div>

                  </article>

                  <article className="tm-product-card">

                    <div className="tm-product-card-media">

                      <div className="tm-ratio tm-ratio-4-3"><a className="tm-media-box" href>

                        <figure className="tm-media-box-wrap"><img src="images/juegos/red_dead.jpg" alt="Red Dead Redemption 2" /></figure>

                      </a></div>

                    </div>

                    <div className="tm-product-card-body">

                      <div className="tm-product-card-info">

                        <div className="uk-text-meta uk-margin-xsmall-bottom">Rockstar Games</div>

                        <h3 className="tm-product-card-title"><a className="uk-link-heading" href>Red Dead Redemption 2</a></h3>
                        <h1 className="uk-text-meta uk-margin-xsmall-bottom">Licencias disponibles: 60</h1>
                        <h1 className="uk-text-meta uk-margin-xsmall-bottom">Licencias vendidas: (numero)</h1>
                        <h3 className="tm-product-card-title"><a className="uk-link-heading" href>Peso: 154GB</a></h3>

                      </div>

                      <div className="tm-product-card-shop">

                        <div className="tm-product-card-prices"><del className="uk-text-meta">$199.000</del>

                          <div className="tm-product-card-price">$65.967</div>

                        </div>

                        <div className="tm-product-card-add">

                       <button
                            className="uk-button uk-button-primary tm-product-card-add-button tm-shine"
                            onClick={manejarClick}
                          >
                            <span className="tm-product-card-add-button-icon" uk-icon="cart" />
                            <span className="tm-product-card-add-button-text">Agregar al carrito</span>
                          </button>

                          {/* Contenedor para notificaciones */}
                          <ToastContainer />
                        </div>

                      </div>

                    </div>

                  </article>

                  <article className="tm-product-card">

                    <div className="tm-product-card-media">

                      <div className="tm-ratio tm-ratio-4-3"><a className="tm-media-box" href>

                        <div className="tm-product-card-labels"><span className="uk-label uk-label-warning">Más vendidos</span></div>

                        <figure className="tm-media-box-wrap"><img src="images/juegos/portal_2.jpg" alt="Portal 2" /></figure>

                      </a></div>

                    </div>

                    <div className="tm-product-card-body">

                      <div className="tm-product-card-info">

                        <div className="uk-text-meta uk-margin-xsmall-bottom">Valve</div>

                        <h3 className="tm-product-card-title"><a className="uk-link-heading" href>Portal 2</a></h3>
                        <h1 className="uk-text-meta uk-margin-xsmall-bottom">Licencias disponibles: 60</h1>
                        <h1 className="uk-text-meta uk-margin-xsmall-bottom">Licencias vendidas: (numero)</h1>
                        <h3 className="tm-product-card-title"><a className="uk-link-heading" href>Peso: 8GB</a></h3>

                      </div>

                      <div className="tm-product-card-shop">

                        <div className="tm-product-card-prices">

                          <div className="tm-product-card-price">$26.000</div>

                        </div>

                        <div className="tm-product-card-add">

                         <button
                            className="uk-button uk-button-primary tm-product-card-add-button tm-shine"
                            onClick={manejarClick}
                          >
                            <span className="tm-product-card-add-button-icon" uk-icon="cart" />
                            <span className="tm-product-card-add-button-text">Agregar al carrito</span>
                          </button>

                          {/* Contenedor para notificaciones */}
                          <ToastContainer />
                        </div>

                      </div>

                    </div>

                  </article>

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



  export default Index;

