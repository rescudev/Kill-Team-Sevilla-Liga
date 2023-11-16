// pages/another-page.tsx (or another-page.js if you're not using TypeScript)

import Head from 'next/head';

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

export default function AnotherPage() {
  return (
    <div style={{ height: '100vh', maxWidth: '800px', margin: '0 auto' }}>
      <Head>
        <title>Another Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div style={{ fontFamily: 'sans-serif', backgroundColor: '#333', color: 'white', margin: 0, padding: 0, borderRadius: '10px' }}>
        <div style={{ position: 'relative', marginBottom: '20px' }}>
          <h2 style={{ textAlign: 'center', margin: '15px 0 30px 0' }}>Another Page</h2>
        </div>
        <div style={{ overflowX: 'auto' }}>
          <table
            style={{
              width: '100%',
              borderCollapse: 'collapse',
              marginTop: '25px',
              marginBottom: '35px',
              fontSize: '12px',
              borderRadius: '10px',
              boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
              overflow: 'hidden',
            }}
          >
            <thead>
              <tr style={{ backgroundColor: '#555', color: 'white', borderRadius: '10px' }}>
                <th style={tableHeaderStyles}>Pos.</th>
                <th style={tableHeaderStyles}>Nombre</th>
                <th style={tableHeaderStyles}>Facción</th>
                <th style={tableHeaderStyles}>J</th>
                <th style={tableHeaderStyles}>G</th>
                <th style={tableHeaderStyles}>E</th>
                <th style={tableHeaderStyles}>D</th>
                <th style={tableHeaderStyles}>PTS</th>
              </tr>
            </thead>
            <tbody>
              {players.map((player, index) => (
                <tr key={index} style={{ backgroundColor: index % 2 === 1 ? '#666' : 'transparent', borderRadius: '10px' }}>
                  <td style={tableCellStyles}>{index + 1}</td>
                  <td style={tableCellStyles}>{player.nombre}</td>
                  <td style={{ ...tableCellStyles, whiteSpace: 'normal' }}>{player.faccion}</td>
                  <td style={tableCellStyles}>{player.jugadas}</td>
                  <td style={tableCellStyles}>{player.victorias}</td>
                  <td style={tableCellStyles}>{player.empates}</td>
                  <td style={tableCellStyles}>{player.derrotas}</td>
                  <td style={tableCellStyles}>{player.puntos}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '20px' }}>
          <img src="/jor1.jpeg" alt="Image 1" style={{ width: '100px', height: '100px', borderRadius: '10px' }} />
          <img src="/jor2.jpeg" alt="Image 1" style={{ width: '100px', height: '100px', borderRadius: '10px' }} />
          <img src="/jor3.jpeg" alt="Image 1" style={{ width: '100px', height: '100px', borderRadius: '10px' }} />
          <img src="/jor3m.jpeg" alt="Image 1" style={{ width: '100px', height: '100px', borderRadius: '10px' }} />
        </div>
      </div>
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
