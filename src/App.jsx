import { useState } from 'react';
import './App.css';
import Header from './Header';
import Hero from './Hero';
import Hero__card2 from './Hero__card2';
import Hero__card from './Hero__card'; 
import Hero__card3 from './Herocard3';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Achievements from './Achievements';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/hero-card" element={<Hero__card />} />
          <Route path="/hero-card2" element={<Hero__card2/>} />
          <Route path="/hero-card3" element={<Hero__card3/>} />
          <Route path="/" element={<Header/>} />
          <Route path="/achievements" element={<Achievements />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;


// карточки из макета взять
//функцию текста взять из юдемишного курса 
// бейджи взять из юдемишного курса
// свистнуть откуда-нибудь дизайн
//роуты в джт посмотреть
//слова выбрать и записать

