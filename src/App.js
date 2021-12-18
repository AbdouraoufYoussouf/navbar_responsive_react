import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Acceuil from './pages/Acceuil';
import Connexion from './pages/Connexion';
import Formation from './pages/Formation';
import Projet from './pages/Projet';
import Resolution from './pages/Resolution';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Acceuil/>} />
        <Route path="/formation" element={<Formation/>} />
        <Route path="/resolution" element={<Resolution/>} />
        <Route path="/projet" element={<Projet/>} />
        <Route path="/connexion" element={<Connexion/>} />
      </Routes>
    </div>
  );
}

export default App;
