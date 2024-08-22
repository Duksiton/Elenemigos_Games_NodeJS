import React from 'react';

import '../components/styles/style.css';
import { Link } from 'react-router-dom';


import UIkit from 'uikit';

import Icons from 'uikit/dist/js/uikit-icons';



UIkit.use(Icons);


function EA() {

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
            Electronic Arts
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
                {/* F1 24 */}
                <article className="tm-product-card">
                  <div className="tm-product-card-media">
                    <div className="tm-ratio tm-ratio-4-3">
                      <a className="tm-media-box" href>
                        <div className="tm-product-card-labels">
                          <span className="uk-label uk-label-success">Nuevo</span>
                        </div>
                        <figure className="tm-media-box-wrap">
                          <img src="images/juegos/f1_24.jpg" alt="F1 24" />
                        </figure>
                      </a>
                    </div>
                  </div>
                  <div className="tm-product-card-body">
                    <div className="tm-product-card-info">
                      <div className="uk-text-meta uk-margin-xsmall-bottom">Electronic Arts</div>
                      <h3 className="tm-product-card-title">
                        <a className="uk-link-heading" href>F1 24</a>
                      </h3>
                    </div>
                    <div className="tm-product-card-shop">
                      <div className="tm-product-card-prices">
                        <div className="tm-product-card-price">$279.999</div>
                      </div>
                      <div className="tm-product-card-add">
                        <div className="uk-text-meta tm-product-card-actions">
                          <a className="tm-product-card-action js-add-to js-add-to-favorites tm-action-button-active js-added-to" title="Add to favorites">
                            <span uk-icon="icon: heart; ratio: .75;" />
                            <span className="tm-product-card-action-text">Agregar a favoritos</span>
                          </a>
                        </div>
                        <button className="uk-button uk-button-primary tm-product-card-add-button tm-shine js-add-to-cart">
                          <span className="tm-product-card-add-button-icon" uk-icon="cart" />
                          <span className="tm-product-card-add-button-text">Agregar al carrito</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </article>
                {/* Need for Speed Unbound */}
                <article className="tm-product-card">
                  <div className="tm-product-card-media">
                    <div className="tm-ratio tm-ratio-4-3">
                      <a className="tm-media-box" href>
                        <div className="tm-product-card-labels">
                          <span className="uk-label uk-label-warning">Más vendidos</span>
                        </div>
                        <figure className="tm-media-box-wrap">
                          <img src="images/juegos/nfs_ub.avif" alt="Need for Speed Unbound" />
                        </figure>
                      </a>
                    </div>
                  </div>
                  <div className="tm-product-card-body">
                    <div className="tm-product-card-info">
                      <div className="uk-text-meta uk-margin-xsmall-bottom">Electronic Arts</div>
                      <h3 className="tm-product-card-title">
                        <a className="uk-link-heading" href>Need for Speed Unbound</a>
                      </h3>
                    </div>
                    <div className="tm-product-card-shop">
                      <div className="tm-product-card-prices">
                        <div className="tm-product-card-price">$239.999</div>
                      </div>
                      <div className="tm-product-card-add">
                        <div className="uk-text-meta tm-product-card-actions">
                          <a className="tm-product-card-action js-add-to js-add-to-favorites tm-action-button-active js-added-to" title="Add to favorites">
                            <span uk-icon="icon: heart; ratio: .75;" />
                            <span className="tm-product-card-action-text">Agregar a favoritos</span>
                          </a>
                        </div>
                        <button className="uk-button uk-button-primary tm-product-card-add-button tm-shine js-add-to-cart">
                          <span className="tm-product-card-add-button-icon" uk-icon="cart" />
                          <span className="tm-product-card-add-button-text">Agregar al carrito</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </article>
                {/* Madden NFL 24 */}
                <article className="tm-product-card">
                  <div className="tm-product-card-media">
                    <div className="tm-ratio tm-ratio-4-3">
                      <a className="tm-media-box" href>
                        <div className="tm-product-card-labels">
                          <span className="uk-label uk-label-warning">Más vendidos</span>
                        </div>
                        <figure className="tm-media-box-wrap">
                          <img src="images/juegos/madden_24.jpg" alt="Madden NFL 24" />
                        </figure>
                      </a>
                    </div>
                  </div>
                  <div className="tm-product-card-body">
                    <div className="tm-product-card-info">
                      <div className="uk-text-meta uk-margin-xsmall-bottom">Electronic Arts</div>
                      <h3 className="tm-product-card-title">
                        <a className="uk-link-heading" href>Madden NFL 24</a>
                      </h3>
                    </div>
                    <div className="tm-product-card-shop">
                      <div className="tm-product-card-prices">
                        <div className="tm-product-card-price">$299.999</div>
                      </div>
                      <div className="tm-product-card-add">
                        <div className="uk-text-meta tm-product-card-actions">
                          <a className="tm-product-card-action js-add-to js-add-to-favorites tm-action-button-active js-added-to" title="Add to favorites">
                            <span uk-icon="icon: heart; ratio: .75;" />
                            <span className="tm-product-card-action-text">Agregar a favoritos</span>
                          </a>
                        </div>
                        <button className="uk-button uk-button-primary tm-product-card-add-button tm-shine js-add-to-cart">
                          <span className="tm-product-card-add-button-icon" uk-icon="cart" />
                          <span className="tm-product-card-add-button-text">Agregar al carrito</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </article>
                {/* Battlefield 2042 */}
                <article className="tm-product-card">
                  <div className="tm-product-card-media">
                    <div className="tm-ratio tm-ratio-4-3">
                      <a className="tm-media-box" href>
                        <div className="tm-product-card-labels">
                          <span className="uk-label uk-label-warning">Más vendidos</span>
                        </div>
                        <figure className="tm-media-box-wrap">
                          <img src="images/juegos/battlefield.jpg" alt="Battlefield 2042" />
                        </figure>
                      </a>
                    </div>
                  </div>
                  <div className="tm-product-card-body">
                    <div className="tm-product-card-info">
                      <div className="uk-text-meta uk-margin-xsmall-bottom">Electronic Arts</div>
                      <h3 className="tm-product-card-title">
                        <a className="uk-link-heading" href>Battlefield 2042</a>
                      </h3>
                    </div>
                    <div className="tm-product-card-shop">
                      <div className="tm-product-card-prices">
                        <div className="tm-product-card-price">$269.999</div>
                      </div>
                      <div className="tm-product-card-add">
                        <div className="uk-text-meta tm-product-card-actions">
                          <a className="tm-product-card-action js-add-to js-add-to-favorites tm-action-button-active js-added-to" title="Add to favorites">
                            <span uk-icon="icon: heart; ratio: .75;" />
                            <span className="tm-product-card-action-text">Agregar a favoritos</span>
                          </a>
                        </div>
                        <button className="uk-button uk-button-primary tm-product-card-add-button tm-shine js-add-to-cart">
                          <span className="tm-product-card-add-button-icon" uk-icon="cart" />
                          <span className="tm-product-card-add-button-text">Agregar al carrito</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </article>
                {/* FIFA 24 */}
                <article className="tm-product-card">
                  <div className="tm-product-card-media">
                    <div className="tm-ratio tm-ratio-4-3">
                      <a className="tm-media-box" href>
                        <div className="tm-product-card-labels">
                          <span className="uk-label uk-label-warning">Más vendidos</span>
                        </div>
                        <figure className="tm-media-box-wrap">
                          <img src="images/juegos/fc24.jpg" alt="FIFA 24" />
                        </figure>
                      </a>
                    </div>
                  </div>
                  <div className="tm-product-card-body">
                    <div className="tm-product-card-info">
                      <div className="uk-text-meta uk-margin-xsmall-bottom">Electronic Arts</div>
                      <h3 className="tm-product-card-title">
                        <a className="uk-link-heading" href>FIFA 24</a>
                      </h3>
                    </div>
                    <div className="tm-product-card-shop">
                      <div className="tm-product-card-prices">
                        <div className="tm-product-card-price">$289.999</div>
                      </div>
                      <div className="tm-product-card-add">
                        <div className="uk-text-meta tm-product-card-actions">
                          <a className="tm-product-card-action js-add-to js-add-to-favorites tm-action-button-active js-added-to" title="Add to favorites">
                            <span uk-icon="icon: heart; ratio: .75;" />
                            <span className="tm-product-card-action-text">Agregar a favoritos</span>
                          </a>
                        </div>
                        <button className="uk-button uk-button-primary tm-product-card-add-button tm-shine js-add-to-cart">
                          <span className="tm-product-card-add-button-icon" uk-icon="cart" />
                          <span className="tm-product-card-add-button-text">Agregar al carrito</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </article>
                {/* Apex Legends */}
                <article className="tm-product-card">
                  <div className="tm-product-card-media">
                    <div className="tm-ratio tm-ratio-4-3">
                      <a className="tm-media-box" href>
                        <div className="tm-product-card-labels">
                          <span className="uk-label uk-label-warning">Más vendidos</span>
                        </div>
                        <figure className="tm-media-box-wrap">
                          <img src="images/juegos/apex.jpg" alt="Apex Legends" />
                        </figure>
                      </a>
                    </div>
                  </div>
                  <div className="tm-product-card-body">
                    <div className="tm-product-card-info">
                      <div className="uk-text-meta uk-margin-xsmall-bottom">Electronic Arts</div>
                      <h3 className="tm-product-card-title">
                        <a className="uk-link-heading" href>Apex Legends</a>
                      </h3>
                    </div>
                    <div className="tm-product-card-shop">
                      <div className="tm-product-card-prices">
                        <div className="tm-product-card-price">$199.999</div>
                      </div>
                      <div className="tm-product-card-add">
                        <div className="uk-text-meta tm-product-card-actions">
                          <a className="tm-product-card-action js-add-to js-add-to-favorites tm-action-button-active js-added-to" title="Add to favorites">
                            <span uk-icon="icon: heart; ratio: .75;" />
                            <span className="tm-product-card-action-text">Agregar a favoritos</span>
                          </a>
                        </div>
                        <button className="uk-button uk-button-primary tm-product-card-add-button tm-shine js-add-to-cart">
                          <span className="tm-product-card-add-button-icon" uk-icon="cart" />
                          <span className="tm-product-card-add-button-text">Agregar al carrito</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </article>
                {/* Star Wars Jedi: Survivor */}
                <article className="tm-product-card">
                  <div className="tm-product-card-media">
                    <div className="tm-ratio tm-ratio-4-3">
                      <a className="tm-media-box" href>
                        <div className="tm-product-card-labels">
                          <span className="uk-label uk-label-success">Nuevo</span>
                        </div>
                        <figure className="tm-media-box-wrap">
                          <img src="images/juegos/starwars.jpg" alt="Star Wars Jedi: Survivor" />
                        </figure>
                      </a>
                    </div>
                  </div>
                  <div className="tm-product-card-body">
                    <div className="tm-product-card-info">
                      <div className="uk-text-meta uk-margin-xsmall-bottom">Electronic Arts</div>
                      <h3 className="tm-product-card-title">
                        <a className="uk-link-heading" href>Star Wars Jedi: Survivor</a>
                      </h3>
                    </div>
                    <div className="tm-product-card-shop">
                      <div className="tm-product-card-prices">
                        <div className="tm-product-card-price">$299.999</div>
                      </div>
                      <div className="tm-product-card-add">
                        <div className="uk-text-meta tm-product-card-actions">
                          <a className="tm-product-card-action js-add-to js-add-to-favorites tm-action-button-active js-added-to" title="Add to favorites">
                            <span uk-icon="icon: heart; ratio: .75;" />
                            <span className="tm-product-card-action-text">Agregar a favoritos</span>
                          </a>
                        </div>
                        <button className="uk-button uk-button-primary tm-product-card-add-button tm-shine js-add-to-cart">
                          <span className="tm-product-card-add-button-icon" uk-icon="cart" />
                          <span className="tm-product-card-add-button-text">Agregar al carrito</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </article>
                {/* The Sims 4 */}
                <article className="tm-product-card">
                  <div className="tm-product-card-media">
                    <div className="tm-ratio tm-ratio-4-3">
                      <a className="tm-media-box" href>
                        <div className="tm-product-card-labels">
                          <span className="uk-label uk-label-warning">Más vendidos</span>
                        </div>
                        <figure className="tm-media-box-wrap">
                          <img src="images/juegos/sims4.jpg" alt="The Sims 4" />
                        </figure>
                      </a>
                    </div>
                  </div>
                  <div className="tm-product-card-body">
                    <div className="tm-product-card-info">
                      <div className="uk-text-meta uk-margin-xsmall-bottom">Electronic Arts</div>
                      <h3 className="tm-product-card-title">
                        <a className="uk-link-heading" href>The Sims 4</a>
                      </h3>
                    </div>
                    <div className="tm-product-card-shop">
                      <div className="tm-product-card-prices">
                        <div className="tm-product-card-price">$249.999</div>
                      </div>
                      <div className="tm-product-card-add">
                        <div className="uk-text-meta tm-product-card-actions">
                          <a className="tm-product-card-action js-add-to js-add-to-favorites tm-action-button-active js-added-to" title="Add to favorites">
                            <span uk-icon="icon: heart; ratio: .75;" />
                            <span className="tm-product-card-action-text">Agregar a favoritos</span>
                          </a>
                        </div>
                        <button className="uk-button uk-button-primary tm-product-card-add-button tm-shine js-add-to-cart">
                          <span className="tm-product-card-add-button-icon" uk-icon="cart" />
                          <span className="tm-product-card-add-button-text">Agregar al carrito</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
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

export default EA;
