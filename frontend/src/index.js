import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import App from './App';
import Games from './Games';
import CrosswordPhysical from './crossword_physical';
import CrosswordVisual from './crossword_visual';
import Crossword from './crossword_cognitive';
import WordleGame from './wordle';
import LoginRegister from './LoginRegister';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<App />}></Route>
        <Route path="games" element={<Games />}></Route>
        <Route path="login" element={<LoginRegister />}></Route>
        <Route path="crossword-physical" element={<CrosswordPhysical />}></Route>
        <Route path="crossword-cognitive" element={<Crossword />}></Route>
        <Route path="crossword-visual" element={<CrosswordVisual />}></Route>
        <Route path="wordle" element={<WordleGame />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
