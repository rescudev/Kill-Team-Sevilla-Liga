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
    { nombre: 'JOSEMA', faccion: 'Space Marines', jugadas: 0, victorias: 0, empates: 0, derrotas: 0, puntos: 0 },
    { nombre: 'FERNANDO', faccion: 'Space Marines', jugadas: 0, victorias: 0, empates: 0, derrotas: 0, puntos: 0 },
    { nombre: 'KRIS', faccion: 'Space Marines', jugadas: 0, victorias: 0, empates: 0, derrotas: 0, puntos: 0 },
    { nombre: 'JESÚS', faccion: 'Space Marines', jugadas: 0, victorias: 0, empates: 0, derrotas: 0, puntos: 0 },
    { nombre: 'JUANJO', faccion: 'Space Marines', jugadas: 0, victorias: 0, empates: 0, derrotas: 0, puntos: 0 },
    { nombre: 'JUDIT', faccion: 'Space Marines', jugadas: 0, victorias: 0, empates: 0, derrotas: 0, puntos: 0 },
    { nombre: 'LUCAS', faccion: 'Space Marines', jugadas: 0, victorias: 0, empates: 0, derrotas: 0, puntos: 0 },
    { nombre: 'LUISMI', faccion: 'Space Marines', jugadas: 0, victorias: 0, empates: 0, derrotas: 0, puntos: 0 },
    { nombre: 'RAFA M', faccion: 'Space Marines', jugadas: 0, victorias: 0, empates: 0, derrotas: 0, puntos: 0 },
	{ nombre: 'ALFONSO', faccion: 'Space Marines', jugadas: 0, victorias: 0, empates: 0, derrotas: 0, puntos: 0 },
    { nombre: 'RAFA E', faccion: 'Space Marines', jugadas: 0, victorias: 0, empates: 0, derrotas: 0, puntos: 0 },
	{ nombre: 'ANTONIO', faccion: 'Space Marines', jugadas: 0, victorias: 0, empates: 0, derrotas: 0, puntos: 0 },
    { nombre: 'KAKE', faccion: 'Space Marines', jugadas: 0, victorias: 0, empates: 0, derrotas: 0, puntos: 0 },
    { nombre: 'MIGUEL', faccion: 'Space Marines', jugadas: 0, victorias: 0, empates: 0, derrotas: 0, puntos: 0 },
    { nombre: 'PEDRO', faccion: 'Space Marines', jugadas: 0, victorias: 0, empates: 0, derrotas: 0, puntos: 0 },
    { nombre: 'IVÁN', faccion: 'Space Marines', jugadas: 0, victorias: 0, empates: 0, derrotas: 0, puntos: 0 },
  ];

  const sortedLeagueData = [...leagueData].sort((a, b) => {
    if (b.victorias !== a.victorias) {
      return b.victorias - a.victorias;
    }
    if (b.empates !== a.empates) {
      return b.empates - a.empates;
    }
    return b.empates - a.empates;
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
