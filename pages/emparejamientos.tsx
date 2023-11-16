// pages/emparejamientos.tsx

import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

interface Player {
  nombre: string;
  faccion: string;
  jugadas: number;
  victorias: number;
  empates: number;
  derrotas: number;
  puntos: number;
}

const players: Player[] = [
  { nombre: 'Player 1', faccion: 'Faction A', jugadas: 5, victorias: 3, empates: 1, derrotas: 1, puntos: 10 },
  { nombre: 'Player 2', faccion: 'Faction B', jugadas: 5, victorias: 2, empates: 2, derrotas: 1, puntos: 8 },
  { nombre: 'Player 3', faccion: 'Faction C', jugadas: 5, victorias: 1, empates: 3, derrotas: 1, puntos: 6 },
];

const pairingsJornada1: string[][] = [
  ['Player 1', 'Player 2'],
  ['Player 3', 'Player 1'],
  ['Player 2', 'Player 3'],
  ['Player 1', 'Player 2'],
  ['Player 3', 'Player 1'],
  ['Player 2', 'Player 3'],
  ['Player 1', 'Player 2'],
  ['Player 3', 'Player 1']
];

const pairingsJornada2: string[][] = [
  ['Player 1', 'Player 2'],
  ['Player 3', 'Player 1'],
  ['Player 2', 'Player 3'],
  ['Player 1', 'Player 2'],
  ['Player 3', 'Player 1'],
  ['Player 2', 'Player 3'],
  ['Player 1', 'Player 2'],
  ['Player 3', 'Player 1']
];

export default function Emparejamientos() {
  const [jornada1Visible, setJornada1Visible] = useState(true);
  const [jornada2Visible, setJornada2Visible] = useState(true);

  const chunkArray = (array: any[], size: number) =>
    Array.from({ length: Math.ceil(array.length / size) }, (_, index) => array.slice(index * size, (index + 1) * size));

  const pairingsChunksJornada1 = chunkArray(pairingsJornada1, 2);
  const pairingsChunksJornada2 = chunkArray(pairingsJornada2, 2);

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
            style={{ textAlign: 'center', margin: '15px 0', cursor: 'pointer' }}
            onClick={() => setJornada1Visible(!jornada1Visible)}
          >
            Jornada 1 {jornada1Visible ? '▼' : '►'}
          </h3>
          {jornada1Visible && (
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
              {pairingsChunksJornada1.map((pairingsGroup, groupIndex) => (
                <div key={groupIndex} style={{ width: '48%', marginBottom: '20px' }}>
                  {pairingsGroup.map((pairing, index) => (
                    <table
                      key={index}
                      style={{
                        width: '100%',
                        borderCollapse: 'collapse',
                        fontSize: '12px',
                        borderRadius: '10px',
                        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                        overflow: 'hidden',
                        marginBottom: '20px',
                      }}
                    >
                      <thead>
                        <tr style={{ backgroundColor: '#555', color: 'white', borderRadius: '10px' }}>
                          <th style={tableHeaderStyles}>Pair {groupIndex * 2 + index + 1}</th>
                          <th style={tableHeaderStyles}>Players</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr style={{ backgroundColor: '#666', borderRadius: '10px' }}>
                          <td style={tableCellStyles}>1</td>
                          <td style={tableCellStyles}>{pairing[0]}</td>
                        </tr>
                        <tr style={{ backgroundColor: 'transparent', borderRadius: '10px' }}>
                          <td style={tableCellStyles}>2</td>
                          <td style={tableCellStyles}>{pairing[1]}</td>
                        </tr>
                      </tbody>
                    </table>
                  ))}
                </div>
              ))}
            </div>
          )}
        </div>

        <div style={{ marginBottom: '20px' }}>
          <h3
            style={{ textAlign: 'center', margin: '15px 0', cursor: 'pointer' }}
            onClick={() => setJornada2Visible(!jornada2Visible)}
          >
            Jornada 2 {jornada2Visible ? '▼' : '►'}
          </h3>
          {jornada2Visible && (
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
              {pairingsChunksJornada2.map((pairingsGroup, groupIndex) => (
                <div key={groupIndex} style={{ width: '48%', marginBottom: '20px' }}>
                  {pairingsGroup.map((pairing, index) => (
                    <table
                      key={index}
                      style={{
                        width: '100%',
                        borderCollapse: 'collapse',
                        fontSize: '12px',
                        borderRadius: '10px',
                        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                        overflow: 'hidden',
                        marginBottom: '20px',
                      }}
                    >
                      <thead>
                        <tr style={{ backgroundColor: '#555', color: 'white', borderRadius: '10px' }}>
                          <th
                            style={tableHeaderStyles}
                          >
                            Pair {pairingsChunksJornada1.length * 2 + groupIndex * 2 + index + 1}
                          </th>
                          <th style={tableHeaderStyles}>Players</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr style={{ backgroundColor: '#666', borderRadius: '10px' }}>
                          <td style={tableCellStyles}>1</td>
                          <td style={tableCellStyles}>{pairing[0]}</td>
                        </tr>
                        <tr style={{ backgroundColor: 'transparent', borderRadius: '10px' }}>
                          <td style={tableCellStyles}>2</td>
                          <td style={tableCellStyles}>{pairing[1]}</td>
                        </tr>
                      </tbody>
                    </table>
                  ))}
                </div>
              ))}
            </div>
          )}
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-evenly', marginBottom: '20px' }}>
          <img src="/jor1.jpeg" alt="Image 1" style={{ width: '100px', height: '100px', borderRadius: '10px' }} />
          <img src="/jor2.jpeg" alt="Image 2" style={{ width: '100px', height: '100px', borderRadius: '10px' }} />
          <img src="/jor3.jpeg" alt="Image 3" style={{ width: '100px', height: '100px', borderRadius: '10px' }} />
          <img src="/jor3m.jpeg" alt="Image 4" style={{ width: '100px', height: '100px', borderRadius: '10px' }} />
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
