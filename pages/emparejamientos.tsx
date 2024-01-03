// pages/emparejamientos.tsx

import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { jornada1, jornada2, jornada3, jornada4, jornada5, jornada6, jornada7, jornada8, jornada9 } from '../app/data';

interface Pairing {
  jugador1: string;
  jugador2: string;
  puntos1: number;
  puntos2: number;
}

export default function Emparejamientos() {
  const [jornada1Visible, setJornada1Visible] = useState(false);
  const [jornada2Visible, setJornada2Visible] = useState(false);
  const [jornada3Visible, setJornada3Visible] = useState(false);
  const [jornada4Visible, setJornada4Visible] = useState(false);
  const [jornada5Visible, setJornada5Visible] = useState(false);
  const [jornada6Visible, setJornada6Visible] = useState(false);
  const [jornada7Visible, setJornada7Visible] = useState(false);
  const [jornada8Visible, setJornada8Visible] = useState(false);
  const [jornada9Visible, setJornada9Visible] = useState(false);

  const chunkArray = (array: any[], size: number) =>
    Array.from({ length: Math.ceil(array.length / size) }, (_, index) => array.slice(index * size, (index + 1) * size));

  const pairingsChunksJornada1 = chunkArray(jornada1, 2);
  const pairingsChunksJornada2 = chunkArray(jornada2, 2);
  const pairingsChunksJornada3 = chunkArray(jornada3, 2);
  const pairingsChunksJornada4 = chunkArray(jornada4, 2);
  const pairingsChunksJornada5 = chunkArray(jornada5, 2);
  const pairingsChunksJornada6 = chunkArray(jornada6, 2);
  const pairingsChunksJornada7 = chunkArray(jornada7, 2);
  const pairingsChunksJornada8 = chunkArray(jornada8, 2);
  const pairingsChunksJornada9 = chunkArray(jornada9, 2);

  // Function to render the pairing table with centered images
const renderPairingTable = (pairings: Pairing[], groupIndex: number) => (
  <div key={groupIndex} style={{ width: '48%', marginBottom: '10px' }}>
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
              <tr style={{ backgroundColor: getBackgroundColor(pairing.puntos1, pairing.puntos2), borderRadius: '10px' }}>
                <td style={{ ...tableCellStyles, fontSize: '18px', color: 'white' }}>{pairing.jugador1} - {pairing.puntos1}</td>
              </tr>
              <tr style={{ backgroundColor: getBackgroundColor(pairing.puntos2, pairing.puntos1), borderRadius: '10px' }}>
                <td style={{ ...tableCellStyles, fontSize: '18px', color: 'white' }}>{pairing.jugador2} - {pairing.puntos2}</td>
              </tr>
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );

  const renderImages = (images: string[], missionChar: string) => (
    <div style={{ textAlign: 'center', marginTop: '0px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h3 style={{ margin: '15px 0', backgroundColor: '#555', color: 'white', width: '350px', padding: '8px', borderRadius: '10px' }}>Misión {missionChar}</h3>
      {images.map((image, index) => (
        <img key={index} src={image} alt={`Mapa Jornada ${index + 1}`} style={{ width: '350px', height: '250px', borderRadius: '10px', marginBottom: '10px' }} />
      ))}
      {/* <h3 style={{ margin: '0px 0', backgroundColor: '#555', color: 'white', width: '350px', padding: '8px', borderRadius: '10px' }}>Misión {missionChar}</h3> */}
    </div>
  );
  

  const getBackgroundColor = (points1: number, points2: number) => {
    if (points1 < points2) {
      return '#D32F2F'; // Dark redish
    } else if (points1 > points2) {
      return '#4CAF50'; // Dark greenish
    } else if (points1 === 0 && points2 === 0) {
      return '#555'; // Dark grey for not played yet
    } else {
      return '#1565C0'; // Dark blueish for draw
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
        <div style={{ position: 'relative', marginBottom: '60px' }}>
          <h2 style={{ textAlign: 'center', margin: '15px 0 30px 0' }}>Emparejamientos</h2>
        </div>

        <div style={{ marginBottom: '20px' }}>
          <h3
            style={{ textAlign: 'center', margin: '30px 0', cursor: 'pointer', backgroundColor: '#777', color: 'white', padding: '8px', borderRadius: '10px' }}
            onClick={() => setJornada9Visible(!jornada9Visible)}
          >
            Jornada 9 {jornada9Visible ? '▼' : '►'}
          </h3>
          {jornada9Visible && (
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
              {pairingsChunksJornada9.map((pairingsGroup, groupIndex) => (
                renderPairingTable(pairingsGroup, groupIndex)
              ))}
            </div>
          )}
          {jornada9Visible && (
            <div style={{ textAlign: 'center', marginBottom: '30px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {renderImages(['/jor9.jpeg'], 'C')}
          </div>
          
          )}
        </div>

        <div style={{ marginBottom: '20px' }}>
          <h3
            style={{ textAlign: 'center', margin: '30px 0', cursor: 'pointer', backgroundColor: '#777', color: 'white', padding: '8px', borderRadius: '10px' }}
            onClick={() => setJornada8Visible(!jornada8Visible)}
          >
            Jornada 8 {jornada8Visible ? '▼' : '►'}
          </h3>
          {jornada8Visible && (
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
              {pairingsChunksJornada8.map((pairingsGroup, groupIndex) => (
                renderPairingTable(pairingsGroup, groupIndex)
              ))}
            </div>
          )}
          {jornada8Visible && (
            <div style={{ textAlign: 'center', marginBottom: '30px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {renderImages(['/jor8.jpeg'], 'B')}
            </div>
          )}
        </div>

        <div style={{ marginBottom: '20px' }}>
          <h3
            style={{ textAlign: 'center', margin: '30px 0', cursor: 'pointer', backgroundColor: '#777', color: 'white', padding: '8px', borderRadius: '10px' }}
            onClick={() => setJornada7Visible(!jornada7Visible)}
          >
            Jornada 7 {jornada7Visible ? '▼' : '►'}
          </h3>
          {jornada7Visible && (
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
              {pairingsChunksJornada7.map((pairingsGroup, groupIndex) => (
                renderPairingTable(pairingsGroup, groupIndex)
              ))}
            </div>
          )}
          {jornada7Visible && (
            <div style={{ textAlign: 'center', marginBottom: '30px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {renderImages(['/jor7.jpeg'], 'A')}
            </div>
          )}
        </div>

        <div style={{ marginBottom: '20px' }}>
          <h3
            style={{ textAlign: 'center', margin: '30px 0', cursor: 'pointer', backgroundColor: '#777', color: 'white', padding: '8px', borderRadius: '10px' }}
            onClick={() => setJornada6Visible(!jornada6Visible)}
          >
            Jornada 6 {jornada6Visible ? '▼' : '►'}
          </h3>
          {jornada6Visible && (
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
              {pairingsChunksJornada6.map((pairingsGroup, groupIndex) => (
                renderPairingTable(pairingsGroup, groupIndex)
              ))}
            </div>
          )}
          {jornada6Visible && (
            <div style={{ textAlign: 'center', marginBottom: '30px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {renderImages(['/jor6.jpeg'], 'C')}
          </div>
          
          )}
        </div>

        <div style={{ marginBottom: '20px' }}>
          <h3
            style={{ textAlign: 'center', margin: '30px 0', cursor: 'pointer', backgroundColor: '#777', color: 'white', padding: '8px', borderRadius: '10px' }}
            onClick={() => setJornada5Visible(!jornada5Visible)}
          >
            Jornada 5 {jornada5Visible ? '▼' : '►'}
          </h3>
          {jornada5Visible && (
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
              {pairingsChunksJornada5.map((pairingsGroup, groupIndex) => (
                renderPairingTable(pairingsGroup, groupIndex)
              ))}
            </div>
          )}
          {jornada5Visible && (
            <div style={{ textAlign: 'center', marginBottom: '30px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {renderImages(['/jor5.jpeg'], 'B')}
            </div>
          )}
        </div>

        <div style={{ marginBottom: '20px' }}>
          <h3
            style={{ textAlign: 'center', margin: '30px 0', cursor: 'pointer', backgroundColor: '#777', color: 'white', padding: '8px', borderRadius: '10px' }}
            onClick={() => setJornada4Visible(!jornada4Visible)}
          >
            Jornada 4 {jornada4Visible ? '▼' : '►'}
          </h3>
          {jornada4Visible && (
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
              {pairingsChunksJornada4.map((pairingsGroup, groupIndex) => (
                renderPairingTable(pairingsGroup, groupIndex)
              ))}
            </div>
          )}
          {jornada4Visible && (
            <div style={{ textAlign: 'center', marginBottom: '30px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {renderImages(['/jor4.jpeg'], 'A')}
            </div>
          )}
        </div>

        <div style={{ marginBottom: '20px' }}>
          <h3
            style={{ textAlign: 'center', margin: '30px 0', cursor: 'pointer', backgroundColor: '#777', color: 'white', padding: '8px', borderRadius: '10px' }}
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
            <div style={{ textAlign: 'center', marginBottom: '30px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {renderImages(['/jor3.jpeg'], 'B')}
            <img src="/jor3m.jpeg" alt="Mapa Jornada 3 - Image 2" style={{ marginBottom: '15px', marginTop: '15px', width: '250px', height: '250px', borderRadius: '10px' }} />
          </div>
          
          )}
        </div>

        <div style={{ marginBottom: '20px' }}>
          <h3
            style={{ textAlign: 'center', margin: '30px 0', cursor: 'pointer', backgroundColor: '#777', color: 'white', padding: '8px', borderRadius: '10px' }}
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
            <div style={{ textAlign: 'center', marginBottom: '30px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {renderImages(['/jor2.jpeg'], 'C')}
            </div>
          )}
        </div>

        <div style={{ marginBottom: '20px' }}>
          <h3
            style={{ textAlign: 'center', margin: '30px 0', cursor: 'pointer', backgroundColor: '#777', color: 'white', padding: '8px', borderRadius: '10px' }}
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
            <div style={{ textAlign: 'center', marginBottom: '30px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {renderImages(['/jor1.jpeg'], 'A')}
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
