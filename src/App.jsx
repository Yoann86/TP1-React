import Accueil from './composants/Accueil';
import Nav from './composants/Nav'
import Quizz from './composants/Quizz';
import Info from './composants/Info';
import Critiques from './composants/Critiques';
import {Routes, Route } from "react-router-dom";
import './App.css'


function App() {
  return (
    <div>
      <Nav></Nav>
      <Routes>
        <Route path="/" element={<Accueil></Accueil>}></Route>
        <Route path="/info" element={<Info />}></Route>
        <Route path="/quizz" element={<Quizz />}></Route>
        <Route path="/critiques" element={<Critiques></Critiques>}></Route>
      </Routes>
      
    </div>
  )
}

export default App
