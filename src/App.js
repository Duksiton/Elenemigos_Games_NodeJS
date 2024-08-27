import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';  // Importa ToastContainer
import Index from './components/index.js';
import Login from './components/login.js';
import './components/styles/style.css';
import Register from './components/register.js';
import Rock from './components/invrock.js';
import Activision from './components/invactivision.js';
import Ubisoft from './components/invubisoft.js';
import Valve from './components/invvalve.js';
import EA from './components/invea.js';
import Bandai from './components/invbandai.js';
import Inicio from './components/inicio.js';

import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';

import 'react-toastify/dist/ReactToastify.css';


UIkit.use(Icons);

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/invrock" element={<Rock />} />
          <Route path="/invactivision" element={<Activision />} />
          <Route path="/invubisoft" element={<Ubisoft />} />
          <Route path="/invvalve" element={<Valve />} />
          <Route path="/invea" element={<EA />} />
          <Route path="/invbandai" element={<Bandai />} />
          <Route path="/inicio" element={<Inicio />} />
        </Routes>
        <ToastContainer /> {/* Aquí es donde se añade el ToastContainer */}
      </div>
    </Router>
  );
}

export default App;
