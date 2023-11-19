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

export default function Home() {
  const leagueData: Player[] = [
    { nombre: 'JOSEMA', faccion: 'NAVY', jugadas:2, victorias: 0, empates: 0, derrotas: 2, puntos: 31 },
    { nombre: 'FERNANDO', faccion: 'PHOBOS', jugadas: 2, victorias: 2, empates: 0, derrotas: 0, puntos: 34 },
    { nombre: 'KRYS', faccion: 'GUARDIA VETERANA', jugadas: 2, victorias: 2, empates: 0, derrotas: 0, puntos: 35 },
    { nombre: 'JESÚS', faccion: 'LEGIONARIOS', jugadas: 2, victorias: 0, empates: 0, derrotas: 2, puntos: 26 },
    { nombre: 'JUANJO', faccion: 'CULTO DEL CAOS', jugadas: 1, victorias: 0, empates: 0, derrotas: 1, puntos: 9 },
    { nombre: 'JUDIT', faccion: 'DRUKHARI', jugadas: 0, victorias: 0, empates: 0, derrotas: 0, puntos: 0 },
    { nombre: 'LUCAS', faccion: 'CLADO DE CAZADORES', jugadas: 2, victorias: 2, empates: 0, derrotas: 0, puntos: 38 },
    { nombre: 'LUISMI', faccion: 'GELLERPOX', jugadas: 2, victorias: 0, empates: 0, derrotas: 2, puntos: 19 },
    { nombre: 'RAFA M', faccion: 'PATHFINDER', jugadas: 1, victorias: 1, empates: 0, derrotas: 0, puntos: 18 },
    { nombre: 'RAFA E', faccion: 'ORKOMANDOS', jugadas: 1, victorias: 1, empates: 0, derrotas: 0, puntos: 14 },
    { nombre: 'JAVI', faccion: 'GUARDIA VETERANA', jugadas: 1, victorias: 1, empates: 0, derrotas: 0, puntos: 18 },
    { nombre: 'MIGUEL', faccion: 'PATHFINDER', jugadas: 1, victorias: 0, empates: 0, derrotas: 1, puntos: 11 },
    { nombre: 'PEDRO', faccion: 'INTERCESORES', jugadas: 0, victorias: 0, empates: 0, derrotas: 0, puntos: 0 },
    { nombre: 'IVÁN', faccion: 'GUARDIA VETERANA', jugadas: 0, victorias: 0, empates: 0, derrotas: 0, puntos: 0 },
    { nombre: 'ANTONIO', faccion: 'LEGIONARIOS', jugadas: 1, victorias: 0, empates: 0, derrotas: 1, puntos: 11 },
    { nombre: 'ALFONSO', faccion: 'LEGIONARIOS', jugadas: 2, victorias: 1, empates: 0, derrotas: 1, puntos: 31 },
  ];

  const sortedLeagueData = [...leagueData].sort((a, b) => {
    if (b.victorias !== a.victorias) {
      return b.victorias - a.victorias;
    }
    if (b.empates !== a.empates) {
      return b.empates - a.empates;
    }
    if (b.jugadas !== a.jugadas) {
      return b.jugadas - a.jugadas;
    }
    return b.puntos - a.puntos;
  });

  return (
    <div style={{ height: '100vh', maxWidth: '800px', margin: '0 auto'}}>
      <Head>
        <title>Kill Team Sevilla</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div style={{ fontFamily: 'sans-serif', backgroundColor: '#333', color: 'white', margin: 0, padding: 0 , borderRadius: '10px'}}>
        {/* The Kill Team League Table */}
        <div style={{ position: 'relative', marginBottom: '20px' }}>
          <img
            src="/kt.PNG"  // Make sure this path matches the actual location of your image in the public folder
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
        <div style={{ position: 'relative' }}>
          <h2 style={{ textAlign: 'center', margin: '15px 0 30px 0' }}>Liga Kill Team Sevilla</h2>
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
              boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', // Added box shadow
              overflow: 'hidden', // Hide box shadow outside the rounded corners
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
              {sortedLeagueData.map((player, index) => (
                <tr key={index} style={{ backgroundColor: index % 2 === 1 ? '#666' : 'transparent', borderRadius: '10px' }}>
                  <td style={tableCellStyles}>{index + 1}</td>
                  <td style={tableCellStyles}>{player.nombre}</td>
                  <td style={{ ...tableCellStyles, whiteSpace: 'normal', fontSize: '10px' }}>{player.faccion}</td>
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
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
        </div>
      </div>
      {/* Add buttons with equal spacing */}
      <div style={{ display: 'flex', justifyContent: 'space-evenly', margin: '20px 0' }}>
        {/* Second button */}
        <Link href="/emparejamientos">
          <button style={{
            padding: '10px 20px',
            borderRadius: '5px',
            background: 'linear-gradient(135deg, #02514E, #029B8B)',
            color: 'white',
            border: 'none',
            cursor: 'pointer',
            transition: 'background 0.3s',
          }}>
            Emparejamientos
          </button>
        </Link>
      </div>
      <br/>
    </div>
  );
}
