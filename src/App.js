import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './components/index.js';
import Login from './components/login.js';
import './components/styles/style.css';
import Register from './components/register.js';
import Rock from './components/invrock.js';
import Activision from './components/invactivision.js';
import Ubisfot from './components/invubisoft.js';
import Valve from './components/invvalve.js';
import EA from './components/invea.js'
import Bandai from './components/invbandai.js';

import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';

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
          <Route path='/invactivision' element={<Activision/>} />
          <Route path='/invubisoft' element={<Ubisfot/>} />
          <Route path='/invvalve' element={<Valve/>} />
          <Route path='/invea' element={<EA/>} />
          <Route path='/invbandai' element={<Bandai/>} />



        </Routes>
      </div>
    </Router>
  );
}

export default App;
