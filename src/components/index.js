import React from 'react';
import '../components/styles/style.css';


import UIkit from 'uikit'; // Importa el JavaScript de UIkit
import Icons from 'uikit/dist/js/uikit-icons'; // Importa los íconos de UIkit

UIkit.use(Icons);




function Index() {
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
          <div className="uk-navbar-left"><button className="uk-navbar-toggle uk-hidden@m" uk-toggle="target: #nav-offcanvas" uk-navbar-toggle-icon /><a className="uk-navbar-item uk-logo" href="index.html"><img src="images/logo_elenemigos.png" width={290} height={32} alt="Logo" /></a>
          </div>
          <div className="uk-navbar-right"><a className="uk-navbar-toggle tm-navbar-button" href="#" uk-search-icon />
            <div className="uk-navbar-dropdown uk-padding-small uk-margin-remove" uk-drop="mode: click;cls-drop: uk-navbar-dropdown;boundary: .tm-navbar-container;boundary-align: true;pos: bottom-justify;flip: x">
              <div className="uk-container">
                <div className="uk-grid-small uk-flex-middle" uk-grid>
                  <div className="uk-width-expand">
                    <form className="uk-search uk-search-navbar uk-width-1-1"><input className="uk-search-input" type="search" placeholder="Search…" autofocus />
                    </form>
                  </div>
                  <div className="uk-width-auto"><a className="uk-navbar-dropdown-close" href="#" uk-close /></div>
                </div>
              </div>
            </div><a className="uk-navbar-item uk-link-muted tm-navbar-button" href="ordenes.html" uk-icon="user" />
            <div className="uk-padding-small uk-margin-remove" uk-dropdown="pos: bottom-right; offset: -10; delay-hide: 200;" style={{minWidth: 150}}>
              <ul className="uk-nav uk-dropdown-nav">
                <li><a href="iniciars.html">Iniciar Sesión</a></li>
                <li className="uk-nav-divider" />
                <li><a href="registro.html">Registrarse</a></li>
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
            <div><a className="uk-link-muted uk-text-center uk-display-block uk-padding-small uk-box-shadow-hover-large" href="inv_rock.html">
                <div className="tm-ratio tm-ratio-4-3">
                  <div className="tm-media-box">
                    <figure className="tm-media-box-wrap"><img className="item-brand" src="images/rockstar_games.png" alt="Rockstar Games" /></figure>
                  </div>
                </div>
                <div className="uk-margin-small-top">
                  <div className="uk-text-truncate">Rockstar Games</div>
                  <div className="uk-text-meta uk-text-xsmall uk-text-truncate">desde COP $51.800</div>
                </div>
              </a></div>
            <div><a className="uk-link-muted uk-text-center uk-display-block uk-padding-small uk-box-shadow-hover-large" href="inv_activision.html">
                <div className="tm-ratio tm-ratio-4-3">
                  <div className="tm-media-box">
                    <figure className="tm-media-box-wrap"><img className="item-brand" src="images//activision.png" alt="Activision" /></figure>
                  </div>
                </div>
                <div className="uk-margin-small-top">
                  <div className="uk-text-truncate">Activision</div>
                  <div className="uk-text-meta uk-text-xsmall uk-text-truncate">desde COP $300.000</div>
                </div>
              </a></div>
            <div><a className="uk-link-muted uk-text-center uk-display-block uk-padding-small uk-box-shadow-hover-large" href="inv_ubisoft.html">
                <div className="tm-ratio tm-ratio-4-3">
                  <div className="tm-media-box">
                    <figure className="tm-media-box-wrap"><img className="item-brand" src="images/ubisoft.png" alt="Ubisoft" /></figure>
                  </div>
                </div>
                <div className="uk-margin-small-top">
                  <div className="uk-text-truncate">Ubisoft</div>
                  <div className="uk-text-meta uk-text-xsmall uk-text-truncate">desde COP $200.000</div>
                </div>
              </a></div>
            <div><a className="uk-link-muted uk-text-center uk-display-block uk-padding-small uk-box-shadow-hover-large" href="inv_valve.html">
                <div className="tm-ratio tm-ratio-4-3">
                  <div className="tm-media-box">
                    <figure className="tm-media-box-wrap"><img className="item-brand" src="images/valve.png" alt="Valve" /></figure>
                  </div>
                </div>
                <div className="uk-margin-small-top">
                  <div className="uk-text-truncate">Valve</div>
                  <div className="uk-text-meta uk-text-xsmall uk-text-truncate">desde COP $26.000</div>
                </div>
              </a></div>
            <div><a className="uk-link-muted uk-text-center uk-display-block uk-padding-small uk-box-shadow-hover-large" href="inv_ea.html">
                <div className="tm-ratio tm-ratio-4-3">
                  <div className="tm-media-box">
                    <figure className="tm-media-box-wrap"><img className="item-brand" src="images/ea.png" alt="Electronic Arts" /></figure>
                  </div>
                </div>
                <div className="uk-margin-small-top">
                  <div className="uk-text-truncate">Electronic Arts</div>
                  <div className="uk-text-meta uk-text-xsmall uk-text-truncate">desde COP $279.999</div>
                </div>
              </a></div>
            <div><a className="uk-link-muted uk-text-center uk-display-block uk-padding-small uk-box-shadow-hover-large" href="inv_namco.html">
                <div className="tm-ratio tm-ratio-4-3">
                  <div className="tm-media-box">
                    <figure className="tm-media-box-wrap"><img className="item-brand" src="images/bandai_namco.png" alt="Bandai Namco" /></figure>
                  </div>
                </div>
                <div className="uk-margin-small-top">
                  <div className="uk-text-truncate">Bandai Namco</div>
                  <div className="uk-text-meta uk-text-xsmall uk-text-truncate">desde COP $155.900</div>
                </div>
              </a></div>
          </div>
        </div>
      </section>
      <section className="uk-section uk-section-small">
        <div className="uk-container">
          <h2 className="uk-text-center">Mejores juegos</h2>
          <div className="uk-card uk-card-default tm-ignore-container">
            <div className="uk-grid-collapse uk-child-width-1-3 uk-child-width-1-4@m tm-products-grid" uk-grid>
              <article className="tm-product-card">
                <div className="tm-product-card-media">
                  <div className="tm-ratio tm-ratio-4-3"><a className="tm-media-box" href>
                      <div className="tm-product-card-labels"><span className="uk-label uk-label-warning">Más vendidos</span></div>
                      <figure className="tm-media-box-wrap"><img src="images/juegos/GTA_V.jpeg" alt="GTA V" />
                      </figure>
                    </a></div>
                </div>
                <div className="tm-product-card-body">
                  <div className="tm-product-card-info">
                    <div className="uk-text-meta uk-margin-xsmall-bottom">Rockstar Games</div>
                    <h3 className="tm-product-card-title"><a className="uk-link-heading" href>Grand Theft Auto V</a></h3>
                  </div>
                  <div className="tm-product-card-shop">
                    <div className="tm-product-card-prices"><del className="uk-text-meta">$277.300</del>
                      <div className="tm-product-card-price">$51.888</div>
                    </div>
                    <div className="tm-product-card-add">
                      <div className="uk-text-meta tm-product-card-actions"><a className="tm-product-card-action js-add-to js-add-to-favorites tm-action-button-active js-added-to" title="Add to favorites"><span uk-icon="icon: heart; ratio: .75;" /><span className="tm-product-card-action-text">Agregar a
                            favoritos</span></a>
                      </div><button className="uk-button uk-button-primary tm-product-card-add-button tm-shine js-add-to-cart"><span className="tm-product-card-add-button-icon" uk-icon="cart" /><span className="tm-product-card-add-button-text">Agregar al
                          carrito</span></button>
                    </div>
                  </div>
                </div>
              </article>
              <article className="tm-product-card">
                <div className="tm-product-card-media">
                  <div className="tm-ratio tm-ratio-4-3"><a className="tm-media-box" href>
                      <div className="tm-product-card-labels"><span className="uk-label uk-label-success">Nuevo</span></div>
                      <figure className="tm-media-box-wrap"><img src="images/juegos/elden_ring.jpg" alt="elden_ring" /></figure>
                    </a></div>
                </div>
                <div className="tm-product-card-body">
                  <div className="tm-product-card-info">
                    <div className="uk-text-meta uk-margin-xsmall-bottom">Bandai Namco</div>
                    <h3 className="tm-product-card-title"><a className="uk-link-heading" href>Elden Ring</a></h3>
                  </div>
                  <div className="tm-product-card-shop">
                    <div className="tm-product-card-prices">
                      <div className="tm-product-card-price">$199.900</div>
                    </div>
                    <div className="tm-product-card-add">
                      <div className="uk-text-meta tm-product-card-actions"><a className="tm-product-card-action js-add-to js-add-to-favorites tm-action-button-active js-added-to" title="Add to favorites"><span uk-icon="icon: heart; ratio: .75;" /><span className="tm-product-card-action-text">Agregar a
                            favoritos</span></a>
                      </div><button className="uk-button uk-button-primary tm-product-card-add-button tm-shine js-add-to-cart"><span className="tm-product-card-add-button-icon" uk-icon="cart" /><span className="tm-product-card-add-button-text">Agregar al
                          carrito</span></button>
                    </div>
                  </div>
                </div>
              </article>
              <article className="tm-product-card">
                <div className="tm-product-card-media">
                  <div className="tm-ratio tm-ratio-4-3"><a className="tm-media-box" href>
                      <div className="tm-product-card-labels"><span className="uk-label uk-label-success">Nuevo</span></div>
                      <figure className="tm-media-box-wrap"><img src="images/juegos/call_of_duty_6.jpg" /></figure>
                    </a></div>
                </div>
                <div className="tm-product-card-body">
                  <div className="tm-product-card-info">
                    <div className="uk-text-meta uk-margin-xsmall-bottom">Activision</div>
                    <h3 className="tm-product-card-title"><a className="uk-link-heading" href>Call of Duty: Black Ops 6</a></h3>
                  </div>
                  <div className="tm-product-card-shop">
                    <div className="tm-product-card-prices">
                      <div className="tm-product-card-price">$269.999</div>
                    </div>
                    <div className="tm-product-card-add">
                      <div className="uk-text-meta tm-product-card-actions"><a className="tm-product-card-action js-add-to js-add-to-favorites tm-action-button-active js-added-to" title="Add to favorites"><span uk-icon="icon: heart; ratio: .75;" /><span className="tm-product-card-action-text">Agregar a
                            favoritos</span></a>
                      </div><button className="uk-button uk-button-primary tm-product-card-add-button tm-shine js-add-to-cart"><span className="tm-product-card-add-button-icon" uk-icon="cart" /><span className="tm-product-card-add-button-text">Añadir al
                          carrito</span></button>
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
                  </div>
                  <div className="tm-product-card-shop">
                    <div className="tm-product-card-prices">
                      <div className="tm-product-card-price">$26.000</div>
                    </div>
                    <div className="tm-product-card-add">
                      <div className="uk-text-meta tm-product-card-actions"><a className="tm-product-card-action js-add-to js-add-to-favorites" title="Add to favorites">
                          <span uk-icon="icon: heart; ratio: .75;" /><span className="tm-product-card-action-text">Agregar a
                            favoritos</span></a>
                      </div><button className="uk-button uk-button-primary tm-product-card-add-button tm-shine js-add-to-cart"><span className="tm-product-card-add-button-icon" uk-icon="cart" /><span className="tm-product-card-add-button-text">Añadir al
                          carrito</span></button>
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
                  </div>
                  <div className="tm-product-card-shop">
                    <div className="tm-product-card-prices"><del className="uk-text-meta">$359.999</del>
                      <div className="tm-product-card-price">$279.999</div>
                    </div>
                    <div className="tm-product-card-add">
                      <div className="uk-text-meta tm-product-card-actions"><a className="tm-product-card-action js-add-to js-add-to-favorites" title="Add to favorites"><span uk-icon="icon: heart; ratio: .75;" /><span className="tm-product-card-action-text">Añadir a
                            favoritos</span></a>
                      </div><button className="uk-button uk-button-primary tm-product-card-add-button tm-shine js-add-to-cart"><span className="tm-product-card-add-button-icon" uk-icon="cart" /><span className="tm-product-card-add-button-text">Agregar al
                          carrito</span></button>
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
                  </div>
                  <div className="tm-product-card-shop">
                    <div className="tm-product-card-prices">
                      <div className="tm-product-card-price">$199.000</div>
                    </div>
                    <div className="tm-product-card-add">
                      <div className="uk-text-meta tm-product-card-actions"><a className="tm-product-card-action js-add-to js-add-to-favorites" title="Add to favorites"><span uk-icon="icon: heart; ratio: .75;" /><span className="tm-product-card-action-text">Añadir a
                            favoritos</span></a>
                      </div><button className="uk-button uk-button-primary tm-product-card-add-button tm-shine js-add-to-cart"><span className="tm-product-card-add-button-icon" uk-icon="cart" /><span className="tm-product-card-add-button-text">Agregar al
                          carrito</span></button>
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
                  </div>
                  <div className="tm-product-card-shop">
                    <div className="tm-product-card-prices"><del className="uk-text-meta">$199.000</del>
                      <div className="tm-product-card-price">$65.967</div>
                    </div>
                    <div className="tm-product-card-add">
                      <div className="uk-text-meta tm-product-card-actions"><a className="tm-product-card-action js-add-to js-add-to-favorites" title="Add to favorites"><span uk-icon="icon: heart; ratio: .75;" /><span className="tm-product-card-action-text">Añadir a
                            favoritos</span></a>
                      </div><button className="uk-button uk-button-primary tm-product-card-add-button tm-shine js-add-to-cart"><span className="tm-product-card-add-button-icon" uk-icon="cart" /><span className="tm-product-card-add-button-text">Agregar al
                          carrito</span></button>
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
                  </div>
                  <div className="tm-product-card-shop">
                    <div className="tm-product-card-prices">
                      <div className="tm-product-card-price">$26.000</div>
                    </div>
                    <div className="tm-product-card-add">
                      <div className="uk-text-meta tm-product-card-actions"><a className="tm-product-card-action js-add-to js-add-to-favorites" title="Add to favorites"><span uk-icon="icon: heart; ratio: .75;" /><span className="tm-product-card-action-text">Añadir a
                            favoritos</span></a>
                      </div><button className="uk-button uk-button-primary tm-product-card-add-button tm-shine js-add-to-cart"><span className="tm-product-card-add-button-icon" uk-icon="cart" /><span className="tm-product-card-add-button-text">Agregar al
                          carrito</span></button>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div></section>
      <section className="uk-section uk-section-default uk-section-small">
        <div className="uk-container">
          <h2 className="uk-text-center">Empresas populares</h2>
          <div className="uk-margin-medium-top" uk-slider="finite: true">
            <div className="uk-position-relative">
              <div className="uk-grid-small uk-flex-middle" uk-grid>
                <div className="uk-width-expand uk-slider-container">
                  <ul className="uk-slider-items uk-child-width-1-3 uk-child-width-1-6@s uk-grid uk-grid-large">
                    <li>
                      <div className="tm-ratio tm-ratio-16-9"><a className="uk-link-muted tm-media-box tm-grayscale" href="#" title="Rockstar Games">
                          <figure className="tm-media-box-wrap"><img src="images/rockstar_games.png" alt="Rockstar Games" />
                          </figure>
                        </a></div>
                    </li>
                    <li>
                      <div className="tm-ratio tm-ratio-16-9"><a className="uk-link-muted tm-media-box tm-grayscale" href="#" title="Activision">
                          <figure className="tm-media-box-wrap"><img src="images/activision.png" alt="Activision" /></figure>
                        </a></div>
                    </li>
                    <li>
                      <div className="tm-ratio tm-ratio-16-9"><a className="uk-link-muted tm-media-box tm-grayscale" href="#" title="Ubisoft">
                          <figure className="tm-media-box-wrap"><img src="images/ubisoft.png" alt="Ubisoft" /></figure>
                        </a></div>
                    </li>
                    <li>
                      <div className="tm-ratio tm-ratio-16-9"><a className="uk-link-muted tm-media-box tm-grayscale" href="#" title="Valve">
                          <figure className="tm-media-box-wrap"><img src="images/valve.png" alt="Valve" /></figure>
                        </a></div>
                    </li>
                    <li>
                      <div className="tm-ratio tm-ratio-16-9"><a className="uk-link-muted tm-media-box tm-grayscale" href="#" title="Electronic Arts">
                          <figure className="tm-media-box-wrap"><img src="images/ea.png" alt="Electronic Arts" /></figure>
                        </a></div>
                    </li>
                    <li>
                      <div className="tm-ratio tm-ratio-16-9"><a className="uk-link-muted tm-media-box tm-grayscale" href="#" title="Bandai Namco">
                          <figure className="tm-media-box-wrap"><img src="images/bandai_namco.png" alt="Bandai Namco" /></figure>
                        </a></div>
                    </li>
                  </ul></div>
                <ul className="uk-slider-nav uk-dotnav uk-flex-center uk-margin-medium-top uk-hidden@m">
                </ul>
              </div>
            </div></div></div></section>
    </main>
    <footer>
      <section className="uk-section uk-section-secondary uk-section-small uk-light">
        <div className="uk-container">
          <div className="uk-grid-medium uk-child-width-1-1 uk-child-width-1-4@m" uk-grid>
            <div><a className="uk-logo" href="index.html"><img src="images/logo_elenemigos.png" width={290} height={32} alt="Logo" /></a>
              <p className="uk-text-small">Somos una pagina que vende licencias de videojuegos, nuestras
                licencias son totalmente originales
                y al mejor precio.</p>
            </div>
            <div>
              <nav className="uk-grid-small uk-child-width-1-2" uk-grid>
                <div>
                  <ul className="uk-nav uk-nav-default">
                  </ul>
                </div>
                <div>
                </div>
              </nav>
            </div>
            <div>
              <ul className="uk-list uk-text-small">
                <li><a className="uk-link-muted" href="#"><span className="uk-margin-small-right" uk-icon="mail" /><span className="tm-pseudo">elenemigos@games.com</span></a>
                </li>
                <li>
                  <div className="uk-text-muted"><span className="uk-margin-small-right" uk-icon="location" /><span>&nbsp;Colombia, Bogotá</span></div>
                </li>
              </ul>
            </div>
            <div>
              <form className="uk-form-stacked"><label>
                  <div className="uk-form-label uk-text-muted">Subscribete para recibir actualizaciones
                  </div>
                  <div className="uk-inline uk-width-1-1"><a className="uk-form-icon uk-form-icon-flip" href="#" uk-icon="mail" /><input className="uk-input" type="email" placeholder="Su correo" required /></div>
                </label></form>
              <div className="uk-margin uk-text-small uk-text-muted">Elenemigos Games ©</div>
            </div>
          </div>
        </div>
      </section>
    </footer>
  </div>
  <div id="root"></div>
  <script src="%PUBLIC_URL%/uikit/dist/js/uikit.min.js"></script>
  <script src="%PUBLIC_URL%/uikit/dist/js/uikit-icons.min.js"></script>
</div>


  );
}

export default Index;
