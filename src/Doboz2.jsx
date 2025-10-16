import { useState } from 'react';

function Doboz2({ initialValue = 0 }) {
  const [szam, setSzam] = useState(initialValue);

  const kattintas = () => {
    setSzam(szam + 1);
  };

  return (
    <div 
      onClick={kattintas}
      style={{ 
        border: '2px solid #666', 
        padding: '20px', 
        margin: '10px',
        borderRadius: '8px',
        textAlign: 'center',
        backgroundColor: '#e8f4fd',
        cursor: 'pointer',
        userSelect: 'none'
      }}
    >
      <h3>Doboz 2</h3>
      <div style={{ fontSize: '24px', margin: '10px 0' }}>
        Szám: {szam}
      </div>
      <p style={{ fontSize: '14px', color: '#666' }}>
        Kattints a dobozra a növeléshez!
      </p>
    </div>
  );
}

export default Doboz2;
