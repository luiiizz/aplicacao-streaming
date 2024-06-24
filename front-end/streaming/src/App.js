import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Conteudo from './components/Conteudo';
import Usuario from './components/Usuario';
import Ator from './components/Ator';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/conteudo/:id" element={<Conteudo />} />
        <Route path="/usuario" element={<Usuario />} />
        <Route path="/ator/:id" element={<Ator />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;