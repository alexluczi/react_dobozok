import { useState } from 'react';
import './App.css'
import Doboz2 from './Doboz2.jsx'

function Doboz1() {
  const [szam, setSzam] = useState(0);

  const noveles = () => {
    setSzam(szam + 1);
  };

  const csokkentes = () => {
    setSzam(szam - 1);
  };

  return (
    <div style={{ 
      border: '2px solid #333', 
      padding: '20px', 
      margin: '10px',
      borderRadius: '8px',
      textAlign: 'center',
      backgroundColor: '#2196f3' // blue
    }}>
      <h3>Doboz 1</h3>
      <div style={{ fontSize: '24px', margin: '10px 0' }}>
        Szám: {szam}
      </div>
      <button onClick={noveles} style={{ margin: '0 5px', padding: '8px 16px' }}>
        Növelés
      </button>
      <button onClick={csokkentes} style={{ margin: '0 5px', padding: '8px 16px' }}>
        Csökkentés
      </button>
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>React Dobozok</h1>
      <Doboz1 />
      <Doboz2 initialValue={5} color="#e53935" />
    </div>
  );
}

export default App
