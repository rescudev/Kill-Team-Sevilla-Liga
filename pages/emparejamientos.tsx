// pages/emparejamientos.tsx

import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

interface Pairing {
  jugador1: string;
  jugador2: string;
  punto1: number;
  punto2: number;
  resultado: number;
}

const pairingsJornada1: Pairing[] = [
  { jugador1: 'JOSEMA', jugador2: 'FERNANDO', puntos1: 15, puntos2: 18, resultado: 2 },
  { jugador1: 'KRYS', jugador2: 'JESÚS', puntos1: 18, puntos2: 12, resultado: 1 },
  { jugador1: 'JUANJO', jugador2: 'JUDIT', puntos1: 0, puntos2: 0, resultado: 0 },
  { jugador1: 'LUCAS', jugador2: 'LUISMI', puntos1: 17, puntos2: 13, resultado: 1 },
  { jugador1: 'RAFA M', jugador2: 'ANTONIO', puntos1: 18, puntos2: 11, resultado: 1 },
  { jugador1: 'ALFONSO', jugador2: 'RAFA E', puntos1: 10, puntos2: 14, resultado: 2 },
  { jugador1: 'JAVI', jugador2: 'MIGUEL', puntos1: 18, puntos2: 11, resultado: 1 },
  { jugador1: 'PEDRO', jugador2: 'IVÁN', puntos1: 0, puntos2: 0, resultado: 0 },
  // ... (repeat for other pairings)
];

const pairingsJornada2: Pairing[] = [
  { jugador1: 'JOSEMA', jugador2: 'KRYS', puntos1: 16, puntos2: 17, resultado: 2 },
  { jugador1: 'FERNANDO', jugador2: 'JESÚS', puntos1: 0, puntos2: 0, resultado: 0 },
  { jugador1: 'JUANJO', jugador2: 'LUCAS', puntos1: 0, puntos2: 0, resultado: 0 },
  { jugador1: 'JUDIT', jugador2: 'RAFA M', puntos1: 0, puntos2: 0, resultado: 0 },
  { jugador1: 'LUISMI', jugador2: 'ALFONSO', puntos1: 6, puntos2: 21, resultado: 2 },
  { jugador1: 'ANTONIO', jugador2: 'JAVI', puntos1: 0, puntos2: 0, resultado: 0 },
  { jugador1: 'RAFA E', jugador2: 'PEDRO', puntos1: 0, puntos2: 0, resultado: 0 },
  { jugador1: 'MIGUEL', jugador2: 'IVÁN', puntos1: 0, puntos2: 0, resultado: 0 },
];

const pairingsJornada3: Pairing[] = [
  { jugador1: 'JOSEMA', jugador2: 'JUANJO', puntos1: 0, puntos2: 0, resultado: 0 },
  { jugador1: 'KRYS', jugador2: 'LUCAS', puntos1: 0, puntos2: 0, resultado: 0 },
  { jugador1: 'FERNANDO', jugador2: 'JUDIT', puntos1: 0, puntos2: 0, resultado: 0 },
  { jugador1: 'JESÚS', jugador2: 'LUISMI', puntos1: 0, puntos2: 0, resultado: 0 },
  { jugador1: 'RAFA M', jugador2: 'RAFA E', puntos1: 0, puntos2: 0, resultado: 0 },
  { jugador1: 'ANTONIO', jugador2: 'PEDRO', puntos1: 0, puntos2: 0, resultado: 0 },
  { jugador1: 'ALFONSO', jugador2: 'MIGUEL', puntos1: 0, puntos2: 0, resultado: 0 },
  { jugador1: 'JAVI', jugador2: 'IVÁN', puntos1: 0, puntos2: 0, resultado: 0 },
];

export default function Emparejamientos() {
  const [jornada1Visible, setJornada1Visible] = useState(false);
  const [jornada2Visible, setJornada2Visible] = useState(false);
  const [jornada3Visible, setJornada3Visible] = useState(false);

  const chunkArray = (array: any[], size: number) =>
    Array.from({ length: Math.ceil(array.length / size) }, (_, index) => array.slice(index * size, (index + 1) * size));

  const pairingsChunksJornada1 = chunkArray(pairingsJornada1, 2);
  const pairingsChunksJornada2 = chunkArray(pairingsJornada2, 2);
  const pairingsChunksJornada3 = chunkArray(pairingsJornada3, 2);

  // Function to render the pairing table with centered images
const renderPairingTable = (pairings: Pairing[], groupIndex: number, mapImage: string) => (
  <div key={groupIndex} style={{ width: '48%', marginBottom: '20px' }}>
    {pairings.map((pairing, index) => (
      <div key={index} style={{ textAlign: 'center', marginBottom: '20px' }}>
        <table
          style={{
            width: '100%',
            borderCollapse: 'collapse',
            fontSize: '16px', // Increased font size
            borderRadius: '10px',
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
            overflow: 'hidden',
            textAlign: 'center',
          }}
        >
          <tbody>
            <tr style={{ backgroundColor: getBackgroundColor(pairing.resultado, 1), borderRadius: '10px' }}>
              <td style={{ ...tableCellStyles, fontSize: '18px', color: 'white' }}>{pairing.jugador1} - {pairing.puntos1}</td>
            </tr>
            <tr style={{ backgroundColor: getBackgroundColor(pairing.resultado, 2), borderRadius: '10px' }}>
              <td style={{ ...tableCellStyles, fontSize: '18px', color: 'white' }}>{pairing.jugador2} - {pairing.puntos2}</td>
            </tr>
          </tbody>
        </table>
        {mapImage && (
          <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <h3 style={{ margin: '15px 0', backgroundColor: '#555', color: 'white', padding: '8px', borderRadius: '10px' }}>Mapa:</h3>
            <img src={mapImage} alt={`Mapa Jornada ${groupIndex + 1}`} style={{ width: '200px', height: '200px', borderRadius: '10px' }} />
            <h3 style={{ margin: '15px 0', backgroundColor: '#555', color: 'white', padding: '8px', borderRadius: '10px' }}>Misión: C</h3>
          </div>
        )}
      </div>
    ))}
  </div>
);

// Helper function to get background color based on resultado
const getBackgroundColor = (resultado: number, player: number) => {
  if (resultado === 1 && player === 1) {
    return '#4CAF50'; // Dark greenish
  } else if (resultado === 1 && player === 2) {
    return '#D32F2F'; // Dark redish
  } else if (resultado === 2 && player === 1) {
    return '#D32F2F'; // Dark redish
  } else if (resultado === 2 && player === 2) {
    return '#4CAF50'; // Dark greenish
  } else if (resultado === 3) {
    return '#1565C0'; // Dark blueish for draw
  } else if (resultado === 0) {
    return '#555'; // Dark grey for not played yet
  } else {
    return '#555'; // Default color
  }
};


  return (
    <div style={{ height: '100vh', maxWidth: '800px', margin: '0 auto' }}>
      <Head>
        <title>Emparejamientos</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div style={{ fontFamily: 'sans-serif', backgroundColor: '#333', color: 'white', margin: 0, padding: 0, borderRadius: '10px' }}>
        <div style={{ position: 'relative', marginBottom: '20px' }}>
          <img
            src="/kt.PNG"
            alt="Kill Team Logo"
            style={{
              position: 'absolute',
              top: '20px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '50px',
              height: '50px',
              borderRadius: '50%',
            }}
          />
        </div>
        <div style={{ position: 'relative', marginBottom: '50px' }}>
          <h2 style={{ textAlign: 'center', margin: '15px 0 30px 0' }}>Emparejamientos</h2>
        </div>

        <div style={{ marginBottom: '20px' }}>
          <h3
            style={{ textAlign: 'center', margin: '15px 0', cursor: 'pointer', backgroundColor: '#777', color: 'white', padding: '8px', borderRadius: '10px' }}
            onClick={() => setJornada1Visible(!jornada1Visible)}
          >
            Jornada 1 {jornada1Visible ? '▼' : '►'}
          </h3>
          {jornada1Visible && (
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
              {pairingsChunksJornada1.map((pairingsGroup, groupIndex) => (
                renderPairingTable(pairingsGroup, groupIndex)
              ))}
            </div>
          )}
          {jornada1Visible && (
            <div style={{ textAlign: 'center', marginTop: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h3 style={{ margin: '15px 0', backgroundColor: '#555', color: 'white', padding: '8px', borderRadius: '10px' }}>Mapa:</h3>
              <img src="/jor1.jpeg" alt="Mapa Jornada 1" style={{ width: '350px', height: '250px', borderRadius: '10px' }} />
            <h3 style={{ margin: '15px 0', backgroundColor: '#555', color: 'white', padding: '8px', borderRadius: '10px' }}>Misión: A</h3>  
            </div>
          )}
        </div>

        <div style={{ marginBottom: '20px' }}>
          <h3
            style={{ textAlign: 'center', margin: '15px 0', cursor: 'pointer', backgroundColor: '#777', color: 'white', padding: '8px', borderRadius: '10px' }}
            onClick={() => setJornada2Visible(!jornada2Visible)}
          >
            Jornada 2 {jornada2Visible ? '▼' : '►'}
          </h3>
          {jornada2Visible && (
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
              {pairingsChunksJornada2.map((pairingsGroup, groupIndex) => (
                renderPairingTable(pairingsGroup, groupIndex)
              ))}
            </div>
          )}
          {jornada2Visible && (
            <div style={{ textAlign: 'center', marginTop: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h3 style={{ margin: '15px 0', backgroundColor: '#555', color: 'white', padding: '8px', borderRadius: '10px' }}>Mapa:</h3>
              <img src="/jor2.jpeg" alt="Mapa Jornada 2" style={{ width: '350px', height: '250px', borderRadius: '10px' }} />
            <h3 style={{ margin: '15px 0', backgroundColor: '#555', color: 'white', padding: '8px', borderRadius: '10px' }}>Misión: C</h3>  
            </div>
          )}
        </div>

        <div style={{ marginBottom: '20px' }}>
          <h3
            style={{ textAlign: 'center', margin: '15px 0', cursor: 'pointer', backgroundColor: '#777', color: 'white', padding: '8px', borderRadius: '10px' }}
            onClick={() => setJornada3Visible(!jornada3Visible)}
          >
            Jornada 3 {jornada3Visible ? '▼' : '►'}
          </h3>
          {jornada3Visible && (
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
              {pairingsChunksJornada3.map((pairingsGroup, groupIndex) => (
                renderPairingTable(pairingsGroup, groupIndex)
              ))}
            </div>
          )}
          {jornada3Visible && (
            <div style={{ textAlign: 'center', marginTop: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h3 style={{ margin: '15px 0', backgroundColor: '#555', color: 'white', padding: '8px', borderRadius: '10px' }}>Mapa:</h3>
            <img src="/jor3.jpeg" alt="Mapa Jornada 3 - Image 1" style={{ width: '350px', height: '250px', borderRadius: '10px', marginBottom: '10px' }} />
            <img src="/jor3m.jpeg" alt="Mapa Jornada 3 - Image 2" style={{ width: '250px', height: '250px', borderRadius: '10px' }} />
            <h3 style={{ margin: '15px 0', backgroundColor: '#555', color: 'white', padding: '8px', borderRadius: '10px' }}>Misión: B</h3>
          </div>
          
          )}
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-evenly', margin: '20px 0' }}>
        <Link href="/">
          <button
            style={{
              padding: '10px 20px',
              borderRadius: '5px',
              background: 'linear-gradient(135deg, #02514E, #029B8B)',
              color: 'white',
              border: 'none',
              cursor: 'pointer',
              transition: 'background 0.3s',
            }}
          >
            Clasificación
          </button>
        </Link>
      </div>
      <br />
    </div>
  );
}

const tableHeaderStyles: React.CSSProperties = {
  padding: '8px',
  textAlign: 'center',
  whiteSpace: 'nowrap',
  borderBottom: '1px solid #444',
};

const tableCellStyles: React.CSSProperties = {
  ...tableHeaderStyles,
  textAlign: 'center',
  wordBreak: 'break-word',
  borderBottom: '1px solid #444',
};
